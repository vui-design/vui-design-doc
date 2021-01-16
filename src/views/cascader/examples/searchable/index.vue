<template>
	<vui-doc-example v-bind:code="code" id="example-cascader-searchable">
		<template slot="demo">
			<vui-cascader
				v-model="value"
				v-bind:options="options"
				changeOnSelect
				searchable
				style="width: 200px;"
			/>
		</template>
		<template slot="title">搜索</template>
		<template slot="description">
			<p>可以直接搜索选项并选择（暂不支持服务端搜索）。</p>
		</template>
	</vui-doc-example>
</template>

<script>
	import VuiDocExample from "src/components/example";
	import code from "./code";

	const options = [
		{
			value: "zhejiang",
			label: "Zhejiang",
			children: [
				{
					value: "hangzhou",
					label: "Hangzhou",
					children: [
						{
							value: "xihu",
							label: "West Lake"
						},
						{
							value: "xiasha",
							label: "Xia Sha",
							disabled: true
						}
					]
				}
			]
		},
		{
			value: "jiangsu",
			label: "Jiangsu",
			children: [
				{
					value: "nanjing",
					label: "Nanjing",
					children: [
						{
							value: "zhonghuamen",
							label: "Zhong Hua Men"
						}
					]
				}
			]
		}
	];

	export default {
		components: {
			VuiDocExample
		},
		data() {
			return {
				code,
				value: [],
				options: options
			};
		},
		watch: {
			value(value) {
				console.log(value);
			}
		}
	};
</script>