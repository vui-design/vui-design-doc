<template>
	<Example vertical id="example-progress-line-small">
		<template slot="source">
			<div class="example-progress-line-small">
				<vui-progress size="small" :percentage="30" />
				<vui-progress size="small" :percentage="50" status="active" />
				<vui-progress size="small" :percentage="70" status="exception" />
				<vui-progress size="small" :percentage="100" />
				<vui-progress size="small" :percentage="50" :showInfo="false" />
			</div>
		</template>
		<template slot="title">小型进度条</template>
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
	.example-progress-line-small { width:200px; }
	.example-progress-line-small > .vui-progress:not(:first-child) { margin-top:15px; }
</style>