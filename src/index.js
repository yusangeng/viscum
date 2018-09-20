/**
 * 入口文件
 *
 * @author Y3G
 */

import Widget, { createWidgetClass } from './Widget'
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
  createWidgetClass,
  createElement,
  on$,
  on
}

export default Widget
