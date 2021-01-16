<template>
	<vui-doc-example v-bind:code="code" id="example-checkbox-button">
		<template slot="demo">
			<div class="example-checkbox-button">
				<div style="font-size: 0;">
					<vui-checkbox-group type="button" v-model="value1">
						<vui-checkbox :value="1">A</vui-checkbox>
						<vui-checkbox :value="2">B</vui-checkbox>
						<vui-checkbox :value="3">C</vui-checkbox>
						<vui-checkbox :value="4">D</vui-checkbox>
					</vui-checkbox-group>
				</div>
				<div style="margin-top: 15px; font-size: 0;">
					<vui-checkbox-group type="button" v-model="value2">
						<vui-checkbox :value="1">A</vui-checkbox>
						<vui-checkbox :value="2" disabled>B</vui-checkbox>
						<vui-checkbox :value="3">C</vui-checkbox>
						<vui-checkbox :value="4">D</vui-checkbox>
					</vui-checkbox-group>
				</div>
				<div style="margin-top: 15px; font-size: 0;">
					<vui-checkbox-group type="button" v-model="value3" disabled>
						<vui-checkbox :value="1">A</vui-checkbox>
						<vui-checkbox :value="2">B</vui-checkbox>
						<vui-checkbox :value="3">C</vui-checkbox>
						<vui-checkbox :value="4">D</vui-checkbox>
					</vui-checkbox-group>
				</div>
			</div>
		</template>
		<template slot="title">按钮样式</template>
		<template slot="description">
			<p>按钮样式的多选组合。</p>
		</template>
	</vui-doc-example>
</template>

<script>
	import VuiDocExample from "src/components/example";
	import code from "./code";

	export default {
		name: "ExampleCheckboxButton",
		components: {
			VuiDocExample
		},
		data() {
			return {
				code,
				value1: [1],
				value2: [1],
				value3: [1]
			};
		},
		watch: {
			value1(value) {
				console.log(value);
			},
			value2(value) {
				console.log(value);
			},
			value3(value) {
				console.log(value);
			}
		}
	};
</script>