<template>
	<div>
		<Markdown>
			<h1>Transfer 穿梭框</h1>
			<p>双栏穿梭选择框，常用于将多个项目从一边移动到另一边。</p>
			<h2>何时使用</h2>
			<ul>
				<li>需要在多个可选项中进行多选时。</li>
				<li>相较于 <code>Select</code>，穿梭框占据更大的空间，可以展示可选项的更多信息。</li>
			</ul>
			<p>穿梭选择框用直观的方式在两栏中移动元素，完成选择行为。</p>
			<p>选择一个或以上的选项后，点击对应的方向键，可以把选中的选项移动到另一栏。其中，左边一栏为 <code>source</code>，右边一栏为 <code>target</code>，API 的设计也反映了这两个概念。</p>
			<h2>代码演示</h2>
		</Markdown>
		<ExampleTransferBasicUsage />
		<Markdown>
			<h2 id="example-api">API</h2>
			<h3>Affix 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="160">属性</th>
						<th>说明</th>
						<th width="140">类型</th>
						<th width="160">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>data</td>
						<td>数据源，其中的数据将会被渲染到左边一栏中，<code>targetKeys</code> 中指定的除外</td>
						<td>Array</td>
						<td><code>[]</code></td>
					</tr>
					<tr>
						<td>targetKeys</td>
						<td>显示在右侧一栏中的数据 <code>key</code> 值集合</td>
						<td>Array</td>
						<td><code>[]</code></td>
					</tr>
					<tr>
						<td>selectedKeys</td>
						<td>设置哪些项应该被选中</td>
						<td>Array</td>
						<td><code>[]</code></td>
					</tr>
					<tr>
						<td>searchable</td>
						<td>是否支持搜索</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>disabled</td>
						<td>是否禁用</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>filter</td>
						<td>是否根据输入关键字进行筛选。当其为一个函数时，会接收 <code>keyword</code>、<code>option</code> 两个参数，当 <code>option</code> 符合条件时，应返回 <code>true</code>，反之返回 <code>false</code></td>
						<td>Boolean | Function</td>
						<td><code>true</code></td>
					</tr>
					<tr>
						<td>filterOptionProp</td>
						<td>搜索时过滤对应的 <code>Option</code> 属性，如设置为 <code>children</code> 表示对内嵌内容进行搜索，可选值为 <code>label</code>、<code>value</code>、<code>children</code> 或者不设</td>
						<td>String</td>
						<td><code>children</code></td>
					</tr>
					<tr>
						<td>listStyle</td>
						<td>两个穿梭框的自定义样式</td>
						<td>Object | Function</td>
						<td>--</td>
					</tr>
					<tr>
						<td>oneWay</td>
						<td>是否启用单向样式</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>titles</td>
						<td>标题集合，顺序从左至右</td>
						<td>Array</td>
						<td>--</td>
					</tr>
					<tr>
						<td>footer</td>
						<td>自定义底部内容</td>
						<td>Function | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>operations</td>
						<td>操作文案集合，顺序从上至下</td>
						<td>Array</td>
						<td><code>[&gt;, &lt;]</code></td>
					</tr>
				</tbody>
			</table>
			<h3>Affix 事件</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="160">事件名</th>
						<th>说明</th>
						<th width="140">类型</th>
						<th width="160">回调参数</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>change</td>
						<td>固定状态改变时触发的事件回调函数</td>
						<td>Function</td>
						<td><code>affixed</code></td>
					</tr>
				</tbody>
			</table>
		</Markdown>
	</div>
</template>

<script>
	import MixinCatalogue from "@/mixins/catalogue";
	import Markdown from "@/components/markdown";
	import ExampleTransferBasicUsage from "./examples/basic-usage";

	export default {
		mixins: [
			MixinCatalogue
		],
		components: {
			Markdown,
			ExampleTransferBasicUsage,
		}
	};
</script>