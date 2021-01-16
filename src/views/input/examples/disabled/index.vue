<template>
	<vui-doc-example v-bind:code="code" id="example-input-disabled">
		<template slot="demo">
			<div class="example-input-disabled">
				<vui-input placeholder="Enter something..." disabled />
				<vui-input prepend="https://github.com/u/" placeholder="Enter something..." disabled />
				<vui-input prefix="mic" placeholder="Enter something..." disabled />
			</div>
		</template>
		<template slot="title">禁用状态</template>
		<template slot="description">
			<p>通过添加 <code>disabled</code> 属性将文本框设为禁用状态。</p>
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

<style>
	.example-input-disabled > .vui-input:not(:first-child) { margin-top:20px; }
</style>