<template>
	<Example vertical id="example-spin-size">
		<template slot="source">
			<div class="example-spin-size">
				<vui-spin size="small" />
				<vui-spin />
				<vui-spin size="large" />
			</div>
		</template>
		<template slot="title">各种尺寸</template>
		<template slot="describe">
			<p>建议将小型尺寸用于文本加载，默认尺寸用于卡片容器级加载，大型尺寸用于页面级加载。</p>
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
	.example-spin-size > .vui-spin { margin-right:20px; }
</style>
