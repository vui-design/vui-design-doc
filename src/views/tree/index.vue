<template>
	<div>
		<document>
			<h1>Tree 树形控件</h1>
			<p>多层次的结构列表。</p>
			<h2>何时使用</h2>
			<p>文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用 <code>Tree</code> 组件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。</p>
			<h2>代码演示</h2>
		</document>
		<vui-row v-bind:gutter="16">
			<vui-col v-bind:span="12">
				<ExampleTreeBasicUsage />
			</vui-col>
			<vui-col v-bind:span="12">

			</vui-col>
		</vui-row>
		<document>
			<h2 id="example-api">API</h2>
			<h3>Tree 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="150">属性</th>
						<th>说明</th>
						<th width="160">类型</th>
						<th width="150">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>size</td>
						<td>选择框尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
						<td>String</td>
						<td><code>medium</code></td>
					</tr>
					<tr>
						<td>placeholder</td>
						<td>选择框占位文本</td>
						<td>String</td>
						<td><code>请选择...</code></td>
					</tr>
					<tr>
						<td>value</td>
						<td>指定选中项目的 <code>value</code> 值集合，可以使用 <code>v-model</code> 双向绑定数据</td>
						<td>Array</td>
						<td><code>[]</code></td>
					</tr>
					<tr>
						<td>backfillOptionProp</td>
						<td>回填到选择框的 <code>Option</code> 的属性值，可选值为 <code>label</code>、<code>value</code>、<code>children</code> 或者不设</td>
						<td>String | Function</td>
						<td><code>children</code></td>
					</tr>
					<tr>
						<td>maxTagCount</td>
						<td>多选模式下选择框中最多显示多少个 <code>tag</code> 标签</td>
						<td>Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>maxTagPlaceholder</td>
						<td>隐藏剩余 <code>tag</code> 标签时显示的内容，参数为剩余数量</td>
						<td>Function</td>
						<td>--</td>
					</tr>
					<tr>
						<td>allowCreate</td>
						<td>多选模式下是否允许用户创建新的项目</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>searchable</td>
						<td>是否支持搜索</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>filter</td>
						<td>是否根据输入关键字进行筛选。当其为一个函数时，会接收 <code>keyword</code>、<code>option</code> 两个参数，当 <code>option</code> 符合条件时，应返回 <code>true</code>，反之返回 <code>false</code></td>
						<td>Boolean | Function</td>
						<td><code>true</code></td>
					</tr>
					<tr>
						<td>filterOptionProp</td>
						<td>搜索时过滤对应的 <code>Option</code> 属性，如设置为 <code>children</code> 表示对内嵌内容进行搜索，可选值为 <code>label</code>、<code>value</code>、<code>children</code> 或者不设</td>
						<td>String</td>
						<td><code>children</code></td>
					</tr>
					<tr>
						<td>loading</td>
						<td>是否处于 <code>loading</code> 状态（即当前是否正在进行远程搜索）</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>loadingText</td>
						<td>远程搜索中的文字提示</td>
						<td>String</td>
						<td><code>加载中...</code></td>
					</tr>
					<tr>
						<td>notFoundText</td>
						<td>选项为空时的文字提示</td>
						<td>String</td>
						<td><code>暂无数据</code></td>
					</tr>
					<tr>
						<td>autoClearKeyword</td>
						<td>是否在选中选项后自动清空搜索关键字，只在多选模式下有效</td>
						<td>Boolean</td>
						<td><code>true</code></td>
					</tr>
					<tr>
						<td>clearable</td>
						<td>是否允许清空已选选项</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>disabled</td>
						<td>是否禁用</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>placement</td>
						<td>选项弹出位置，可选值为 <code>top</code>、<code>top-start</code>、<code>top-end</code>、<code>bottom</code>、<code>bottom-start</code>、<code>bottom-end</code> 或者不设</td>
						<td>String</td>
						<td><code>bottom-start</code></td>
					</tr>
					<tr>
						<td>getPopupContainer</td>
						<td>指定选项弹框挂载的 HTML 节点</td>
						<td>Function</td>
						<td><code>() => document.body</code></td>
					</tr>
				</tbody>
			</table>
			<h3>Tree 事件</h3>
			<table class="example-api-events">
				<thead>
					<tr>
						<th width="150">事件名</th>
						<th>说明</th>
						<th width="160">类型</th>
						<th width="150">回调参数</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>focus</td>
						<td>选择框获得光标时触发的事件回调</td>
						<td>Function</td>
						<td>--</td>
					</tr>
					<tr>
						<td>blur</td>
						<td>选择框失去光标时触发的事件回调</td>
						<td>Function</td>
						<td>--</td>
					</tr>
					<tr>
						<td>search</td>
						<td>搜索关键字发生变化时触发的事件回调</td>
						<td>Function</td>
						<td><code>keyword</code></td>
					</tr>
					<tr>
						<td>input</td>
						<td>选中项发生变化时触发的事件回调，可以使用 <code>v-model</code> 双向绑定数据</td>
						<td>Function</td>
						<td><code>value</code></td>
					</tr>
					<tr>
						<td>change</td>
						<td>选中项发生变化时触发的事件回调</td>
						<td>Function</td>
						<td><code>value</code></td>
					</tr>
				</tbody>
			</table>
		</document>
	</div>
</template>

<script>
	import MixinAnchors from "src/mixins/anchors";
	import Document from "src/components/document";
	import ExampleTreeBasicUsage from "./examples/basic-usage";

	export default {
		mixins: [
			MixinAnchors
		],
		components: {
			Document,
			ExampleTreeBasicUsage,
		}
	};
</script>