<template>
	<div>
		<Markdown>
			<h1>Badge 徽标</h1>
			<p>图标右上角的圆形徽标。</p>
			<h2>何时使用</h2>
			<p>一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。</p>
			<h2>代码演示</h2>
		</Markdown>
		<vui-row :gutter="20">
			<vui-col :span="12">
				<ExampleBadgeBasicUsage />
				<ExampleBadgeOverflowCount />
				<ExampleBadgeText />
				<ExampleBadgeDot />
			</vui-col>
			<vui-col :span="12">
				<ExampleBadgeAlone />
				<ExampleBadgeType />
				<ExampleBadgeStatus />
			</vui-col>
		</vui-row>
		<Markdown>
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
		</Markdown>
	</div>
</template>

<script>
	import MixinCatalogue from "@/mixins/catalogue";
	import Markdown from "@/components/markdown"
	import ExampleBadgeBasicUsage from "./examples/basic-usage";
	import ExampleBadgeOverflowCount from "./examples/overflow-count";
	import ExampleBadgeText from "./examples/text";
	import ExampleBadgeDot from "./examples/dot";
	import ExampleBadgeAlone from "./examples/alone";
	import ExampleBadgeType from "./examples/type";
	import ExampleBadgeStatus from "./examples/status";

	export default {
		name: "BadgeZhCN",
		mixins: [
			MixinCatalogue
		],
		components: {
			Markdown,
			ExampleBadgeBasicUsage,
			ExampleBadgeOverflowCount,
			ExampleBadgeText,
			ExampleBadgeDot,
			ExampleBadgeAlone,
			ExampleBadgeType,
			ExampleBadgeStatus
		}
	};
</script>