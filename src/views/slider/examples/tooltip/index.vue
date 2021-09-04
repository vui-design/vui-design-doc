<template>
	<example v-bind:code="code" id="example-slider-tooltip">
		<template slot="demo">
			<div class="example-slider-tooltip">
				<vui-slider v-model="value1" v-bind:tooltip="tooltip1" />
				<vui-slider v-model="value2" v-bind:tooltip="tooltip2" />
			</div>
		</template>
		<template slot="title">自定义提示</template>
		<template slot="description">
			<p>利用 <code>tooltip</code> 属性格式化 <router-link to="/components/tooltip">文字提示</router-link> 的内容，<code>tooltip</code> 为 <code>null</code> 时隐藏 <router-link to="/components/tooltip">文字提示</router-link>。</p>
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
				value2: 0,
				tooltip1: {
					color: "light",
					formatter: value => value + "%"
				},
				tooltip2: null
			};
		}
	};
</script>

<style>
	.example-slider-tooltip .vui-slider + .vui-slider { margin-top:24px; }
</style>