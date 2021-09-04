<template>
	<example v-bind:code="code" id="example-slider-icon">
		<template slot="demo">
			<div class="example-slider-icon">
				<vui-icon type="emotion-unhappy" v-bind:style="prevStyle" />
				<vui-slider v-model="value" v-bind:min="min" v-bind:max="max" />
				<vui-icon type="emotion-happy" v-bind:style="nextStyle"/>
			</div>
		</template>
		<template slot="title">带图标的滑块</template>
		<template slot="description">
			<p>滑块左右两侧可以设置图标来表达业务含义。</p>
		</template>
	</example>
</template>

<script>
	import Example from "src/components/example";
	import code from "./code";

	export default {
		components: {
			Example
		},
		data() {
			return {
				code,
				min: 0,
				max: 20,
				value: 0
			};
		},
		computed: {
			prevStyle() {
				const { max, min, value } = this;
				const middle = (max - min) / 2;

				return {
					color: value <= middle ? "" : "#bfbfbf"
				};
			},
			nextStyle() {
				const { max, min, value } = this;
				const middle = (max - min) / 2;

				return {
					color: value >= middle ? "" : "#bfbfbf"
				};
			}
		}
	};
</script>

<style>
	.example-slider-icon { display:flex; align-items:center; }
	.example-slider-icon .vui-slider { flex:1; margin:0 16px; }
</style>