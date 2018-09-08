import applyWidget from './applyWidget'
import addVID from './addVID'

export default function vdom (vdom, vid, parentWidget) {
  addVID(vdom, vid)

  parentWidget.startUpdateSubWidgets()
  const ret = applyWidget(vdom, parentWidget)
  parentWidget.stopUpdateSubWidgets()

  return ret
}
