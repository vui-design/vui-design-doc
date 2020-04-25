<template>
	<Example vertical id="example-card-basic-usage">
		<template slot="source">
			<vui-cascader v-model="value" :options="options" style="width: 200px;" />
		</template>
		<template slot="title">基本用法</template>
		<template slot="describe">
			<p>省市区级联。</p>
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
		watch: {
			value(value) {
				console.log(value)
			}
		},
		data() {
			return {
				code,
				value: ["zhejiang", "hangzhou1", "xihu"],
				options: [
					{
						label: "Zhejiang",
						value: "zhejiang",
						children: [
							{
								label: "Hangzhou1",
								value: "hangzhou1",
								children: [
									{
										label: "West Lake",
										value: "xihu"
									}
								]
							},
							{
								label: "Hangzhou2",
								value: "hangzhou2",
								children: [
									{
										label: "West Lake",
										value: "xihu"
									}
								]
							},
							{
								label: "Hangzhou3",
								value: "hangzhou3",
								children: [
									{
										label: "West Lake",
										value: "xihu"
									}
								]
							},
							{
								label: "Hangzhou4",
								value: "hangzhou4",
								children: [
									{
										label: "West Lake",
										value: "xihu"
									}
								]
							},
							{
								label: "Hangzhou5",
								value: "hangzhou5",
								children: [
									{
										label: "West Lake",
										value: "xihu"
									}
								]
							},
							{
								label: "Hangzhou6",
								value: "hangzhou6",
								children: [
									{
										label: "West Lake",
										value: "xihu"
									}
								]
							},
							{
								label: "Hangzhou7",
								value: "hangzhou7",
								children: [
									{
										label: "West Lake",
										value: "xihu"
									}
								]
							},
							{
								label: "Hangzhou8",
								value: "hangzhou8",
								children: [
									{
										label: "West Lake",
										value: "xihu"
									}
								]
							},
							{
								label: "Hangzhou9",
								value: "hangzhou9",
								children: [
									{
										label: "West Lake",
										value: "xihu"
									}
								]
							},
							{
								label: "Hangzhou10",
								value: "hangzhou10",
								children: [
									{
										label: "West Lake",
										value: "xihu"
									}
								]
							}
						]
					},
					{
						label: "Jiangsu",
						value: "jiangsu",
						children: [
							{
								label: "Nanjing",
								value: "nanjing",
								children: [
									{
										label: "Zhong Hua Men",
										value: "zhonghuamen"
									}
								]
							}
						]
					}
				]
			};
		}
	};
</script>