import mix from 'litchy/lib/mix'
import Eventable from 'litchy/lib/Eventable'
import undisposed from 'litchy/lib/decorator/undisposed'
import Delegate from '../utils/Delegate'
import commit from '../dom/commit'
import selectorToElement from '../utils/selectorToElement'

const MyDelegate = mix(Eventable).with(Delegate)

export default superclass => class DOMBackend extends superclass {
  get wrap () {
    return this.wrap_
  }

  // 在sharemode下，wrap和el不是同一个DOM element
  get el () {
    return this.el_
  }

  get shareMode () {
    return this.shareMode_
  }

  get delegator () {
    return this.delegator_
  }

  get parentDelegator () {
    return this.parentDelegator_
  }

  get mounted () {
    return this.mounted_
  }

  initBackend ({ shareMode }) {
    this.shareMode_ = !!shareMode
    this.delegator_ = null
    this.listenerOffs_ = []
    this.mounted_ = false
    this.el_ = null
    this.parentDelegator_ = null
  }

  dispose () {
    this.unmount()

    delete this.parentDelegator_

    if (this.delegator) {
      this.delegator.dispose()
      this.delegator_ = null
    }

    super.dispose()
  }

  @undisposed
  mount (el) {
    el = selectorToElement(el)

    if (this.disposed) {
      console.warn(`组件已经被释放, 不可执行mount流程.`)
      return
    }

    if (this.mounted) {
      console.warn(`组件已经被mount到DOM上.`)
      return
    }

    const vdom = this.renderVDOM()
    const { shareMode } = this
    let wrap

    if (shareMode) {
      wrap = (this.wrap_ = document.createElement('widget'))
    } else {
      wrap = el
    }

    wrap.classList.add('viscum-widget-wrap')
    commit(wrap, vdom)

    if (shareMode) {
      el.appendChild(wrap)
    }

    this.wrap_ = wrap
    this.el_ = el

    if (!this.delegator) {
      this.delegator_ = new MyDelegate()
      this.delegator.initDelegate(this.wrap)
      this.afterDelegatorCreated(this.delegator)
    }

    this.addDecoratedEventListeners()

    Object.keys(this.subWidgets).forEach(vid => {
      const widget = this.subWidget(vid)

      widget.setParentDelegator(this.delegator)
      widget.addDecoratedEventListeners()
    })

    this.mounted_ = true
    this.afterMount()
  }

  @undisposed
  unmount () {
    const { wrap, el } = this

    this.beforeUnmount()

    Object.keys(this.subWidgets).forEach(vid => {
      const widget = this.subWidget(vid)
      widget.removeDecoratedEventListeners()
    })
    this.removeDecoratedEventListeners()

    if (this.shareMode && el && wrap) {
      el.removeChild(wrap)
    }

    delete this.el_
    delete this.wrap_
    this.mounted_ = false
  }

  @undisposed
  on$ (type, sel, callback) {
    const { delegator, parentDelegator } = this
    let d = null

    if (!delegator && !parentDelegator) {
      d = this.delegator_ = new MyDelegate()
      this.delegator.initDelegate(this.wrap)
    } else if (delegator) {
      d = delegator
    } else if (parentDelegator) {
      d = parentDelegator
    }

    return d.on$(type, sel, callback)
  }

  addDecoratedEventListeners () {
    const dl = this.constructor.prototype.__decorated_listeners__

    if (!dl || !dl.length) {
      return
    }

    dl.forEach(el => {
      const { type, sel, callback } = el
      this.listenerOffs_.push(this.on$(type, sel, callback.bind(this)))
    })
  }

  removeDecoratedEventListeners () {
    this.listenerOffs_.forEach(el => el())
    this.listenerOffs_ = []
  }

  setParentDelegator (delegator) {
    this.parentDelegator_ = delegator
  }

  commit (vdom) {
    if (this.wrap) {
      // 顶层组件渲染
      commit(this.wrap, vdom)
      return
    }

    // 子组件渲染
    let { parentWidget } = this

    if (!parentWidget) {
      throw new Error(`Parent widget does NOT exists.`)
    }

    let { wrap } = parentWidget

    while (!wrap) {
      parentWidget = parentWidget.parentWidget
      wrap = parentWidget.wrap
    }

    if (!wrap) {
      throw new Error('Can NOT find the DOM element which top level widget mounted to.')
    }

    const el = wrap.querySelector(`[data-viscum-id="${this.vid}"]`)

    if (!el) {
      // throw new Error('Can NOT find the DOM element which current widget mounted to.')
      return
    }

    commit(el, vdom, { toSelf: true })
  }
}
