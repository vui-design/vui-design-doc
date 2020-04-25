<template>
	<div>
		<Markdown>
			<h1>Popconfirm 气泡确认框</h1>
			<p>点击元素，弹出气泡式的确认框。</p>
			<h2>何时使用</h2>
			<ul>
				<li>目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。</li>
				<li>和 Modal Confirm 弹出的全屏居中模态对话框相比，交互形式更轻量。</li>
			</ul>
			<h2>代码演示</h2>
		</Markdown>
		<vui-row :gutter="20">
			<vui-col :span="12">
				<ExamplePopconfirmBasicUsage />
				<ExamplePopconfirmPlacement />
			</vui-col>
			<vui-col :span="12">
				<ExamplePopconfirmIcon />
			</vui-col>
		</vui-row>
		<Markdown>
			<h2 id="example-api">API</h2>
			<h3>Popconfirm 属性</h3>
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
						<td>visible</td>
						<td>是否可见，可以使用 <code>v-model</code> 双向绑定</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>icon</td>
						<td>确认框的图标</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>title</td>
						<td>确认框的描述</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>cancelButtonType</td>
						<td>取消按钮类型</td>
						<td>String</td>
						<td><code>text</code></td>
					</tr>
					<tr>
						<td>okButtonType</td>
						<td>确认按钮类型</td>
						<td>String</td>
						<td><code>primary</code></td>
					</tr>
					<tr>
						<td>cancelText</td>
						<td>取消按钮文本</td>
						<td>String</td>
						<td><code>取消</code></td>
					</tr>
					<tr>
						<td>okText</td>
						<td>确认按钮类型</td>
						<td>String</td>
						<td><code>确认</code></td>
					</tr>
					<tr>
						<td>minWidth</td>
						<td>确认框的最小宽度</td>
						<td>Number | String</td>
						<td><code>150</code></td>
					</tr>
					<tr>
						<td>maxWidth</td>
						<td>确认框的最大宽度</td>
						<td>Number | String</td>
						<td><code>300</code></td>
					</tr>
					<tr>
						<td>placement</td>
						<td>弹出位置，可选值为 <code>top</code>、<code>top-start</code>、<code>top-end</code>、<code>bottom</code>、<code>bottom-start</code>、<code>bottom-end</code>、<code>left</code>、<code>left-start</code>、<code>left-end</code>、<code>right</code>、<code>right-start</code>、<code>right-end</code> 或者不设</td>
						<td>String</td>
						<td><code>top</code></td>
					</tr>
				</tbody>
			</table>
			<h3>Popconfirm 事件</h3>
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
						<td>cancel</td>
						<td>点击取消按钮的事件回调</td>
						<td>Function</td>
						<td>--</td>
					</tr>
					<tr>
						<td>ok</td>
						<td>点击确认按钮的事件回调</td>
						<td>Function</td>
						<td>--</td>
					</tr>
					<tr>
						<td>change</td>
						<td>可见状态发生变化时触发的事件回调，可以使用 <code>v-model</code> 双向绑定</td>
						<td>Function</td>
						<td><code>visible</code></td>
					</tr>
				</tbody>
			</table>
		</Markdown>
	</div>
</template>

<script>
	import MixinCatalogue from "@/mixins/catalogue";
	import Markdown from "@/components/markdown";
	import ExamplePopconfirmBasicUsage from "./examples/basic-usage";
	import ExamplePopconfirmPlacement from "./examples/placement";
	import ExamplePopconfirmIcon from "./examples/icon";

	export default {
		mixins: [
			MixinCatalogue
		],
		components: {
			Markdown,
			ExamplePopconfirmBasicUsage,
			ExamplePopconfirmPlacement,
			ExamplePopconfirmIcon
		}
	};
</script>