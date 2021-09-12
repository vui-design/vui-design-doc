<template>
	<div>
		<document>
			<h1>Steps 步骤条</h1>
			<p>引导用户按照流程完成任务的导航条。</p>
			<h2>何时使用</h2>
			<p>当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。</p>
			<h2>代码演示</h2>
		</document>
		<example-basic-usage />
		<example-small />
		<example-icon />
		<example-error />
		<example-vertical />
		<example-vertical-small />
		<example-dot />
		<example-control />
		<document>
			<h2 id="example-api">API</h2>
			<h3>Steps 属性</h3>
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
						<td>步骤条类型，可选值为 <code>default</code>、<code>dot</code> 或者不设</td>
						<td>String</td>
						<td><code>default</code></td>
					</tr>
					<tr>
						<td>direction</td>
						<td>步骤条的方向，目前支持水平（<code>horizontal</code>）和竖直（<code>vertical</code>）两种方向</td>
						<td>String</td>
						<td><code>horizontal</code></td>
					</tr>
					<tr>
						<td>size</td>
						<td>步骤条的尺寸，可选值为 <code>small</code> 或者不设</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>step</td>
						<td>当前步骤，从 <code>0</code> 开始记数。在子 <code>Step</code> 组件中，可以通过 <code>status</code> 属性覆盖状态</td>
						<td>Number</td>
						<td><code>0</code></td>
					</tr>
					<tr>
						<td>status</td>
						<td>当前步骤的状态，可选值为 <code>wait</code>、<code>process</code>、<code>finish</code>、<code>error</code> 或者不设</td>
						<td>String</td>
						<td><code>process</code></td>
					</tr>
				</tbody>
			</table>
			<h3>Step 属性</h3>
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
						<td>icon</td>
						<td>步骤的图标，可选</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>title</td>
						<td>步骤的标题</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>description</td>
						<td>步骤的详细描述，可选</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>status</td>
						<td>步骤的状态，可选值为 <code>wait</code>、<code>process</code>、<code>finish</code>、<code>error</code> 或者不设。当不配置该属性时，将根据父级 <code>Steps</code> 组件的 <code>step</code> 和 <code>status</code> 属性自动指定状态</td>
						<td>String</td>
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
	import ExampleBasicUsage from "./examples/basic-usage";
	import ExampleSmall from "./examples/small";
	import ExampleIcon from "./examples/icon";
	import ExampleError from "./examples/error";
	import ExampleVertical from "./examples/vertical";
	import ExampleVerticalSmall from "./examples/vertical-small";
	import ExampleDot from "./examples/dot";
	import ExampleControl from "./examples/control";

	export default {
		mixins: [
			MixinAnchors
		],
		components: {
			Document,
			ExampleBasicUsage,
			ExampleSmall,
			ExampleIcon,
			ExampleError,
			ExampleVertical,
			ExampleVerticalSmall,
			ExampleDot,
			ExampleControl
		}
	};
</script>