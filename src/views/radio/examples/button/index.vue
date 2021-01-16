<template>
	<vui-doc-example v-bind:code="code" id="example-radio-button">
		<template slot="demo">
			<div class="example-radio-button">
				<div>
					<vui-radio-group type="button" v-model="value1">
						<vui-radio :value="1">A</vui-radio>
						<vui-radio :value="2">B</vui-radio>
						<vui-radio :value="3">C</vui-radio>
						<vui-radio :value="4">D</vui-radio>
					</vui-radio-group>
				</div>
				<div style="margin-top: 15px;">
					<vui-radio-group type="button" v-model="value2">
						<vui-radio :value="1">A</vui-radio>
						<vui-radio :value="2" disabled>B</vui-radio>
						<vui-radio :value="3">C</vui-radio>
						<vui-radio :value="4">D</vui-radio>
					</vui-radio-group>
				</div>
				<div style="margin-top: 15px;">
					<vui-radio-group type="button" v-model="value3" disabled>
						<vui-radio :value="1">A</vui-radio>
						<vui-radio :value="2">B</vui-radio>
						<vui-radio :value="3">C</vui-radio>
						<vui-radio :value="4">D</vui-radio>
					</vui-radio-group>
				</div>
			</div>
		</template>
		<template slot="title">按钮样式</template>
		<template slot="description">
			<p>按钮样式的单选组合。</p>
		</template>
	</vui-doc-example>
</template>

<script>
	import VuiDocExample from "src/components/example";
	import code from "./code";

	export default {
		name: "ExampleRadioButton",
		components: {
			VuiDocExample
		},
		data() {
			return {
				code,
				value1: 1,
				value2: 1,
				value3: 1
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