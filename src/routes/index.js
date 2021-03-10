import Layout from "src/layout";

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
		component: Layout,
		redirect: "/guide/installation",
		children: [
			{
				path: "/guide/installation",
				name: "installation",
				meta: {
					title: "Installation"
				},
				component: () => import("src/views/installation/index")
			},
			{
				path: "/guide/getting-started",
				name: "getting-started",
				meta: {
					title: "Getting Started"
				},
				component: () => import("src/views/getting-started/index")
			},
			{
				path: "/guide/i18n",
				name: "i18n",
				meta: {
					title: "i18n"
				},
				component: () => import("src/views/i18n/index")
			},
			{
				path: "/guide/customize-theme",
				name: "customize-theme",
				meta: {
					title: "customize-theme"
				},
				component: () => import("src/views/customize-theme/index")
			},
			{
				path: "/guide/change-log",
				name: "change-log",
				meta: {
					title: "change-log"
				},
				component: () => import("src/views/change-log/index")
			}
		]
	},

	{
		path: "/components",
		name: "components",
		meta: {
			title: "components"
		},
		component: Layout,
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
				component: () => import("src/views/color/index")
			},
			{
				path: "/components/icon",
				name: "icon",
				meta: {
					title: "Icon",
					group: "general"
				},
				component: () => import("src/views/icon/index")
			},
			{
				path: "/components/button",
				name: "button",
				meta: {
					title: "Button",
					group: "general"
				},
				component: () => import("src/views/button/index")
			},
			// 布局组件
			{
				path: "/components/divider",
				name: "divider",
				meta: {
					title: "Divider",
					group: "layout"
				},
				component: () => import("src/views/divider/index")
			},
			{
				path: "/components/grid",
				name: "grid",
				meta: {
					title: "Grid",
					group: "layout"
				},
				component: () => import("src/views/grid/index")
			},
			{
				path: "/components/layout",
				name: "layout",
				meta: {
					title: "Layout",
					group: "layout"
				},
				component: () => import("src/views/layout/index")
			},
			{
				path: "/components/space",
				name: "space",
				meta: {
					title: "Space",
					group: "layout"
				},
				component: () => import("src/views/space/index")
			},
			// 导航组件
			{
				path: "/components/affix",
				name: "affix",
				meta: {
					title: "Affix",
					group: "navigation"
				},
				component: () => import("src/views/affix/index")
			},
			{
				path: "/components/breadcrumb",
				name: "breadcrumb",
				meta: {
					title: "Breadcrumb",
					group: "navigation"
				},
				component: () => import("src/views/breadcrumb/index")
			},
			{
				path: "/components/dropdown",
				name: "dropdown",
				meta: {
					title: "Dropdown",
					group: "navigation"
				},
				component: () => import("src/views/dropdown/index")
			},
			{
				path: "/components/menu",
				name: "menu",
				meta: {
					title: "Menu",
					group: "navigation"
				},
				component: () => import("src/views/menu/index")
			},
			{
				path: "/components/page-header",
				name: "page-header",
				meta: {
					title: "PageHeader",
					group: "navigation"
				},
				component: () => import("src/views/page-header/index")
			},
			{
				path: "/components/pagination",
				name: "pagination",
				meta: {
					title: "Pagination",
					group: "navigation"
				},
				component: () => import("src/views/pagination/index")
			},
			{
				path: "/components/steps",
				name: "steps",
				meta: {
					title: "Steps",
					group: "navigation"
				},
				component: () => import("src/views/steps/index")
			},
			{
				path: "/components/tabs",
				name: "tabs",
				meta: {
					title: "Tabs",
					group: "navigation"
				},
				component: () => import("src/views/tabs/index")
			},
			// 数据录入组件
			{
				path: "/components/cascader",
				name: "cascader",
				meta: {
					title: "Cascader",
					group: "data-entry"
				},
				component: () => import("src/views/cascader/index")
			},
			{
				path: "/components/checkbox",
				name: "checkbox",
				meta: {
					title: "Checkbox",
					group: "data-entry"
				},
				component: () => import("src/views/checkbox/index")
			},
			/*
			{
				path: "/components/datepicker",
				name: "datepicker",
				meta: {
					title: "Datepicker",
					group: "data-entry"
				},
				component: () => import("src/views/datepicker/index")
			},
			*/
			{
				path: "/components/form",
				name: "form",
				meta: {
					title: "Form",
					group: "data-entry"
				},
				component: () => import("src/views/form/index")
			},
			{
				path: "/components/input",
				name: "input",
				meta: {
					title: "Input",
					group: "data-entry"
				},
				component: () => import("src/views/input/index")
			},
			{
				path: "/components/input-number",
				name: "input-number",
				meta: {
					title: "InputNumber",
					group: "data-entry"
				},
				component: () => import("src/views/input-number/index")
			},
			// {
			// 	path: "/components/multiple-cascader",
			// 	name: "multiple-cascader",
			// 	meta: {
			// 		title: "MultipleCascader",
			// 		group: "data-entry"
			// 	},
			// 	component: () => import("src/views/multiple-cascader/index")
			// },
			{
				path: "/components/radio",
				name: "radio",
				meta: {
					title: "Radio",
					group: "data-entry"
				},
				component: () => import("src/views/radio/index")
			},
			{
				path: "/components/rate",
				name: "rate",
				meta: {
					title: "Rate",
					group: "data-entry"
				},
				component: () => import("src/views/rate/index")
			},
			{
				path: "/components/select",
				name: "select",
				meta: {
					title: "Select",
					group: "data-entry"
				},
				component: () => import("src/views/select/index")
			},
			{
				path: "/components/slider",
				name: "slider",
				meta: {
					title: "Slider",
					group: "data-entry"
				},
				component: () => import("src/views/slider/index")
			},
			{
				path: "/components/switch",
				name: "switch",
				meta: {
					title: "Switch",
					group: "data-entry"
				},
				component: () => import("src/views/switch/index")
			},
			{
				path: "/components/textarea",
				name: "textarea",
				meta: {
					title: "Textarea",
					group: "data-entry"
				},
				component: () => import("src/views/textarea/index")
			},
			{
				path: "/components/transfer",
				name: "transfer",
				meta: {
					title: "Transfer",
					group: "data-entry"
				},
				component: () => import("src/views/transfer/index")
			},
			{
				path: "/components/upload",
				name: "upload",
				meta: {
					title: "Upload",
					group: "data-entry"
				},
				component: () => import("src/views/upload/index")
			},
			// 数据展示组件
			{
				path: "/components/avatar",
				name: "avatar",
				meta: {
					title: "Avatar",
					group: "data-display"
				},
				component: () => import("src/views/avatar/index")
			},
			{
				path: "/components/badge",
				name: "badge",
				meta: {
					title: "Badge",
					group: "data-display"
				},
				component: () => import("src/views/badge/index")
			},
			{
				path: "/components/card",
				name: "card",
				meta: {
					title: "Card",
					group: "data-display"
				},
				component: () => import("src/views/card/index")
			},
			{
				path: "/components/cell",
				name: "cell",
				meta: {
					title: "Cell",
					group: "data-display"
				},
				component: () => import("src/views/cell/index")
			},
			{
				path: "/components/collapse",
				name: "collapse",
				meta: {
					title: "Collapse",
					group: "data-display"
				},
				component: () => import("src/views/collapse/index")
			},
			{
				path: "/components/descriptions",
				name: "descriptions",
				meta: {
					title: "Descriptions",
					group: "data-display"
				},
				component: () => import("src/views/descriptions/index")
			},
			{
				path: "/components/empty",
				name: "empty",
				meta: {
					title: "Empty",
					group: "data-display"
				},
				component: () => import("src/views/empty/index")
			},
			{
				path: "/components/image",
				name: "image",
				meta: {
					title: "Image",
					group: "data-display"
				},
				component: () => import("src/views/image/index")
			},
			{
				path: "/components/list",
				name: "list",
				meta: {
					title: "List",
					group: "data-display"
				},
				component: () => import("src/views/list/index")
			},
			{
				path: "/components/popover",
				name: "popover",
				meta: {
					title: "Popover",
					group: "data-display"
				},
				component: () => import("src/views/popover/index")
			},
			{
				path: "/components/statistic",
				name: "statistic",
				meta: {
					title: "Statistic",
					group: "data-display"
				},
				component: () => import("src/views/statistic/index")
			},
			{
				path: "/components/table",
				name: "table",
				meta: {
					title: "Table",
					group: "data-display"
				},
				component: () => import("src/views/table/index")
			},
			{
				path: "/components/tag",
				name: "tag",
				meta: {
					title: "Tag",
					group: "data-display"
				},
				component: () => import("src/views/tag/index")
			},
			{
				path: "/components/time",
				name: "time",
				meta: {
					title: "Time",
					group: "data-display"
				},
				component: () => import("src/views/time/index")
			},
			{
				path: "/components/timeline",
				name: "timeline",
				meta: {
					title: "Timeline",
					group: "data-display"
				},
				component: () => import("src/views/timeline/index")
			},
			{
				path: "/components/tooltip",
				name: "tooltip",
				meta: {
					title: "Tooltip",
					group: "data-display"
				},
				component: () => import("src/views/tooltip/index")
			},
			{
				path: "/components/tree",
				name: "tree",
				meta: {
					title: "Tree",
					group: "data-display"
				},
				component: () => import("src/views/tree/index")
			},
			// 反馈
			{
				path: "/components/alert",
				name: "alert",
				meta: {
					title: "Alert",
					group: "feedback"
				},
				component: () => import("src/views/alert/index")
			},
			{
				path: "/components/drawer",
				name: "drawer",
				meta: {
					title: "Drawer",
					group: "feedback"
				},
				component: () => import("src/views/drawer/index")
			},
			{
				path: "/components/message",
				name: "message",
				meta: {
					title: "Message",
					group: "feedback"
				},
				component: () => import("src/views/message/index")
			},
			{
				path: "/components/modal",
				name: "modal",
				meta: {
					title: "Modal",
					group: "feedback"
				},
				component: () => import("src/views/modal/index")
			},
			{
				path: "/components/notice",
				name: "notice",
				meta: {
					title: "Notice",
					group: "feedback"
				},
				component: () => import("src/views/notice/index")
			},
			{
				path: "/components/popconfirm",
				name: "popconfirm",
				meta: {
					title: "Popconfirm",
					group: "feedback"
				},
				component: () => import("src/views/popconfirm/index")
			},
			{
				path: "/components/progress",
				name: "progress",
				meta: {
					title: "Progress",
					group: "feedback"
				},
				component: () => import("src/views/progress/index")
			},
			{
				path: "/components/result",
				name: "result",
				meta: {
					title: "Result",
					group: "feedback"
				},
				component: () => import("src/views/result/index")
			},
			{
				path: "/components/skeleton",
				name: "skeleton",
				meta: {
					title: "Skeleton",
					group: "feedback"
				},
				component: () => import("src/views/skeleton/index")
			},
			{
				path: "/components/spin",
				name: "spin",
				meta: {
					title: "Spin",
					group: "feedback"
				},
				component: () => import("src/views/spin/index")
			},
			// 其它
			{
				path: "/components/anchor",
				name: "anchor",
				meta: {
					title: "Anchor",
					group: "other"
				},
				component: () => import("src/views/anchor/index")
			},
			{
				path: "/components/backtop",
				name: "backtop",
				meta: {
					title: "Backtop",
					group: "other"
				},
				component: () => import("src/views/backtop/index")
			}
		]
	}
];