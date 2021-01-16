<template>
	<div>
		<vui-doc-markdown>
			<h1>Switch 开关</h1>
			<p>开关选择器。</p>
			<h2>何时使用</h2>
			<ul>
				<li>需要表示开关状态/两种状态之间的切换时。</li>
				<li>和 Checkbox 的区别是，切换 Switch 会直接触发状态改变，而 Checkbox 一般用于状态标记，需要和提交操作配合。</li>
			</ul>
			<h2>代码演示</h2>
		</vui-doc-markdown>
		<vui-row :gutter="20">
			<vui-col :span="12">
				<ExampleSwitchBasicUsage />
				<ExampleSwitchSize />
				<ExampleSwitchText />
			</vui-col>
			<vui-col :span="12">
				<ExampleSwitchDisabled />
				<ExampleSwitchLoading />
			</vui-col>
		</vui-row>
		<vui-doc-markdown>
			<h2 id="example-api">API</h2>
			<h3>Switch 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="100">属性</th>
						<th>说明</th>
						<th width="120">类型</th>
						<th width="80">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>size</td>
						<td>开关尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
						<td>String</td>
						<td><code>medium</code></td>
					</tr>
					<tr>
						<td>checked</td>
						<td>设置开关为选中状态，可以使用 <code>v-model</code> 双向绑定数据</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>disabled</td>
						<td>设置开关为禁用状态</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>loading</td>
						<td>设置开关为加载状态</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
				</tbody>
			</table>
			<h3>Switch 插槽</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="100">名称</th>
						<th>说明</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>checked</td>
						<td>选中时的显示内容</td>
					</tr>
					<tr>
						<td>unchecked</td>
						<td>未选中时的显示内容</td>
					</tr>
				</tbody>
			</table>
			<h3>Switch 事件</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="100">事件名</th>
						<th>说明</th>
						<th width="120">类型</th>
						<th width="80">回调参数</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>input</td>
						<td>在开关的选中状态发生变化时触发，可以使用<code>v-model</code>双向绑定数据</td>
						<td>Function</td>
						<td><code>checked</code></td>
					</tr>
					<tr>
						<td>change</td>
						<td>在开关的选中状态发生变化时触发</td>
						<td>Function</td>
						<td><code>checked</code></td>
					</tr>
				</tbody>
			</table>
		</vui-doc-markdown>
	</div>
</template>

<script>
	import MixinAnchors from "src/mixins/anchors";
	import VuiDocMarkdown from "src/components/markdown";
	import ExampleSwitchBasicUsage from "./examples/basic-usage";
	import ExampleSwitchSize from "./examples/size";
	import ExampleSwitchText from "./examples/text";
	import ExampleSwitchDisabled from "./examples/disabled";
	import ExampleSwitchLoading from "./examples/loading";

	export default {
		name: "SwitchZhCN",
		mixins: [
			MixinAnchors
		],
		components: {
			VuiDocMarkdown,
			ExampleSwitchBasicUsage,
			ExampleSwitchSize,
			ExampleSwitchText,
			ExampleSwitchDisabled,
			ExampleSwitchLoading
		}
	};
</script>