/**
 * css选择器
 *
 * @author Y3G
 */

/**
 * 如果输入css选择器则输出第一个满足条件的节点, 如果输入节点则返回节点本身
 *
 * @param {*} sel 选择器或者节点
 * @returns {Element} html节点
 */
export default function selectorToElement (sel) {
  let ret = sel

  if (typeof sel === 'string') {
    ret = document.querySelector(sel)
  }

  return ret
}
