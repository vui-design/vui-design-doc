<template>
	<Example id="example-rate-text">
		<template slot="source">
			<div class="example-rate-text">
				<vui-rate v-model="value" v-bind:tooltips="tooltips" />
				<p>{{tooltips[value - 1]}}</p>
			</div>
		</template>
		<template slot="title">文案提示</template>
		<template slot="describe">
			<p>给评分组件加上文案提示。</p>
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
				code,
				tooltips: ["terrible", "bad", "normal", "good", "wonderful"],
				value: 3
			};
		}
	};
</script>

<style>
	.example-rate-text { display:flex; align-items:center; line-height:1; }
	.example-rate-text p { margin-left:16px; }
</style>