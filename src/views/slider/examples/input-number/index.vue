<template>
	<example v-bind:code="code" id="example-slider-input-number">
		<template slot="demo">
			<div class="example-slider-input-number">
				<section>
					<vui-slider v-model="value1" v-bind:min="1" v-bind:max="20" />
					<vui-input-number v-model="value1" v-bind:min="1" v-bind:max="20" />
				</section>
				<section>
					<vui-slider v-model="value2" v-bind:min="0" v-bind:max="1" v-bind:step="0.01" />
					<vui-input-number v-model="value2" v-bind:min="0" v-bind:max="1" v-bind:step="0.01" v-bind:precision="2" />
				</section>
			</div>
		</template>
		<template slot="title">带输入框的滑块</template>
		<template slot="description">
			<p>和 <router-link to="/components/input-number">数字输入框</router-link> 组件保持同步。</p>
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
				value1: 0,
				value2: 0
			};
		}
	};
</script>

<style>
	.example-slider-input-number section { display:flex; align-items:center; }
	.example-slider-input-number section + section { margin-top:24px; }
	.example-slider-input-number section .vui-slider { flex:1; }
	.example-slider-input-number section .vui-input-number { width:80px; margin-left:16px; }
</style>