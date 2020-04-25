<template>
	<Example vertical id="example-select-disabled">
		<template slot="source">
			<div class="example-select-disabled">
				<vui-select v-model="value1" style="width: 200px;">
					<vui-option value="new york">New York</vui-option>
					<vui-option value="london">London</vui-option>
					<vui-option value="sydney">Sydney</vui-option>
					<vui-option value="ottawa">Ottawa</vui-option>
					<vui-option value="paris" disabled>Paris</vui-option>
					<vui-option value="canberra">Canberra</vui-option>
				</vui-select>
				<vui-select v-model="value2" style="width: 200px;">
					<vui-option-group label="Hot Cities" disabled>
						<vui-option value="new york">New York</vui-option>
						<vui-option value="london">London</vui-option>
						<vui-option value="sydney">Sydney</vui-option>
					</vui-option-group>
					<vui-option-group label="Other Cities">
						<vui-option value="ottawa">Ottawa</vui-option>
						<vui-option value="paris">Paris</vui-option>
						<vui-option value="canberra">Canberra</vui-option>
					</vui-option-group>
				</vui-select>
				<vui-select v-model="value3" multiple searchable>
					<vui-option value="new york">New York</vui-option>
					<vui-option value="london">London</vui-option>
					<vui-option value="sydney" disabled>Sydney</vui-option>
					<vui-option value="ottawa">Ottawa</vui-option>
					<vui-option value="paris">Paris</vui-option>
					<vui-option value="canberra">Canberra</vui-option>
				</vui-select>
				<vui-select v-model="value4" disabled style="width: 200px;">
					<vui-option value="new york">New York</vui-option>
					<vui-option value="london">London</vui-option>
					<vui-option value="sydney">Sydney</vui-option>
					<vui-option value="ottawa">Ottawa</vui-option>
					<vui-option value="paris">Paris</vui-option>
					<vui-option value="canberra">Canberra</vui-option>
				</vui-select>
				<vui-select v-model="value5" multiple disabled>
					<vui-option value="new york">New York</vui-option>
					<vui-option value="london">London</vui-option>
					<vui-option value="sydney">Sydney</vui-option>
					<vui-option value="ottawa">Ottawa</vui-option>
					<vui-option value="paris">Paris</vui-option>
					<vui-option value="canberra">Canberra</vui-option>
				</vui-select>
			</div>
		</template>
		<template slot="title">禁用</template>
		<template slot="describe">
			<p>选项禁用、选项组禁用以及选择器禁用的综合示例。</p>
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
				value1: "",
				value2: "",
				value3: ["new york", "sydney"],
				value4: "new york",
				value5: ["new york", "sydney"]
			};
		}
	};
</script>

<style>
	.example-select-disabled .vui-select + .vui-select { display:block; margin-top:15px; }
</style>