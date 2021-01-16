<template>
	<vui-doc-example v-bind:code="code" id="example-avatar-badge">
		<template slot="demo">
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
		<template slot="description">
			<p>通常用于消息提示。</p>
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
	.example-avatar-badge .vui-badge + .vui-badge { margin-left:20px; }
</style>