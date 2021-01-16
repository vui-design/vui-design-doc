<template>
	<vui-doc-example v-bind:code="code" id="example-layout-sider">
		<template slot="demo">
			<vui-doc-browser>
				<vui-layout>
					<vui-sider theme="dark" collapsible v-model="collapsed">
						<h1 style="height: 30px; background-color: rgba(255,255,255,0.2); margin: 17px;"></h1>
						<vui-menu
							mode="inline"
							theme="dark"
							v-bind:collapsed="collapsed"
							v-bind:openNames="openNames"
							v-bind:selectedName="selectedName"
						>
							<vui-submenu name="1" icon="apps" title="Sub Menu 1">
								<vui-menu-item name="1-1" title="Item 1-1" />
								<vui-menu-item name="1-2" title="Item 1-2" />
								<vui-menu-item name="1-3" title="Item 1-3" />
								<vui-menu-item name="1-4" title="Item 1-4" />
							</vui-submenu>
							<vui-submenu name="2" icon="mail" title="Sub Menu 2">
								<vui-menu-item name="2-1" title="Item 2-1" />
								<vui-menu-item name="2-2" title="Item 2-2" />
								<vui-menu-item name="2-3" title="Item 2-3" />
								<vui-menu-item name="2-4" title="Item 2-4" />
							</vui-submenu>
							<vui-submenu name="3" icon="settings" title="Sub Menu 3">
								<vui-menu-item name="3-1" title="Item 3-1" />
								<vui-menu-item name="3-2" title="Item 3-2" />
								<vui-menu-item name="3-3" title="Item 3-3" />
								<vui-menu-item name="3-4" title="Item 3-4" />
							</vui-submenu>
						</vui-menu>
					</vui-sider>
					<vui-layout>
						<vui-header theme="light" style="padding: 0 20px;"></vui-header>
						<vui-content style="padding: 0 20px;">
							<vui-breadcrumb style="margin: 20px 0;">
								<vui-breadcrumb-item>Home</vui-breadcrumb-item>
								<vui-breadcrumb-item>Components</vui-breadcrumb-item>
								<vui-breadcrumb-item>Layout</vui-breadcrumb-item>
							</vui-breadcrumb>
							<div style="min-height: 320px; background-color: #fff; padding: 24px;">Content</div>
						</vui-content>
						<vui-footer style="padding: 24px 20px; text-align: center;">2010-2020 © EXAMPLE</vui-footer>
					</vui-layout>
				</vui-layout>
			</vui-doc-browser>
		</template>
		<template slot="title">侧边布局</template>
		<template slot="description">
			<p>侧边两列式布局。页面横向空间有限时，侧边导航可收起。</p>
			<p>侧边导航在页面布局上采用的是左右的结构，一般主导航放置于页面的左侧固定位置，辅助菜单放置于工作区顶部。内容根据浏览器终端进行自适应，能提高横向空间的使用率，但是整个页面排版不稳定。侧边导航的模式层级扩展性强，一、二、三级导航项目可以更为顺畅且具关联性的被展示，同时侧边导航可以固定，使得用户在操作和浏览中可以快速的定位和切换当前位置，有很高的操作效率。但这类导航横向页面内容的空间会被牺牲一部分。</p>
		</template>
	</vui-doc-example>
</template>

<script>
	import VuiDocExample from "src/components/example";
	import VuiDocBrowser from "src/components/browser";
	import code from "./code";

	export default {
		components: {
			VuiDocExample,
			VuiDocBrowser
		},
		data() {
			return {
				code,
				collapsed: false,
				openNames: ["1"],
				selectedName: "1-1"
			};
		}
	};
</script>