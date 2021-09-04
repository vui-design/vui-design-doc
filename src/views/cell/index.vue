<template>
	<div>
		<document>
			<h1>Cell 单元格</h1>
			<p>用于固定的菜单列表。</p>
			<h2>何时使用</h2>
			<p>最基础的列表视图，常用于将信息以列表的结构显示在页面上，类似 wap 上最常用的内容结构。</p>
			<h2>代码演示</h2>
		</document>
		<vui-row v-bind:gutter="16">
			<vui-col v-bind:span="12">
				<ExampleCellBasicUsage />
				<ExampleCellLink />
			</vui-col>
			<vui-col v-bind:span="12">
				<ExampleCellOther />
			</vui-col>
		</vui-row>
		<document>
			<h2 id="example-api">API</h2>
			<h3>CellGroup 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="80">属性</th>
						<th>说明</th>
						<th width="120">类型</th>
						<th width="80">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>title</td>
						<td>分组标题</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>description</td>
						<td>分组说明文字</td>
						<td>String</td>
						<td>--</td>
					</tr>
				</tbody>
			</table>
			<h3>Cell 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="80">属性</th>
						<th>说明</th>
						<th width="120">类型</th>
						<th width="80">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>icon</td>
						<td>单元格图标类型/图标，位于标题左侧</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>title</td>
						<td>单元格标题</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>extra</td>
						<td>单元格额外内容，位于标题右侧</td>
						<td>String | Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>selected</td>
						<td>单元格是否为选中状态</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>disabled</td>
						<td>单元格是否为禁用状态</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>href</td>
						<td>设置单元格点击后的跳转地址，指定此属性后单元格的行为和 <code>a</code> 链接一致</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>to</td>
						<td>设置单元格点击后的跳转地址，指定此属性后单元格的行为和 <code>&lt;router-link /&gt;</code> 组件一致</td>
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
			<h3>Cell 事件</h3>
			<table class="example-api-events">
				<thead>
					<tr>
						<th width="80">事件名</th>
						<th>说明</th>
						<th width="120">类型</th>
						<th width="80">回调参数</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>click</td>
						<td>点击单元格时触发</td>
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
	import ExampleCellBasicUsage from "./examples/basic-usage";
	import ExampleCellLink from "./examples/link";
	import ExampleCellOther from "./examples/other";

	export default {
		mixins: [
			MixinAnchors
		],
		components: {
			Document,
			ExampleCellBasicUsage,
			ExampleCellLink,
			ExampleCellOther
		}
	};
</script>