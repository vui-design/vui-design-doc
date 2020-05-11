<template>
	<div>
		<Markdown>
			<h1>Descriptions 描述列表</h1>
			<p>成组展示多个只读字段。</p>
			<h2>何时使用</h2>
			<p>常见于详情页的信息展示。</p>
			<h2>代码演示</h2>
		</Markdown>
		<DescriptionsBasicUsage />
<!-- 		<DescriptionsBordered />
		<DescriptionsVertical />
		<DescriptionsVerticalBordered />
		<DescriptionsSize /> -->
		<Markdown>
			<h2 id="example-api">API</h2>
			<h3>Descriptions 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="100">属性</th>
						<th>说明</th>
						<th width="150">类型</th>
						<th width="100">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>layout</td>
						<td>列表布局，可选值为 <code>horizontal</code>、<code>vertical</code> 或者不设</td>
						<td>String</td>
						<td><code>horizontal</code></td>
					</tr>
					<tr>
						<td>bordered</td>
						<td>是否展示边框</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>size</td>
						<td>描述列表的大小，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
						<td>String</td>
						<td><code>medium</code></td>
					</tr>
					<tr>
						<td>title</td>
						<td>描述列表的标题，显示在最顶部</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>columns</td>
						<td>描述列表的列数，即一行中显示的 <code>Description</code> 数量</td>
						<td>Number</td>
						<td><code>3</code></td>
					</tr>
					<tr>
						<td>colon</td>
						<td>描述标签右侧是否显示冒号，在不含边框的描述列表中默认为 <code>true</code>，即显示冒号</td>
						<td>Boolean</td>
						<td>--</td>
					</tr>
					<tr>
						<td>labelWidth</td>
						<td>用于设置描述标签的宽度，设为 <code>String</code> 类型时支持百分比宽度；该属性仅在 <code>layout</code> 为 <code>horizontal</code> 且含有边框的描述列表中有效</td>
						<td>String | Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>labelAlign</td>
						<td>用于设置描述标签的文本对齐方式，可选值为 <code>left</code>、<code>center</code>、<code>right</code> 或者不设；该属性仅在 <code>layout</code> 为 <code>horizontal</code> 且含有边框的描述列表中有效</td>
						<td>String</td>
						<td>--</td>
					</tr>
				</tbody>
			</table>
			<h3>Description 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="100">属性</th>
						<th>说明</th>
						<th width="150">类型</th>
						<th width="100">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>label</td>
						<td>描述标签的文本</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>span</td>
						<td>所占的列数</td>
						<td>Number</td>
						<td><code>1</code></td>
					</tr>
				</tbody>
			</table>
		</Markdown>
	</div>
</template>

<script>
	import MixinCatalogue from "@/mixins/catalogue";
	import Markdown from "@/components/markdown";
	import DescriptionsBasicUsage from "./examples/basic-usage";
	import DescriptionsBordered from "./examples/bordered";
	import DescriptionsVertical from "./examples/vertical";
	import DescriptionsVerticalBordered from "./examples/vertical-bordered";
	import DescriptionsSize from "./examples/size";

	export default {
		mixins: [
			MixinCatalogue
		],
		components: {
			Markdown,
			DescriptionsBasicUsage,
			DescriptionsBordered,
			DescriptionsVertical,
			DescriptionsVerticalBordered,
			DescriptionsSize
		}
	};
</script>