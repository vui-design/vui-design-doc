<template>
	<Example vertical id="example-dropdown-cascaded">
		<template slot="source">
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
		<template slot="describe">
			<p>传入的菜单里有多个层级。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	export default {
		components: {
			Example
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
