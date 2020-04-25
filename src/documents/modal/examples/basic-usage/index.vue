<template>
	<Example vertical id="example-modal-basic-usage">
		<template slot="source">
			<div class="example-modal-basic-usage">
				<vui-button type="primary" @click="showModal">Open basic modal</vui-button>
				<vui-modal
					v-model="visible"
					title="Modal Title"
					@ok="handleOk"
					@cancel="handleCancel"
				>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</vui-modal>
			</div>
		</template>
		<template slot="title">基本用法</template>
		<template slot="describe">
		<p>最简单的使用方法，通过控制 <code>visible</code> 属性来显示或隐藏对话框。可以使用 <code>v-model</code> 双向绑定。</p>
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
			showModal() {
				this.visible = true;
			},
			handleOk() {
				this.$message.info("Clicked ok");
			},
			handleCancel() {
				this.$message.info("Clicked cancel");
			}
		}
	};
</script>