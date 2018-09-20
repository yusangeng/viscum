/**
 * 事件支持
 *
 * @author Y3G
 */

const { keys } = Object
let currentHandle = Number.MIN_SAFE_INTEGER

function call (fn, sync = false) {
  if (sync) {
    return fn()
  }

  return new Promise ((resolve, reject) => {
    setTimeout(_ => {
      try {
        resolve(fn())
      } catch (err) {
        reject(err)
      }
      resolve()
    }, 0)
  })
}

export default class Eventable {
  get disposed () {
    return this.disposed_
  }

  constructor() {
    this.disposed_ = false
    this.listeners_ = {}
  }

  dispose() {
    keys(this.listeners_).forEach()
    this.disposed_ = true
  }

  trigger (event, sync = false) {
    if (typeof event === 'string') {
      event = { type: event }
    }

    const { type } = event
    const callbacks = this.listeners_[type]

    if (!callbacks) {
      return
    }

    call(_ => keys(callbacks).forEach(key => {
      const cb = callbacks[key]
      cb(event)
    }), sync)
  }

  on (type, callback) {
    const callbacks = this.listeners_[type] || (this.listeners_[type] = {})
    const handle = currentHandle++

    callbacks[handle] = callback

    return _ => delete this.listeners_[type][handle]
  }
}