import applyWidget from './applyWidget'
import addVID from './addVID'

export default function vdom (vdom, parentWidget) {
  addVID(vdom, parentWidget ? parentWidget.vid : void 0)

  if (parentWidget) {
    parentWidget.startUpdateSubWidgets()
  }

  const ret = applyWidget(vdom, parentWidget)

  if (parentWidget) {
    parentWidget.stopUpdateSubWidgets()
  }

  return ret
}
