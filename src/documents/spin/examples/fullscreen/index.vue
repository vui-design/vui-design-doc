<template>
	<Example vertical id="example-spin-fullscreen">
		<template slot="source">
			<div class="example-spin-fullscreen">
				<vui-button type="primary" @click="showShowSpin">全屏加载，3秒后关闭</vui-button>
				<vui-button outline @click="showShowCustomSpin">自定义内容</vui-button>
			</div>
		</template>
		<template slot="title">全屏加载</template>
		<template slot="describe">
			<p>全屏加载方式，可以使用 <code>Vue</code> 的 <code>render</code> 函数自定义内容，<a href="https://cn.vuejs.org/v2/guide/render-function.html" target="_blank">学习 render 函数 & JSX</a>。</p>
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
				const spin = this.$spin.open();

				setTimeout(() => spin.close(), 3000);
			},
			showShowCustomSpin() {
				const spin = this.$spin.open({
					render(h) {
						return (
							<div>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 44 44" stroke="currentColor">
									<g fill="none" fill-rule="evenodd" stroke-width="2">
										<circle cx="22" cy="22" r="12.8281">
											<animate attributeName="r" begin="0s" dur="1.8s" values="1;20" calcMode="spline" keyTimes="0;1" keySplines="0.165,0.84,0.44,1" repeatCount="indefinite" />
											<animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1;0" calcMode="spline" keyTimes="0;1" keySplines="0.3,0.61,0.355,1" repeatCount="indefinite" />
										</circle>
										<circle cx="22" cy="22" r="19.5756">
											<animate attributeName="r" begin="-0.9s" dur="1.8s" values="1;20" calcMode="spline" keyTimes="0;1" keySplines="0.165,0.84,0.44,1" repeatCount="indefinite" />
											<animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1;0" calcMode="spline" keyTimes="0;1" keySplines="0.3,0.61,0.355,1" repeatCount="indefinite" />
										</circle>
									</g>
								</svg>
								<div style="margin-top: 10px;">Loading...</div>
							</div>
						);
					}
				});

				setTimeout(() => spin.close(), 3000);
			}
		}
	};
</script>

<style>
	.example-spin-fullscreen > .vui-button { margin-right:10px; }
</style>
