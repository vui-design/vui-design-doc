<template>
	<example v-bind:code="code" id="example-message-background">
		<template slot="demo">
			<div class="example-message-background">
				<vui-button type="info" v-on:click="showInfoMessage">Info</vui-button>
				<vui-button type="warning" v-on:click="showWarningMessage">Warning</vui-button>
				<vui-button type="success" v-on:click="showSuccessMessage">Success</vui-button>
				<vui-button type="danger" v-on:click="showErrorMessage">Error</vui-button>
			</div>
		</template>
		<template slot="title">带背景色</template>
		<template slot="description">
			<p>带背景色的消息提示。</p>
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
			showInfoMessage() {
				this.$message.info({
					background: true,
					content: "This is a info message"
				});
			},
			showWarningMessage() {
				this.$message.warning({
					background: true,
					content: "This is a warning message"
				});
			},
			showSuccessMessage() {
				this.$message.success({
					background: true,
					content: "This is a success message"
				});
			},
			showErrorMessage() {
				this.$message.error({
					background: true,
					content: "This is a error message"
				});
			}
		}
	};
</script>

<style>
	.example-message-background .vui-button + .vui-button { margin-left:10px; }
</style>