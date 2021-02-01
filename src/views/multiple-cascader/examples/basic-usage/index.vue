<template>
	<vui-doc-example v-bind:code="code" id="example-multiple-cascader-basic-usage">
		<template slot="demo">
			<vui-multiple-cascader
				v-model="value"
				v-bind:title="getPanelTitle"
				v-bind:options="options"
				v-bind:formatter="formatter"
			/>
		</template>
		<template slot="title">基本用法</template>
		<template slot="description">
			<p>最基本的用法</p>
		</template>
	</vui-doc-example>
</template>

<script>
	import VuiDocExample from "src/components/example";
	import code from "./code";
	import options from "./options";

	export default {
		components: {
			VuiDocExample
		},
		data() {
			return {
				code,
				value: [],
				options: options,
				formatter: props => props.data.text
			};
		},
		methods: {
			getPanelTitle(props) {
				if (props.direction === "source") {
					return props.level > 1 ? props.parent.text : "省份";
				}
				else if (props.direction === "target") {
					return "已选";
				}
			}
		}
	};
</script>