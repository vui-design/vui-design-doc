<template>
	<Example id="example-cascader-option-keys">
		<template slot="source">
			<vui-cascader
				v-model="value"
				v-bind:options="options"
				v-bind:optionKeys="optionKeys"
				style="width: 200px;"
			/>
		</template>
		<template slot="title">自定义字段名</template>
		<template slot="describe">
			<p>自定义选项字段名。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	const options = [
		{
			code: "zhejiang",
			name: "Zhejiang",
			items: [
				{
					code: "hangzhou",
					name: "Hangzhou",
					items: [
						{
							code: "xihu",
							name: "West Lake"
						},
						{
							code: "xiasha",
							name: "Xia Sha",
							invalid: true
						}
					]
				}
			]
		},
		{
			code: "jiangsu",
			name: "Jiangsu",
			items: [
				{
					code: "nanjing",
					name: "Nanjing",
					items: [
						{
							code: "zhonghuamen",
							name: "Zhong Hua Men"
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
				value: [],
				options: options,
				optionKeys: {
					label: "name",
					value: "code",
					children: "items",
					disabled: "invalid"
				}
			};
		},
		watch: {
			value(value) {
				console.log(value);
			}
		}
	};
</script>