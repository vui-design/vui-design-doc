<template>
	<div>
		<document>
			<h1>Alert 警告提示</h1>
			<p>警告提示，展现需要关注的信息。</p>
			<h2>何时使用</h2>
			<ul>
				<li>当某个页面需要向用户显示警告的信息时；</li>
				<li>非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。</li>
			</ul>
			<h2>代码演示</h2>
		</document>
		<vui-row v-bind:gutter="16">
			<vui-col v-bind:span="12">
				<ExampleAlertBasicUsage />
				<ExampleAlertType />
				<ExampleAlertDescription />
				<ExampleAlertClosable />
			</vui-col>
			<vui-col v-bind:span="12">
				<ExampleAlertCloseText />
				<ExampleAlertIcon />
				<ExampleAlertBanner />
			</vui-col>
		</vui-row>
		<document>
			<h2 id="example-api">API</h2>
			<h3>Alert 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="100">属性</th>
						<th>说明</th>
						<th width="140">类型</th>
						<th width="100">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>type</td>
						<td>警告提示类型，可选值为 <code>info</code>、<code>warning</code>、<code>success</code>、<code>error</code> 或者不设</td>
						<td>String</td>
						<td><code>info</code></td>
					</tr>
					<tr>
						<td>banner</td>
						<td>是否应用顶部公告样式</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>showIcon</td>
						<td>是否显示图标</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>icon</td>
						<td>自定义图标类型/图标，默认根据 <code>type</code> 属性自动设置，仅在 <code>showIcon</code> 为 <code>true</code> 时有效</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>closable</td>
						<td>是否可以关闭</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>closeText</td>
						<td>自定义关闭按钮文本，仅在 <code>closable</code> 为 <code>true</code> 时有效</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>message</td>
						<td>警告提示内容</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>description</td>
						<td>警告提示的辅助性描述信息</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
				</tbody>
			</table>
			<h3>Alert 事件</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="100">事件名</th>
						<th>说明</th>
						<th width="140">类型</th>
						<th width="100">回调参数</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>close</td>
						<td>关闭警告提示时的事件回调函数，仅在 <code>closable</code> 为 <code>true</code> 时有效</td>
						<td>Function</td>
						<td><code>event</code></td>
					</tr>
				</tbody>
			</table>
		</document>
	</div>
</template>

<script>
	import MixinAnchors from "src/mixins/anchors";
	import Document from "src/components/document";
	import ExampleAlertBasicUsage from "./examples/basic-usage";
	import ExampleAlertType from "./examples/type";
	import ExampleAlertDescription from "./examples/description";
	import ExampleAlertClosable from "./examples/closable";
	import ExampleAlertCloseText from "./examples/close-text";
	import ExampleAlertIcon from "./examples/icon";
	import ExampleAlertBanner from "./examples/banner";

	export default {
		mixins: [
			MixinAnchors
		],
		components: {
			Document,
			ExampleAlertBasicUsage,
			ExampleAlertType,
			ExampleAlertDescription,
			ExampleAlertClosable,
			ExampleAlertCloseText,
			ExampleAlertIcon,
			ExampleAlertBanner
		}
	};
</script>