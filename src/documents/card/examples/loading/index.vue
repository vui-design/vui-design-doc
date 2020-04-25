<template>
	<Example vertical id="example-card-loading">
		<template slot="source">
			<div class="example-card-loading">
				<vui-button @click="handleClick">Toggle loading</vui-button>
				<vui-card title="Card title" :loading="loading">
					<p>Card content...</p>
					<p>Card content...</p>
					<p>Card content...</p>
				</vui-card>
			</div>
		</template>
		<template slot="title">加载状态</template>
		<template slot="describe">
			<p>数据读入前会有文本块样式。</p>
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
				code,
				loading: true
			};
		},
		methods: {
			handleClick() {
				this.loading = !this.loading;
			}
		}
	};
</script>

<style>
	.example-card-loading .vui-card { margin-top:20px; }
</style>