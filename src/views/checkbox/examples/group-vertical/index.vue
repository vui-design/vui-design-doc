<template>
	<vui-doc-example v-bind:code="code" id="example-checkbox-group-vertical">
		<template slot="demo">
			<vui-checkbox-group vertical v-model="value">
				<vui-checkbox :value="1">A</vui-checkbox>
				<vui-checkbox :value="2">B</vui-checkbox>
				<vui-checkbox :value="3">C</vui-checkbox>
				<vui-checkbox :value="4">D</vui-checkbox>
			</vui-checkbox-group>
		</template>
		<template slot="title">垂直排列</template>
		<template slot="description">
			<p>设置 <code>vertical</code> 属性可以垂直排列多选组合。</p>
		</template>
	</vui-doc-example>
</template>

<script>
	import VuiDocExample from "src/components/example";
	import code from "./code";

	export default {
		name: "ExampleCheckboxGroupVertical",
		components: {
			VuiDocExample
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