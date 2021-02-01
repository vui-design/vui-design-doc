<template>
	<div>
		<vui-doc-markdown>
			<h1>MultipleCascader 级联多选框</h1>
			<p>级联多选框。</p>
			<h2>何时使用</h2>
			<ul>
				<li>需要从一组相关联的数据集合进行多选，例如省市区，公司层级，事物分类等。</li>
				<li>从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。</li>
				<li>比起 <code>Select</code> 或 <code>Cascader</code> 组件，可以在同一个选框中完成多选，有较好的体验。</li>
			</ul>
			<h2>代码演示</h2>
		</vui-doc-markdown>
		<ExampleCascadeTransferBasicUsage />
	</div>
</template>

<script>
	import MixinAnchors from "src/mixins/anchors";
	import VuiDocMarkdown from "src/components/markdown";
	import ExampleCascadeTransferBasicUsage from "./examples/basic-usage";

	export default {
		mixins: [
			MixinAnchors
		],
		components: {
			VuiDocMarkdown,
			ExampleCascadeTransferBasicUsage
		}
	};
</script>