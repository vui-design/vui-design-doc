<template>
	<example v-bind:code="code" id="example-rate-basic-usage">
		<template slot="demo">
			<vui-rate v-model="value" />
		</template>
		<template slot="title">基本用法</template>
		<template slot="description">
			<p>最简单的用法。</p>
		</template>
	</example>
</template>

<script>
	import Example from "src/components/example";
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