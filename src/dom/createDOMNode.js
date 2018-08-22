import { TEXT_TAG_NAME, VID_ATTR_NAME } from './const'

export default function createDOMNode (vdom) {
  if (!vdom) {
    return document.createElement('noscript')
  }

  const { tag: vdomTag, props, children, vid } = vdom

  if (vdomTag === TEXT_TAG_NAME) {
    // 文字节点
    return document.createTextNode(props.text)
  }

  let node = document.createElement(vdomTag)

  node.setAttribute(VID_ATTR_NAME, vid)

  Object.keys(props).forEach(key => {
    const attrKey = ('' + key).toLowerCase()
    const value = props[key]

    node.setAttribute(attrKey, value)
  })

  children.forEach(child => {
    const childNode = createDOMNode(child)
    node.appendChild(childNode)
  })

  return node
}
