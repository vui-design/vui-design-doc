<template>
	<div>
		<Markdown>
			<h1>Tooltip 文字提示</h1>
			<p>简单的文字提示气泡框。</p>
			<h2>何时使用</h2>
			<ul>
				<li>鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。</li>
				<li>可用来代替系统默认的 title 提示，提供一个按钮/文字/操作的文案解释。</li>
			</ul>
			<h2>代码演示</h2>
		</Markdown>
		<vui-row :gutter="20">
			<vui-col :span="12">
				<ExampleTooltipBasicUsage />
				<ExampleTooltipTheme />
				<ExampleTooltipCustomizedContent />
			</vui-col>
			<vui-col :span="12">
				<ExampleTooltipPlacement />
			</vui-col>
		</vui-row>
		<Markdown>
			<h2 id="example-api">API</h2>
			<h3>Tooltip 属性</h3>
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
						<td>theme</td>
						<td>颜色主题，可选值为 <code>light</code>、<code>dark</code> 或者不设</td>
						<td>String</td>
						<td><code>dark</code></td>
					</tr>
					<tr>
						<td>content</td>
						<td>提示内容</td>
						<td>String | Slot</td>
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
			<h3>Tooltip 事件</h3>
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
	import ExampleTooltipBasicUsage from "./examples/basic-usage";
	import ExampleTooltipTheme from "./examples/theme";
	import ExampleTooltipCustomizedContent from "./examples/customized-content";
	import ExampleTooltipPlacement from "./examples/placement";

	export default {
		mixins: [
			MixinCatalogue
		],
		components: {
			Markdown,
			ExampleTooltipBasicUsage,
			ExampleTooltipTheme,
			ExampleTooltipCustomizedContent,
			ExampleTooltipPlacement
		}
	};
</script>