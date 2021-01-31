<template>
	<vui-doc-example v-bind:code="code" id="example-multiple-cascader">
		<template slot="demo">
			<vui-multiple-cascader
				v-model="value"
				v-bind:title="getPanelTitle"
				v-bind:options="options"
				v-bind:formatter="formatter"
				v-bind:showTargetPanel="true"
			/>
		</template>
		<template slot="title">基本用法</template>
		<template slot="description">
			<p>最基本的用法，展示了 <code>titles</code>、<code>options</code>、<code>selectedKeys</code>、<code>targetKeys</code>、选项的渲染函数 <code>formatter</code> 以及回调函数 <code>onScroll</code>、<code>onSelect</code>、<code>onChange</code> 的用法。</p>
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
				// value: ["110000", "130000", "210100", "310000", "330100", "330200", "330400"],
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