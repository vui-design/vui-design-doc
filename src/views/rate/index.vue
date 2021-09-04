<template>
	<div>
		<document>
			<h1>Rate 评分</h1>
			<p>评分组件。</p>
			<h2>何时使用</h2>
			<ul>
				<li>对评价进行展示；</li>
				<li>对事物进行快速的评级操作。</li>
			</ul>
			<h2>代码演示</h2>
		</document>
		<vui-row v-bind:gutter="16">
			<vui-col v-bind:span="12">
				<ExampleRateBasicUsage />
				<ExampleRateHalf />
				<ExampleRateText />
				<ExampleRateClearable />
			</vui-col>
			<vui-col v-bind:span="12">
				<ExampleRateDisabled />
				<ExampleRateCharacterFunction />
				<ExampleRateCharacter />
			</vui-col>
		</vui-row>
		<document>
			<h2 id="example-api">API</h2>
			<h3>Rate 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="120">属性</th>
						<th>说明</th>
						<th width="180">类型</th>
						<th width="100">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>value</td>
						<td>当前值，可以使用 <code>v-model</code> 双向绑定数据</td>
						<td>Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>count</td>
						<td>Star 总数</td>
						<td>Number</td>
						<td><code>5</code></td>
					</tr>
					<tr>
						<td>character</td>
						<td>自定义字符</td>
						<td>String | Function | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>tooltips</td>
						<td>自定义每项的提示信息</td>
						<td>Array</td>
						<td>--</td>
					</tr>
					<tr>
						<td>allowHalf</td>
						<td>是否允许半选</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>clearable</td>
						<td>是否允许再次点击取消评分</td>
						<td>Boolean</td>
						<td><code>true</code></td>
					</tr>
					<tr>
						<td>disabled</td>
						<td>是否只读，无法进行交互</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
				</tbody>
			</table>
			<h3>Rate 事件</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="120">事件名</th>
						<th>说明</th>
						<th width="180">类型</th>
						<th width="100">回调参数</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>input</td>
						<td>评分改变时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
						<td>Function</td>
						<td><code>value</code></td>
					</tr>
					<tr>
						<td>change</td>
						<td>评分改变时触发的事件回调函数</td>
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
	import ExampleRateBasicUsage from "./examples/basic-usage";
	import ExampleRateHalf from "./examples/half";
	import ExampleRateText from "./examples/text";
	import ExampleRateClearable from "./examples/clearable";
	import ExampleRateDisabled from "./examples/disabled";
	import ExampleRateCharacterFunction from "./examples/character-function";
	import ExampleRateCharacter from "./examples/character";

	export default {
		mixins: [
			MixinAnchors
		],
		components: {
			Document,
			ExampleRateBasicUsage,
			ExampleRateHalf,
			ExampleRateText,
			ExampleRateClearable,
			ExampleRateDisabled,
			ExampleRateCharacterFunction,
			ExampleRateCharacter
		}
	};
</script>