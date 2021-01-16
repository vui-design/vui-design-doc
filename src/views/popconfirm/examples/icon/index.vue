<template>
	<vui-doc-example v-bind:code="code" id="example-popconfirm-icon">
		<template slot="demo">
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
		<template slot="description">
			<p>使用 <code>icon</code> 插槽自定义图标。</p>
		</template>
	</vui-doc-example>
</template>

<script>
	import VuiDocExample from "src/components/example";
	import code from "./code";

	export default {
		components: {
			VuiDocExample
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