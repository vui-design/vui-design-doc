<template>
	<Example vertical id="example-progress-circle">
		<template slot="source">
			<div class="example-progress-circle">
				<vui-progress type="circle" :percentage="75" />
				<vui-progress type="circle" :percentage="75" status="exception" />
				<vui-progress type="circle" :percentage="100" />
			</div>
		</template>
		<template slot="title">进度环</template>
		<template slot="describe">
			<p>环形的进度。</p>
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
	.example-progress-circle > .vui-progress:not(:first-child) { margin-left:15px; }
</style>