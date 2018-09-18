import createDOMNode from './createDOMNode'
import { TEXT_TAG_NAME, DOMCONTAINER_ATTR_NAME, VID_ATTR_NAME, ATTR_CACHE_NAME } from './const'

const { keys } = Object

function isDOMContainer (el) {
  return !!el.getAttribute(DOMCONTAINER_ATTR_NAME.toLowerCase())
}

export default function patchDOM (el, vdom) {
  if (vdom.tag === TEXT_TAG_NAME) {
    return patchDOMText(el, vdom)
  }

  return patchDOMElement(el, vdom)
}

function patchDOMText (el, vdom) {
  let cache = el[ATTR_CACHE_NAME]

  if (!cache) {
    cache = el[ATTR_CACHE_NAME] = {
      text: el.nodeValue
    }
  }

  const text = cache.text
  const newText = vdom.props.text

  if (text !== newText) {
    el.nodeValue = newText
    cache.text = newText
  }
}

function patchDOMElement (el, vdom) {
  let cache = el[ATTR_CACHE_NAME]

  if (!cache) {
    const attrs = Array.prototype.slice.call(el.attributes)

    cache = el[ATTR_CACHE_NAME] = attrs.reduce((prev, item) => {
      prev[item.name] = item.value
    }, {})
  }

  const { props } = vdom
  const attrs = keys(cache).map(key => {
    return {
      name: key,
      value: cache[key]
    }
  })

  attrs.forEach(attr => {
    // 注意, DOM属性是不分大小写的
    const { name } = attr

    if (typeof props[name] === 'undefiend') {
      dealWithRemovableAttr(el, name, cache)
    }
  })

  keys(props).forEach(key => {
    const value = props[key]
    const currentDOMValue = attrs[key]

    if (value !== currentDOMValue) {
      dealWithDifferentAttr(el, key, value, currentDOMValue, cache)
    }
  })

  if (isDOMContainer(el)) {
    return
  }

  const newDOMChildren = []
  const domChildren = Array.prototype.slice.call(el.childNodes)
  const domChildrenBackup = Array.prototype.slice.call(el.childNodes)
  const vdomChildren = vdom.children.filter(child => !!child)

  vdomChildren.forEach(vdomChild => {
    const domChild = domChildren.shift()

    if (!domChild || vdomChild.tag !== getDOMNodeTagName(domChild)) {
      const newNode = createDOMNode(vdomChild)
      if (newNode.nodeType !== 3) {
        newDOMChildren.push(newNode)
      }
    } else {
      patchDOM(domChild, vdomChild)
      newDOMChildren.push(domChild)
    }
  })

  updateChildren(el, domChildrenBackup, newDOMChildren)
}

// TODO: 待优化
function updateChildren (el, domChildren, newDOMChildren) {
  if (domChildren.length === newDOMChildren.length) {
    const same = domChildren.every((el, index) => {
      return newDOMChildren[index] === el
    })

    if (same) {
      return
    }
  }

  domChildren.forEach(child => el.removeChild(child))
  newDOMChildren.forEach(child => el.appendChild(child))
}

function dealWithRemovableAttr (el, name, cache) {
  if (name === VID_ATTR_NAME) {
    return
  }

  el.removeAttribute(name)
  delete cache[name]
}

function dealWithDifferentAttr (el, name, newValue, currentValue, cache) {
  const attrName = name === 'classname' ? 'class' : name

  el.setAttribute(attrName, newValue)
  cache[name] = newValue
}

function getDOMNodeTagName (node) {
  if (node.nodeType === 3) {
    return TEXT_TAG_NAME
  }

  return node.tagName
}
