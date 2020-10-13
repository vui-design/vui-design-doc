<template>
	<Example vertical id="example-drawer-placement">
		<template slot="source">
			<div class="example-drawer-placement">
				<vui-radio-group type="button" v-model="placement">
					<vui-radio value="top">Top</vui-radio>
					<vui-radio value="bottom">Bottom</vui-radio>
					<vui-radio value="left">Left</vui-radio>
					<vui-radio value="right">Right</vui-radio>
				</vui-radio-group>
				<vui-button type="primary" v-on:click="handleOpen">Open</vui-button>
				<vui-drawer v-model="visible" v-bind:placement="placement" title="Basic Usage">
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</vui-drawer>
			</div>
		</template>
		<template slot="title">自定义位置</template>
		<template slot="describe">
			<p>自定义位置，点击打开按钮抽屉从右滑出，点击遮罩区关闭。</p>
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
				visible: false,
				placement: "right"
			};
		},
		methods: {
			handleOpen() {
				this.visible = true;
			}
		}
	};
</script>

<style>
	.example-drawer-placement .vui-radio-group { margin-right:10px; }
</style>