<template>
	<vui-doc-example v-bind:code="code" id="example-message-type">
		<template slot="demo">
			<div class="example-message-type">
				<vui-button type="info" @click="showInfoMessage">Info</vui-button>
				<vui-button type="warning" @click="showWarningMessage">Warning</vui-button>
				<vui-button type="success" @click="showSuccessMessage">Success</vui-button>
				<vui-button type="error" @click="showErrorMessage">Error</vui-button>
			</div>
		</template>
		<template slot="title">提示类型</template>
		<template slot="description">
			<p>不同的提示类型：<code>info</code>、<code>warning</code>、<code>success</code>、<code>error</code>。</p>
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
				code
			};
		},
		methods: {
			showInfoMessage() {
				this.$message.info("This is a info message");
			},
			showWarningMessage() {
				this.$message.warning("This is a warning message");
			},
			showSuccessMessage() {
				this.$message.success("This is a success message");
			},
			showErrorMessage() {
				this.$message.error("This is a error message");
			}
		}
	};
</script>

<style>
	.example-message-type .vui-button + .vui-button { margin-left:10px; }
</style>