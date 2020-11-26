<template>
	<Example id="example-statistic-basic-usage">
		<template slot="source">
			<vui-row v-bind:gutter="16">
				<vui-col v-bind:span="12">
					<vui-statistic v-bind:value="110888" title="Active Users" />
				</vui-col>
				<vui-col v-bind:span="12">
					<vui-statistic v-bind:value="110888" v-bind:precision="2" title="Account Balance (CNY)" />
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