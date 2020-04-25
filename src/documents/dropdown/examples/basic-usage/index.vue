<template>
	<Example vertical id="example-dropdown-basic-usage">
		<template slot="source">
			<vui-dropdown>
				<a href="javascript:;">Hover me</a>
				<vui-dropdown-menu slot="menu">
					<vui-dropdown-menu-item name="1" title="Menu Item 1" />
					<vui-dropdown-menu-item name="2" title="Menu Item 2" />
					<vui-dropdown-menu-item name="3" title="Menu Item 3" />
					<vui-dropdown-menu-item name="4" title="Menu Item 4" />
				</vui-dropdown-menu>
			</vui-dropdown>
		</template>
		<template slot="title">基本用法</template>
		<template slot="describe">
			<p>最简单的下拉菜单。</p>
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
