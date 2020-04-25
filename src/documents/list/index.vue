<template>
	<div>
		<Markdown>
			<h1>List 列表</h1>
			<p>通用列表。</p>
			<h2>何时使用</h2>
			<p>最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。</p>
			<h2>代码演示</h2>
		</Markdown>
		<ExampleListSimple />
		<ExampleListBasicUsage />
		<ExampleListLoadMore />
		<ExampleListVertical />
		<ExampleListGrid />
		<Markdown>
			<h2 id="example-api">API</h2>
			<h3>Result 属性</h3>
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
						<td>status</td>
						<td>结果状态，决定图标和颜色，可选值为 <code>info</code>、<code>warning</code>、<code>success</code>、<code>error</code>、<code>403</code>、<code>404</code>、<code>500</code> 或者不设</td>
						<td>String</td>
						<td><code>info</code></td>
					</tr>
					<tr>
						<td>icon</td>
						<td>自定义图标类型/图标</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>title</td>
						<td>标题</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>description</td>
						<td>简单描述</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>extra</td>
						<td>附加内容，一般用于放置操作按钮</td>
						<td>Slot</td>
						<td>--</td>
					</tr>
				</tbody>
			</table>
		</Markdown>
	</div>
</template>

<script>
	import MixinCatalogue from "@/mixins/catalogue";
	import Markdown from "@/components/markdown";
	import ExampleListSimple from "./examples/simple";
	import ExampleListBasicUsage from "./examples/basic-usage";
	import ExampleListLoadMore from "./examples/load-more";
	import ExampleListVertical from "./examples/vertical";
	import ExampleListGrid from "./examples/grid";

	export default {
		mixins: [
			MixinCatalogue
		],
		components: {
			Markdown,
			ExampleListSimple,
			ExampleListBasicUsage,
			ExampleListLoadMore,
			ExampleListVertical,
			ExampleListGrid,
		}
	};
</script>