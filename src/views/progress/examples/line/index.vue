<template>
	<vui-doc-example v-bind:code="code" id="example-progress-line">
		<template slot="demo">
			<div class="example-progress-line">
				<vui-progress :percentage="30" />
				<vui-progress :percentage="50" status="active" />
				<vui-progress :percentage="70" status="exception" />
				<vui-progress :percentage="100" />
				<vui-progress :percentage="50" :showInfo="false" />
			</div>
		</template>
		<template slot="title">进度条</template>
		<template slot="description">
			<p>处在不同状态下的进度条，当 <code>percentage</code> 为 <code>100</code> 时，自动将状态置为 <code>success</code>。</p>
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
	.example-progress-line > .vui-progress:not(:first-child) { margin-top:15px; }
</style>