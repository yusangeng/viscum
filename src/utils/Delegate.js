/**
 * 事件代理(拷贝自dodele)
 *
 * @author Y3G
 */

const { keys } = Object
const capture = type => ['scroll', 'focus', 'blur'].includes(type)
const isId = str => str.startsWith('#') && !(/[ >,]/).test(str)
const isClass = str => str.startsWith('.') && !(/[ >,]/).test(str)

function createFilter (sel) {
  if (typeof sel === 'function') {
    return sel
  } else if (!sel || !sel.length) {
    return _ => true
  } else if (isClass(sel)) {
    const cls = sel.substring(1)
    return evt => evt.event.target.classList.contains(cls)
  } else if (isId(sel)) {
    const id = sel.substring(1)
    return evt => evt.event.target.id === id
  } else {
    return evt => evt.event.target.matches(sel)
  }
}

export default superclass => class extends superclass {
  get el () {
    return this.el_
  }

  constructor (...params) {
    super(...params)

    this.plugins_ = {}
    this.cb_ = event => this.trigger({ type: `dom:${event.type}`, event }, true)
    this.counter_ = {}
  }

  dispose () {
    const { el, cb_: cb, counter_: counter } = this
    const detach = type => {
      const plugin = this.plugins_[type]
      if (plugin) {
        plugin.unrecognize(this)
      }

      el.removeEventListener(type, cb, capture(type))
    }

    keys(counter).forEach(type => counter[type] && detach(type))
    this.plugins_ = this.el_ = this.cb_ = this.counter_ = null

    super.dispose()
  }

  installPlugin (plugin) {
    this.plugins_[plugin.eventType] = plugin
  }

  initDelegate (el, callbacks = []) {
    this.el_ = el
    callbacks.forEach(item => {
      const { type, selector, callback } = item
      this.on$(type, selector, callback.bind(this))
    })
  }

  initDecoratedDelegate (el) {
    this.initDelegate(el, this.constructor.prototype.__decorated_callbacks__ || [])
  }

  on$ (type, selector, callback) {
    const filter = createFilter(selector)
    const off = this.recognize(type).on(`dom:${type}`, e => filter(e) && callback(e.event))
    return _ => {
      off()
      this.unrecognize(type)
    }
  }

  recognize (type) {
    const n = this.counter_[type]
    if (!n) {
      const plugin = this.plugins_[type]
      if (plugin) {
        plugin.recognize(this)
      }

      this.el_.addEventListener(type, this.cb_, capture(type))
    }

    this.counter_[type] = (n || 0) + 1
    return this
  }

  unrecognize (type) {
    const n = this.counter_[type]
    if (n === 1) {
      const plugin = this.plugins_[type]
      if (plugin) {
        plugin.unrecognize(this)
      }

      this.el_.removeEventListener(type, this.cb_, capture(type))
    }

    this.counter_[type] = n ? n - 1 : 0
    return this
  }
}
