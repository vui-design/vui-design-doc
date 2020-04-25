<template>
	<Example vertical id="example-tag-closable">
		<template slot="source">
			<div class="example-tag-closable">
				<vui-tag v-if="showTag1" closable @close="showTag1 = false">Tag 1</vui-tag>
				<vui-tag v-if="showTag2" closable @close="showTag2 = false">Tag 2</vui-tag>
				<vui-tag v-if="showTag3" closable @close="showTag3 = false">Tag 3</vui-tag>
			</div>
		</template>
		<template slot="title">可关闭</template>
		<template slot="describe">
			<p>通过设置 <code>closable</code> 属性来定义一个标签是否可以关闭，点击关闭按钮将会触发 <code>onClose</code> 事件，需要自行实现关闭逻辑。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	export default {
		name: "ExampleTagClosable",
		components: {
			Example
		},
		data() {
			return {
				code,
				showTag1: true,
				showTag2: true,
				showTag3: true
			};
		}
	};
</script>

<style>
	.example-tag-closable > .vui-tag { margin-right:10px; }
</style>