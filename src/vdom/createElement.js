import isString from 'lodash/isString'
import isNumber from 'lodash/isNumber'
import isFunction from 'lodash/isFunction'
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
    tag: isString(tag) ? tag.toUpperCase() : tag,
    props: props || {},
    children: cs.map(child => {
      if (isString(child) || isNumber(child)) {
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
  if (isFunction(tag)) {
    return true
  } else if (isString(tag)) {
    tag = tag.toUpperCase()
    return !['SCRIPT', 'LINK', 'META', 'HEAD', 'BODY'].includes(tag)
  }
}
