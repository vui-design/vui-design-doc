<template>
	<div>
		<Markdown>
			<h1>Skeleton 骨架屏</h1>
			<p>在需要等待加载内容的位置提供一个占位图形组合。</p>
			<h2>何时使用</h2>
			<ul>
				<li>网络较慢，需要长时间等待加载处理的情况下；</li>
				<li>图文信息内容较多的列表/卡片中；</li>
				<li>只在第一次加载数据的时候使用；</li>
				<li>可以被 <code>Spin</code> 完全代替，但是在可用的场景下可以比 <code>Spin</code> 提供更好的视觉效果和用户体验。</li>
			</ul>
			<h2>代码演示</h2>
		</Markdown>
		<ExampleSkeletonBasicUsage />
		<ExampleSkeletonComplex />
		<ExampleSkeletonAnimated />
		<ExampleSkeletonChildren />
		<ExampleSkeletonList />
		<Markdown>
			<h2 id="example-api">API</h2>
			<h3>Skeleton 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="100">属性</th>
						<th>说明</th>
						<th width="240">类型</th>
						<th width="100">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>loading</td>
						<td>为 <code>true</code> 时，显示占位图，反之则直接展示子组件</td>
						<td>Boolean</td>
						<td>--</td>
					</tr>
					<tr>
						<td>animated</td>
						<td>是否展示动画效果</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>avatar</td>
						<td>是否显示头像占位图</td>
						<td>Boolean | SkeletonAvatarProps</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>title</td>
						<td>是否显示标题占位图</td>
						<td>Boolean | SkeletonTitleProps</td>
						<td><code>true</code></td>
					</tr>
					<tr>
						<td>paragraph</td>
						<td>是否显示段落占位图</td>
						<td>Boolean | SkeletonParagraphProps</td>
						<td><code>true</code></td>
					</tr>
				</tbody>
			</table>
			<h3>SkeletonAvatarProps 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="100">属性</th>
						<th>说明</th>
						<th width="240">类型</th>
						<th width="100">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>shape</td>
						<td>头像占位图的形状，可选值为 <code>circle</code>、<code>square</code> 或者不设</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>size</td>
						<td>头像占位图的尺寸，预设值为 <code>small</code>、<code>medium</code>、<code>large</code>，可以设置为具体的数值</td>
						<td>String | Number</td>
						<td>--</td>
					</tr>
				</tbody>
			</table>
			<h3>SkeletonTitleProps 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="100">属性</th>
						<th>说明</th>
						<th width="240">类型</th>
						<th width="100">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>width</td>
						<td>设置标题占位图的宽度</td>
						<td>String | Number</td>
						<td>--</td>
					</tr>
				</tbody>
			</table>
			<h3>SkeletonParagraphProps 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="100">属性</th>
						<th>说明</th>
						<th width="240">类型</th>
						<th width="100">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>rows</td>
						<td>设置段落占位图的行数</td>
						<td>Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>width</td>
						<td>设置段落占位图的宽度，若为数组时则为对应的每行宽度，反之则是最后一行的宽度</td>
						<td>String | Number | Array</td>
						<td>--</td>
					</tr>
				</tbody>
			</table>
		</Markdown>
	</div>
</template>

<script>
	import MixinCatalogue from "@/mixins/catalogue";
	import Markdown from "@/components/markdown";
	import ExampleSkeletonBasicUsage from "./examples/basic-usage";
	import ExampleSkeletonComplex from "./examples/complex";
	import ExampleSkeletonAnimated from "./examples/animated";
	import ExampleSkeletonChildren from "./examples/children";
	import ExampleSkeletonList from "./examples/list";

	export default {
		mixins: [
			MixinCatalogue
		],
		components: {
			Markdown,
			ExampleSkeletonBasicUsage,
			ExampleSkeletonComplex,
			ExampleSkeletonAnimated,
			ExampleSkeletonChildren,
			ExampleSkeletonList
		}
	};
</script>