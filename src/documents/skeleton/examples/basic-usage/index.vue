<template>
	<Example id="example-skeleton-basic-usage">
		<template slot="source">
			<vui-skeleton />
		</template>
		<template slot="title">基本用法</template>
		<template slot="describe">
			<p>最简单的占位效果。</p>
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