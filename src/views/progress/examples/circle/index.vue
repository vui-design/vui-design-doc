
<template>
	<vui-doc-example v-bind:code="code" id="example-progress-circle">
		<template slot="demo">
			<div class="example-progress-circle">
				<vui-progress type="circle" :percentage="75" />
				<vui-progress type="circle" :percentage="75" status="exception" />
				<vui-progress type="circle" :percentage="100" />
			</div>
		</template>
		<template slot="title">进度环</template>
		<template slot="description">
			<p>环形的进度。</p>
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
	.example-progress-circle > .vui-progress:not(:first-child) { margin-left:15px; }
</style>