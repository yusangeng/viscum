import createDOMNode from './createDOMNode'
import patchToDOM from './patchDOM'
import transformVDOMProps from './transformVDOMProps'

export default function commit (el, vdom, options = {}) {
  transformVDOMProps(vdom)

  if (!options.toSelf) {
    commitToChild(el, vdom)
  } else {
    commitToSelf(el, vdom)
  }
}

function commitToChild (el, vdom) {
  const root = el.firstElementChild

  if (!root) {
    el.appendChild(createDOMNode(vdom))
    return
  }

  if (root.tagName !== vdom.tag) {
    el.replaceChild(root, createDOMNode(vdom))
    return
  }

  patchToDOM(root, vdom)
}

function commitToSelf(el, vdom) {
  if (el.tagName !== vdom.tag) {
    el.parentELement.replaceChild(el, createDOMNode(vdom))
    return
  }

  patchToDOM(el, vdom)
}
