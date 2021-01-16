<template>
	<vui-doc-example v-bind:code="code" id="example-switch-size">
		<template slot="demo">
			<div class="example-switch-size">
				<vui-switch size="small" />
				<vui-switch />
				<vui-switch size="large" />
			</div>
		</template>
		<template slot="title">尺寸</template>
		<template slot="description">
			<p>设置 <code>size</code> 为 <code>small</code> 或 <code>large</code> 使用小号或大号开关。</p>
		</template>
	</vui-doc-example>
</template>

<script>
	import VuiDocExample from "src/components/example";
	import code from "./code";

	export default {
		name: "ExampleSwitchSize",
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

<style>
	.example-switch-size .vui-switch { margin-right:10px; }
</style>