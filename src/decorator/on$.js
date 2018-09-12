export default function on$ (type, sel) {
  return function on$ (target, key, descriptor) {
    const typeOfSel = typeof sel
    if (typeOfSel === 'string') {
      addDecoratedDOMListener(target, descriptor, type, sel)
    } else if (typeOfSel === 'undefined') {
      addDecoratedWidgetListener(target, descriptor, type)
    } else {
      console.warn(`Bad selector: ${sel}.`)
    }

    return descriptor
  }
}

function addDecoratedDOMListener (target, descriptor, type, sel) {
  if (!target.__decorated_listeners__) {
    target.__decorated_listeners__ = []
  }

  target.__decorated_listeners__.push({
    type,
    sel,
    callback: descriptor.value
  })
}

function addDecoratedWidgetListener (target, descriptor, type) {
  if (!target.__decorated_widget_listeners__) {
    target.__decorated_widget_listeners__ = []
  }

  target.__decorated_widget_listeners__.push({
    type,
    callback: descriptor.value
  })
}
