<template>
	<div>
		<vui-doc-markdown>
			<h1>InputNumber 数字输入框</h1>
			<p>通过鼠标或键盘输入内容，是最基础的表单域的包装。</p>
			<h2>何时使用</h2>
			<ul>
				<li>需要用户输入表单域内容时；</li>
				<li>提供组合型输入框，带搜索的输入框，还可以进行大小选择。</li>
			</ul>
			<h2>代码演示</h2>
		</vui-doc-markdown>
		<vui-row :gutter="20">
			<vui-col :span="12">
				<ExampleInputNumberBasicUsage />
				<ExampleInputNumberDigit />
				<ExampleInputNumberFormatter />
			</vui-col>
			<vui-col :span="12">
				<ExampleInputNumberSize />
				<ExampleInputNumberDisabled />
			</vui-col>
		</vui-row>
		<vui-doc-markdown>
			<h2 id="example-api">API</h2>
			<h3>InputNumber 属性</h3>
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
						<td>size</td>
						<td>输入框尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
						<td>String</td>
						<td><code>medium</code></td>
					</tr>
					<tr>
						<td>placeholder</td>
						<td>输入框占位文本</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>value</td>
						<td>输入框内容，可以使用 <code>v-model</code> 双向绑定数据</td>
						<td>Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>min</td>
						<td>最小值</td>
						<td>Number</td>
						<td><code>-Infinity</code></td>
					</tr>
					<tr>
						<td>max</td>
						<td>最大值</td>
						<td>Number</td>
						<td><code>Infinity</code></td>
					</tr>
					<tr>
						<td>step</td>
						<td>每次改变的步伐，可以是小数</td>
						<td>Number</td>
						<td><code>1</code></td>
					</tr>
					<tr>
						<td>precision</td>
						<td>数值精度，必须为 <code>0</code> 或大于 <code>0</code> 的整数</td>
						<td>Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>formatter</td>
						<td>指定输入框展示值的格式</td>
						<td>Function</td>
						<td>--</td>
					</tr>
					<tr>
						<td>parser</td>
						<td>指定从 <code>formatter</code> 里转换回数字的方式，和 <code>formatter</code> 搭配使用</td>
						<td>Function</td>
						<td>--</td>
					</tr>
					<tr>
						<td>readonly</td>
						<td>设置输入框为只读状态</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>disabled</td>
						<td>设置输入框为禁用状态</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
				</tbody>
			</table>
			<h3>InputNumber 事件</h3>
			<table class="example-api-events">
				<thead>
					<tr>
						<th width="100">事件名</th>
						<th>说明</th>
						<th width="150">类型</th>
						<th width="100">回调参数</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>focus</td>
						<td>输入框获取焦点时触发的事件回调</td>
						<td>Function</td>
						<td><code>event</code></td>
					</tr>
					<tr>
						<td>blur</td>
						<td>输入框失去焦点时触发的事件回调</td>
						<td>Function</td>
						<td><code>event</code></td>
					</tr>
					<tr>
						<td>keydown</td>
						<td>键盘按下时触发的事件回调</td>
						<td>Function</td>
						<td><code>event</code></td>
					</tr>
					<tr>
						<td>keyup</td>
						<td>键盘弹起时触发的事件回调</td>
						<td>Function</td>
						<td><code>event</code></td>
					</tr>
					<tr>
						<td>input</td>
						<td>输入框数值变化时触发的事件回调，可以使用 <code>v-model</code> 双向绑定数据</td>
						<td>Function</td>
						<td><code>value</code></td>
					</tr>
					<tr>
						<td>change</td>
						<td>输入框数值变化时触发的事件回调</td>
						<td>Function</td>
						<td><code>value</code></td>
					</tr>
				</tbody>
			</table>
		</vui-doc-markdown>
	</div>
</template>

<script>
	import MixinAnchors from "src/mixins/anchors";
	import VuiDocMarkdown from "src/components/markdown";
	import ExampleInputNumberBasicUsage from "./examples/basic-usage";
	import ExampleInputNumberDigit from "./examples/digit";
	import ExampleInputNumberFormatter from "./examples/formatter";
	import ExampleInputNumberSize from "./examples/size";
	import ExampleInputNumberDisabled from "./examples/disabled";

	export default {
		mixins: [
			MixinAnchors
		],
		components: {
			VuiDocMarkdown,
			ExampleInputNumberBasicUsage,
			ExampleInputNumberDigit,
			ExampleInputNumberFormatter,
			ExampleInputNumberSize,
			ExampleInputNumberDisabled
		}
	};
</script>