<template>
	<example v-bind:code="code" id="example-input-number-formatter">
		<template slot="demo">
			<div class="example-input-number-formatter">
				<vui-input-number :min="0" :formatter="formatter1" :parser="parser1" v-model="value1" />
				<vui-input-number :min="0" :max="100" :formatter="formatter2" :parser="parser2" v-model="value2" />
			</div>
		</template>
		<template slot="title">格式化展示</template>
		<template slot="description">
			<p>通过 <code>formatter</code> 格式化数字，以展示具有具体含义的数据，往往需要配合 <code>parser</code> 一起使用。</p>
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
				value1: 1010,
				value2: 60
			};
		},
		watch: {
			value1(value) {
				console.log(value);
			},
			value2(value) {
				console.log(value);
			}
		},
		methods: {
			formatter1(value) {
				return ("$ " + value).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			},
			parser1(value) {
				return value.replace(/\$\s?|(,*)/g, "");
			},
			formatter2(value) {
				return value + "%";
			},
			parser2(value) {
				return value.replace("%", "");
			}
		}
	};
</script>

<style>
	.example-input-number-formatter .vui-input-number + .vui-input-number { margin-left:10px; }
</style>