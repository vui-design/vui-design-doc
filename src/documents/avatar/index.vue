<template>
	<div>
		<Markdown>
			<h1>Avatar 头像</h1>
			<p>用来代表用户或事物，支持图片、图标或字符展示。</p>
			<h2>代码演示</h2>
		</Markdown>
		<vui-row v-bind:gutter="20">
			<vui-col v-bind:span="12">
				<ExampleAvatarBasicUsage />
				<ExampleAvatarType />
			</vui-col>
			<vui-col v-bind:span="12">
				<ExampleAvatarBadge />
				<ExampleAvatarDynamic />
				<ExampleAvatarGroup />
			</vui-col>
		</vui-row>
		<Markdown>
			<h2 id="example-api">API</h2>
			<h3>Avatar 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="150">属性</th>
						<th>说明</th>
						<th width="150">类型</th>
						<th width="100">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>src</td>
						<td>图片类头像的资源地址</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>replacement</td>
						<td>当图片资源地址为空时的替代图片，可用于设置默认头像</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>alt</td>
						<td>图片类头像无法显示时的替代文本</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>icon</td>
						<td>头像的图标类型/图标</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>shape</td>
						<td>头像的形状，可选值为 <code>circle</code>、<code>square</code> 或者不设</td>
						<td>String</td>
						<td><code>circle</code></td>
					</tr>
					<tr>
						<td>size</td>
						<td>头像的尺寸，预设值为 <code>small</code>、<code>medium</code>、<code>large</code>，可以设置为具体的数值</td>
						<td>String | Number</td>
						<td><code>medium</code></td>
					</tr>
				</tbody>
			</table>
			<h3>Avatar 事件</h3>
			<table class="example-api-events">
				<thead>
					<tr>
						<th width="150">事件名</th>
						<th>说明</th>
						<th width="150">类型</th>
						<th width="100">回调参数</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>error</td>
						<td>图片类头像加载失败的事件回调</td>
						<td>Function</td>
						<td><code>event</code></td>
					</tr>
				</tbody>
			</table>
			<h3>AvatarGroup 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="150">属性</th>
						<th>说明</th>
						<th width="150">类型</th>
						<th width="100">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>shape</td>
						<td>设置头像组合的形状，可选值为 <code>circle</code>、<code>square</code> 或者不设</td>
						<td>String</td>
						<td><code>circle</code></td>
					</tr>
					<tr>
						<td>size</td>
						<td>设置头像组合的尺寸，预设值为 <code>small</code>、<code>medium</code>、<code>large</code>，可以设置为具体的数值</td>
						<td>String | Number</td>
						<td><code>medium</code></td>
					</tr>
					<tr>
						<td>maxCount</td>
						<td>显示的最大头像个数</td>
						<td>Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>maxTooltipTheme</td>
						<td>多余头像气泡主题，可选值为 <code>light</code>、<code>dark</code> 或者不设</td>
						<td>String</td>
						<td><code>light</code></td>
					</tr>
					<tr>
						<td>maxTooltipPlacement</td>
						<td>多余头像气泡弹出位置，可选值为 <code>top</code>、<code>bottom</code> 或者不设</td>
						<td>String</td>
						<td><code>top</code></td>
					</tr>
				</tbody>
			</table>
		</Markdown>
	</div>
</template>

<script>
	import MixinCatalogue from "@/mixins/catalogue";
	import Markdown from "@/components/markdown"
	import ExampleAvatarBasicUsage from "./examples/basic-usage";
	import ExampleAvatarType from "./examples/type";
	import ExampleAvatarBadge from "./examples/badge";
	import ExampleAvatarDynamic from "./examples/dynamic";
	import ExampleAvatarGroup from "./examples/group";

	export default {
		mixins: [
			MixinCatalogue
		],
		components: {
			Markdown,
			ExampleAvatarBasicUsage,
			ExampleAvatarType,
			ExampleAvatarBadge,
			ExampleAvatarDynamic,
			ExampleAvatarGroup
		}
	};
</script>