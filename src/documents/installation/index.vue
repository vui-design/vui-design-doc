<template>
	<div>
		<Markdown>
			<h1>安装</h1>
			<h2 id="example-cdn">CDN 引入</h2>
			<p>通过 <a href="https://unpkg.com/vui-design/" target="_blank">unpkg.com/vui-design</a> 可以看到 VUI 最新版本的资源，也可以切换版本选择需要的资源，在页面上引入 <code>js</code> 和 <code>css</code> 文件即可开始使用：</p>
			<SourceCodeCdn />
			<p>通过 CDN 可以快速使用 VUI 写出一个示例：</p>
			<SourceCodeCdnDemo />
			<h2 id="example-npm">NPM 安装</h2>
			<p>推荐使用 <code>npm</code> 来安装，享受生态圈和工具带来的便利，更好地和 <code>webpack</code> 配合使用，当然，我们也推荐使用 <code>ES2015</code>。</p>
			<SourceCodeNpm />
			<p>如果您使用了 <code>npm</code> 安装，并使用 <code>webpack</code> 作为构建工具，请继续阅读快速上手章节。</p>
		</Markdown>
	</div>
</template>

<script>
	import MixinCatalogue from "@/mixins/catalogue";
	import Markdown from "@/components/markdown";
	import SourceCodeCdn from "./codes/cdn";
	import SourceCodeCdnDemo from "./codes/cdn-demo";
	import SourceCodeNpm from "./codes/npm";

	export default {
		mixins: [
			MixinCatalogue
		],
		components: {
			Markdown,
			SourceCodeCdn,
			SourceCodeCdnDemo,
			SourceCodeNpm
		}
	};
</script>

<style>

</style>