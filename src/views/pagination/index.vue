<template>
	<div>
		<vui-doc-markdown>
			<h1>Pagination 分页</h1>
			<p>采用分页的形式分隔长列表，每次只加载一个页面。</p>
			<h2>何时使用</h2>
			<ul>
				<li>当加载/渲染所有数据将花费很多时间时；</li>
				<li>可切换页码浏览数据。</li>
			</ul>
			<h2>代码演示</h2>
		</vui-doc-markdown>
 		<ExamplePaginationBasicUsage />
		<ExamplePaginationMore />
		<ExamplePaginationTotal />
		<ExamplePaginationFlipButton />
		<ExamplePaginationPageSize />
		<ExamplePaginationGoto />
		<ExamplePaginationAlign />
		<ExamplePaginationSmall />
		<ExamplePaginationSimple />
		<ExamplePaginationHideOnSinglePage /> 
		<vui-doc-markdown>
			<h2 id="example-api">API</h2>
			<h3>Pagination 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="130">属性</th>
						<th>说明</th>
						<th width="140">类型</th>
						<th width="130">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>small</td>
						<td>使用小型尺寸</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>simple</td>
						<td>使用简洁版本</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>align</td>
						<td>对齐方式，可选值为 <code>left</code>、<code>center</code>、<code>right</code> 或者不设</td>
						<td>String</td>
						<td><code>left</code></td>
					</tr>
					<tr>
						<td>total</td>
						<td>数据总数</td>
						<td>Number</td>
						<td><code>0</code></td>
					</tr>
					<tr>
						<td>showTotal</td>
						<td>用于显示数据总数和当前数据范围</td>
						<td>Boolean | Function</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>page</td>
						<td>当前页码，可以使用 <code>v-model</code> 双向绑定数据</td>
						<td>Number</td>
						<td><code>1</code></td>
					</tr>
					<tr>
						<td>pageSize</td>
						<td>每页条数</td>
						<td>Number</td>
						<td><code>10</code></td>
					</tr>
					<tr>
						<td>pageSizeOptions</td>
						<td>用于指定 <code>pageSize</code> 的可选列表</td>
						<td>Array</td>
						<td><code>[10, 20, 30, 40]</code></td>
					</tr>
					<tr>
						<td>showPageSizer</td>
						<td>是否可以切换 <code>pageSize</code></td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>showPageElevator</td>
						<td>是否可以快速跳转至某一页</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>prevPageText</td>
						<td>替代图标显示的上一页文字</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>nextPageText</td>
						<td>替代图标显示的下一页文字</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>hideOnSinglePage</td>
						<td>当只有一页时是否隐藏分页</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
				</tbody>
			</table>
			<h3>Pagination 事件</h3>
			<table class="example-api-events">
				<thead>
					<tr>
						<th width="130">事件名</th>
						<th>说明</th>
						<th width="140">类型</th>
						<th width="130">回调参数</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>input</td>
						<td>页码改变时触发的事件回调，可以使用 <code>v-model</code> 双向绑定数据</td>
						<td>Function</td>
						<td><code>page</code></td>
					</tr>
					<tr>
						<td>change</td>
						<td>页码改变时触发的事件回调</td>
						<td>Function</td>
						<td><code>page</code></td>
					</tr>
					<tr>
						<td>changePageSize</td>
						<td>切换 <code>pageSize</code> 时触发的事件回调</td>
						<td>Function</td>
						<td><code>pageSize</code></td>
					</tr>
				</tbody>
			</table>
		</vui-doc-markdown>
	</div>
</template>

<script>
	import MixinAnchors from "src/mixins/anchors";
	import VuiDocMarkdown from "src/components/markdown";
	import ExamplePaginationBasicUsage from "./examples/basic-usage";
	import ExamplePaginationMore from "./examples/more";
	import ExamplePaginationTotal from "./examples/total";
	import ExamplePaginationFlipButton from "./examples/flip-button";
	import ExamplePaginationPageSize from "./examples/page-size";
	import ExamplePaginationGoto from "./examples/goto";
	import ExamplePaginationAlign from "./examples/align";
	import ExamplePaginationSmall from "./examples/small";
	import ExamplePaginationSimple from "./examples/simple";
	import ExamplePaginationHideOnSinglePage from "./examples/hide-on-single-page";

	export default {
		mixins: [
			MixinAnchors
		],
		components: {
			VuiDocMarkdown,
			ExamplePaginationBasicUsage,
			ExamplePaginationMore,
			ExamplePaginationTotal,
			ExamplePaginationFlipButton,
			ExamplePaginationPageSize,
			ExamplePaginationGoto,
			ExamplePaginationAlign,
			ExamplePaginationSmall,
			ExamplePaginationSimple,
			ExamplePaginationHideOnSinglePage
		}
	};
</script>