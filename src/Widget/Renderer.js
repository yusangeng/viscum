import isFunction from 'lodash/isFunction'
import undisposed from 'litchy/lib/decorator/undisposed'
import h from '../vdom/h'

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
    if (this.updateData(data)) {
      this.updateDOM()
    }
  }

  @undisposed
  updateData (data) {
    const newData = assign({}, this.data, data)
    const oldData = this.data
    let shouldRender = !!this.shouldUpdate(newData, oldData)

    this.data_ = newData

    return shouldRender
  }

  @undisposed
  updateDOM () {
    const vdom = this.renderTopLevelVDOM()
    this.commit(vdom)
  }

  renderTopLevelVDOM () {
    return this.h(this.render())
  }

  h (vdom) {
    const retVDOM = h(vdom, this.rootVID_, this)
    this.rootVID_ = vdom.vid
    return retVDOM
  }

  render () {
    return null
  }
}
