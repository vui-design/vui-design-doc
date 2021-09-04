<template>
	<example v-bind:code="code" id="example-upload-manually">
		<template slot="demo">
			<vui-upload
				ref="uploader"
				v-bind:list="list"
				v-bind:action="action"
				v-bind:autoUpload="autoUpload"
				v-on:change="handleChange"
			>
				<vui-button icon="image" slot="trigger">Select</vui-button>
				<vui-button icon="upload" style="margin-left: 10px;" v-bind:disabled="list.length === 0" v-on:click="handleUpload">Upload</vui-button>
			</vui-upload>
		</template>
		<template slot="title">手动上传</template>
		<template slot="description">
			<p>禁用 <code>autoUpload</code> 属性，通过手动点击按钮上传。</p>
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
				list: [],
				action: "//jsonplaceholder.typicode.com/posts/",
				autoUpload: false
			};
		},
		methods: {
			handleChange(file, fileList) {
				this.list = fileList;
			},
			handleUpload() {
				this.$refs.uploader.upload();
			}
		}
	};
</script>