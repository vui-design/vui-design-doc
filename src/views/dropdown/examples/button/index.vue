<template>
	<vui-doc-example v-bind:code="code" id="example-dropdown-button">
		<template slot="demo">
			<div class="example-dropdown-button">
				<vui-dropdown-button v-on:click="handleClick">
					Dropdown
					<vui-dropdown-menu slot="menu" v-on:click="handleMenuClick">
						<vui-dropdown-menu-item name="1" title="Menu Item 1" />
						<vui-dropdown-menu-item name="2" title="Menu Item 2" />
						<vui-dropdown-menu-item name="3" title="Menu Item 3" />
						<vui-dropdown-menu-item name="4" title="Menu Item 4" />
					</vui-dropdown-menu>
				</vui-dropdown-button>
				<vui-dropdown-button icon="user" v-on:click="handleClick">
					Dropdown
					<vui-dropdown-menu slot="menu" v-on:click="handleMenuClick">
						<vui-dropdown-menu-item name="1" title="Menu Item 1" />
						<vui-dropdown-menu-item name="2" title="Menu Item 2" />
						<vui-dropdown-menu-item name="3" title="Menu Item 3" />
						<vui-dropdown-menu-item name="4" title="Menu Item 4" />
					</vui-dropdown-menu>
				</vui-dropdown-button>
				<vui-dropdown-button disabled v-on:click="handleClick">
					Dropdown
					<vui-dropdown-menu slot="menu" v-on:click="handleMenuClick">
						<vui-dropdown-menu-item name="1" title="Menu Item 1" />
						<vui-dropdown-menu-item name="2" title="Menu Item 2" />
						<vui-dropdown-menu-item name="3" title="Menu Item 3" />
						<vui-dropdown-menu-item name="4" title="Menu Item 4" />
					</vui-dropdown-menu>
				</vui-dropdown-button>
			</div>
		</template>
		<template slot="title">带下拉框的按钮</template>
		<template slot="description">
			<p>左边是常规按钮，右边是额外的相关功能菜单，可通过 <code>icon</code> 属性来修改右边的图标。</p>
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
			handleClick() {
				this.$message.info("Click on left button");
			},
			handleMenuClick(value) {
				this.$message.info("Click on menu item");
			}
		}
	};
</script>

<style>
	.example-dropdown-button .vui-dropdown-button { margin:0 12px 12px 0; }
</style>
