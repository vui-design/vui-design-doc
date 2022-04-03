<template>
	<div>
		<document>
			<h1>Slider 滑动输入条</h1>
			<p>滑动型输入器，展示当前值和可选范围。</p>
			<h2>何时使用</h2>
			<p>当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。</p>
			<h2>代码演示</h2>
		</document>
		<vui-row v-bind:gutter="16">
			<vui-col v-bind:span="12">
				<ExampleSliderBasicUsage />
				<ExampleSliderInputNumber />
				<ExampleSliderIcon />
				<ExampleSliderTooltip />
				<ExampleSliderTooltipVisible />
			</vui-col>
			<vui-col v-bind:span="12">
				<ExampleSliderMarks />
				<ExampleSliderVertical />
			</vui-col>
		</vui-row>
		<document>
			<h2 id="example-api">API</h2>
			<h3>Slider 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="140">属性</th>
						<th>说明</th>
						<th width="150">类型</th>
						<th width="314">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>vertical</td>
						<td>是否使用垂直模式</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>value</td>
						<td>当前取值，可以使用 <code>v-model</code> 双向绑定数据。当 <code>range</code> 为 <code>false</code> 时，使用 <code>Number</code>，否则用 <code>[Number, Number]</code></td>
						<td>Number | Array</td>
						<td>--</td>
					</tr>
					<tr>
						<td>range</td>
						<td>是否开启双滑块模式</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>included</td>
						<td>值为 <code>true</code> 时表示值为包含关系，<code>false</code> 表示并列</td>
						<td>Boolean</td>
						<td><code>true</code></td>
					</tr>
					<tr>
						<td>min</td>
						<td>最小值</td>
						<td>Number</td>
						<td><code>0</code></td>
					</tr>
					<tr>
						<td>max</td>
						<td>最大值</td>
						<td>Number</td>
						<td><code>100</code></td>
					</tr>
					<tr>
						<td>step</td>
						<td>步长，取值必须大于 <code>0</code>，并且可被 <code>max - min</code> 整除。当 <code>marks</code> 不为空对象时，可以设置 <code>step</code> 为 <code>null</code>，此时 <code>Slider</code> 的可选值仅有 <code>marks</code> 标记出来的部分</td>
						<td>Number</td>
						<td><code>1</code></td>
					</tr>
					<tr>
						<td>showSteps</td>
						<td>是否显示间断点，建议在间断点不密集时使用</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>marks</td>
						<td>刻度标记，<code>key</code> 的类型必须为 <code>Number</code> 且取值范围在闭区间 <code>[min, max]</code> 内，每个标签可以单独设置样式</td>
						<td>Object</td>
						<td>--</td>
					</tr>
					<tr>
						<td>tooltip</td>
						<td>是否显示 <code>Tooltip</code> 文字提示，值为 <code>null</code> 时不显示</td>
						<td>Object</td>
						<td>
<code style="white-space: pre;">{
  trigger: "focus",
  formatter: value => value,
  color: "dark",
  placement: "top",
  getPopupContainer: () => document.body
}
</code>
						</td>
					</tr>
				</tbody>
			</table>
			<h3>Slider 事件</h3>
			<table class="example-api-events">
				<thead>
					<tr>
						<th width="140">事件名</th>
						<th>说明</th>
						<th width="150">类型</th>
						<th width="314">回调参数</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>input</td>
						<td>滑动输入条数值变化时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
						<td>Function</td>
						<td><code>value</code></td>
					</tr>
					<tr>
						<td>change</td>
						<td>滑动输入条数值变化时触发的事件回调函数</td>
						<td>Function</td>
						<td><code>value</code></td>
					</tr>
				</tbody>
			</table>
		</document>
	</div>
</template>

<script>
	import MixinAnchors from "src/mixins/anchors";
	import Document from "src/components/document";
	import ExampleSliderBasicUsage from "./examples/basic-usage";
	import ExampleSliderInputNumber from "./examples/input-number";
	import ExampleSliderIcon from "./examples/icon";
	import ExampleSliderTooltip from "./examples/tooltip";
	import ExampleSliderTooltipVisible from "./examples/tooltip-visible";
	import ExampleSliderMarks from "./examples/marks";
	import ExampleSliderVertical from "./examples/vertical";

	export default {
		mixins: [
			MixinAnchors
		],
		components: {
			Document,
			ExampleSliderBasicUsage,
			ExampleSliderInputNumber,
			ExampleSliderIcon,
			ExampleSliderTooltip,
			ExampleSliderTooltipVisible,
			ExampleSliderMarks,
			ExampleSliderVertical
		}
	};
</script>