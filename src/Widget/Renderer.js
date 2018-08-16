import isFunction from 'lodash/isFunction'
import undisposed from 'litchy/lib/decorator/undisposed'

const { assign } = Object

export default superclass => class Renderer extends superclass {
  get data () {
    return this.data_
  }

  get defaultData () {
    return {}
  }

  initRenderer ({ initData = {} }) {
    let myData = isFunction(initData) ? initData() : initData

    this.data_ = assign({}, this.defaultData, myData)
  }

  @undisposed
  update (data) {
    if (this.updateDataOnly(data)) {
      this.updateDOM()
    }
  }

  @undisposed
  updateDataOnly (data) {
    const newData = assign({}, this.data, data)
    const oldData = this.data
    let shouldRender = !!this.shouldUpdate(newData, oldData)

    this.data_ = newData

    return shouldRender
  }

  @undisposed
  updateDOM () {
    const vdom = this.render()
    this.commit(vdom)
  }

  render () {
    return null
  }
}
