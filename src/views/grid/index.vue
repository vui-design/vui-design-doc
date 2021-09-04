<template>
	<div>
		<document>
			<h1>Grid 栅格系统</h1>
			<p>24栅格系统。</p>
			<h2>设计理念</h2>
			<div class="markdown-grid">
				<vui-row>
					<vui-col v-bind:span="24"><div>100%</div></vui-col>
				</vui-row>
				<vui-row>
					<vui-col v-bind:span="6"><div>25%</div></vui-col>
					<vui-col v-bind:span="6"><div>25%</div></vui-col>
					<vui-col v-bind:span="6"><div>25%</div></vui-col>
					<vui-col v-bind:span="6"><div>25%</div></vui-col>
				</vui-row>
				<vui-row>
					<vui-col v-bind:span="8"><div>33.33%</div></vui-col>
					<vui-col v-bind:span="8"><div>33.33%</div></vui-col>
					<vui-col v-bind:span="8"><div>33.33%</div></vui-col>
				</vui-row>
				<vui-row>
					<vui-col v-bind:span="12"><div>50%</div></vui-col>
					<vui-col v-bind:span="12"><div>50%</div></vui-col>
				</vui-row>
				<vui-row>
					<vui-col v-bind:span="16"><div>66.66%</div></vui-col>
					<vui-col v-bind:span="8"><div>33.33%</div></vui-col>
				</vui-row>
			</div>
			<p>在多数业务情况下，Vui 需要在设计区域内解决大量信息收纳的问题，因此在 12 栅格系统的基础上，我们将整个设计建议区域按照 24 等分的原则进行划分。</p>
			<p>划分之后的信息区块我们称之为『盒子』。建议横向排列的盒子数量最多四个，最少一个。『盒子』在整个屏幕上占比见上图。设计部分基于盒子的单位定制盒子内部的排版规则，以保证视觉层面的舒适感。</p>
			<h2>概述</h2>
			<p>布局的栅格化系统，是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：</p>
			<ul>
				<li>通过 <code>row</code> 在水平方向建立一组 <code>column</code>（简写col）</li>
				<li>你的内容应当放置于 <code>col</code> 内，并且，只有 <code>col</code> 可以作为 <code>row</code> 的直接元素</li>
				<li>栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。例如，三个等宽的列可以使用 <code>.col-8</code> 来创建</li>
				<li>如果一个 <code>row</code> 中的 <code>col</code> 总和超过 24，那么多余的 <code>col</code> 会作为一个整体另起一行排列</li>
			</ul>
			<h2>Flex 布局</h2>
			<p>Vui 的栅格化系统支持 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。</p>
			<p>Flex 布局是基于 24 栅格来定义每一个『盒子』的宽度，但不拘泥于栅格。</p>
			<h2>代码演示</h2>
		</document>
		<ExampleGridBasicUsage />
		<ExampleGridGutter />
		<ExampleGridOffset />
		<ExampleGridSort />
		<ExampleGridFlexJustify />
		<ExampleGridFlexAlign />
		<ExampleGridFlexOrder />
		<ExampleGridResponsive />
		<ExampleGridResponsiveMore />
		<document>
			<h2 id="example-api">API</h2>
			<h3>Row 属性</h3>
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
						<td>布局模式，可选值为 <code>flex</code> 或不选，在<a href="https://caniuse.com/#search=flex" target="_blank">现代浏览器</a>下有效</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>justify</td>
						<td>Flex 布局下的水平排列方式，可选值为 <code>start</code>、<code>end</code>、<code>center</code>、<code>space-around</code>、<code>space-between</code> 或者不设</td>
						<td>String</td>
						<td><code>start</code></td>
					</tr>
					<tr>
						<td>align</td>
						<td>Flex 布局下的垂直排列方式，可选值为 <code>top</code>、<code>middle</code>、<code>bottom</code> 或者不设</td>
						<td>String</td>
						<td><code>top</code></td>
					</tr>
					<tr>
						<td>gutter</td>
						<td>栅格间隔，单位 <code>px</code></td>
						<td>Number</td>
						<td><code>0</code></td>
					</tr>
				</tbody>
			</table>
			<h3>Col 属性</h3>
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
						<td>span</td>
						<td>栅格占位格数，可选值为 <code>0~24</code> 的整数，为 <code>0</code> 时相当于 <code>display: none;</code></td>
						<td>Number</td>
						<td><code>24</code></td>
					</tr>
					<tr>
						<td>offset</td>
						<td>栅格左侧的间隔格数，间隔内不可以有栅格</td>
						<td>Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>push</td>
						<td>栅格向右移动格数</td>
						<td>Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>pull</td>
						<td>栅格向左移动格数</td>
						<td>Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>order</td>
						<td>栅格顺序，仅在 Flex 布局模式下有效</td>
						<td>Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>xs</td>
						<td><code>&lt;576px</code> 响应式栅格数或者栅格属性对象，例如 <code>{span: 4, offset: 4}</code></td>
						<td>Number | Object</td>
						<td>--</td>
					</tr>
					<tr>
						<td>sm</td>
						<td><code>&ge;576px</code> 响应式栅格数或者栅格属性对象，例如 <code>{span: 4, offset: 4}</code></td>
						<td>Number | Object</td>
						<td>--</td>
					</tr>
					<tr>
						<td>md</td>
						<td><code>&ge;768px</code> 响应式栅格数或者栅格属性对象，例如 <code>{span: 4, offset: 4}</code></td>
						<td>Number | Object</td>
						<td>--</td>
					</tr>
					<tr>
						<td>lg</td>
						<td><code>&ge;992px</code> 响应式栅格数或者栅格属性对象，例如 <code>{span: 4, offset: 4}</code></td>
						<td>Number | Object</td>
						<td>--</td>
					</tr>
					<tr>
						<td>xl</td>
						<td><code>&ge;1200px</code> 响应式栅格数或者栅格属性对象，例如 <code>{span: 4, offset: 4}</code></td>
						<td>Number | Object</td>
						<td>--</td>
					</tr>
					<tr>
						<td>xxl</td>
						<td><code>&ge;1600px</code> 响应式栅格数或者栅格属性对象，例如 <code>{span: 4, offset: 4}</code></td>
						<td>Number | Object</td>
						<td>--</td>
					</tr>
				</tbody>
			</table>
		</document>
	</div>
</template>

<script>
	import MixinAnchors from "src/mixins/anchors";
	import Document from "src/components/document";
	import ExampleGridBasicUsage from "./examples/basic-usage";
	import ExampleGridGutter from "./examples/gutter";
	import ExampleGridOffset from "./examples/offset";
	import ExampleGridSort from "./examples/sort";
	import ExampleGridFlexJustify from "./examples/flex-justify";
	import ExampleGridFlexAlign from "./examples/flex-align";
	import ExampleGridFlexOrder from "./examples/flex-order";
	import ExampleGridResponsive from "./examples/responsive";
	import ExampleGridResponsiveMore from "./examples/responsive-more";

	export default {
		mixins: [
			MixinAnchors
		],
		components: {
			Document,
			ExampleGridBasicUsage,
			ExampleGridGutter,
			ExampleGridOffset,
			ExampleGridSort,
			ExampleGridFlexJustify,
			ExampleGridFlexAlign,
			ExampleGridFlexOrder,
			ExampleGridResponsive,
			ExampleGridResponsiveMore
		}
	};
</script>

<style>
	.markdown-grid { margin-bottom:20px; }
	.markdown-grid .vui-row { background-image:linear-gradient(90deg,transparent 4.16666667%,#f5f5f5 4.16666667%,#f5f5f5 8.33333333%,transparent 8.33333333%,transparent 12.5%,#f5f5f5 12.5%,#f5f5f5 16.66666667%,transparent 16.66666667%,transparent 20.83333333%,#f5f5f5 20.83333333%,#f5f5f5 25%,transparent 25%,transparent 29.16666667%,#f5f5f5 29.16666667%,#f5f5f5 33.33333333%,transparent 33.33333333%,transparent 37.5%,#f5f5f5 37.5%,#f5f5f5 41.66666667%,transparent 41.66666667%,transparent 45.83333333%,#f5f5f5 45.83333333%,#f5f5f5 50%,transparent 50%,transparent 54.16666667%,#f5f5f5 54.16666667%,#f5f5f5 58.33333333%,transparent 58.33333333%,transparent 62.5%,#f5f5f5 62.5%,#f5f5f5 66.66666667%,transparent 66.66666667%,transparent 70.83333333%,#f5f5f5 70.83333333%,#f5f5f5 75%,transparent 75%,transparent 79.16666667%,#f5f5f5 79.16666667%,#f5f5f5 83.33333333%,transparent 83.33333333%,transparent 87.5%,#f5f5f5 87.5%,#f5f5f5 91.66666667%,transparent 91.66666667%,transparent 95.83333333%,#f5f5f5 95.83333333%); }
	.markdown-grid .vui-row:not(:last-child) { margin-bottom:10px; }
	.markdown-grid .vui-row .vui-col div { height:90px; text-align:center; line-height:90px; }
	.markdown-grid .vui-row .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); color:#fff; }
	.markdown-grid .vui-row .vui-col:nth-child(even) div { background-color:rgba(255,255,255,0.3); color:#8c8c8c; }
</style>