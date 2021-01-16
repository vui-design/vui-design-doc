<template>
	<div>
		<vui-doc-markdown>
			<h1>Anchor 锚点</h1>
			<p>用于跳转到页面指定位置。</p>
			<h2>何时使用</h2>
			<p>需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。</p>
			<h2>代码演示</h2>
		</vui-doc-markdown>
		<vui-row v-bind:gutter="16">
			<vui-col v-bind:span="12">
				<ExampleAnchorBasicUsage />
				<ExampleAnchorOpenInNewWindow />
				<ExampleAnchorStatic />
			</vui-col>
			<vui-col v-bind:span="12">
				<ExampleAnchorCustomizeHighlight />
				<ExampleAnchorOffset />
				<ExampleAnchorClick />
				<ExampleAnchorChange />
			</vui-col>
		</vui-row>
		<vui-doc-markdown>
			<h2 id="example-api">API</h2>
			<h3>Anchor 属性</h3>
			<table id="example-api-anchor-props" class="example-api-props">
				<thead>
					<tr>
						<th width="160">属性</th>
						<th>说明</th>
						<th width="140">类型</th>
						<th width="160">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>affix</td>
						<td>固钉模式</td>
						<td>Boolean</td>
						<td><code>true</code></td>
					</tr>
					<tr>
						<td>showInkInStatic</td>
						<td>静态位置下是否显示小圆点</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>bounds</td>
						<td>锚点区域边界</td>
						<td>Number</td>
						<td><code>5</code></td>
					</tr>
					<tr>
						<td>offset</td>
						<td>锚点滚动偏移量</td>
						<td>Number</td>
						<td><code>0</code></td>
					</tr>
					<tr>
						<td>getScrollContainer</td>
						<td>指定滚动容器</td>
						<td>Function</td>
						<td><code>() => window</code></td>
					</tr>
					<tr>
						<td>getCurrentAnchorLink</td>
						<td>自定义高亮的锚点链接</td>
						<td>Function</td>
						<td>--</td>
					</tr>
					<tr>
						<td>offsetTop</td>
						<td>距离窗口顶部达到指定偏移量后触发</td>
						<td>Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>offsetBottom</td>
						<td>距离窗口底部达到指定偏移量后触发</td>
						<td>Number</td>
						<td>--</td>
					</tr>
				</tbody>
			</table>
			<h3>Anchor 事件</h3>
			<table id="example-api-anchor-events" class="example-api-events">
				<thead>
					<tr>
						<th width="160">事件名</th>
						<th>说明</th>
						<th width="140">类型</th>
						<th width="160">回调参数</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>click</td>
						<td>点击锚点链接时触发的事件回调，返回事件对象及锚点连接</td>
						<td>Function</td>
						<td><code>e, link</code></td>
					</tr>
					<tr>
						<td>change</td>
						<td>锚点链接改变时触发的事件回调，返回当前锚点连接</td>
						<td>Function</td>
						<td><code>newHref, oldHref</code></td>
					</tr>
				</tbody>
			</table>
			<h3>AnchorLink 属性</h3>
			<table id="example-api-anchor-link-props" class="example-api-props">
				<thead>
					<tr>
						<th width="160">属性</th>
						<th>说明</th>
						<th width="140">类型</th>
						<th width="160">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>href</td>
						<td>锚点链接</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>title</td>
						<td>文字内容</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>target</td>
						<td>指定在何处显示链接的资源</td>
						<td>String</td>
						<td>--</td>
					</tr>
				</tbody>
			</table>
		</vui-doc-markdown>
	</div>
</template>

<script>
	import MixinAnchors from "src/mixins/anchors";
	import VuiDocMarkdown from "src/components/markdown";
	import ExampleAnchorBasicUsage from "./examples/basic-usage";
	import ExampleAnchorOpenInNewWindow from "./examples/open-in-new-window";
	import ExampleAnchorStatic from "./examples/static";
	import ExampleAnchorCustomizeHighlight from "./examples/customize-highlight";
	import ExampleAnchorOffset from "./examples/offset";
	import ExampleAnchorClick from "./examples/click";
	import ExampleAnchorChange from "./examples/change";

	export default {
		mixins: [
			MixinAnchors
		],
		components: {
			VuiDocMarkdown,
			ExampleAnchorBasicUsage,
			ExampleAnchorOpenInNewWindow,
			ExampleAnchorStatic,
			ExampleAnchorCustomizeHighlight,
			ExampleAnchorOffset,
			ExampleAnchorClick,
			ExampleAnchorChange
		}
	};
</script>