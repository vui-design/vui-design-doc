<template>
	<vui-doc-example v-bind:code="code" id="example-avatar-type">
		<template slot="demo">
			<div class="example-avatar-type">
				<vui-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
				<vui-avatar icon="user" />
				<vui-avatar>U</vui-avatar>
				<vui-avatar>USER</vui-avatar>
				<vui-avatar icon="user" style="background-color: #52c41a;" />
				<vui-avatar style="background-color: #fde3cf; color: #f56a00;">U</vui-avatar>
			</div>
		</template>
		<template slot="title">类型</template>
		<template slot="description">
			<p>支持三种类型：图片、图标以及字符，其中图标和字符可以自定义颜色及背景色。</p>
		</template>
	</vui-doc-example>
</template>

<script>
	import VuiDocExample from "src/components/example";
	import code from "./code";

	export default {
		components: {
			VuiDocExample
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