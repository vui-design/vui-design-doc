<template>
	<example v-bind:code="code" id="example-upload-list">
		<template slot="demo">
			<vui-upload
				v-bind:list="list"
				v-bind:action="action"
				v-on:change="handleChange"
			>
				<vui-button icon="upload">Click To Upload</vui-button>
			</vui-upload>
		</template>
		<template slot="title">默认上传列表</template>
		<template slot="description">
			<p>使用 <code>list</code> 设置已上传的列表。</p>
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
				list: [
					{
						id: "81797bbf-8de1-514f-bfa2-3541400e8cf8",
						name: "jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
						status: "success",
						url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
					},
					{
						id: "3c95c1df-5884-228f-357b-fa4859621228",
						name: "jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
						status: "success",
						url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
					}
				],
				action: "//jsonplaceholder.typicode.com/posts/"
			};
		},
		methods: {
			handleChange(file, fileList) {
				this.list = fileList;
			}
		}
	};
</script>