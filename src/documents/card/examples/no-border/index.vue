<template>
	<Example vertical id="example-card-no-border">
		<template slot="source">
			<div class="example-card-no-border">
				<vui-card title="Card title" :bordered="false">
					<p>Card content...</p>
					<p>Card content...</p>
					<p>Card content...</p>
				</vui-card>
			</div>
		</template>
		<template slot="title">无外边框</template>
		<template slot="describe">
			<p>建议在灰色背景的容器中使用无外边框的卡片。</p>
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
	.example-card-no-border { background-color:#ececec; padding:20px; }
</style>