<template>
	<example v-bind:code="code" id="example-upload-basic-usage">
		<template slot="demo">
			<vui-upload
				v-bind:action="action"
				v-on:ready="handleReady"
				v-on:progress="handleProgress"
				v-on:success="handleSuccess"
				v-on:error="handleError"
				v-on:change="handleChange"
			>
				<vui-button icon="upload">Click To Upload</vui-button>
			</vui-upload>
		</template>
		<template slot="title">点击上传</template>
		<template slot="description">
			<p>经典款式，用户点击按钮弹出文件选择框。</p>
		</template>
	</example>
</template>

<script>
	import Example from "src/components/example";
	import code from "./code";

	export default {
		components: {
			Example
		},
		data() {
			return {
				code,
				action: "//jsonplaceholder.typicode.com/posts/"
			};
		},
		methods: {
			handleReady(file, fileList) {
				console.log(`${file.name} ready!`);
			},
			handleProgress(progress, file, fileList) {
				console.log(`${file.name} uploaded ${file.percentage}%!`);
			},
			handleSuccess(response, file, fileList) {
				this.$message.success(`${file.name} uploaded successfully!`);
			},
			handleError(error, file, fileList) {
				this.$message.error(`${file.name} upload failed!`);
			},
			handleChange(file, fileList) {
				console.log(fileList.length);
			}
		}
	};
</script>