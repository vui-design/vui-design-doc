import Guide from "@/views/guide";
import Components from "@/views/components";

export default [
	{
		path: "/",
		name: "index",
		meta: {
			title: "index",
		},
		redirect: "/components",
	},

	{
		path: "/guide",
		name: "guide",
		meta: {
			title: "guide",
		},
		component: Guide,
		redirect: "/guide/installation",
		children: [
			{
				path: "/guide/installation",
				name: "installation",
				meta: {
					title: "Installation"
				},
				component: () => import("@/documents/installation/index")
			},
			{
				path: "/guide/getting-started",
				name: "getting-started",
				meta: {
					title: "Getting Started"
				},
				component: () => import("@/documents/getting-started/index")
			},
			{
				path: "/guide/i18n",
				name: "i18n",
				meta: {
					title: "i18n"
				},
				component: () => import("@/documents/i18n/index")
			},
			{
				path: "/guide/customize-theme",
				name: "Customize Theme",
				meta: {
					title: "customize-theme"
				},
				component: () => import("@/documents/customize-theme/index")
			},
			{
				path: "/guide/change-log",
				name: "Change Log",
				meta: {
					title: "change-log"
				},
				component: () => import("@/documents/change-log/index")
			}
		]
	},

	{
		path: "/components",
		name: "components",
		meta: {
			title: "components"
		},
		component: Components,
		redirect: "/components/color",
		children: [
			// 通用组件
			{
				path: "/components/color",
				name: "color",
				meta: {
					title: "Color",
					group: "general"
				},
				component: () => import("@/documents/color/index")
			},
			{
				path: "/components/icon",
				name: "icon",
				meta: {
					title: "Icon",
					group: "general"
				},
				component: () => import("@/documents/icon/index")
			},
			{
				path: "/components/button",
				name: "button",
				meta: {
					title: "Button",
					group: "general"
				},
				component: () => import("@/documents/button/index")
			},
			// 布局组件
			{
				path: "/components/layout",
				name: "layout",
				meta: {
					title: "Layout",
					group: "layout"
				},
				component: () => import("@/documents/layout/index")
			},
			{
				path: "/components/grid",
				name: "grid",
				meta: {
					title: "Grid",
					group: "layout"
				},
				component: () => import("@/documents/grid/index")
			},
			{
				path: "/components/card",
				name: "card",
				meta: {
					title: "Card",
					group: "layout"
				},
				component: () => import("@/documents/card/index")
			},
			{
				path: "/components/collapse",
				name: "collapse",
				meta: {
					title: "Collapse",
					group: "layout"
				},
				component: () => import("@/documents/collapse/index")
			},
			{
				path: "/components/cell",
				name: "cell",
				meta: {
					title: "Cell",
					group: "layout"
				},
				component: () => import("@/documents/cell/index")
			},
			{
				path: "/components/divider",
				name: "divider",
				meta: {
					title: "Divider",
					group: "layout"
				},
				component: () => import("@/documents/divider/index")
			},
			// 导航组件
			{
				path: "/components/breadcrumb",
				name: "breadcrumb",
				meta: {
					title: "Breadcrumb",
					group: "navigation"
				},
				component: () => import("@/documents/breadcrumb/index")
			},
			{
				path: "/components/dropdown",
				name: "dropdown",
				meta: {
					title: "Dropdown",
					group: "navigation"
				},
				component: () => import("@/documents/dropdown/index")
			},
			{
				path: "/components/menu",
				name: "menu",
				meta: {
					title: "Menu",
					group: "navigation"
				},
				component: () => import("@/documents/menu/index")
			},
			{
				path: "/components/page-header",
				name: "page-header",
				meta: {
					title: "PageHeader",
					group: "navigation"
				},
				component: () => import("@/documents/page-header/index")
			},
			{
				path: "/components/pagination",
				name: "pagination",
				meta: {
					title: "Pagination",
					group: "navigation"
				},
				component: () => import("@/documents/pagination/index")
			},
			{
				path: "/components/steps",
				name: "steps",
				meta: {
					title: "Steps",
					group: "navigation"
				},
				component: () => import("@/documents/steps/index")
			},
			{
				path: "/components/tabs",
				name: "tabs",
				meta: {
					title: "Tabs",
					group: "navigation"
				},
				component: () => import("@/documents/tabs/index")
			},
			// 数据录入组件
			{
				path: "/components/cascader",
				name: "cascader",
				meta: {
					title: "Cascader",
					group: "data-entry"
				},
				component: () => import("@/documents/cascader/index")
			},
			{
				path: "/components/checkbox",
				name: "checkbox",
				meta: {
					title: "Checkbox",
					group: "data-entry"
				},
				component: () => import("@/documents/checkbox/index")
			},
			{
				path: "/components/form",
				name: "form",
				meta: {
					title: "Form",
					group: "data-entry"
				},
				component: () => import("@/documents/form/index")
			},
			{
				path: "/components/input",
				name: "input",
				meta: {
					title: "Input",
					group: "data-entry"
				},
				component: () => import("@/documents/input/index")
			},
			{
				path: "/components/input-number",
				name: "input-number",
				meta: {
					title: "InputNumber",
					group: "data-entry"
				},
				component: () => import("@/documents/input-number/index")
			},
			{
				path: "/components/radio",
				name: "radio",
				meta: {
					title: "Radio",
					group: "data-entry"
				},
				component: () => import("@/documents/radio/index")
			},
			{
				path: "/components/select",
				name: "select",
				meta: {
					title: "Select",
					group: "data-entry"
				},
				component: () => import("@/documents/select/index")
			},
			{
				path: "/components/switch",
				name: "switch",
				meta: {
					title: "Switch",
					group: "data-entry"
				},
				component: () => import("@/documents/switch/index")
			},
			{
				path: "/components/textarea",
				name: "textarea",
				meta: {
					title: "Textarea",
					group: "data-entry"
				},
				component: () => import("@/documents/textarea/index")
			},
			{
				path: "/components/upload",
				name: "upload",
				meta: {
					title: "Upload",
					group: "data-entry"
				},
				component: () => import("@/documents/upload/index")
			},
			// 数据展示组件
			{
				path: "/components/avatar",
				name: "avatar",
				meta: {
					title: "Avatar",
					group: "data-display"
				},
				component: () => import("@/documents/avatar/index")
			},
			{
				path: "/components/badge",
				name: "badge",
				meta: {
					title: "Badge",
					group: "data-display"
				},
				component: () => import("@/documents/badge/index")
			},
			{
				path: "/components/descriptions",
				name: "descriptions",
				meta: {
					title: "Descriptions",
					group: "data-display"
				},
				component: () => import("@/documents/descriptions/index")
			},
			{
				path: "/components/empty",
				name: "empty",
				meta: {
					title: "Empty",
					group: "data-display"
				},
				component: () => import("@/documents/empty/index")
			},
			{
				path: "/components/list",
				name: "list",
				meta: {
					title: "List",
					group: "data-display"
				},
				component: () => import("@/documents/list/index")
			},
			{
				path: "/components/popover",
				name: "popover",
				meta: {
					title: "Popover",
					group: "data-display"
				},
				component: () => import("@/documents/popover/index")
			},
			{
				path: "/components/statistic",
				name: "statistic",
				meta: {
					title: "Statistic",
					group: "data-display"
				},
				component: () => import("@/documents/statistic/index")
			},
			{
				path: "/components/table",
				name: "table",
				meta: {
					title: "Table",
					group: "data-display"
				},
				component: () => import("@/documents/table/index")
			},
			{
				path: "/components/tag",
				name: "tag",
				meta: {
					title: "Tag",
					group: "data-display"
				},
				component: () => import("@/documents/tag/index")
			},
			{
				path: "/components/time",
				name: "time",
				meta: {
					title: "Time",
					group: "data-display"
				},
				component: () => import("@/documents/time/index")
			},
			{
				path: "/components/timeline",
				name: "timeline",
				meta: {
					title: "Timeline",
					group: "data-display"
				},
				component: () => import("@/documents/timeline/index")
			},
			{
				path: "/components/tooltip",
				name: "tooltip",
				meta: {
					title: "Tooltip",
					group: "data-display"
				},
				component: () => import("@/documents/tooltip/index")
			},
			{
				path: "/components/tree",
				name: "tree",
				meta: {
					title: "Tree",
					group: "data-display"
				},
				component: () => import("@/documents/tree/index")
			},
			// 反馈
			{
				path: "/components/alert",
				name: "alert",
				meta: {
					title: "Alert",
					group: "feedback"
				},
				component: () => import("@/documents/alert/index")
			},
			{
				path: "/components/drawer",
				name: "drawer",
				meta: {
					title: "Drawer",
					group: "feedback"
				},
				component: () => import("@/documents/drawer/index")
			},
			{
				path: "/components/message",
				name: "message",
				meta: {
					title: "Message",
					group: "feedback"
				},
				component: () => import("@/documents/message/index")
			},
			{
				path: "/components/modal",
				name: "modal",
				meta: {
					title: "Modal",
					group: "feedback"
				},
				component: () => import("@/documents/modal/index")
			},
			{
				path: "/components/notice",
				name: "notice",
				meta: {
					title: "Notice",
					group: "feedback"
				},
				component: () => import("@/documents/notice/index")
			},
			{
				path: "/components/popconfirm",
				name: "popconfirm",
				meta: {
					title: "Popconfirm",
					group: "feedback"
				},
				component: () => import("@/documents/popconfirm/index")
			},
			{
				path: "/components/progress",
				name: "progress",
				meta: {
					title: "Progress",
					group: "feedback"
				},
				component: () => import("@/documents/progress/index")
			},
			{
				path: "/components/result",
				name: "result",
				meta: {
					title: "Result",
					group: "feedback"
				},
				component: () => import("@/documents/result/index")
			},
			{
				path: "/components/spin",
				name: "spin",
				meta: {
					title: "Spin",
					group: "feedback"
				},
				component: () => import("@/documents/spin/index")
			}
		]
	}
];