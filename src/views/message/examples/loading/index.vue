<template>
	<vui-doc-example v-bind:code="code" id="example-message-loading">
		<template slot="demo">
			<vui-button type="primary" @click="showLoadingMessage">Loading</vui-button>
		</template>
		<template slot="title">加载中</template>
		<template slot="description">
			<p>进行全局 loading，异步自行移除。</p>
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
			showLoadingMessage() {
				const loading = this.$message.loading({
					content: "Action in progress..",
					duration: 0
				});

				setTimeout(() => {
					loading.close();
					this.$message.success("Action succeeded");
				}, 3000);
			}
		}
	};
</script>