<template>
	<Example vertical id="example-icon-basic-usage">
		<template slot="source">
			<div class="example-icon-basic-usage">
				<vui-icon type="apps" />
				<vui-icon type="apps-filled" />
				<vui-icon type="settings" />
				<vui-icon type="settings-filled" />
				<vui-icon type="search" />
				<vui-icon type="search-filled" />
				<vui-icon type="loading" />
				<vui-icon type="loading-filled" />
			</div>
		</template>
		<template slot="title">基本用法</template>
		<template slot="describe">
			<p>使用 Icon 组件，指定图标对应的 <code>type</code> 属性。可以通过设置 <code>spin</code> 属性来实现动画旋转效果。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	export default {
		name: "ExampleIconBasicUsage",
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
	.example-icon-basic-usage .vui-icon { margin-right:10px; }
</style>