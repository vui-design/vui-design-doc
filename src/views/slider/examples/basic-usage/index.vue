<template>
	<vui-doc-example v-bind:code="code" id="example-slider-basic-usage">
		<template slot="demo">
			<div class="example-slider-basic-usage">
				<vui-switch v-model="disabled" />
				<vui-slider v-model="value1" v-bind:disabled="disabled" />
				<vui-slider range v-model="value2" v-bind:disabled="disabled" />
			</div>
		</template>
		<template slot="title">基本用法</template>
		<template slot="describe">
			<p>基本用法。当 <code>range</code> 为 <code>true</code> 时，渲染为双滑块。当 <code>disabled</code> 为 <code>true</code> 时，滑块处于不可用状态。</p>
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
				code,
				disabled: false,
				value1: 30,
				value2: [20, 50]
			};
		}
	};
</script>

<style>
	.example-slider-basic-usage section + section { margin-top:20px; }
	.example-slider-basic-usage .vui-slider + .vui-slider { margin-top:20px; }
</style>