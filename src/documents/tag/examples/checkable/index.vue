<template>
	<Example vertical id="example-tag-checkable">
		<template slot="source">
			<div class="example-tag-checkable">
				<vui-tag checkable>Tag 1</vui-tag>
				<vui-tag checkable>Tag 2</vui-tag>
				<vui-tag checkable>Tag 3</vui-tag>
			</div>
		</template>
		<template slot="title">可选择</template>
		<template slot="describe">
			<p>设置 <code>checkable</code> 属性后可以对标签进行选择，属性 <code>checked</code> 控制当前选择状态。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	export default {
		name: "ExampleTagCheckable",
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
	.example-tag-checkable > .vui-tag { margin-right:10px; }
</style>