/**
 * 获取元素距离页面顶部的距离
 * @param {HTMLElement} element html 元素
 */
export default function getElementRectTop(element) {
  let top = element.offsetTop;

  while(element = element.offsetParent) {
      top += element.offsetTop;
  }

  return top;
};