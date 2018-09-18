import undisposed from 'litchy/lib/decorator/undisposed'
import vdom from '../vdom/vdom'

const { assign } = Object

function polyfillNull (vdom) {
  if (vdom === null) {
    return {
      tag: 'NOSCRIPT',
      props: {},
      children: []
    }
  }

  vdom.children = (vdom.children || []).map(child => polyfillNull(child))

  return vdom
}

export default superclass => class Renderer extends superclass {
  get data () {
    return this.data_
  }

  get defaultData () {
    return {}
  }

  initRenderer ({ initData = {} }) {
    let myData = typeof initData === 'function' ? initData() : initData
    this.data_ = assign({}, this.defaultData, myData)
  }

  @undisposed
  update (data) {
    if (this.updateData(data)) {
      this.updateToBackend()
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
  updateToBackend () {
    const vdom = this.renderVDOM()
    this.commit(vdom)
  }

  @undisposed
  renderVDOM () {
    const rawVDOM = polyfillNull(this.render())
    const retVDOM = vdom(rawVDOM, this)

    if (!this.vid_) {
      this.vid_ = retVDOM.vid
    }

    return retVDOM
  }

  render () {
    return null
  }
}
