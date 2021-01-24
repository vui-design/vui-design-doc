<template>
	<div>
		<vui-doc-markdown>
			<h1>Input 输入框</h1>
			<p>通过鼠标或键盘输入内容，是最基础的表单域的包装。</p>
			<h2>何时使用</h2>
			<ul>
				<li>需要用户输入表单域内容时；</li>
				<li>提供组合型输入框，带搜索的输入框，还可以进行大小选择。</li>
			</ul>
			<h2>代码演示</h2>
		</vui-doc-markdown>
		<vui-row v-bind:gutter="20">
			<vui-col v-bind:span="12">
				<ExampleInputBasicUsage />
				<ExampleInputPrependAppend />
				<ExampleInputPrefixSuffix />
				<ExampleInputPassword />
			</vui-col>
			<vui-col v-bind:span="12">
				<ExampleInputClearable />
				<ExampleInputSize />
				<ExampleInputDisabled />
				<ExampleInputGroup />
			</vui-col>
		</vui-row>
		<vui-doc-markdown>
			<h2 id="example-api">API</h2>
			<h3>Input 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="120">属性</th>
						<th>说明</th>
						<th width="160">类型</th>
						<th width="100">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>type</td>
						<td>输入框类型，同原生 <code>input</code> 标签的 <code>type</code> 属性</td>
						<td>String</td>
						<td><code>text</code></td>
					</tr>
					<tr>
						<td>prepend</td>
						<td>设置前置标签</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>append</td>
						<td>设置后置标签</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>prefix</td>
						<td>设置前缀图标类型/图标</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>suffix</td>
						<td>设置后缀图标类型/图标</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>size</td>
						<td>输入框尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
						<td>String</td>
						<td><code>medium</code></td>
					</tr>
					<tr>
						<td>placeholder</td>
						<td>输入框占位文本</td>
						<td>String | Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>value</td>
						<td>输入框内容，可以使用 <code>v-model</code> 双向绑定数据</td>
						<td>String | Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>maxLength</td>
						<td>最大输入长度</td>
						<td>String | Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>clearable</td>
						<td>是否允许清空</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>readonly</td>
						<td>设置文本框为只读状态</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>disabled</td>
						<td>设置文本框为禁用状态</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
				</tbody>
			</table>
			<h3>Input 事件</h3>
			<table class="example-api-events">
				<thead>
					<tr>
						<th width="120">事件名</th>
						<th>说明</th>
						<th width="160">类型</th>
						<th width="100">回调参数</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>mouseenter</td>
						<td>鼠标移入文本框时触发的事件回调函数</td>
						<td>Function</td>
						<td><code>event</code></td>
					</tr>
					<tr>
						<td>mouseleave</td>
						<td>鼠标移出文本框时触发的事件回调函数</td>
						<td>Function</td>
						<td><code>event</code></td>
					</tr>
					<tr>
						<td>focus</td>
						<td>文本框获取焦点时触发的事件回调函数</td>
						<td>Function</td>
						<td><code>event</code></td>
					</tr>
					<tr>
						<td>blur</td>
						<td>文本框失去焦点时触发的事件回调函数</td>
						<td>Function</td>
						<td><code>event</code></td>
					</tr>
					<tr>
						<td>keydown</td>
						<td>键盘按下时触发的事件回调函数</td>
						<td>Function</td>
						<td><code>event</code></td>
					</tr>
					<tr>
						<td>keyup</td>
						<td>键盘弹起时触发的事件回调函数</td>
						<td>Function</td>
						<td><code>event</code></td>
					</tr>
					<tr>
						<td>clear</td>
						<td>点击清空按钮时触发的事件回调函数</td>
						<td>Function</td>
						<td><code>event</code></td>
					</tr>
					<tr>
						<td>input</td>
						<td>文本框内容输入时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
						<td>Function</td>
						<td><code>value</code></td>
					</tr>
					<tr>
						<td>change</td>
						<td>文本框内容变化时触发的事件回调函数</td>
						<td>Function</td>
						<td><code>event</code></td>
					</tr>
				</tbody>
			</table>
		</vui-doc-markdown>
	</div>
</template>

<script>
	import MixinAnchors from "src/mixins/anchors";
	import VuiDocMarkdown from "src/components/markdown";
	import ExampleInputBasicUsage from "./examples/basic-usage";
	import ExampleInputPrependAppend from "./examples/prepend-append";
	import ExampleInputPrefixSuffix from "./examples/prefix-suffix";
	import ExampleInputPassword from "./examples/password";
	import ExampleInputClearable from "./examples/clearable";
	import ExampleInputSize from "./examples/size";
	import ExampleInputDisabled from "./examples/disabled";
	import ExampleInputGroup from "./examples/group";

	export default {
		mixins: [
			MixinAnchors
		],
		components: {
			VuiDocMarkdown,
			ExampleInputBasicUsage,
			ExampleInputPrependAppend,
			ExampleInputPrefixSuffix,
			ExampleInputPassword,
			ExampleInputClearable,
			ExampleInputSize,
			ExampleInputDisabled,
			ExampleInputGroup
		}
	};
</script>