<template>
	<Example vertical id="example-tooltip-basic-usage">
		<template slot="source">
			<vui-tooltip content="This is a tooltip">
				<span>Tooltip will show on mouse enter.</span>
			</vui-tooltip>
		</template>
		<template slot="title">基本用法</template>
		<template slot="describe">
			<p>最简单的用法。</p>
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