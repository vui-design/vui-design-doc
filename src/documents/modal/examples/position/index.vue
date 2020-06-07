<template>
	<Example vertical id="example-modal-position">
		<template slot="source">
			<div class="example-modal-position">
				<vui-button type="primary" @click="showModal1">Open modal at 50px to top</vui-button>
				<vui-modal v-model="visible1" title="Modal Title" :top="50">
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</vui-modal>
				<vui-button type="primary" @click="showModal2">Vertically centered modal</vui-button>
				<vui-modal v-model="visible2" title="Modal Title" centered>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</vui-modal>
			</div>
		</template>
		<template slot="title">位置</template>
		<template slot="describe">
			<p>使用 <code>top</code> 或 <code>centered</code> 属性来设置对话框的打开位置。</p>
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
				visible1: false,
				visible2: false
			};
		},
		methods: {
			showModal1() {
				this.visible1 = true;
			},
			showModal2() {
				this.visible2 = true;
			}
		}
	};
</script>

<style>
	.example-modal-position > .vui-button { margin-right:10px; }
</style>