<template>
	<div>
		<Markdown>
			<h1>Space 间距</h1>
			<p>设置组件之间的间距。</p>
			<h2>何时使用</h2>
			<p>避免组件紧贴在一起，拉开统一的空间。</p>
			<h2>代码演示</h2>
		</Markdown>
		<SpaceBasicUsage />
		<SpaceVertical />
		<SpaceSize />
		<SpaceAlign />
		<SpaceCustomize />
		<SpaceDivider />
		<Markdown>
			<h2 id="example-api">API</h2>
			<h3>Space 属性</h3>
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
						<td>direction</td>
						<td>内容排列方向，可选值为 <code>horizontal</code>、<code>vertical</code> 或者不设</td>
						<td>String</td>
						<td><code>horizontal</code></td>
					</tr>
					<tr>
						<td>align</td>
						<td>对齐方式，可选值为 <code>start</code>、<code>center</code>、<code>end</code> 或者不设。该属性仅在 <code>direction</code> 为 <code>horizontal</code> 时有效</td>
						<td>String</td>
						<td><code>center</code></td>
					</tr>
					<tr>
						<td>size</td>
						<td>间距大小，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设，支持自定义间距大小</td>
						<td>String | Number</td>
						<td><code>medium</code></td>
					</tr>
				</tbody>
			</table>
		</Markdown>
	</div>
</template>

<script>
	import MixinCatalogue from "@/mixins/catalogue";
	import Markdown from "@/components/markdown";
	import SpaceBasicUsage from "./examples/basic-usage";
	import SpaceVertical from "./examples/vertical";
	import SpaceSize from "./examples/size";
	import SpaceAlign from "./examples/align";
	import SpaceCustomize from "./examples/customize";
	import SpaceDivider from "./examples/divider";

	export default {
		mixins: [
			MixinCatalogue
		],
		components: {
			Markdown,
			SpaceBasicUsage,
			SpaceVertical,
			SpaceSize,
			SpaceAlign,
			SpaceCustomize,
			SpaceDivider
		}
	};
</script>