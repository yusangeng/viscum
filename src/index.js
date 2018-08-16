import Widget from './Widget'
import createElement from './dom/createElement'
import on$ from './decorator/on$'

Widget.createElement = createElement
Widget.on$ = on$

// 兼容老版本
Widget.callback = on$
export const callback = on$

export {
  Widget,
  createElement,
  on$
}

export default Widget
