import VuiDropdownMenuItem from "./src/dropdown-menu-item";

VuiDropdownMenuItem.install = function(Vue) {
	Vue.component(VuiDropdownMenuItem.name, VuiDropdownMenuItem);
};

export default VuiDropdownMenuItem;