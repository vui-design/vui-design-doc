/**
 * 根据文档正文中具有 id 属性的元素获取目录数据
 * @param {HTMLElement} markdown 文档正文所在的 html 根元素
 */
export default function getCatalogue(markdown) {
  let catalogue = [];

  if (!markdown) {
    return catalogue;
  }

  const nodeList = markdown.querySelectorAll("[id]");

  for (let i = 0, length = nodeList.length; i < length; i++) {
  	const id = nodeList[i].getAttribute("id");

  	if (id.includes("example-api-")) {
  		continue;
  	}

    catalogue.push(nodeList[i].getAttribute("id"));
  }

  return catalogue;
};