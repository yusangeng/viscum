import { TEXT_TAG_NAME } from './const'

export default function createDOMNode (data) {
  if (!data) {
    return document.createElement('noscript')
  }

  const { props, tag, children } = data
  let node = null

  if (tag === TEXT_TAG_NAME) {
    node = document.createTextNode(props.text)
    return node
  }

  node = document.createElement(tag)

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
