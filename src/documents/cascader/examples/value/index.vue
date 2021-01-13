<template>
	<Example id="example-cascader-value">
		<template slot="source">
			<vui-cascader
				v-model="value"
				v-bind:options="options"
				style="width: 200px;"
			/>
		</template>
		<template slot="title">默认值</template>
		<template slot="describe">
			<p>默认值通过数组的方式指定。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
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
			Example
		},
		data() {
			return {
				code,
				value: ["zhejiang", "hangzhou", "xihu"],
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