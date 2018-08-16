const { keys } = Object

export default function mapProps (props) {
  const ret = {}
  const names = keys(props)

  names.forEach(name => {
    ret[('' + name).toLowerCase()] = props[name]
  })

  return ret
}
