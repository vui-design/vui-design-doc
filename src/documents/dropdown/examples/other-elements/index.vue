<template>
	<Example vertical id="example-dropdown-other-elements">
		<template slot="source">
			<vui-dropdown>
				<a href="javascript:;">Hover me</a>
				<vui-dropdown-menu slot="menu">
					<vui-dropdown-menu-item name="1" title="Menu Item 1" />
					<vui-dropdown-menu-item name="2" title="Menu Item 2" />
					<vui-dropdown-menu-item name="3" title="Menu Item 3" disabled />
					<vui-dropdown-menu-divider />
					<vui-dropdown-menu-item name="4" title="Menu Item 4" />
				</vui-dropdown-menu>
			</vui-dropdown>
		</template>
		<template slot="title">其他元素</template>
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
		}
	};
</script>
