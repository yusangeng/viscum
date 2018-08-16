import mix from 'litchy/lib/mix'
import Eventable from 'litchy/lib/Eventable'
import undisposed from 'litchy/lib/decorator/undisposed'
import Delegate from 'dodele'
import commit from '../dom/commit'
import selectorToElement from '../utils/selectorToElement'

const MyDelegate = mix(Eventable).with(Delegate)

export default superclass => class DOMBackend extends superclass {
  get wrap () {
    return this.wrap_
  }

  get el () {
    return this.el_
  }

  get shareMode () {
    return this.shareMode_
  }

  get delegator () {
    return this.delegator_
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
  }

  dispose () {
    this.unmount()

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

    const vdom = this.render()
    const { shareMode } = this
    let wrap

    if (shareMode) {
      wrap = (this.wrap_ = document.createElement('widget'))
    } else {
      wrap = el
    }

    wrap.classList.add('benny-widget-wrap')
    commit(wrap, vdom)

    if (shareMode) {
      this.el.appendChild(wrap)
    }

    this.wrap_ = wrap
    this.el_ = el

    this.addDecoratedEventListeners()
    this.mounted_ = true
    this.afterMount()
  }

  unmount () {
    const { wrap, el } = this

    this.beforeUnmount()
    this.removeDecoratedEventListeners()

    if (this.shareMode) {
      el.removeChild(wrap)
    }

    delete this.el_
    delete this.wrap_
    this.mounted_ = false
  }

  @undisposed
  on$ (type, sel, callback) {
    if (!this.delegator) {
      this.delegator_ = new MyDelegate()
      this.delegator.initDelegate(this.wrap)
    }

    return this.delegator.on$(type, sel, callback)
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

  commit (vdom) {
    if (this.wrap) {
      commit(this.wrap, vdom)
    }
  }
}
