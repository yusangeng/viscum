import isArray from 'lodash/isArray'
import isPlainObject from 'lodash/isPlainObject'
import isNumber from 'lodash/isNumber'

const { keys } = Object

export default function mapProps (props) {
  const ret = {}
  const names = keys(props)

  props = mapStyle(mapClassName(props))

  names.forEach(name => {
    ret[('' + name).toLowerCase()] = props[name]
  })

  return ret
}

function mapClassName (props) {
  const { className } = props
  let cls = className || props['class']

  if (isArray(cls)) {
    cls = cls.join(' ')
  } else if (isPlainObject(cls)) {
    cls = keys(cls).map(c => {
      if (cls[c]) {
        return '' + c
      }
    }).filter(el => el && el.length).join(' ')
  } else {
    cls = '' + cls
  }

  props['class'] = cls
  props.className = null
  delete props.className

  return props
}

function mapStyle (props) {
  let { style } = props

  if (isPlainObject(style)) {
    style = keys(style).map(key => {
      let value = style[key]

      if (isNumber(value)) {
        value = value + 'px'
      } else {
        value = '' + value
      }

      return `${('' + key).toLowerCase()}: ${value};`
    }).join(' ')
  } else {
    style = '' + style
  }

  props.style = style

  return props
}
