<template>
	<Example vertical id="example-select-hide-selected-options">
		<template slot="source">
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
		<template slot="describe">
			<p>隐藏下拉列表中已选择的选项。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	const dataSource = [];

	export default {
		components: {
			Example
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