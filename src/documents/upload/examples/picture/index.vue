<template>
	<Example vertical id="example-upload-picture">
		<template slot="source">
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
		<template slot="describe">
			<p>上传文件为图片，可展示本地缩略图。</p>
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