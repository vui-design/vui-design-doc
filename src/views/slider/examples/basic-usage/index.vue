<template>
	<vui-doc-example v-bind:code="code" id="example-slider-basic-usage">
		<template slot="demo">
			<div class="example-slider-basic-usage">
				<vui-slider v-model="value1" v-bind:disabled="disabled" />
				<vui-slider v-model="value1" showSteps v-bind:step="10" v-bind:disabled="disabled" />
				<vui-slider v-model="value1" v-bind:marks="marks" v-bind:disabled="disabled" />
				<vui-slider v-model="value2" range v-bind:disabled="disabled" />
				<vui-slider v-model="value2" range showSteps v-bind:step="10" v-bind:disabled="disabled" />
				<vui-slider v-model="value2" range v-bind:marks="marks" v-bind:disabled="disabled" />
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
				value1: 70,
				value2: [20, 70],
					marks: {
					0: "0°C",
					30: "30°C",
					50: "50°C",
					100: {
						style: {
							color: "#f60",
							fontWeight: 600
						},
						label: "100°C"
					}
				}
			};
		}
	};
</script>

<style>
	.example-slider-basic-usage section + section { margin-top:20px; }
	.example-slider-basic-usage .vui-slider { margin-top:20px; }
	.example-slider-basic-usage .vui-slider + .vui-slider { margin-top:40px; }
</style>