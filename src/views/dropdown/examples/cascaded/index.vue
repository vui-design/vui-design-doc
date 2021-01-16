<template>
	<vui-doc-example v-bind:code="code" id="example-dropdown-cascaded">
		<template slot="demo">
			<vui-dropdown>
				<a href="javascript:;">Hover me</a>
				<vui-dropdown-menu slot="menu" @click="handleClick">
					<vui-dropdown-menu-item name="1" title="Menu Item 1" />
					<vui-dropdown-menu-item name="2" title="Menu Item 2" />
					<vui-dropdown-menu-item name="3" title="Menu Item 3" disabled />
					<vui-dropdown-submenu name="4" title="Menu Item 4">
						<vui-dropdown-menu-item name="4-1" title="Menu Item 4-1" />
						<vui-dropdown-menu-item name="4-2" title="Menu Item 4-2" />
						<vui-dropdown-menu-item name="4-3" title="Menu Item 4-3" />
					</vui-dropdown-submenu>
				</vui-dropdown-menu>
			</vui-dropdown>
		</template>
		<template slot="title">级联菜单</template>
		<template slot="description">
			<p>传入的菜单里有多个层级。</p>
		</template>
	</vui-doc-example>
</template>

<script>
	import VuiDocExample from "src/components/example";
	import code from "./code";

	export default {
		components: {
			VuiDocExample
		},
		data() {
			return {
				code
			};
		},
		methods: {
			handleClick(name) {
				this.$message.info("Click on menu item " + name);
			}
		}
	};
</script>
