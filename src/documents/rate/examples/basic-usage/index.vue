<template>
	<Example id="example-rate-basic-usage">
		<template slot="source">
			<vui-rate v-model="value" />
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
				code,
				value: 2
			};
		}
	};
</script>