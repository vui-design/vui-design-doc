<template>
	<vui-doc-example v-bind:code="code" id="example-tag-basic-usage">
		<template slot="demo">
			<div class="example-tag-basic-usage">
				<vui-tag>Tag 1</vui-tag>
				<vui-tag>Tag 2</vui-tag>
				<vui-tag>Tag 3</vui-tag>
			</div>
		</template>
		<template slot="title">基本用法</template>
		<template slot="description">
			<p>简单的标签展示。</p>
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
	.example-tag-basic-usage > .vui-tag { margin-right:10px; }
</style>