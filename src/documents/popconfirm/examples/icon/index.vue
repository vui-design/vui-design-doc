<template>
	<Example vertical id="example-popconfirm-icon">
		<template slot="source">
			<vui-popconfirm
				title="Are you sure delete this task?"
				cancelText="No"
				okText="Yes"
				v-on:cancel="handleCancel"
				v-on:ok="handleOk"
			>
				<a href="javascript:;">Delete</a>
				<vui-icon slot="icon" type="warning-filled" style="color: #f00;" />
			</vui-popconfirm>
		</template>
		<template slot="title">自定义图标</template>
		<template slot="describe">
			<p>使用 <code>icon</code> 插槽自定义图标。</p>
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