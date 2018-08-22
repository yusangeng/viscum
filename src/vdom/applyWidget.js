import isFunction from 'lodash/isFunction'
import vdomFromWidget from './vdomFromWidget'

export default function applyWidget (vdom, parentWidget) {
  let { tag: currentTag } = vdom

  do {
    // 子组件
    vdom = vdomFromWidget(vdom, parentWidget)
    currentTag = vdom.tag
  } while (isFunction(currentTag))

  return vdom
}
