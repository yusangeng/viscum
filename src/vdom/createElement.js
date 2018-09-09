import { TEXT_TAG_NAME } from '../dom/const'

const { isArray } = Array

export default function createElement (tag, props, ...children) {
  const cs = (children || []).reduce((prev, el) => {
    return isArray(el) ? prev.concat(el) : prev.concat([el])
  }, [])

  if (!validateTagName(tag)) {
    return {
      tag: 'NOSCRIPT',
      props: {},
      children: [
        createElement(TEXT_TAG_NAME, {
          text: `Illegal tagname: ${tag}`
        })
      ]
    }
  }

  return {
    tag: typeof tag === 'string' ? tag.toUpperCase() : tag,
    props: props || {},
    children: cs.map(child => {
      if (typeof child === 'string' || typeof child === 'number') {
        return {
          // 文本节点
          tag: TEXT_TAG_NAME,
          props: {
            text: child
          }
        }
      }
      return child
    })
  }
}

function validateTagName (tag) {
  if (typeof tag === 'function') {
    return true
  } else if (typeof tag === 'string') {
    tag = tag.toUpperCase()
    return !['SCRIPT', 'LINK', 'META', 'HEAD', 'BODY'].includes(tag)
  }
}
