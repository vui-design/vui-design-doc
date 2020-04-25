<template>
	<Example vertical id="example-notice-placement">
		<template slot="source">
			<div class="example-notice-placement">
				<vui-button type="primary" @click="showTopLeftNotice">Top Left</vui-button>
				<vui-button type="primary" @click="showTopRightNotice">Top Right</vui-button>
				<vui-button type="primary" @click="showBottomLeftNotice">Bottom Left</vui-button>
				<vui-button type="primary" @click="showBottomRightNotice">Bottom Right</vui-button>
			</div>
		</template>
		<template slot="title">弹出位置</template>
		<template slot="describe">
			<p>可以设置通知提醒从左上角、右上角、左下角或右下角弹出，默认从右上角弹出。</p>
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
			showTopLeftNotice() {
				this.$notice.info({
					title: "This is the title",
					description: "This is the description of the notice. This is the description of the notice. This is the description of the notice.",
					placement: "top-left"
				});
			},
			showTopRightNotice() {
				this.$notice.info({
					title: "This is the title",
					description: "This is the description of the notice. This is the description of the notice. This is the description of the notice."
				});
			},
			showBottomLeftNotice() {
				this.$notice.info({
					title: "This is the title",
					description: "This is the description of the notice. This is the description of the notice. This is the description of the notice.",
					placement: "bottom-left"
				});
			},
			showBottomRightNotice() {
				this.$notice.info({
					title: "This is the title",
					description: "This is the description of the notice. This is the description of the notice. This is the description of the notice.",
					placement: "bottom-right"
				});
			}
		}
	};
</script>

<style>
	.example-notice-placement > .vui-button + .vui-button { margin-left:10px; }
</style>