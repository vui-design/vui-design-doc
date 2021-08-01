/**
 * 根据文档正文中具有 id 属性的元素获取锚点数据
 * @param {HTMLElement} containter 文档正文所在的 html 根元素
 */
export default containter => {
  let anchors = [];

  if (!containter) {
    return anchors;
  }

  const nodeList = containter.querySelectorAll("[id]");

  nodeList.forEach(node => {
    const id = node.getAttribute("id");

    if (id.includes("example-api-") || id.includes("vui-watermark-")) {
      return;
    }

    anchors.push(id);
  })

  return anchors;
};