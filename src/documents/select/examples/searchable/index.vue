<template>
	<Example vertical id="example-select-searchable">
		<template slot="source">
			<div class="example-select-searchable">
				<vui-select v-model="value1" searchable style="width: 200px;">
					<vui-option value="new york">New York</vui-option>
					<vui-option value="london">London</vui-option>
					<vui-option value="sydney">Sydney</vui-option>
					<vui-option value="ottawa">Ottawa</vui-option>
					<vui-option value="paris">Paris</vui-option>
					<vui-option value="canberra">Canberra</vui-option>
				</vui-select>
				<vui-select v-model="value2" searchable multiple>
					<vui-option value="new york">New York</vui-option>
					<vui-option value="london">London</vui-option>
					<vui-option value="sydney">Sydney</vui-option>
					<vui-option value="ottawa">Ottawa</vui-option>
					<vui-option value="paris">Paris</vui-option>
					<vui-option value="canberra">Canberra</vui-option>
				</vui-select>
			</div>
		</template>
		<template slot="title">带搜索框</template>
		<template slot="describe">
			<p>展开后可对选项进行搜索。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	export default {
		components: {
			Example
		},
		data() {
			return {
				code,
				value1: undefined,
				value2: []
			};
		},
		watch: {
			value1(value) {
				console.log(value);
			},
			value2(value) {
				console.log(value);
			}
		}
	};
</script>

<style>
	.example-select-searchable .vui-select + .vui-select { margin-top:15px; }
</style>