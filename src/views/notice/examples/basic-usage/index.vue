<template>
	<vui-doc-example v-bind:code="code" id="example-notice-basic-usage">
		<template slot="demo">
			<div class="example-notice-basic-usage">
				<vui-button type="primary" @click="showNormalNotice(true)">With description</vui-button>
				<vui-button @click="showNormalNotice(false)">No description</vui-button>
			</div>
		</template>
		<template slot="title">基本用法</template>
		<template slot="description">
			<p>最简单的用法，<code>5</code> 秒后自动关闭。</p>
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
			showNormalNotice(flag) {
				this.$notice.open({
					title: "This is the title",
					description: flag ? "This is the description of the notice. This is the description of the notice. This is the description of the notice." : ""
				});
			}
		}
	};
</script>

<style>
	.example-notice-basic-usage > .vui-button + .vui-button { margin-left:10px; }
</style>