<template>
	<Example vertical id="example-tooltip-theme">
		<template slot="source">
			<div class="example-tooltip-theme">
				<vui-tooltip theme="light" content="This is a tooltip">
					<vui-button>Light</vui-button>
				</vui-tooltip>
				<vui-tooltip content="This is a tooltip">
					<vui-button type="primary">Dark</vui-button>
				</vui-tooltip>
			</div>
		</template>
		<template slot="title">主题</template>
		<template slot="describe">
			<p>提供了两个不同的主题：<code>light</code> 和 <code>dark</code>。</p>
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
	.example-tooltip-theme .vui-tooltip + .vui-tooltip { margin-left:10px; }
</style>