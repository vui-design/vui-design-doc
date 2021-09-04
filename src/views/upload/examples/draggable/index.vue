<template>
	<example v-bind:code="code" id="example-upload-draggable">
		<template slot="demo">
			<vui-upload draggable multiple v-bind:action="action">
				<div class="example-upload-draggable-button">
					<vui-icon type="upload-cloud-filled" />
					<h4>Click or drag file to this area to upload</h4>
					<p>Only JPG / PNG files can be uploaded, and no more than 500kb</p>
				</div>
			</vui-upload>
		</template>
		<template slot="title">拖拽上传</template>
		<template slot="description">
			<p>把文件拖入指定区域完成上传，同样支持点击上传。设置 <code>multiple</code> 后，可以一次上传多个文件。</p>
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
		}
	};
</script>

<style>
	.example-upload-draggable-button { line-height:1; }
	.example-upload-draggable-button i { color:#2d8cf0; font-size:50px; }
	.example-upload-draggable-button h4 { margin-top:20px; color:#595959; font-size:16px; }
	.example-upload-draggable-button p { margin-top:10px; color:#8c8c8c; font-size:12px; }
</style>