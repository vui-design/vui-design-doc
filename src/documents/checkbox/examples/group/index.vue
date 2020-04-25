<template>
	<Example vertical id="example-checkbox-group">
		<template slot="source">
			<vui-checkbox-group v-model="value">
				<vui-checkbox :value="1">A</vui-checkbox>
				<vui-checkbox :value="2">B</vui-checkbox>
				<vui-checkbox :value="3">C</vui-checkbox>
				<vui-checkbox :value="4">D</vui-checkbox>
			</vui-checkbox-group>
		</template>
		<template slot="title">多选组合</template>
		<template slot="describe">
			<p>多选组合。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	export default {
		name: "ExampleCheckboxGroup",
		components: {
			Example
		},
		data() {
			return {
				code,
				value: [1]
			};
		},
		watch: {
			value(value) {
				console.log(value);
			}
		}
	};
</script>