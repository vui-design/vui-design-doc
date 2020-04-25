<template>
	<Example vertical id="example-message-loading">
		<template slot="source">
			<vui-button type="primary" @click="showLoadingMessage">Loading</vui-button>
		</template>
		<template slot="title">加载中</template>
		<template slot="describe">
			<p>进行全局 loading，异步自行移除。</p>
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