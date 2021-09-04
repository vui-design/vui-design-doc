<template>
	<example v-bind:code="code" id="example-popover-control">
		<template slot="demo">
			<vui-popover trigger="click" title="Title" v-model="visible">
				<vui-button>Click me</vui-button>
				<div slot="content">
					<a href="javascript:;" v-on:click="handleClose">Click to close the popover.</a>
				</div>
			</vui-popover>
		</template>
		<template slot="title">从浮层内关闭</template>
		<template slot="description">
			<p>使用 <code>visible</code> 属性控制浮层显示，支持 <code>v-model</code> 双向绑定数据。</p>
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
				visible: false
			};
		},
		methods: {
			handleClose() {
				this.visible = false;
			}
		}
	};
</script>