let currentRootVID = 1

export default function addVID (vdom, id = null) {
  if (!vdom || vdom.vid) {
    return
  }

  id = id || currentRootVID++
  vdom.vid = '' + id

  const { children = [] } = vdom
  let childId = 1

  children.forEach(child => addVID(child, `${id}.${childId++}`))
}
