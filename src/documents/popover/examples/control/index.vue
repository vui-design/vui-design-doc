<template>
	<Example vertical id="example-popover-control">
		<template slot="source">
			<vui-popover trigger="click" title="Title" v-model="visible">
				<vui-button>Click me</vui-button>
				<div slot="content">
					<a href="javascript:;" @click="handleClose">Click to close the popover.</a>
				</div>
			</vui-popover>
		</template>
		<template slot="title">从浮层内关闭</template>
		<template slot="describe">
			<p>使用 <code>visible</code> 属性控制浮层显示，支持 <code>v-model</code> 双向绑定数据。</p>
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