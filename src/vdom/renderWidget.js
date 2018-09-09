import applyWidget from './applyWidget'
import { SUBWIDGET_DATA_NAME } from '../dom/const'

const { assign } = Object

// 组件展开
export default function renderWidget (vdom, parentWidget) {
  const { tag: WidgetClass, props = {}, children = [], vid, parent } = vdom
  let outputVDOM = null

  if (typeof WidgetClass === 'function') {
    // 子组件
    // console.log(WidgetClass.name, parent ? parent.constructor.name : 'none',
    //   children.map(c => c.tag.name || c.tag),
    //   children.map(c => c.parent),
    //   parentWidget.constructor.name)

    setParentToChildren(parentWidget, children)

    const realParent = parent || parentWidget

    outputVDOM = renderWidgetVDOM({
      WidgetClass, props, children, vid, parentWidget: realParent
    })
  } else {
    // 简单子元素
    outputVDOM = vdom

    const childrenVDOM = outputVDOM.children || []
    outputVDOM.children = childrenVDOM.map(child => {
      return applyWidget(child, parentWidget)
    })
  }

  return outputVDOM
}

function setParentToChildren (parent, children) {
  children.forEach(child => {
    if ((typeof child.tag === 'function') && !child.parent) {
      child.parent = parent
    }

    setParentToChildren(parent, child.children)
  })
}

function renderWidgetVDOM ({ WidgetClass, props, children, vid, parentWidget }) {
  let realVID = `${vid}$`
  let instance = parentWidget.subWidget(vid)

  const __widget = props[SUBWIDGET_DATA_NAME]
  const data = assign({}, props, {
    [SUBWIDGET_DATA_NAME]: void 0
  })

  if (!instance) {
    instance = new WidgetClass({
      parent: parentWidget,
      vid: realVID,
      data,
      children
    })

    instance[SUBWIDGET_DATA_NAME] = __widget
    parentWidget.addSubWidget(realVID, instance)
    parentWidget.addUsingVID(realVID)
  } else if (instance.constructor !== WidgetClass) {
    parentWidget.removeSubWidget(vid).dispose()

    instance = new WidgetClass({
      parent: parentWidget,
      vid: realVID,
      data,
      children
    })

    instance[SUBWIDGET_DATA_NAME] = __widget
    parentWidget.addSubWidget(realVID, instance)
    parentWidget.addUsingVID(realVID)
  } else {
    instance.children = children
    instance.updateData(props)
    parentWidget.addUsingVID(realVID)
  }

  return instance.renderVDOM()
}
