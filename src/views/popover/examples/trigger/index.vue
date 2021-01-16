<template>
	<vui-doc-example v-bind:code="code" id="example-popover-trigger">
		<template slot="demo">
			<div class="example-popover-trigger">
				<vui-popover title="Title" content="This is a popover.">
					<vui-button>Hover me</vui-button>
				</vui-popover>
				<vui-popover trigger="focus" title="Title" content="This is a popover.">
					<vui-button>Focus me</vui-button>
				</vui-popover>
				<vui-popover trigger="click" title="Title" content="This is a popover.">
					<vui-button>Click me</vui-button>
				</vui-popover>
			</div>
		</template>
		<template slot="title">触发方式</template>
		<template slot="description">
			<p>鼠标移入、聚集、点击。</p>
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
	.example-popover-trigger .vui-popover + .vui-popover { margin-left:10px; }
</style>