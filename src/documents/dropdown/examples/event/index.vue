<template>
	<Example vertical id="example-dropdown-event">
		<template slot="source">
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
		<template slot="describe">
			<p>分割线和不可用菜单项。</p>
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
