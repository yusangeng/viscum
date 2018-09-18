import { TEXT_TAG_NAME, VID_ATTR_NAME, ATTR_CACHE_NAME } from './const'

export default function createDOMNode (vdom) {
  if (!vdom) {
    return document.createElement('noscript')
  }

  let { tag: vdomTag, props, children, vid } = vdom
  let node = null

  if (vdomTag === TEXT_TAG_NAME) {
    // 文字节点
    node = document.createTextNode(props.text)

    const cache = {}
    cache.text = node
    node[ATTR_CACHE_NAME] = cache

    return node
  }

  // element
  node = document.createElement(vdomTag)

  setElementAttrs(node, props, vid)

  children.forEach(child => {
    const childNode = createDOMNode(child)
    node.appendChild(childNode)
  })

  return node
}

function setElementAttrs (node, props, vid) {
  const cache = {}

  cache[VID_ATTR_NAME] = vid
  node.setAttribute(VID_ATTR_NAME, vid)

  Object.keys(props).forEach(key => {
    let attrKey = ('' + key).toLowerCase()
    const value = props[key]

    if (attrKey === 'classname') {
      attrKey = 'class'
    }

    node.setAttribute(attrKey, value)
    cache[key] = value
  })

  node[ATTR_CACHE_NAME] = cache
}
