<template>
	<Example id="example-space-vertical">
		<template slot="source">
			<vui-space direction="vertical" style="width: 100%;">
				<vui-card style="width: 300px;" title="Card title">
					<p>Card content...</p>
					<p>Card content...</p>
				</vui-card>
				<vui-card title="Card title">
					<p>Card content...</p>
					<p>Card content...</p>
				</vui-card>
			</vui-space>
		</template>
		<template slot="title">垂直排列</template>
		<template slot="describe">
			<p>相邻组件垂直排列。可以设置 <code>width: 100%</code> 独占一行。</p>
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