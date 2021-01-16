<template>
	<vui-doc-example v-bind:code="code" id="example-notice-duration">
		<template slot="demo">
			<vui-button type="primary" @click="showDurationNotice">Customized duration</vui-button>
		</template>
		<template slot="title">修改延时</template>
		<template slot="description">
			<p>自定义停留时长为 <code>10s</code>，默认为 <code>5s</code>。取消自动关闭只需将 <code>duration</code> 设为 <code>0</code> 即可。</p>
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
			showDurationNotice() {
				this.$notice.info({
					title: "I'll be gone in 10 seconds..",
					description: "This is the description of the notice. This is the description of the notice. This is the description of the notice.",
					duration: 10
				});
			}
		}
	};
</script>