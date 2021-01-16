<template>
	<vui-doc-example v-bind:code="code" id="example-select-hide-selected-options">
		<template slot="demo">
			<vui-select multiple v-model="value" @change="handleChange">
				<vui-option
					v-for="option in options"
					v-if="value.indexOf(option) === -1"
					v-bind:key="option"
					v-bind:value="option"
				>
					{{option}}
				</vui-option>
			</vui-select>
		</template>
		<template slot="title">隐藏已选选项</template>
		<template slot="description">
			<p>隐藏下拉列表中已选择的选项。</p>
		</template>
	</vui-doc-example>
</template>

<script>
	import VuiDocExample from "src/components/example";
	import code from "./code";

	const dataSource = [];

	export default {
		components: {
			VuiDocExample
		},
		data() {
			return {
				code,
				value: [],
				options: [
					"New York", "London", "Sydney",
					"Ottawa", "Paris", "Canberra"
				]
			};
		},
		methods: {
			handleChange(value) {
				console.log(value);
			}
		}
	};
</script>