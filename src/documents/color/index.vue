<template>
	<div>
		<Markdown>
			<h1>Color 色彩</h1>
			<p>为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。</p>
			<h2>主色彩</h2>
			<p>VUI 使用较为安全的蓝色作为主色调，其中 Light 常用于 hover 状态色，Dark 常用于 active 状态色。</p>
			<vui-row id="example-color-primary" :gutter="20">
				<vui-col :span="6">
					<div class="example-color" style="background-color: #2d8cf0;">
						<div class="example-color-body">
							<h4>Primary</h4>
							<p>#2d8cf0</p>
						</div>
						<div class="example-color-footer">
							<div style="background-color: #4298f2;">Light</div>
							<div style="background-color: #297ed8;">Dark</div>
						</div>
					</div>
				</vui-col>
			</vui-row>
			<br />
			<h2>辅助色</h2>
			<p>辅助色是具有代表性的颜色，常用于类型提示，比如信息、警告、成功和失败。</p>
			<vui-row id="example-color-auxiliary" :gutter="20">
				<vui-col :span="6">
					<div class="example-color" style="background-color: #5bc0de;">
						<div class="example-color-body">
							<h4>Info</h4>
							<p>#5bc0de</p>
						</div>
						<div class="example-color-footer">
							<div style="background-color: #6bc6e1;">Light</div>
							<div style="background-color: #52adc8;">Dark</div>
						</div>
					</div>
				</vui-col>
				<vui-col :span="6">
					<div class="example-color" style="background-color: #faad14;">
						<div class="example-color-body">
							<h4>Warning</h4>
							<p>#faad14</p>
						</div>
						<div class="example-color-footer">
							<div style="background-color: #fbb52b;">Light</div>
							<div style="background-color: #e19c12;">Dark</div>
						</div>
					</div>
				</vui-col>
				<vui-col :span="6">
					<div class="example-color" style="background-color: #52c41a;">
						<div class="example-color-body">
							<h4>Success</h4>
							<p>#52c41a</p>
						</div>
						<div class="example-color-footer">
							<div style="background-color: #63ca31;">Light</div>
							<div style="background-color: #4ab017;">Dark</div>
						</div>
					</div>
				</vui-col>
				<vui-col :span="6">
					<div class="example-color" style="background-color: #ed5565;">
						<div class="example-color-body">
							<h4>Error</h4>
							<p>#ed5565</p>
						</div>
						<div class="example-color-footer">
							<div style="background-color: #ef6674;">Light</div>
							<div style="background-color: #d54d5b;">Dark</div>
						</div>
					</div>
				</vui-col>
			</vui-row>
			<br />
			<h2>中性色</h2>
			<p>中性色常用于文本、边框、背景或阴影等，合理运用中性色可以很好的体现出页面的层次结构。</p>
			<vui-row id="example-color-neutral" :gutter="20">
				<vui-col :span="6">
					<div class="example-color" style="background-color: #000000;">
						<div class="example-color-body">
							<h4>基础黑色</h4>
							<p>#000000</p>
						</div>
					</div>
					<div class="example-color" style="background-color: #ffffff;">
						<div class="example-color-body">
							<h4 style="color: #666;">基础白色</h4>
							<p style="color: #666;">#ffffff</p>
						</div>
					</div>
					<div class="example-color example-color-transparent" style="background-color: transparent;">
						<div class="example-color-body">
							<h4 style="color: #666;">透明</h4>
							<p style="color: #666;">transparent</p>
						</div>
					</div>
				</vui-col>
				<vui-col :span="6">
					<div class="example-color" style="background-color: #262626;">
						<div class="example-color-body">
							<h4>主要文字（标题）</h4>
							<p>#262626</p>
						</div>
					</div>
					<div class="example-color" style="background-color: #595959;">
						<div class="example-color-body">
							<h4>常规文字（正文）</h4>
							<p>#595959</p>
						</div>
					</div>
					<div class="example-color" style="background-color: #8c8c8c;">
						<div class="example-color-body">
							<h4>次要文字（辅助）</h4>
							<p>#8c8c8c</p>
						</div>
					</div>
					<div class="example-color" style="background-color: #bfbfbf;">
						<div class="example-color-body">
							<h4>占位文字（失效）</h4>
							<p>#bfbfbf</p>
						</div>
					</div>
				</vui-col>
				<vui-col :span="6">
					<div class="example-color" style="background-color: #e0e0e0;">
						<div class="example-color-body">
							<h4 style="color: #666;">一级边框</h4>
							<p style="color: #666;">#e0e0e0</p>
						</div>
					</div>
					<div class="example-color" style="background-color: #e6e6e6;">
						<div class="example-color-body">
							<h4 style="color: #666;">二级边框</h4>
							<p style="color: #666;">#e6e6e6</p>
						</div>
					</div>
					<div class="example-color" style="background-color: #ececec;">
						<div class="example-color-body">
							<h4 style="color: #666;">三级边框</h4>
							<p style="color: #666;">#ececec</p>
						</div>
					</div>
					<div class="example-color" style="background-color: #f3f3f3;">
						<div class="example-color-body">
							<h4 style="color: #666;">四级边框</h4>
							<p style="color: #666;">#f3f3f3</p>
						</div>
					</div>
				</vui-col>
				<vui-col :span="6">
					<div class="example-color" style="background-color: #ececec;">
						<div class="example-color-body">
							<h4 style="color: #666;">分割线</h4>
							<p style="color: #666;">#ececec</p>
						</div>
					</div>
					<div class="example-color" style="background-color: #f9f9f9;">
						<div class="example-color-body">
							<h4 style="color: #666;">背景色</h4>
							<p style="color: #666;">#f9f9f9</p>
						</div>
					</div>
				</vui-col>
			</vui-row>
		</Markdown>
	</div>
</template>

<script>
	import MixinCatalogue from "@/mixins/catalogue";
	import Markdown from "@/components/markdown";

	export default {
		name: "ColorZhCN",
		mixins: [
			MixinCatalogue
		],
		components: {
			Markdown
		}
	};
</script>

<style>
	.example-color { box-sizing:border-box; border-radius:2px; overflow:hidden; }
	.example-color .example-color-body { padding:20px; }
	.example-color .example-color-body h4 { color:#fff; font-size:16px; }
	.example-color .example-color-body p { opacity:0.7; color:#fff; font-size:14px; }
	.example-color .example-color-footer { display:flex; height:40px; }
	.example-color .example-color-footer div { flex:1; opacity:0.7; color:#fff; font-size:14px; text-align:center; line-height:40px; }

	.example-color + .example-color { margin-top:20px; }

	.example-color-transparent { background:transparent url("~@/assets/images/transparent.png") repeat 50% 50%; }
</style>