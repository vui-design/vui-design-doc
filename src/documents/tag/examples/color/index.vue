<template>
	<Example vertical id="example-tag-color">
		<template slot="source">
			<div>
				<div class="example-tag-color">
					<h4>Presets</h4>
					<vui-tag>default</vui-tag>
					<vui-tag color="primary">primary</vui-tag>
					<vui-tag color="info">info</vui-tag>
					<vui-tag color="warning">warning</vui-tag>
					<vui-tag color="success">success</vui-tag>
					<vui-tag color="error">error</vui-tag>
					<vui-tag color="magenta">magenta</vui-tag>
					<vui-tag color="red">red</vui-tag>
					<vui-tag color="volcano">volcano</vui-tag>
					<vui-tag color="orange">orange</vui-tag>
					<vui-tag color="gold">gold</vui-tag>
					<vui-tag color="lime">lime</vui-tag>
					<vui-tag color="green">green</vui-tag>
					<vui-tag color="cyan">cyan</vui-tag>
					<vui-tag color="blue">blue</vui-tag>
					<vui-tag color="geekblue">geekblue</vui-tag>
					<vui-tag color="purple">purple</vui-tag>
				</div>
				<div class="example-tag-color">
					<h4>Custom</h4>
					<vui-tag color="#f06f77">#f06f77</vui-tag>
					<vui-tag color="#ffa2d3">#ffa2d3</vui-tag>
					<vui-tag color="#5f8de7">#5f8de7</vui-tag>
					<vui-tag color="#ccab85">#ccab85</vui-tag>
					<vui-tag color="#66cdaa">#66cdaa</vui-tag>
				</div>
			</div>
		</template>
		<template slot="title">标签颜色</template>
		<template slot="describe">
			<p>多种预设颜色，用作不同场景。如果预设值不能满足你的需求，可以设置为具体的颜色值。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	export default {
		name: "ExampleTagColor",
		components: {
			Example
		},
		data() {
			return {
				code
			};
		}
	};
</script>

<style>
	.example-tag-color:not(:last-child) { margin-bottom:20px; }
	.example-tag-color > h4 { margin-bottom:10px; }
	.example-tag-color > .vui-tag { margin-right:10px; margin-bottom:10px; }
</style>