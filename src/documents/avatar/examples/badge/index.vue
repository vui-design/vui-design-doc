<template>
	<Example id="example-avatar-badge">
		<template slot="source">
			<div class="example-avatar-badge">
				<vui-badge v-bind:count="10">
					<vui-avatar shape="square" icon="user" />
				</vui-badge>
				<vui-badge v-bind:count="10" dot>
					<vui-avatar shape="square" icon="user" />
				</vui-badge>
			</div>
		</template>
		<template slot="title">带徽标的头像</template>
		<template slot="describe">
			<p>通常用于消息提示。</p>
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
	.example-avatar-badge .vui-badge + .vui-badge { margin-left:20px; }
</style>