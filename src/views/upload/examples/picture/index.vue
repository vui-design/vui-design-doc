<template>
	<example v-bind:code="code" id="example-upload-picture">
		<template slot="demo">
			<div class="example-upload-picture">
				<vui-upload
					v-bind:list="list"
					v-bind:listType="listType"
					v-bind:action="action"
					v-on:change="handleChange"
					v-on:preview="handlePreview"
					v-on:remove="handleRemove"
				>
					<vui-button icon="upload">Click To Upload</vui-button>
				</vui-upload>
				<vui-modal v-model="visible" headless footless centered>
					<img style="width: 100%;" v-bind:src="image" v-bind:alt="image" />
				</vui-modal>
			</div>
		</template>
		<template slot="title">图片列表样式</template>
		<template slot="description">
			<p>上传文件为图片，可展示本地缩略图。</p>
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
				listType: "picture",
				action: "//jsonplaceholder.typicode.com/posts/",
				image: "",
				visible: false
			};
		},
		methods: {
			handleChange(file, fileList) {
				this.list = fileList;
			},
			handlePreview(file, fileList) {
				this.image = file.url;
				this.visible = true;
			},
			handleRemove(file, fileList) {
				console.log(file.name);
			}
		}
	};
</script>