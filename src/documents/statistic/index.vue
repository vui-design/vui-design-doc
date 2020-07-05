<template>
	<div>
		<Markdown>
			<h1>Statistic 统计数值</h1>
			<p>展示统计数值。</p>
			<h2>何时使用</h2>
			<ul>
				<li>当需要突出某个或某组数字时；</li>
				<li>当需要展示带描述的统计类数据时使用。</li>
			</ul>
			<h2>代码演示</h2>
		</Markdown>
		<vui-row :gutter="20">
			<vui-col :span="12">
				<ExampleStatisticBasicUsage />
				<ExampleStatisticIconAndUnit />
			</vui-col>
			<vui-col :span="12">
				<ExampleStatisticCard />
			</vui-col>
		</vui-row>
		<Markdown>
			<h2 id="example-api">API</h2>
			<h3>Statistic 属性</h3>
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
						<td>title</td>
						<td>数值标题说明</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>extra</td>
						<td>附加内容，位于标题右侧</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>value</td>
						<td>数值</td>
						<td>String | Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>precision</td>
						<td>数值精度，即小数点后保留多少位</td>
						<td>Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>prefix</td>
						<td>数值前缀，一般通过此属性设置前置图标</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>suffix</td>
						<td>数值后缀，一般通过此属性设置后置单位</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>formatter</td>
						<td>自定义数值展示，如 <code>(h, value) => VNode</code></td>
						<td>Function</td>
						<td>--</td>
					</tr>
					<tr>
						<td>decimalSeparator</td>
						<td>设置小数点</td>
						<td>String</td>
						<td><code>.</code></td>
					</tr>
					<tr>
						<td>groupSeparator</td>
						<td>设置千分位标识符</td>
						<td>String</td>
						<td><code>,</code></td>
					</tr>
					<tr>
						<td>headerStyle</td>
						<td>设置头部样式</td>
						<td>String | Object</td>
						<td>--</td>
					</tr>
					<tr>
						<td>bodyStyle</td>
						<td>设置主体样式</td>
						<td>String | Object</td>
						<td>--</td>
					</tr>
					<tr>
						<td>footerStyle</td>
						<td>设置底部样式</td>
						<td>String | Object</td>
						<td>--</td>
					</tr>
				</tbody>
			</table>
		</Markdown>
	</div>
</template>

<script>
	import MixinCatalogue from "@/mixins/catalogue";
	import Markdown from "@/components/markdown"
	import ExampleStatisticBasicUsage from "./examples/basic-usage";
	import ExampleStatisticIconAndUnit from "./examples/icon-and-unit";
	import ExampleStatisticCard from "./examples/card";

	export default {
		mixins: [
			MixinCatalogue
		],
		components: {
			Markdown,
			ExampleStatisticBasicUsage,
			ExampleStatisticIconAndUnit,
			ExampleStatisticCard
		}
	};
</script>