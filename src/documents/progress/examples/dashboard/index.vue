<template>
	<Example vertical id="example-progress-dashboard">
		<template slot="source">
			<div class="example-progress-dashboard">
				<vui-progress type="dashboard" :percentage="75" />
				<vui-progress type="dashboard" :percentage="75" status="exception" />
				<vui-progress type="dashboard" :percentage="100" />
			</div>
		</template>
		<template slot="title">仪表盘</template>
		<template slot="describe">
			<p>通过设置 <code>type</code> 为 <code>dashboard</code>，可以很方便地实现仪表盘样式的进度条。</p>
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
	.example-progress-dashboard > .vui-progress:not(:first-child) { margin-left:15px; }
</style>