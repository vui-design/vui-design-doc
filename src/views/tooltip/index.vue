<template>
	<div>
		<vui-doc-markdown>
			<h1>Tooltip 文字提示</h1>
			<p>简单的文字提示气泡框。</p>
			<h2>何时使用</h2>
			<ul>
				<li>鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。</li>
				<li>可用来代替系统默认的 <code>title</code> 提示，提供一个按钮/文字/操作的文案解释。</li>
			</ul>
			<h2>代码演示</h2>
		</vui-doc-markdown>
		<vui-row v-bind:gutter="16">
			<vui-col v-bind:span="12">
				<ExampleTooltipBasicUsage />
				<ExampleTooltipCustomizedContent />
				<ExampleTooltipPlacement />
			</vui-col>
			<vui-col v-bind:span="12">
				<ExampleTooltipColorful />
			</vui-col>
		</vui-row>
		<vui-doc-markdown>
			<h2 id="example-api">API</h2>
			<h3>Tooltip 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="160">属性</th>
						<th>说明</th>
						<th width="200">类型</th>
						<th width="180">默认值</th>
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
						<td>color</td>
						<td>颜色，预设颜色详见示例〔多彩文字提示〕</td>
						<td>String</td>
						<td><code>dark</code></td>
					</tr>
					<tr>
						<td>content</td>
						<td>提示内容</td>
						<td>String | Number | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>maxWidth</td>
						<td>提示框的最大宽度</td>
						<td>String | Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>placement</td>
						<td>弹出位置，可选值为 <code>top</code>、<code>top-start</code>、<code>top-end</code>、<code>bottom</code>、<code>bottom-start</code>、<code>bottom-end</code>、<code>left</code>、<code>left-start</code>、<code>left-end</code>、<code>right</code>、<code>right-start</code>、<code>right-end</code> 或者不设</td>
						<td>String</td>
						<td><code>top</code></td>
					</tr>
					<tr>
						<td>getPopupContainer</td>
						<td>浮层渲染父节点，默认渲染到 <code>body</code> 上</td>
						<td>Function</td>
						<td><code>() => document.body</code></td>
					</tr>
					<tr>
						<td>beforeOpen</td>
						<td>文字提示打开前触发的回调函数，可用于判断是否允许打开，返回 <code>false</code> 时禁止打开，支持返回 <code>Promise</code> 对象</td>
						<td>Function</td>
						<td>--</td>
					</tr>
					<tr>
						<td>beforeClose</td>
						<td>文字提示关闭前触发的回调函数，可用于判断是否允许关闭，返回 <code>false</code> 时禁止关闭，支持返回 <code>Promise</code> 对象</td>
						<td>Function</td>
						<td>--</td>
					</tr>
				</tbody>
			</table>
			<h3>Tooltip 事件</h3>
			<table class="example-api-events">
				<thead>
					<tr>
						<th width="160">事件名</th>
						<th>说明</th>
						<th width="200">类型</th>
						<th width="180">回调参数</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>input</td>
						<td>可见状态发生变化时触发的事件回调，可以使用 <code>v-model</code> 双向绑定</td>
						<td>Function</td>
						<td><code>visible</code></td>
					</tr>
					<tr>
						<td>change</td>
						<td>可见状态发生变化时触发的事件回调</td>
						<td>Function</td>
						<td><code>visible</code></td>
					</tr>
				</tbody>
			</table>
		</vui-doc-markdown>
	</div>
</template>

<script>
	import MixinAnchors from "src/mixins/anchors";
	import VuiDocMarkdown from "src/components/markdown";
	import ExampleTooltipBasicUsage from "./examples/basic-usage";
	import ExampleTooltipCustomizedContent from "./examples/customized-content";
	import ExampleTooltipPlacement from "./examples/placement";
	import ExampleTooltipColorful from "./examples/colorful";

	export default {
		mixins: [
			MixinAnchors
		],
		components: {
			VuiDocMarkdown,
			ExampleTooltipBasicUsage,
			ExampleTooltipCustomizedContent,
			ExampleTooltipPlacement,
			ExampleTooltipColorful
		}
	};
</script>