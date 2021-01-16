<template>
	<div>
		<vui-doc-markdown>
			<h1>Tag 标签</h1>
			<p>进行标记和分类的小标签。</p>
			<h2>何时使用</h2>
			<ul>
				<li>用于标记事物的属性和维度。</li>
				<li>进行分类。</li>
			</ul>
			<h2>代码演示</h2>
		</vui-doc-markdown>
		<vui-row v-bind:gutter="16">
			<vui-col v-bind:span="12">
				<ExampleTagBasicUsage />
				<ExampleTagSize />
				<ExampleTagColor />
				<ExampleTagIcon />
			</vui-col>
			<vui-col v-bind:span="12">
				<ExampleTagClosable />
				<ExampleTagControl />
				<ExampleTagCheckable />
				<ExampleTagHotTags />
			</vui-col>
		</vui-row>
		<vui-doc-markdown>
			<h2 id="example-api">API</h2>
			<h3>Tag 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="80">属性</th>
						<th>说明</th>
						<th width="120">类型</th>
						<th width="100">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>size</td>
						<td>标签尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
						<td>String</td>
						<td><code>medium</code></td>
					</tr>
					<tr>
						<td>color</td>
						<td>标签颜色，预设颜色详见示例〔多彩标签〕，支持自定义颜色值</td>
						<td>String</td>
						<td><code>default</code></td>
					</tr>
					<tr>
						<td>icon</td>
						<td>设置标签图标类型/图标</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>closable</td>
						<td>标签是否可以关闭</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>checkable</td>
						<td>标签是否可以选择</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>checked</td>
						<td>标签选中状态，仅在 <code>checkable</code> 为 <code>true</code> 时有效，可以使用 <code>v-model</code> 双向绑定数据</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
				</tbody>
			</table>
			<h3>Tag 事件</h3>
			<table class="example-api-events">
				<thead>
					<tr>
						<th width="80">事件名</th>
						<th>说明</th>
						<th width="120">类型</th>
						<th width="100">回调参数</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>click</td>
						<td>点击标签时的事件回调函数</td>
						<td>Function</td>
						<td><code>event</code></td>
					</tr>
					<tr>
						<td>close</td>
						<td>点击关闭按钮时的事件回调函数</td>
						<td>Function</td>
						<td><code>event</code></td>
					</tr>
					<tr>
						<td>input</td>
						<td>切换选中状态时的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
						<td>Function</td>
						<td><code>checked</code></td>
					</tr>
					<tr>
						<td>change</td>
						<td>切换选中状态时的事件回调函数</td>
						<td>Function</td>
						<td><code>checked</code></td>
					</tr>
				</tbody>
			</table>
		</vui-doc-markdown>
	</div>
</template>

<script>
	import MixinAnchors from "src/mixins/anchors";
	import VuiDocMarkdown from "src/components/markdown";
	import ExampleTagBasicUsage from "./examples/basic-usage";
	import ExampleTagSize from "./examples/size";
	import ExampleTagIcon from "./examples/icon";
	import ExampleTagClosable from "./examples/closable";
	import ExampleTagControl from "./examples/control";
	import ExampleTagCheckable from "./examples/checkable";
	import ExampleTagHotTags from "./examples/hot-tags";
	import ExampleTagColor from "./examples/color";

	export default {
		mixins: [
			MixinAnchors
		],
		components: {
			VuiDocMarkdown,
			ExampleTagBasicUsage,
			ExampleTagSize,
			ExampleTagIcon,
			ExampleTagClosable,
			ExampleTagControl,
			ExampleTagCheckable,
			ExampleTagHotTags,
			ExampleTagColor
		}
	};
</script>