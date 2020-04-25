<template>
	<Example vertical id="example-checkbox-basic-usage">
		<template slot="source">
			<vui-checkbox v-model="value">Checkbox</vui-checkbox>
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
		name: "ExampleCheckboxBasicUsage",
		components: {
			Example
		},
		data() {
			return {
				code,
				value: false
			};
		},
		watch: {
			value(value) {
				console.log(value);
			}
		}
	};
</script>