/**
 * 用于获取默认语言
 */
export default function getDefaultLanguage() {
	return localStorage.getItem("language") || window.navigator.language || "zh-CN";
};