<template>
	<Example vertical id="example-select-basic-usage">
		<template slot="source">
			<vui-select v-model="value" style="width: 200px;">
				<vui-option value="new york">New York</vui-option>
				<vui-option value="london">London</vui-option>
				<vui-option value="sydney">Sydney</vui-option>
				<vui-option value="ottawa">Ottawa</vui-option>
				<vui-option value="paris">Paris</vui-option>
				<vui-option value="canberra">Canberra</vui-option>
			</vui-select>
		</template>
		<template slot="title">基本用法</template>
		<template slot="describe">
			<p>最简单的用法。</p>
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
				value: undefined
			};
		},
		watch: {
			value(value) {
				console.log(value);
			}
		}
	};
</script>