<template>
	<Example id="example-descriptions-vertical">
		<template slot="source">
			<vui-descriptions layout="vertical" title="User Info">
				<vui-description label="UserName">Zhang San</vui-description>
				<vui-description label="Telephone">18066668888</vui-description>
				<vui-description label="Live">Hangzhou, Zhejiang</vui-description>
				<vui-description label="Address" v-bind:span="2">No. 1, Wenyi Road, Xihu District, Hangzhou, Zhejiang, China</vui-description>
				<vui-description label="Remark">Empty</vui-description>
			</vui-descriptions>
		</template>
		<template slot="title">垂直</template>
		<template slot="describe">
			<p>垂直的描述列表。</p>
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