<template>
	<Example vertical id="example-avatar-type">
		<template slot="source">
			<div class="example-avatar-type">
				<vui-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
				<vui-avatar icon="user" />
				<vui-avatar>U</vui-avatar>
				<vui-avatar>USER</vui-avatar>
				<vui-avatar icon="user" style="background-color: #5cb85c;" />
				<vui-avatar style="background-color: #fef7ed; color: #f0ad4e;">U</vui-avatar>
			</div>
		</template>
		<template slot="title">类型</template>
		<template slot="describe">
			<p>支持三种类型：图片、图标以及字符，其中图标和字符可以自定义颜色及背景色。</p>
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
	.example-avatar-type .vui-avatar + .vui-avatar { margin-left:20px; }
</style>