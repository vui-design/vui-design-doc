<template>
	<Example vertical id="example-tag-basic-usage">
		<template slot="source">
			<div class="example-tag-basic-usage">
				<vui-tag>Tag 1</vui-tag>
				<vui-tag>Tag 2</vui-tag>
				<vui-tag>Tag 3</vui-tag>
			</div>
		</template>
		<template slot="title">基本用法</template>
		<template slot="describe">
			<p>简单的标签展示。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	export default {
		name: "ExampleTagBasicUsage",
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

<style>
	.example-tag-basic-usage > .vui-tag { margin-right:10px; }
</style>