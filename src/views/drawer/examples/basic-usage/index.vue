<template>
	<vui-doc-example v-bind:code="code" id="example-drawer-basic-usage">
		<template slot="demo">
			<div class="example-drawer-basic-usage">
				<vui-button type="primary" v-on:click="handleOpen">Open basic drawer</vui-button>
				<vui-drawer v-model="visible" title="Drawer Title">
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</vui-drawer>
			</div>
		</template>
		<template slot="title">基本用法</template>
		<template slot="description">
			<p>点击打开按钮抽屉从右滑出，点击遮罩区关闭。</p>
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
				visible: false
			};
		},
		methods: {
			handleOpen() {
				this.visible = true;
			}
		}
	};
</script>