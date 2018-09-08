import isFunction from 'lodash/isFunction'
import renderWidget from './renderWidget'

export default function applyWidget (vdom, parentWidget) {
  if (!vdom) {
    return vdom
  }

  let { tag: currentTag } = vdom

  do {
    // 子组件展开
    vdom = renderWidget(vdom, parentWidget)
    currentTag = vdom.tag
  } while (isFunction(currentTag))

  return vdom
}
