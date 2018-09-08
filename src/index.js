import Widget from './Widget'
import createElement from './vdom/createElement'
import on$ from './decorator/on$'

const on = on$

Widget.createElement = createElement
Widget.on$ = on$
Widget.on = on$

// 兼容老版本
Widget.callback = on$
export const callback = on$

export {
  Widget,
  createElement,
  on$,
  on
}

export default Widget
