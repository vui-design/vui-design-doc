<template>
	<div>
		<document>
			<h1>Progress 进度条</h1>
			<p>展示操作的当前进度。</p>
			<h2>何时使用</h2>
			<p>在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。</p>
			<ul>
				<li>当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时；</li>
				<li>当需要显示一个操作完成的百分比时。</li>
			</ul>
			<h2>代码演示</h2>
		</document>
		<vui-row :gutter="20">
			<vui-col :span="12">
				<ExampleProgressLine />
				<ExampleProgressLineSmall />
				<ExampleProgressCircle />
				<ExampleProgressCircleSmall />
				<ExampleProgressDashboard />
			</vui-col>
			<vui-col :span="12">
				<ExampleProgressDynamic />
				<ExampleProgressFormat />
				<ExampleProgressColor />
				<ExampleProgressLinecap />
			</vui-col>
		</vui-row>
		<document>
			<h2 id="example-api">API</h2>
			<h3>Progress 共用属性</h3>
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
						<td>type</td>
						<td>类型，可选值为 <code>line</code>、<code>circle</code>、<code>dashboard</code> 或者不设</td>
						<td>String</td>
						<td><code>line</code></td>
					</tr>
					<tr>
						<td>size</td>
						<td>尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
						<td>String</td>
						<td><code>medium</code></td>
					</tr>
					<tr>
						<td>percentage</td>
						<td>百分比，可选值 <code>0</code> 至 <code>100</code></td>
						<td>Number</td>
						<td><code>0</code></td>
					</tr>
					<tr>
						<td>status</td>
						<td>状态，可选值 <code>normal</code>、<code>active</code>、<code>exception</code>、<code>success</code> 或者不设，其中 <code>active</code> 状态仅限 <code>line</code> 类型下可用</td>
						<td>String</td>
						<td><code>normal</code></td>
					</tr>
					<tr>
						<td>color</td>
						<td>自定义颜色，会覆盖 <code>status</code> 状态下的默认颜色</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>format</td>
						<td>内容的模板函数，接收 <code>percentage</code> 作为参数</td>
						<td>Function</td>
						<td>--</td>
					</tr>
					<tr>
						<td>stroke</td>
						<td>线条尺寸，单位 <code>px</code>，默认值为 <code>{ small: 6, medium: 8, large: 10 }</code></td>
						<td>Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>linecap</td>
						<td>线条边缘形状，可选值为 <code>round</code>、<code>square</code> 或者不设</td>
						<td>String</td>
						<td><code>round</code></td>
					</tr>
					<tr>
						<td>showInfo</td>
						<td>是否显示进度数值或状态图标</td>
						<td>Boolean</td>
						<td><code>true</code></td>
					</tr>
				</tbody>
			</table>
			<h3>Progress Circle 属性</h3>
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
						<td>canvas</td>
						<td>画布尺寸，单位 <code>px</code>，默认值为 <code>{ small: 80, medium: 120, large: 160 }</code></td>
						<td>Number</td>
						<td>--</td>
					</tr>
				</tbody>
			</table>
			<h3>Progress Dashboard 属性</h3>
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
						<td>canvas</td>
						<td>画布尺寸，单位 <code>px</code>，默认值为 <code>{ small: 80, medium: 120, large: 160 }</code></td>
						<td>Number</td>
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
	import ExampleProgressLine from "./examples/line";
	import ExampleProgressLineSmall from "./examples/line-small";
	import ExampleProgressCircle from "./examples/circle";
	import ExampleProgressCircleSmall from "./examples/circle-small";
	import ExampleProgressDashboard from "./examples/dashboard";
	import ExampleProgressDynamic from "./examples/dynamic";
	import ExampleProgressFormat from "./examples/format";
	import ExampleProgressColor from "./examples/color";
	import ExampleProgressLinecap from "./examples/linecap";

	export default {
		mixins: [
			MixinAnchors
		],
		components: {
			Document,
			ExampleProgressLine,
			ExampleProgressLineSmall,
			ExampleProgressCircle,
			ExampleProgressCircleSmall,
			ExampleProgressDashboard,
			ExampleProgressDynamic,
			ExampleProgressFormat,
			ExampleProgressColor,
			ExampleProgressLinecap
		}
	};
</script>