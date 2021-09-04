<template>
	<example v-bind:code="code" id="example-menu-horizontal">
		<template slot="demo">
			<vui-menu mode="horizontal" style="box-shadow: 0 -1px 0 #e6e6e6 inset;" :selectedName="selectedName" @select="handleSelect">
				<vui-menu-item name="1" icon="apps" title="Navigation 1" />
				<vui-menu-item name="2" icon="mail" title="Navigation 2" disabled />
				<vui-submenu name="3" icon="settings" title="Navigation 3 - Submenu">
					<vui-menu-item-group title="Group 1">
						<vui-menu-item name="3-1" title="Item 1" />
						<vui-menu-item name="3-2" title="Item 2" />
					</vui-menu-item-group>
					<vui-menu-item-group title="Group 2">
						<vui-menu-item name="3-3" title="Item 3" />
						<vui-menu-item name="3-4" title="Item 4" />
					</vui-menu-item-group>
				</vui-submenu>
				<vui-menu-item name="4" icon="links" title="Navigation 4 - Link" href="https://cn.vuejs.org/" target="_blank" />
			</vui-menu>
		</template>
		<template slot="title">水平菜单</template>
		<template slot="description">
			<p>水平的顶部导航菜单，子菜单是弹出式的。</p>
		</template>
	</example>
</template>

<script>
	import Example from "src/components/example";
	import code from "./code";

	export default {
		components: {
			Example
		},
		data() {
			return {
				code,
				selectedName: "1"
			};
		},
		methods: {
			handleSelect(name) {
				this.selectedName = name;
			}
		}
	};
</script>