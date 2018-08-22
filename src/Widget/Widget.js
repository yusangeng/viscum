import mix from 'litchy/lib/mix'
import Eventable from 'litchy/lib/Eventable'
import Backend from './DOMBackend'
import Hookable from './Hookable'
import Renderer from './Renderer'
import HasSubWidget from './HasSubWidget'

const { assign } = Object

export default class Widget extends
  mix(Eventable).with(Backend, Hookable, Renderer, HasSubWidget) {
  get children () {
    return this.children_
  }

  set children (c) {
    c = c || []
    this.children_ = c
  }

  constructor (options = {}) {
    super()

    const opt = assign({}, { shareMode: false, hooks: {}, data: {}, children: [] }, options)
    const { shareMode, hooks, data, children } = opt

    this.initBackend({ shareMode })
    this.initHookable({ hooks })
    this.initRenderer({ initData: data })
    this.initHasSubWidget()

    this.children = children
  }

  render () {
    return <div>render方法应由子类重写.</div>
  }
}
