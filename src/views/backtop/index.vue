<template>
	<div>
		<vui-doc-markdown>
			<h1>Backtop 回到顶部</h1>
			<p>返回页面顶部的操作按钮。</p>
			<h2>何时使用</h2>
			<ul>
				<li>当页面内容区域比较长时；</li>
				<li>当用户需要频繁返回顶部查看相关内容时。</li>
			</ul>
			<h2>代码演示</h2>
		</vui-doc-markdown>
		<vui-row v-bind:gutter="16">
			<vui-col v-bind:span="12">
				<BacktopBasicUsage />
			</vui-col>
			<vui-col v-bind:span="12">
				<BacktopCustom />
			</vui-col>
		</vui-row>
		<vui-doc-markdown>
			<h2 id="example-api">API</h2>
			<h3>Backtop 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="120">属性</th>
						<th>说明</th>
						<th width="220">类型</th>
						<th width="100">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>threshold</td>
						<td>滚动高度达到此参数值才出现 <code>Backtop</code> 按钮</td>
						<td>Number</td>
						<td><code>400</code></td>
					</tr>
					<tr>
						<td>right</td>
						<td>控制 <code>Backtop</code> 按钮的显示位置，距离页面右侧边距</td>
						<td>Number | String</td>
						<td><code>40</code></td>
					</tr>
					<tr>
						<td>bottom</td>
						<td>控制 <code>Backtop</code> 按钮的显示位置，距离页面底部边距</td>
						<td>Number | String</td>
						<td><code>40</code></td>
					</tr>
					<tr>
						<td>duration</td>
						<td>回到顶部滚动动画持续时间，单位毫秒</td>
						<td>Number</td>
						<td><code>500</code></td>
					</tr>
					<tr>
						<td>scrollContainer</td>
						<td>设置需要监听滚动事件的元素，值可以为 <code>DOM</code> 元素选择器，或 <code>DOM</code> 元素本身，或一个返回对应 <code>DOM</code> 元素的函数，默认为 <code>window</code> 对象</td>
						<td>String | HTMLElement | Function</td>
						<td>--</td>
					</tr>
				</tbody>
			</table>
			<h3>Backtop 事件</h3>
			<table class="example-api-events">
				<thead>
					<tr>
						<th width="120">事件名</th>
						<th>说明</th>
						<th width="220">类型</th>
						<th width="100">回调参数</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>click</td>
						<td>点击按钮时触发的事件回调函数</td>
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
	import BacktopBasicUsage from "./examples/basic-usage";
	import BacktopCustom from "./examples/custom";

	export default {
		mixins: [
			MixinAnchors
		],
		components: {
			VuiDocMarkdown,
			BacktopBasicUsage,
			BacktopCustom
		}
	};
</script>