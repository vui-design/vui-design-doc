<template>
	<div>
		<document>
			<h1>Collapse 折叠面板</h1>
			<p>可以折叠/展开的内容区域。</p>
			<h2>何时使用</h2>
			<ul>
				<li>对复杂区域进行分组和隐藏，保持页面的整洁。</li>
				<li>手风琴是一种特殊的折叠面板，只允许单个内容区域展开。</li>
			</ul>
			<h2>代码演示</h2>
		</document>
		<vui-row v-bind:gutter="16">
			<vui-col v-bind:span="12">
				<ExampleCollapseBasicUsage />
				<ExampleCollapseAccordion />
				<ExampleCollapseBorderless />
				<ExampleCollapseArrowAlign />
			</vui-col>
			<vui-col v-bind:span="12">
				<ExampleCollapseExtra />
				<ExampleCollapseArrowless />
				<ExampleCollapseDisabled />
				<ExampleCollapseNested />
			</vui-col>
		</vui-row>
		<document>
			<h2 id="example-api">API</h2>
			<h3>Collapse 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="180">属性</th>
						<th>说明</th>
						<th width="180">类型</th>
						<th width="140">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>value</td>
						<td>当前激活面板的 <code>value</code> 属性，可以使用 <code>v-model</code> 双向绑定数据；手风琴模式下，绑定值类型必须为 <code>String</code> 或 <code>Number</code> 类型，反之为 <code>Array</code> 类型</td>
						<td>Array | String | Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>accordion</td>
						<td>是否开启手风琴模式，开启后每次至多展开一个面板</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>bordered</td>
						<td>是否显示外边框</td>
						<td>Boolean</td>
						<td><code>true</code></td>
					</tr>
					<tr>
						<td>arrowAlign</td>
						<td>设置箭头位置，可选值为 <code>left</code>、<code>right</code> 或者不设</td>
						<td>String</td>
						<td><code>left</code></td>
					</tr>
					<tr>
						<td>destroyInactivePanel</td>
						<td>销毁折叠隐藏的面板</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
				</tbody>
			</table>
			<h3>Collapse 事件</h3>
			<table class="example-api-events">
				<thead>
					<tr>
						<th width="180">事件名</th>
						<th>说明</th>
						<th width="180">类型</th>
						<th width="140">回调参数</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>input</td>
						<td>切换面板时触发，返回当前已展开面板的 <code>value</code> 属性，可以使用 <code>v-model</code> 双向绑定数据；手风琴模式下，绑定值类型必须为 <code>String</code> 或 <code>Number</code> 类型，反之为 <code>Array</code> 类型</td>
						<td>Function</td>
						<td><code>value[]</code> | <code>value</code></td>
					</tr>
					<tr>
						<td>change</td>
						<td>同 <code>input</code> 事件</td>
						<td>Function</td>
						<td><code>value[]</code> | <code>value</code></td>
					</tr>
				</tbody>
			</table>
			<h3>Panel 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="180">属性</th>
						<th>说明</th>
						<th width="180">类型</th>
						<th width="140">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>value</td>
						<td>面板唯一值，对应父级 <code>Collapse</code> 组件的 <code>value</code> 值，默认自动生成</td>
						<td>String | Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>title</td>
						<td>面板标题</td>
						<td>String | Number | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>extra</td>
						<td>面板标题右侧的附加内容</td>
						<td>String | Number | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>showArrow</td>
						<td>是否显示面板的箭头图标</td>
						<td>Boolean</td>
						<td><code>true</code></td>
					</tr>
					<tr>
						<td>disabled</td>
						<td>是否禁用面板，禁用后的面板展开与否将无法通过用户交互改变</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
				</tbody>
			</table>
		</document>
	</div>
</template>

<script>
	import MixinAnchors from "src/mixins/anchors";
	import Document from "src/components/document";
	import ExampleCollapseBasicUsage from "./examples/basic-usage";
	import ExampleCollapseAccordion from "./examples/accordion";
	import ExampleCollapseBorderless from "./examples/borderless";
	import ExampleCollapseArrowAlign from "./examples/arrow-align";
	import ExampleCollapseExtra from "./examples/extra";
	import ExampleCollapseArrowless from "./examples/arrowless";
	import ExampleCollapseDisabled from "./examples/disabled";
	import ExampleCollapseNested from "./examples/nested";

	export default {
		mixins: [
			MixinAnchors
		],
		components: {
			Document,
			ExampleCollapseBasicUsage,
			ExampleCollapseAccordion,
			ExampleCollapseBorderless,
			ExampleCollapseArrowAlign,
			ExampleCollapseExtra,
			ExampleCollapseArrowless,
			ExampleCollapseDisabled,
			ExampleCollapseNested
		}
	};
</script>