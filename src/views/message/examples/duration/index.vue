<template>
	<example v-bind:code="code" id="example-message-duration">
		<template slot="demo">
			<vui-button type="primary" v-on:click="showDurationMessage">Customized duration</vui-button>
		</template>
		<template slot="title">修改延时</template>
		<template slot="description">
			<p>自定义停留时长为 <code>10s</code>，默认为 <code>3s</code>。取消自动关闭只需将 <code>duration</code> 设为 <code>0</code> 即可。</p>
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
			showDurationMessage() {
				this.$message.info({
					content: "I'll be gone in 10 seconds..",
					duration: 10
				});
			}
		}
	};
</script>