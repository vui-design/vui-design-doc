<template>
	<Example vertical id="example-input-disabled">
		<template slot="source">
			<div class="example-input-disabled">
				<vui-input placeholder="Enter something..." disabled />
				<vui-input prepend="https://github.com/u/" placeholder="Enter something..." disabled />
				<vui-input prefix="mic" placeholder="Enter something..." disabled />
			</div>
		</template>
		<template slot="title">禁用状态</template>
		<template slot="describe">
			<p>通过添加 <code>disabled</code> 属性将文本框设为禁用状态。</p>
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

<style>
	.example-input-disabled > .vui-input:not(:first-child) { margin-top:20px; }
</style>