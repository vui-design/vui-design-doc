<template>
	<div>
		<vui-doc-markdown>
			<h1>Badge 徽标</h1>
			<p>图标右上角的圆形徽标。</p>
			<h2>何时使用</h2>
			<p>一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。</p>
			<h2>代码演示</h2>
		</vui-doc-markdown>
		<vui-row v-bind:gutter="16">
			<vui-col v-bind:span="12">
				<ExampleBadgeBasicUsage />
				<ExampleBadgeOverflowCount />
				<ExampleBadgeText />
				<ExampleBadgeDot />
				<ExampleBadgeAlone />
			</vui-col>
			<vui-col v-bind:span="12">
				<ExampleBadgeType />
				<ExampleBadgeStatus />
				<ExampleBadgeColorful />
			</vui-col>
		</vui-row>
		<vui-doc-markdown>
			<h2 id="example-api">API</h2>
			<h3>Badge 属性</h3>
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
						<td>徽标类型，可选值为 <code>default</code>、<code>primary</code>、<code>info</code>、<code>warning</code>、<code>success</code>、<code>error</code> 或者不设</td>
						<td>String</td>
						<td><code>error</code></td>
					</tr>
					<tr>
						<td>status</td>
						<td>设置徽标为状态点，可选值为 <code>default</code>、<code>processing</code>、<code>warning</code>、<code>success</code>、<code>error</code> 或者不设</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>color</td>
						<td>自定义状态点的颜色，预设颜色详见示例〔多彩徽标〕</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>count</td>
						<td>徽标数值</td>
						<td>Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>overflowCount</td>
						<td>最大显示数值，当 <code>count</code> 大于 <code>overflowCount</code> 限定的值时会显示为 <code>overflowCount+</code></td>
						<td>Number</td>
						<td><code>99</code></td>
					</tr>
					<tr>
						<td>text</td>
						<td>徽标文本</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>dot</td>
						<td>不显示具体的数值或文本</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>offset</td>
						<td>设置徽标的位置偏移，格式为 <code>[x, y]</code>，其中 <code>x</code> 表示水平位移，<code>y</code> 表示垂直位移</td>
						<td>Array</td>
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
	import ExampleBadgeBasicUsage from "./examples/basic-usage";
	import ExampleBadgeOverflowCount from "./examples/overflow-count";
	import ExampleBadgeText from "./examples/text";
	import ExampleBadgeDot from "./examples/dot";
	import ExampleBadgeAlone from "./examples/alone";
	import ExampleBadgeType from "./examples/type";
	import ExampleBadgeStatus from "./examples/status";
	import ExampleBadgeColorful from "./examples/colorful";

	export default {
		name: "BadgeZhCN",
		mixins: [
			MixinAnchors
		],
		components: {
			VuiDocMarkdown,
			ExampleBadgeBasicUsage,
			ExampleBadgeOverflowCount,
			ExampleBadgeText,
			ExampleBadgeDot,
			ExampleBadgeAlone,
			ExampleBadgeType,
			ExampleBadgeStatus,
			ExampleBadgeColorful
		}
	};
</script>