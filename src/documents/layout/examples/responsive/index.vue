<template>
	<Example id="example-layout-responsive">
		<template slot="source">
			<Browser>
				<vui-layout>
					<vui-sider theme="dark" breakpoint="lg" :collapsedWidth="80" @collapse="handleCollapse">
						<h1 style="height: 30px; background-color: rgba(255,255,255,0.2); margin: 17px;"></h1>
						<vui-menu mode="inline" theme="dark" :collapsed="collapsed" :openNames="openNames" :selectedName="selectedName">
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
						<vui-header theme="light" style="padding: 0 25px;"></vui-header>
						<vui-content style="padding: 0 25px;">
							<vui-breadcrumb style="margin: 25px 0;">
								<vui-breadcrumb-item>Home</vui-breadcrumb-item>
								<vui-breadcrumb-item>Components</vui-breadcrumb-item>
								<vui-breadcrumb-item>Layout</vui-breadcrumb-item>
							</vui-breadcrumb>
							<div style="min-height: 250px; background-color: #fff; padding: 25px;">Content</div>
						</vui-content>
						<vui-footer style="text-align: center;">2010-2020 © EXAMPLE</vui-footer>
					</vui-layout>
				</vui-layout>
			</Browser>
		</template>
		<template slot="title">响应式布局</template>
		<template slot="describe">
			<p><code>Sider</code> 支持响应式布局。</p>
			<p>配置 <code>breakpoint</code> 属性即可生效，视窗宽度小于 <code>breakpoint</code> 时 <code>Sider</code> 缩小为 <code>collapsedWidth</code> 宽度。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import Browser from "@/components/browser";
	import code from "./code";

	export default {
		components: {
			Example,
			Browser
		},
		data() {
			return {
				code,
				collapsed: false,
				openNames: ["1"],
				selectedName: "1-1"
			};
		},
		methods: {
			handleCollapse(collapsed) {
				this.collapsed = collapsed;
			}
		}
	};
</script>