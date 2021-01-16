<template>
	<vui-doc-example v-bind:code="code" id="example-button-loading">
		<template slot="demo">
			<div class="example-button-loading">
				<section>
					<vui-button type="primary" icon="dustbin" :loading="loading2" @click="handleClick2">Click me</vui-button>
					<vui-button type="primary" :loading="loading1" @click="handleClick1">Click me</vui-button>
					<vui-button type="primary" loading>Loading...</vui-button>
				</section>
				<section>
					<vui-button type="primary" shape="circle" loading />
					<vui-button shape="circle" loading />
				</section>
			</div>
		</template>
		<template slot="title">加载状态</template>
		<template slot="description">
			<p>添加 <code>loading</code> 属性即可让按钮处于加载状态。</p>
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
				loading1: false,
				loading2: false
			};
		},
		methods: {
			handleClick1() {
				this.loading1 = true;
			},
			handleClick2() {
				this.loading2 = true;
			}
		}
	};
</script>

<style>
	.example-button-loading > section:not(:last-child) { margin-bottom:20px; }
	.example-button-loading > section > .vui-button { margin-right:10px; }
</style>