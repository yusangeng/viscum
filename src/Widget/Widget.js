import mix from 'litchy/lib/mix'
import Eventable from 'litchy/lib/Eventable'
import Backend from './DOMBackend'
import Hookable from './Hookable'
import Renderer from './Renderer'

const { assign } = Object

export default class Widget extends
  mix(Eventable).with(Backend, Hookable, Renderer) {
  constructor (options) {
    super()

    const opt = assign({}, { shareMode: false, hooks: {}, data: {} }, options)
    const { shareMode, hooks, data } = opt

    this.initBackend({ shareMode })
    this.initHookable({ hooks })
    this.initRenderer({ initData: data })
  }

  render () {
    return <div>render方法应由子类重写.</div>
  }
}
