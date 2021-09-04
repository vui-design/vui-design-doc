<template>
	<example v-bind:code="code" id="example-slider-basic-usage">
		<template slot="demo">
			<div class="example-slider-basic-usage">
				<section>
					<div>Disabled:</div>
					<vui-switch v-model="disabled" />
				</section>
				<vui-slider v-model="value1" v-bind:disabled="disabled" />
				<vui-slider v-model="value2" range v-bind:disabled="disabled" />
			</div>
		</template>
		<template slot="title">基本用法</template>
		<template slot="description">
			<p>基本用法。当 <code>range</code> 为 <code>true</code> 时，启用双滑块。当 <code>disabled</code> 为 <code>true</code> 时，滑块处于不可用状态。</p>
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
				disabled: false,
				value1: 30,
				value2: [20, 50]
			};
		}
	};
</script>

<style>
	.example-slider-basic-usage section { display:flex; align-items:center; }
	.example-slider-basic-usage section .vui-switch { margin-left:4px; }
	.example-slider-basic-usage .vui-slider { margin-top:24px; }
</style>