<template>
	<vui-doc-example v-bind:code="code" id="example-badge-text">
		<template slot="demo">
			<div class="example-badge-text">
				<vui-badge text="new">
					<img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
				</vui-badge>
				<vui-badge text="hot">
					<img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
				</vui-badge>
			</div>
		</template>
		<template slot="title">文本徽标</template>
		<template slot="description">
			<p>设置 <code>text</code> 属性，自定义显示文本。为空字符串时不会显示。</p>
		</template>
	</vui-doc-example>
</template>

<script>
	import VuiDocExample from "src/components/example";
	import code from "./code";

	export default {
		components: {
			VuiDocExample
		},
		data() {
			return {
				code
			};
		}
	};
</script>

<style>
	.example-badge-text > .vui-badge { margin-right:20px; }
	.example-badge-text > .vui-badge > img { width:48px; height:48px; border-radius:5px; }
</style>