<template>
	<Example id="example-statistic-basic-usage">
		<template slot="source">
			<vui-row :gutter="16">
				<vui-col :span="12">
					<vui-statistic title="Active Users" :value="110888" />
				</vui-col>
				<vui-col :span="12">
					<vui-statistic title="Account Balance (CNY)" :value="110888" :precision="2" />
				</vui-col>
			</vui-row>
		</template>
		<template slot="title">基本用法</template>
		<template slot="describe">
			<p>简单展示。</p>
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
				code
			};
		}
	};
</script>