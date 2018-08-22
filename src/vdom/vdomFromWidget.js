import isFunction from 'lodash/isFunction'
import addVID from './addVID'
import applyWidget from './applyWidget'

export default function vdomFromWidget (vdom, parentWidget) {
  const { tag: WidgetClass, props = {}, children = [], vid } = vdom
  let outputVDOM = vdom

  if (isFunction(WidgetClass)) {
    let instance = parentWidget.subWidget(vid)

    if (!instance) {
      instance = new WidgetClass({
        data: props,
        children
      })

      parentWidget.addSubWidget(vid, instance)
      parentWidget.addUsingVID(vid)
    } else if (instance.constructor !== WidgetClass) {
      parentWidget.removeSubWidget(vid)

      instance = new WidgetClass({
        data: props,
        children
      })

      parentWidget.addSubWidget(vid, instance)
      parentWidget.addUsingVID(vid)
    } else {
      instance.children = children
      instance.updateData(props)
      parentWidget.addUsingVID(vid)
    }

    outputVDOM = instance.render()
  }

  addVID(outputVDOM, `${vid}$`)

  const childrenVDOM = outputVDOM.children || []
  outputVDOM.children = childrenVDOM.map(child => {
    return applyWidget(child, parentWidget)
  })

  return outputVDOM
}
