<template>
	<Example vertical id="example-progress-circle-small">
		<template slot="source">
			<div class="example-progress-circle-small">
				<vui-progress type="circle" size="small" :percentage="75" />
				<vui-progress type="circle" size="small" :percentage="75" status="exception" />
				<vui-progress type="circle" size="small" :percentage="100" />
			</div>
		</template>
		<template slot="title">小型进度环</template>
		<template slot="describe">
			<p>适合放在较狭窄的区域内。</p>
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
		}
	};
</script>

<style>
	.example-progress-circle-small > .vui-progress:not(:first-child) { margin-left:15px; }
</style>