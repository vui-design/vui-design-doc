<template>
	<Example vertical id="example-tag-size">
		<template slot="source">
			<div class="example-tag-size">
				<vui-tag size="small">Small</vui-tag>
				<vui-tag>Medium</vui-tag>
				<vui-tag size="large">Large</vui-tag>
			</div>
		</template>
		<template slot="title">尺寸</template>
		<template slot="describe">
			<p>设置 <code>size</code> 属性可以显示不同尺寸的标签，默认为中等尺寸。</p>
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
	.example-tag-size > .vui-tag { margin-right:10px; }
</style>