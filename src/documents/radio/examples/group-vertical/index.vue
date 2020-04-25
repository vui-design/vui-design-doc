<template>
	<Example vertical id="example-radio-group-vertical">
		<template slot="source">
			<vui-radio-group vertical v-model="value">
				<vui-radio :value="1">A</vui-radio>
				<vui-radio :value="2">B</vui-radio>
				<vui-radio :value="3">C</vui-radio>
				<vui-radio :value="4">D</vui-radio>
			</vui-radio-group>
		</template>
		<template slot="title">垂直排列</template>
		<template slot="describe">
			<p>设置 <code>vertical</code> 属性可以垂直排列单选组合。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	export default {
		name: "ExampleRadioGroupVertical",
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