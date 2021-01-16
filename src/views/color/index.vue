<template>
	<div>
		<vui-doc-markdown>
			<h1>Color 色彩</h1>
			<p>为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。</p>
			<h2>主色彩</h2>
			<p>Vui Design 使用较为安全的蓝色作为主色调，其中 <code>Light</code> 常用于 <code>hover</code> 状态色，<code>Dark</code> 常用于 <code>active</code> 状态色。</p>
		</vui-doc-markdown>
		<ExampleColorPrimary />
		<vui-doc-markdown>
			<h2>辅助色</h2>
			<p>辅助色是具有代表性的颜色，常用于类型提示，比如信息、警告、成功和失败。</p>
		</vui-doc-markdown>
		<ExampleColorAuxiliary />
		<vui-doc-markdown>
			<h2>中性色</h2>
			<p>中性色常用于文本、边框、背景或阴影等，合理运用中性色可以很好的体现出页面的层次结构。</p>
		</vui-doc-markdown>
		<ExampleColorNeutral />
	</div>
</template>

<script>
	import MixinAnchors from "src/mixins/anchors";
	import VuiDocMarkdown from "src/components/markdown";
	import ExampleColorPrimary from "./examples/primary";
	import ExampleColorAuxiliary from "./examples/auxiliary";
	import ExampleColorNeutral from "./examples/neutral";

	export default {
		mixins: [
			MixinAnchors
		],
		components: {
			VuiDocMarkdown,
			ExampleColorPrimary,
			ExampleColorAuxiliary,
			ExampleColorNeutral
		}
	};
</script>