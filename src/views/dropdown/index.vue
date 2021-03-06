<template>
	<div>
		<vui-doc-markdown>
			<h1>Dropdown 下拉菜单</h1>
			<p>向下弹出的菜单列表。</p>
			<h2>何时使用</h2>
			<p>当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。</p>
			<h2>代码演示</h2>
		</vui-doc-markdown>
		<vui-row v-bind:gutter="20">
			<vui-col v-bind:span="12">
				<ExampleDropdownBasicUsage />
				<ExampleDropdownOtherElements />
				<ExampleDropdownTrigger />
				<ExampleDropdownEvent />
			</vui-col>
			<vui-col v-bind:span="12">
				<ExampleDropdownCascaded />
				<ExampleDropdownPlacement />
				<ExampleDropdownButton />
			</vui-col>
		</vui-row>
		<vui-doc-markdown>
			<h2 id="example-api">API</h2>
			<h3>Dropdown 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="160">属性</th>
						<th>说明</th>
						<th width="140">类型</th>
						<th width="180">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>trigger</td>
						<td>触发方式，可选值为 <code>hover</code>、<code>click</code> 或者不设</td>
						<td>String</td>
						<td><code>hover</code></td>
					</tr>
					<tr>
						<td>visible</td>
						<td>菜单是否显示，可以使用 <code>v-model</code> 双向绑定数据</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>placement</td>
						<td>菜单弹出位置，可选值为 <code>top</code>、<code>top-start</code>、<code>top-end</code>、<code>bottom</code>、<code>bottom-start</code>、<code>bottom-end</code> 或者不设</td>
						<td>String</td>
						<td><code>bottom-start</code></td>
					</tr>
					<tr>
						<td>dropdownAutoWidth</td>
						<td>下拉菜单的容器宽度是否根据菜单内容自动设置，设置为 <code>false</code> 时将保持与操作按钮或链接同宽</td>
						<td>Boolean</td>
						<td><code>true</code></td>
					</tr>
					<tr>
						<td>getPopupContainer</td>
						<td>指定下拉菜单挂载的 HTML 节点</td>
						<td>Function</td>
						<td><code>() => document.body</code></td>
					</tr>
				</tbody>
			</table>
			<h3>Dropdown 事件</h3>
			<table class="example-api-events">
				<thead>
					<tr>
						<th width="160">事件名</th>
						<th>说明</th>
						<th width="140">类型</th>
						<th width="180">回调参数</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>change</td>
						<td>菜单显示状态发生变化时触发的事件回调函数</td>
						<td>Function</td>
						<td><code>visible</code></td>
					</tr>
				</tbody>
			</table>
			<h3>DropdownButton 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="160">属性</th>
						<th>说明</th>
						<th width="140">类型</th>
						<th width="180">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>type</td>
						<td>按钮类型，可选值为 <code>default</code>、<code>primary</code>、<code>info</code>、<code>warning</code>、<code>success</code>、<code>error</code>、<code>dashed</code>、<code>text</code> 或者不设</td>
						<td>String</td>
						<td><code>default</code></td>
					</tr>
					<tr>
						<td>icon</td>
						<td>按钮图标类型/图标</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>trigger</td>
						<td>触发方式，可选值为 <code>hover</code>、<code>click</code> 或者不设</td>
						<td>String</td>
						<td><code>hover</code></td>
					</tr>
					<tr>
						<td>visible</td>
						<td>菜单是否显示，可以使用 <code>v-model</code> 双向绑定数据</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>placement</td>
						<td>菜单弹出位置，可选值为 <code>top</code>、<code>top-start</code>、<code>top-end</code>、<code>bottom</code>、<code>bottom-start</code>、<code>bottom-end</code> 或者不设</td>
						<td>String</td>
						<td><code>bottom-end</code></td>
					</tr>
					<tr>
						<td>dropdownAutoWidth</td>
						<td>下拉菜单的容器宽度是否根据菜单内容自动设置，设置为 <code>false</code> 时将保持与操作按钮或链接同宽</td>
						<td>Boolean</td>
						<td><code>true</code></td>
					</tr>
					<tr>
						<td>getPopupContainer</td>
						<td>指定下拉菜单挂载的 HTML 节点</td>
						<td>Function</td>
						<td><code>() => document.body</code></td>
					</tr>
				</tbody>
			</table>
			<h3>DropdownButton 事件</h3>
			<table class="example-api-events">
				<thead>
					<tr>
						<th width="160">事件名</th>
						<th>说明</th>
						<th width="140">类型</th>
						<th width="180">回调参数</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>click</td>
						<td>左侧按钮点击时触发的事件回调函数</td>
						<td>Function</td>
						<td><code>visible</code></td>
					</tr>
					<tr>
						<td>change</td>
						<td>右侧按钮的下拉菜单显示状态发生变化时触发的事件回调函数</td>
						<td>Function</td>
						<td><code>visible</code></td>
					</tr>
				</tbody>
			</table>
			<h3>DropdownMenu 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="160">属性</th>
						<th>说明</th>
						<th width="140">类型</th>
						<th width="180">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>color</td>
						<td>主题颜色，可选值为 <code>light</code>、<code>dark</code> 或者不设</td>
						<td>String</td>
						<td><code>light</code></td>
					</tr>
				</tbody>
			</table>
			<h3>DropdownMenu 事件</h3>
			<table class="example-api-events">
				<thead>
					<tr>
						<th width="160">事件名</th>
						<th>说明</th>
						<th width="140">类型</th>
						<th width="180">回调参数</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>click</td>
						<td>点击 <code>DropdownMenuItem</code> 时触发的事件回调函数</td>
						<td>Function</td>
						<td><code>value</code></td>
					</tr>
				</tbody>
			</table>
			<h3>DropdownSubmenu 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="160">属性</th>
						<th>说明</th>
						<th width="140">类型</th>
						<th width="180">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>name</td>
						<td>子菜单的唯一名称标识（将在后续版本移除，请使用 <code>value</code> 属性替代）</td>
						<td>String | Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>value</td>
						<td>子菜单的唯一值</td>
						<td>String | Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>icon</td>
						<td>子菜单图标类型/图标</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>title</td>
						<td>子菜单标题</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>disabled</td>
						<td>是否禁用</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
				</tbody>
			</table>
			<h3>DropdownMenuItemGroup 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="160">属性</th>
						<th>说明</th>
						<th width="140">类型</th>
						<th width="180">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>title</td>
						<td>分组标题</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
				</tbody>
			</table>
			<h3>DropdownMenuItem 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="160">属性</th>
						<th>说明</th>
						<th width="140">类型</th>
						<th width="180">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>name</td>
						<td>菜单项的唯一名称标识（将在后续版本移除，请使用 <code>value</code> 属性替代）</td>
						<td>String | Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>value</td>
						<td>菜单项的唯一值</td>
						<td>String | Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>icon</td>
						<td>菜单项图标类型/图标</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>title</td>
						<td>菜单项标题</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>disabled</td>
						<td>是否禁用</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>href</td>
						<td>设置菜单项点击后的跳转地址，指定此属性后菜单项的行为和 <code>a</code> 链接一致</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>to</td>
						<td>设置菜单项点击后的跳转地址，指定此属性后菜单项的行为和 <code>&lt;router-link /&gt;</code> 组件一致</td>
						<td>String | Object</td>
						<td>--</td>
					</tr>
					<tr>
						<td>replace</td>
						<td>同 <code>&lt;router-link /&gt;</code> 组件的 <code>replace</code> 属性，详细说明请参考 <a href="https://router.vuejs.org/zh/api/#replace" target="_blank">Vue Router API</a></td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>append</td>
						<td>同 <code>&lt;router-link /&gt;</code> 组件的 <code>append</code> 属性，详细说明请参考 <a href="https://router.vuejs.org/zh/api/#append" target="_blank">Vue Router API</a></td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>target</td>
						<td>相当于 <code>a</code> 链接的 <code>target</code> 属性，可选值请参考 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-target" target="_blank">HTML 标准</a></td>
						<td>String</td>
						<td>--</td>
					</tr>
				</tbody>
			</table>
		</vui-doc-markdown>
	</div>
</template>

<script>
	import MixinAnchors from "src/mixins/anchors";
	import VuiDocMarkdown from "src/components/markdown";
	import ExampleDropdownBasicUsage from "./examples/basic-usage";
	import ExampleDropdownOtherElements from "./examples/other-elements";
	import ExampleDropdownTrigger from "./examples/trigger";
	import ExampleDropdownEvent from "./examples/event";
	import ExampleDropdownCascaded from "./examples/cascaded";
	import ExampleDropdownPlacement from "./examples/placement";
	import ExampleDropdownButton from "./examples/button";

	export default {
		mixins: [
			MixinAnchors
		],
		components: {
			VuiDocMarkdown,
			ExampleDropdownBasicUsage,
			ExampleDropdownOtherElements,
			ExampleDropdownTrigger,
			ExampleDropdownEvent,
			ExampleDropdownCascaded,
			ExampleDropdownPlacement,
			ExampleDropdownButton
		}
	};
</script>