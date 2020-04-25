<template>
	<Example vertical id="example-card-grid">
		<template slot="source">
			<vui-card title="Card title">
				<vui-card-grid style="width: 25%;">Content...</vui-card-grid>
				<vui-card-grid style="width: 25%;">Content...</vui-card-grid>
				<vui-card-grid style="width: 25%;">Content...</vui-card-grid>
				<vui-card-grid style="width: 25%;">Content...</vui-card-grid>
				<vui-card-grid style="width: 25%;">Content...</vui-card-grid>
				<vui-card-grid style="width: 25%;">Content...</vui-card-grid>
				<vui-card-grid style="width: 25%;">Content...</vui-card-grid>
				<vui-card-grid style="width: 25%;">Content...</vui-card-grid>
			</vui-card>
		</template>
		<template slot="title">内容区隔</template>
		<template slot="describe">
			<p>常见的卡片内容区隔模式。</p>
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