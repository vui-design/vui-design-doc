/**
 * 用于获取默认语言
 */
export default () => {
	return localStorage.getItem("language") || window.navigator.language || "zh-CN";
};