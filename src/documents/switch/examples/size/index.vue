<template>
	<Example vertical id="example-switch-size">
		<template slot="source">
			<div class="example-switch-size">
				<vui-switch size="small" />
				<vui-switch />
				<vui-switch size="large" />
			</div>
		</template>
		<template slot="title">尺寸</template>
		<template slot="describe">
			<p>设置 <code>size</code> 为 <code>small</code> 或 <code>large</code> 使用小号或大号开关。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	export default {
		name: "ExampleSwitchSize",
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
	.example-switch-size .vui-switch { margin-right:10px; }
</style>