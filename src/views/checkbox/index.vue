<template>
	<div>
		<vui-doc-markdown>
			<h1>Checkbox 多选框</h1>
			<p>多选框。</p>
			<h2>何时使用</h2>
			<ul>
				<li>在一组可选项中进行多项选择时。</li>
				<li>单独使用可以表示两种状态之间的切换，和 Switch 类似。区别在于切换 Switch 会直接触发状态改变，而 Checkbox 一般用于状态标记，需要和提交操作配合。</li>
			</ul>
			<h2>代码演示</h2>
		</vui-doc-markdown>
		<vui-row :gutter="20">
			<vui-col :span="12">
				<ExampleCheckboxBasicUsage />
				<ExampleCheckboxDisabled />
				<ExampleCheckboxController />
				<ExampleCheckboxGroup />
				<ExampleCheckboxGroupVertical />
			</vui-col>
			<vui-col :span="12">
				<ExampleCheckboxGroupOptions />
				<ExampleCheckboxCheckAll />
				<ExampleCheckboxButton />
				<ExampleCheckboxSize />
			</vui-col>
		</vui-row>
		<vui-doc-markdown>
			<h2 id="example-api">API</h2>
			<h3>Checkbox 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="80">属性</th>
						<th>说明</th>
						<th width="120">类型</th>
						<th width="80">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>type</td>
						<td>多选框样式，可选值为 <code>button</code> 或者不设，为 <code>button</code> 时使用按钮样式</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>size</td>
						<td>多选框尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
						<td>String</td>
						<td><code>medium</code></td>
					</tr>
					<tr>
						<td>label</td>
						<td>多选框文本</td>
						<td>String | Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>value</td>
						<td>只在组合使用时有效。用于指定多选框的 <code>value</code> 值，组合会自动判断是否选中</td>
						<td>String | Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>indeterminate</td>
						<td>设置 <code>indeterminate</code> 状态，只负责样式控制</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>checked</td>
						<td>只在单独使用时有效。用于指定多选框是否选中，可以使用 <code>v-model</code> 双向绑定数据</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>disabled</td>
						<td>是否禁用</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
				</tbody>
			</table>
			<h3>Checkbox 插槽</h3>
			<table>
				<thead>
					<tr>
						<th width="80">名称</th>
						<th>说明</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>default</td>
						<td>单选框文本</td>
					</tr>
				</tbody>
			</table>
			<h3>Checkbox 事件</h3>
			<table class="example-api-events">
				<thead>
					<tr>
						<th width="80">事件名</th>
						<th>说明</th>
						<th width="120">类型</th>
						<th width="80">回调参数</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>input</td>
						<td>在多选框的选中状态发生变化时触发，可以使用 <code>v-model</code> 双向绑定数据</td>
						<td>Function</td>
						<td><code>checked</code></td>
					</tr>
					<tr>
						<td>change</td>
						<td>在多选框的选中状态发生变化时触发</td>
						<td>Function</td>
						<td><code>checked</code></td>
					</tr>
				</tbody>
			</table>
			<h3>CheckboxGroup 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="80">属性</th>
						<th>说明</th>
						<th width="120">类型</th>
						<th width="80">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>type</td>
						<td>多选组合样式，可选值为 <code>button</code> 或者不设，为 <code>button</code> 时使用按钮样式</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>size</td>
						<td>多选组合尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
						<td>String</td>
						<td><code>medium</code></td>
					</tr>
					<tr>
						<td>vertical</td>
						<td>是否垂直排列</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>options</td>
						<td>以配置形式设置多选组合的选项列表，详见示例〔配置方式〕</td>
						<td>Array</td>
						<td><code>[]</code></td>
					</tr>
					<tr>
						<td>value</td>
						<td>当前选中的值，可以使用 <code>v-model</code> 双向绑定数据</td>
						<td>Array</td>
						<td><code>[]</code></td>
					</tr>
					<tr>
						<td>disabled</td>
						<td>是否禁用多选组合</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
				</tbody>
			</table>
			<h3>CheckboxGroup 事件</h3>
			<table class="example-api-events">
				<thead>
					<tr>
						<th width="80">事件名</th>
						<th>说明</th>
						<th width="120">类型</th>
						<th width="80">回调参数</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>input</td>
						<td>在选项发生变化时触发，可以使用 <code>v-model</code> 双向绑定数据</td>
						<td>Function</td>
						<td><code>value</code></td>
					</tr>
					<tr>
						<td>change</td>
						<td>在选项发生变化时触发</td>
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
	import ExampleCheckboxBasicUsage from "./examples/basic-usage";
	import ExampleCheckboxDisabled from "./examples/disabled";
	import ExampleCheckboxController from "./examples/controller";
	import ExampleCheckboxGroup from "./examples/group";
	import ExampleCheckboxGroupVertical from "./examples/group-vertical";
	import ExampleCheckboxGroupOptions from "./examples/group-options";
	import ExampleCheckboxCheckAll from "./examples/check-all";
	import ExampleCheckboxButton from "./examples/button";
	import ExampleCheckboxSize from "./examples/size";

	export default {
		name: "CheckboxZhCN",
		mixins: [
			MixinAnchors
		],
		components: {
			VuiDocMarkdown,
			ExampleCheckboxBasicUsage,
			ExampleCheckboxDisabled,
			ExampleCheckboxController,
			ExampleCheckboxGroup,
			ExampleCheckboxGroupVertical,
			ExampleCheckboxGroupOptions,
			ExampleCheckboxCheckAll,
			ExampleCheckboxButton,
			ExampleCheckboxSize
		}
	};
</script>