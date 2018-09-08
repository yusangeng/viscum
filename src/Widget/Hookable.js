const { assign } = Object
const noop = _ => _

const defaultHooks = {
  afterDelegatorCreated: noop,
  afterMount: noop,
  beforeUnmount: noop,
  shouldUpdate: _ => true,
  afterUpdate: noop
}

export default superclass => class Hookable extends superclass {
  initHookable ({ hooks = {} }) {
    this.hooks_ = assign({}, defaultHooks, hooks)
  }

  afterDelegatorCreated (delegator) {
    this.hooks_.afterDelegatorCreated.call(this, delegator)
  }

  afterMount () {
    this.hooks_.afterMount.call(this)
  }

  shouldUpdate () {
    return this.hooks_.shouldUpdate.call(this)
  }

  afterUpdate () {
    this.hooks_.afterUpdate.call(this)
  }

  beforeUnmount () {
    this.hooks_.beforeUnmount.call(this)
  }
}
