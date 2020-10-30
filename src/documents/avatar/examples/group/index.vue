<template>
	<Example id="example-avatar-group">
		<template slot="source">
			<div class="example-avatar-group">
				<vui-avatar-group>
					<vui-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
					<vui-avatar style="background-color: #f56a00">U</vui-avatar>
					<vui-tooltip content="User Name">
						<vui-avatar icon="user" style="background-color: #52c41a" />
					</vui-tooltip>
					<vui-avatar icon="group" style="background-color: #2d8cf0" />
				</vui-avatar-group>
				<vui-avatar-group v-bind:maxCount="2">
					<vui-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
					<vui-avatar style="background-color: #f56a00">U</vui-avatar>
					<vui-tooltip content="User Name">
						<vui-avatar icon="user" style="background-color: #52c41a" />
					</vui-tooltip>
					<vui-avatar icon="group" style="background-color: #2d8cf0" />
				</vui-avatar-group>
			</div>
		</template>
		<template slot="title">头像组合</template>
		<template slot="describe">
			<p>头像组合展现。</p>
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
	.example-avatar-group .vui-avatar-group + .vui-avatar-group { margin-left:20px; }
</style>