<template>
	<example v-bind:code="code" id="example-message-more-content">
		<template slot="demo">
			<div class="example-message-more-content">
				<vui-button type="primary" v-on:click="showVNodeMessage">VNode</vui-button>
				<vui-button type="primary" v-on:click="showFunctionMessage">Function</vui-button>
			</div>
		</template>
		<template slot="title">更多内容</template>
		<template slot="description">
			<p>选项  <code>content</code> 支持传入 VNode 虚拟节点。</p>
			<p>另外，您也可以将它设置为一个回调函数，该函数接收 <code>createElement</code> 作为参数，您所需要做的就是在函数内部返回提示内容即可。</p>
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
				code
			};
		},
		methods: {
			showVNodeMessage() {
				const content = (
					<div>The message content is <span style="color: #2d8cf0;">VNode</span> virtual node.</div>
				);

				this.$message.info({
					content
				});
			},
			showFunctionMessage() {
				this.$message.info({
					content(h) {
						return h("div", null, "I was returned by a function.");
					}
				});
			}
		}
	};
</script>

<style>
	.example-message-more-content .vui-button + .vui-button { margin-left:10px; }
</style>