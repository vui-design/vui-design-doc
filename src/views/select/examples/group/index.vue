<template>
	<vui-doc-example v-bind:code="code" id="example-select-option-group">
		<template slot="demo">
			<vui-select v-model="value" style="width: 200px;">
				<vui-option-group label="Hot Cities">
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
		</template>
		<template slot="title">分组</template>
		<template slot="description">
			<p>使用 <code>OptionGroup</code> 进行选项分组。</p>
		</template>
	</vui-doc-example>
</template>

<script>
	import VuiDocExample from "src/components/example";
	import code from "./code";

	export default {
		components: {
			VuiDocExample
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