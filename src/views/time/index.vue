<template>
	<div>
		<document>
			<h1>Time 相对时间</h1>
			<p>用于表示几分钟前、几小时前等相对于此时此刻的时间描述。</p>
			<h2>何时使用</h2>
			<p>使用相对时间标记一条信息或资讯的发布时间。</p>
			<h2>代码演示</h2>
		</document>
		<vui-row :gutter="20">
			<vui-col :span="12">
				<ExampleTimeBasicUsage />
			</vui-col>
			<vui-col :span="12">
				<ExampleTimeType />
				<ExampleTimeInterval />
			</vui-col>
		</vui-row>
		<document>
			<h2 id="example-api">API</h2>
			<h3>Time 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="100">属性</th>
						<th>说明</th>
						<th width="200">类型</th>
						<th width="100">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>type</td>
						<td>显示类型，可选值为 <code>relative</code>、<code>date</code>、<code>datetime</code> 或者不设</td>
						<td>String</td>
						<td><code>relative</code></td>
					</tr>
					<tr>
						<td>time</td>
						<td>需要对比的时间，可以是 <code>Date</code> 类型、日期字符串或时间戳</td>
						<td>Date | String | Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>interval</td>
						<td>自动更新间隔，单位：秒</td>
						<td>Number</td>
						<td><code>60</code></td>
					</tr>
				</tbody>
			</table>
		</document>
	</div>
</template>

<script>
	import MixinAnchors from "src/mixins/anchors";
	import Document from "src/components/document";
	import ExampleTimeBasicUsage from "./examples/basic-usage";
	import ExampleTimeType from "./examples/type";
	import ExampleTimeInterval from "./examples/interval";

	export default {
		mixins: [
			MixinAnchors
		],
		components: {
			Document,
			ExampleTimeBasicUsage,
			ExampleTimeType,
			ExampleTimeInterval
		}
	};
</script>