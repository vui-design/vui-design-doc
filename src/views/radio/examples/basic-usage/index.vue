<template>
	<vui-doc-example v-bind:code="code" id="example-radio-basic-usage">
		<template slot="demo">
			<vui-radio v-model="value">Radio</vui-radio>
		</template>
		<template slot="title">基本用法</template>
		<template slot="description">
			<p>最简单的用法。</p>
		</template>
	</vui-doc-example>
</template>

<script>
	import VuiDocExample from "src/components/example";
	import code from "./code";

	export default {
		name: "ExampleRadioBasicUsage",
		components: {
			VuiDocExample
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