<template>
	<Example vertical id="example-switch-loading">
		<template slot="source">
			<div class="example-switch-loading">
				<vui-switch loading />
				<vui-switch checked loading />
			</div>
		</template>
		<template slot="title">加载状态</template>
		<template slot="describe">
			<p>标识开关操作仍在执行当中。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	export default {
		name: "ExampleSwitchLoading",
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
	.example-switch-loading .vui-switch { margin-right:10px; }
</style>