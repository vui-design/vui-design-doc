/**
 * 获取浏览器滚动高度
 */
export default function getScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
};