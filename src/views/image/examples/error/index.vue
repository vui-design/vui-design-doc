<template>
	<example v-bind:code="code" id="example-image-error">
		<template slot="demo">
			<ul class="example-image-error">
				<li>
					<h4>Default Error Tips</h4>
					<vui-image v-bind:src="url" fit="cover" />
				</li>
				<li>
					<h4>Customized Error Tips</h4>
					<vui-image v-bind:src="url" fit="cover">
						<vui-icon slot="error" type="image" style="font-size: 28px;" />
					</vui-image>
				</li>
			</ul>
		</template>
		<template slot="title">加载失败</template>
		<template slot="description">
			<p>可以通过 <code>error</code> 插槽自定义图片加载失败时的提示内容。</p>
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
				// An image that does not exist.
				url: "https://www.example.com/unknown.jpg"
			};
		}
	};
</script>

<style>
	.example-image-error { display:flex; }
	.example-image-error li { flex:1; width:50%; text-align:center; }
	.example-image-error h4 { margin-bottom:20px; }
	.example-image-error .vui-image { width:300px; height:200px; }
</style>