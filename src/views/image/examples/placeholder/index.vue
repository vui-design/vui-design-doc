<template>
	<example v-bind:code="code" id="example-image-placeholder">
		<template slot="demo">
			<ul class="example-image-placeholder">
				<li>
					<h4>Default Placeholder</h4>
					<vui-image v-bind:src="url" fit="cover" />
				</li>
				<li>
					<h4>Customized Placeholder</h4>
					<vui-image v-bind:src="url" fit="cover">
						<template slot="placeholder">Loading...</template>
					</vui-image>
				</li>
			</ul>
		</template>
		<template slot="title">占位内容</template>
		<template slot="description">
			<p>可以通过 <code>placeholder</code> 属性或插槽自定义图片加载时的占位内容。</p>
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
				url: "https://zhitu.isux.us/assets/img/imgSample/test-60.jpg"
			};
		},
		methods: {
			handleClick(e) {
				console.log(e)
			}
		}
	};
</script>

<style>
	.example-image-placeholder { display:flex; }
	.example-image-placeholder li { flex:1; width:50%; text-align:center; }
	.example-image-placeholder h4 { margin-bottom:20px; }
	.example-image-placeholder .vui-image { width:300px; height:200px; }
</style>