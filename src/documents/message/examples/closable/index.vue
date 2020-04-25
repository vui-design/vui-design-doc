<template>
	<Example vertical id="example-message-closable">
		<template slot="source">
			<vui-button type="primary" @click="showClosableMessage">Closable</vui-button>
		</template>
		<template slot="title">可关闭</template>
		<template slot="describe">
			<p>将参数设置为一个对象，并指定 <code>closable</code> 为 <code>true</code> 后可以手动关闭提示，完整参数详见下述 API 文档。</p>
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
			showClosableMessage() {
				this.$message.info({
					content: "This is a message that can be closed manually",
					duration: 10,
					closable: true
				});
			}
		}
	};
</script>