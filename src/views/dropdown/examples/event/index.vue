<template>
	<vui-doc-example v-bind:code="code" id="example-dropdown-event">
		<template slot="demo">
			<vui-dropdown>
				<a href="javascript:;">Hover me, and click menu item</a>
				<vui-dropdown-menu slot="menu" @click="handleClick">
					<vui-dropdown-menu-item name="1" title="Menu Item 1" />
					<vui-dropdown-menu-item name="2" title="Menu Item 2" />
					<vui-dropdown-menu-item name="3" title="Menu Item 3" />
					<vui-dropdown-menu-item name="4" title="Menu Item 4" />
				</vui-dropdown-menu>
			</vui-dropdown>
		</template>
		<template slot="title">触发事件</template>
		<template slot="description">
			<p>分割线和不可用菜单项。</p>
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
