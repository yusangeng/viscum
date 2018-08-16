import createDOMNode from './createDOMNode'
import patchToDOM from './patchDOM'

export default function commit (el, vdom) {
  const root = el.firstElementChild
  if (!root) {
    el.appendChild(createDOMNode(vdom))
    return
  }

  if (root.tagName !== vdom.tag) {
    el.removeChild(root)
    el.appendChild(createDOMNode(vdom))
    return
  }
  patchToDOM(root, vdom)
}
