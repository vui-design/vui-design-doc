<template>
	<example v-bind:code="code" id="example-menu-vertical">
		<template slot="demo">
			<vui-menu mode="vertical" :selectedName="selectedName" @select="handleSelect" style="border-right: 1px solid #e6e6e6; width: 250px;">
				<vui-submenu name="1" icon="apps" title="Navigation 1">
					<vui-menu-item name="1-1" title="Item 1-1" />
					<vui-menu-item name="1-2" title="Item 1-2" />
					<vui-menu-item name="1-3" title="Item 1-3" />
					<vui-menu-item name="1-4" title="Item 1-4" />
				</vui-submenu>
				<vui-menu-item name="2" icon="mail" title="Navigation 2" disabled />
				<vui-submenu name="3" icon="settings" title="Navigation 3">
					<vui-menu-item-group title="Group 1">
						<vui-menu-item name="3-1" title="Item 3-1" />
						<vui-menu-item name="3-2" title="Item 3-2" />
					</vui-menu-item-group>
					<vui-menu-item-group title="Group 2">
						<vui-menu-item name="3-3" title="Item 3-3" />
						<vui-menu-item name="3-4" title="Item 3-4" />
					</vui-menu-item-group>
				</vui-submenu>
				<vui-submenu name="4" icon="links" title="Navigation 4">
					<vui-menu-item name="4-1" title="Item 4-1" />
					<vui-menu-item name="4-2" title="Item 4-2" />
					<vui-submenu name="4-3" title="Item 4-3">
						<vui-menu-item name="4-3-1" title="Item 4-3-1" />
						<vui-menu-item name="4-3-2" title="Item 4-3-2" />
					</vui-submenu>
				</vui-submenu>
			</vui-menu>
		</template>
		<template slot="title">垂直菜单</template>
		<template slot="description">
			<p>垂直的侧栏导航菜单，子菜单是弹出式的。</p>
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
				selectedName: "1-1"
			};
		},
		methods: {
			handleSelect(name) {
				this.selectedName = name;
			}
		}
	};
</script>