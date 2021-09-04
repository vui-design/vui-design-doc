<template>
	<example v-bind:code="code" id="example-image-basic-usage">
		<template slot="demo">
			<ul class="example-image-basic-usage">
				<li v-for="fit in fits" v-bind:key="fit">
					<h4>{{fit}}</h4>
					<vui-image v-bind:src="url" v-bind:fit="fit" />
				</li>
			</ul>
		</template>
		<template slot="title">基本用法</template>
		<template slot="description">
			<p>通过 <code>fit</code> 属性对图片进行保留原始比例的剪切、缩放或者直接进行拉伸等，同原生 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit" target="_blank">object-fit</a>。</p>
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
				fits: ["fill", "contain", "cover", "none", "scale-down"],
				url: "https://zhitu.isux.us/assets/img/imgSample/test-60.jpg"
			};
		}
	};
</script>

<style>
	.example-image-basic-usage { display:flex; }
	.example-image-basic-usage li { flex:1; width:20%; text-align:center; }
	.example-image-basic-usage h4 { margin-bottom:20px; }
	.example-image-basic-usage .vui-image { width:100px; height:100px; }
</style>