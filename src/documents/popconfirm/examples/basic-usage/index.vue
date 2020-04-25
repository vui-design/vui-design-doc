<template>
	<Example vertical id="example-popconfirm-basic-usage">
		<template slot="source">
			<vui-popconfirm
				title="Are you sure delete this task?"
				cancelText="No"
				okText="Yes"
				@cancel="handleCancel"
				@ok="handleOk"
			>
				<a href="javascript:;">Delete</a>
			</vui-popconfirm>
		</template>
		<template slot="title">基本用法</template>
		<template slot="describe">
			<p>最简单的用法。</p>
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
		},
		methods: {
			handleCancel() {
				this.$message.error("Clicked on No");
			},
			handleOk() {
				this.$message.success("Clicked on Yes");
			}
		}
	};
</script>