<template>
	<example v-bind:code="code" id="example-slider-marks">
		<template slot="demo">
			<div class="example-slider-marks">
				<section>
					<h4>included=true</h4>
					<vui-slider v-model="value1" v-bind:marks="marks" />
					<vui-slider v-model="value2" range v-bind:marks="marks" />
				</section>
				<section>
					<h4>included=false</h4>
					<vui-slider v-model="value3" v-bind:included="false" v-bind:marks="marks" />
					<vui-slider v-model="value4" range v-bind:included="false" v-bind:marks="marks" />
				</section>
				<section>
					<h4>step & marks</h4>
					<vui-slider v-model="value5" v-bind:step="10" v-bind:marks="marks" />
				</section>
				<section>
					<h4>step=null</h4>
					<vui-slider v-model="value6" v-bind:step="null" v-bind:marks="marks" />
				</section>
			</div>
		</template>
		<template slot="title">基本用法</template>
		<template slot="describe">
			<p>基本用法。当 <code>range</code> 为 <code>true</code> 时，渲染为双滑块。当 <code>disabled</code> 为 <code>true</code> 时，滑块处于不可用状态。</p>
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
				value1: 37,
				value2: [26, 37],
				value3: 37,
				value4: [26, 37],
				value5: 37,
				value6: 37,
				marks: {
					0: "0°C",
					26: "26°C",
					37: "37°C",
					100: {
						style: {
							color: "#ff4d4f"
						},
						label: "100°C"
					}
				}
			};
		}
	};
</script>

<style>
	.example-slider-marks section + section { margin-top:40px; }
	.example-slider-marks section h4 { margin-bottom:16px; }
	.example-slider-marks section .vui-slider + .vui-slider { margin-top:32px; }
</style>