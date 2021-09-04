<template>
	<div>
		<document>
			<h1>Image 图片</h1>
			<p>图片容器。</p>
			<h2>何时使用</h2>
			<p>在保留原生 <code>img</code> 标签的特性下，支持自定义图片填充方式、懒加载、自定义占位、加载失败等。</p>
			<h2>代码演示</h2>
		</document>
		<ImageBasicUsage />
		<ImagePlaceholder />
		<ImageError />
		<ImageLazyload />
		<document>
			<h2 id="example-api">API</h2>
			<h3>Image 属性</h3>
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
						<td>src</td>
						<td>图片源，同原生 <code>img</code> 标签</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>replacement</td>
						<td>当图片源为空时的替代图片，可用于设置默认图片</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>filled</td>
						<td>图片尺寸自适应父容器宽高（即设置图片宽高为 <code>100%</code>，撑满父容器）</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>fit</td>
						<td>对图片进行保留原始比例的剪切、缩放或者直接进行拉伸等，同原生 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit" target="_blank">object-fit</a>，可选值为 <code>fill</code>、<code>contain</code>、<code>cover</code>、<code>none</code>、<code>scale-down</code> 或者不设</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>alt</td>
						<td>规定图片无法显示时的替代文本，同原生 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement/alt" target="_blank">alt</a></td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>referrerPolicy</td>
						<td>同原生 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement/referrerPolicy" target="_blank">referrerPolicy</a></td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>lazyload</td>
						<td>是否开启懒加载</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>scrollContainer</td>
						<td>开启懒加载后，监听 <code>scroll</code> 事件的容器，默认为最近的一个 <code>overflow</code> 值为 <code>auto</code> 或 <code>scroll</code> 的父元素</td>
						<td>String | HTMLElement | Function</td>
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
	import ImageBasicUsage from "./examples/basic-usage";
	import ImagePlaceholder from "./examples/placeholder";
	import ImageError from "./examples/error";
	import ImageLazyload from "./examples/lazyload";

	export default {
		mixins: [
			MixinAnchors
		],
		components: {
			Document,
			ImageBasicUsage,
			ImagePlaceholder,
			ImageError,
			ImageLazyload,
		}
	};
</script>