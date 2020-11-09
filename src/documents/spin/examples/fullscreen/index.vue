<template>
	<Example vertical id="example-spin-fullscreen">
		<template slot="source">
			<div class="example-spin-fullscreen">
				<vui-button type="primary" v-on:click="showShowSpin">全屏加载，3秒后关闭</vui-button>
				<vui-button outline v-on:click="showShowCustomSpin">自定义指示符</vui-button>
			</div>
		</template>
		<template slot="title">全屏加载</template>
		<template slot="describe">
			<p>全屏加载方式，可以使用 <code>Vue</code> 的 <code>createElement</code> 函数自定义指示符，<a href="https://cn.vuejs.org/v2/guide/render-function.html" target="_blank">学习渲染函数 & JSX</a>。</p>
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
				code
			};
		},
		methods: {
			showShowSpin() {
				const spin = this.$spin.spinning();

				setTimeout(() => spin.cancel(), 3000);
			},
			showShowCustomSpin() {
				const spin = this.$spin.spinning({
					indicator(h) {
						return h("vui-icon", {
							props: {
								type: "loading-spinner"
							},
							style: {
								fontSize: "24px"
							}
						});
					}
				});

				setTimeout(() => spin.cancel(), 3000);
			}
		}
	};
</script>

<style>
	.example-spin-fullscreen > .vui-button { margin-right:10px; }
</style>