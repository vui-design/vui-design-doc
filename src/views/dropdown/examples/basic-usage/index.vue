<template>
	<vui-doc-example v-bind:code="code" id="example-dropdown-basic-usage">
		<template slot="demo">
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
		<template slot="description">
			<p>最简单的下拉菜单。</p>
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
		}
	};
</script>
