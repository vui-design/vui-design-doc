<template>
	<Example vertical id="example-badge-basic-usage">
		<template slot="source">
			<div class="example-badge-basic-usage">
				<vui-badge :count="10">
					<img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
				</vui-badge>
				<vui-badge :count="0">
					<img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
				</vui-badge>
			</div>
		</template>
		<template slot="title">基本用法</template>
		<template slot="describe">
			<p>简单的徽标展示。当 <code>count</code> 为 <code>0</code> 时，不会显示。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	export default {
		name: "ExampleBadgeBasicUsage",
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
	.example-badge-basic-usage > .vui-badge { margin-right:20px; }
	.example-badge-basic-usage > .vui-badge > img { width:48px; height:48px; border-radius:5px; }
</style>