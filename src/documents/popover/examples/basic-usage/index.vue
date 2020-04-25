<template>
	<Example vertical id="example-popover-basic-usage">
		<template slot="source">
			<vui-popover title="Title" content="This is a popover.">
				<vui-button>Hover me</vui-button>
			</vui-popover>
		</template>
		<template slot="title">基本用法</template>
		<template slot="describe">
			<p>最简单的用法，浮层的大小由内容区域决定。</p>
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