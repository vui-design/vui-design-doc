<template>
	<Example vertical id="example-radio-group">
		<template slot="source">
			<vui-radio-group v-model="value">
				<vui-radio v-bind:value="1">A</vui-radio>
				<vui-radio v-bind:value="2">B</vui-radio>
				<vui-radio v-bind:value="3">C</vui-radio>
				<vui-radio v-bind:value="4">D</vui-radio>
			</vui-radio-group>
		</template>
		<template slot="title">单选组合</template>
		<template slot="describe">
			<p>一组互斥的单选框。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	export default {
		name: "ExampleRadioGroup",
		components: {
			Example
		},
		data() {
			return {
				code,
				value: 1
			};
		},
		watch: {
			value(value) {
				console.log(value);
			}
		}
	};
</script>