<template>
	<vui-doc-example v-bind:code="code" id="example-card-no-border">
		<template slot="demo">
			<div class="example-card-no-border">
				<vui-card v-bind:bordered="false" title="Card title">
					<p>Card content...</p>
					<p>Card content...</p>
					<p>Card content...</p>
				</vui-card>
			</div>
		</template>
		<template slot="title">无外边框</template>
		<template slot="description">
			<p>建议在灰色背景的容器中使用无外边框的卡片。</p>
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
		}
	};
</script>

<style>
	.example-card-no-border { background-color:#f6f6f6; padding:20px; }
</style>