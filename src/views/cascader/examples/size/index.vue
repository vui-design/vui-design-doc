<template>
	<vui-doc-example v-bind:code="code" id="example-cascader-size">
		<template slot="demo">
			<div class="example-cascader-size">
				<vui-cascader v-bind:options="options" size="small" style="width: 200px;" />
				<vui-cascader v-bind:options="options" style="width: 200px;" />
				<vui-cascader v-bind:options="options" size="large" style="width: 200px;" />
			</div>
		</template>
		<template slot="title">尺寸</template>
		<template slot="description">
			<p>不同尺寸的级联选择器，默认为中等尺寸。</p>
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
				options: options
			};
		}
	};
</script>

<style>
	.example-cascader-size .vui-cascader { display:block; }
	.example-cascader-size .vui-cascader + .vui-cascader { margin-top:16px; }
</style>