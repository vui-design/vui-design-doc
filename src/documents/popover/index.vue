<template>
	<div>
		<Markdown>
			<h1>Popover 气泡卡片</h1>
			<p>点击/鼠标移入元素，弹出气泡式的卡片浮层</p>
			<h2>何时使用</h2>
			<ul>
				<li>当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。</li>
				<li>和 <code>Tooltip</code> 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。</li>
			</ul>
			<h2>代码演示</h2>
		</Markdown>
		<vui-row :gutter="20">
			<vui-col :span="12">
				<ExamplePopoverBasicUsage />
				<ExamplePopoverPlacement />
			</vui-col>
			<vui-col :span="12">
				<ExamplePopoverTrigger />
				<ExamplePopoverControl />
			</vui-col>
		</vui-row>
		<Markdown>
			<h2 id="example-api">API</h2>
			<h3>Popover 属性</h3>
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
						<td>trigger</td>
						<td>触发方式，可选值为 <code>hover</code>、<code>focus</code>、<code>click</code> 或者不设</td>
						<td>String</td>
						<td><code>hover</code></td>
					</tr>
					<tr>
						<td>visible</td>
						<td>是否可见，可以使用 <code>v-model</code> 双向绑定</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>title</td>
						<td>卡片标题</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>content</td>
						<td>卡片内容</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>minWidth</td>
						<td>卡片的最小宽度</td>
						<td>Number | String</td>
						<td><code>150</code></td>
					</tr>
					<tr>
						<td>maxWidth</td>
						<td>卡片的最大宽度</td>
						<td>Number | String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>placement</td>
						<td>弹出位置，可选值为 <code>top</code>、<code>top-start</code>、<code>top-end</code>、<code>bottom</code>、<code>bottom-start</code>、<code>bottom-end</code>、<code>left</code>、<code>left-start</code>、<code>left-end</code>、<code>right</code>、<code>right-start</code>、<code>right-end</code> 或者不设</td>
						<td>String</td>
						<td><code>top</code></td>
					</tr>
				</tbody>
			</table>
			<h3>Popover 事件</h3>
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
	import ExamplePopoverBasicUsage from "./examples/basic-usage";
	import ExamplePopoverPlacement from "./examples/placement";
	import ExamplePopoverTrigger from "./examples/trigger";
	import ExamplePopoverControl from "./examples/control";

	export default {
		mixins: [
			MixinCatalogue
		],
		components: {
			Markdown,
			ExamplePopoverBasicUsage,
			ExamplePopoverPlacement,
			ExamplePopoverTrigger,
			ExamplePopoverControl
		}
	};
</script>