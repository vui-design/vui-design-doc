<template>
	<example v-bind:code="code" id="example-dropdown-trigger">
		<template slot="demo">
			<vui-dropdown trigger="click">
				<a href="javascript:;">Click me</a>
				<vui-dropdown-menu slot="menu">
					<vui-dropdown-menu-item name="1" title="Menu Item 1" />
					<vui-dropdown-menu-item name="2" title="Menu Item 2" />
					<vui-dropdown-menu-item name="3" title="Menu Item 3" />
					<vui-dropdown-menu-item name="4" title="Menu Item 4" />
				</vui-dropdown-menu>
			</vui-dropdown>
		</template>
		<template slot="title">触发方式</template>
		<template slot="description">
			<p>默认是移入触发菜单，可以点击触发。</p>
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
				code
			};
		}
	};
</script>
