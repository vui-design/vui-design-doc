<template>
	<div>
		<Markdown>
			<h1>Select 选择器</h1>
			<p>下拉选择器。</p>
			<h2>何时使用</h2>
			<ul>
				<li>弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。</li>
				<li>当选项少时（少于 5 项），建议直接将选项平铺，使用 <code>Radio</code> 或 <code>Checkbox</code> 是更好的选择。</li>
			</ul>
			<h2>代码演示</h2>
		</Markdown>
		<vui-row :gutter="20">
			<vui-col :span="12">
				<ExampleSelectBasicUsage />
				<ExampleSelectMultiple />
				<ExampleSelectSearchable />
				<ExampleSelectClearable />
				<ExampleSelectGroup />
				<ExampleSelectRemoteSearch />
				<ExampleSelectUsers />
			</vui-col>
			<vui-col :span="12">
				<ExampleSelectCoordinate />
				<ExampleSelectBackfillOptionProp />
				<ExampleSelectMaxTagCount />
				<ExampleSelectHideSelectedOptions />
				<ExampleSelectSize />
				<ExampleSelectDisabled />
			</vui-col>
		</vui-row>
		<Markdown>
			<h2 id="example-api">API</h2>
			<h3>Select 属性</h3>
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
						<td>指定选中项目的 <code>value</code> 值，可以使用 <code>v-model</code> 双向绑定数据</td>
						<td>String | Number | Array</td>
						<td>--</td>
					</tr>
					<tr>
						<td>backfillOptionProp</td>
						<td>回填到选择框的 <code>Option</code> 的属性值，可选值为 <code>label</code>、<code>value</code>、<code>children</code> 或者不设</td>
						<td>String | Function</td>
						<td><code>children</code></td>
					</tr>
					<tr>
						<td>multiple</td>
						<td>是否支持多选</td>
						<td>Boolean</td>
						<td><code>false</code></td>
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
			<h3>Select 事件</h3>
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
			<h3>OptionGroup 属性</h3>
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
						<td>label</td>
						<td>分组名称</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>disabled</td>
						<td>是否禁用该分组下所有选项</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
				</tbody>
			</table>
			<h3>Option 属性</h3>
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
						<td>label</td>
						<td>选项标签</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>value</td>
						<td>选项的值，默认根据此属性值进行筛选，必填</td>
						<td>String | Number</td>
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
		</Markdown>
	</div>
</template>

<script>
	import MixinCatalogue from "@/mixins/catalogue";
	import Markdown from "@/components/markdown";
	import ExampleSelectBasicUsage from "./examples/basic-usage";
	import ExampleSelectMultiple from "./examples/multiple";
	import ExampleSelectSearchable from "./examples/searchable";
	import ExampleSelectClearable from "./examples/clearable";
	import ExampleSelectGroup from "./examples/group";
	import ExampleSelectRemoteSearch from "./examples/remote-search";
	import ExampleSelectUsers from "./examples/users";
	import ExampleSelectCoordinate from "./examples/coordinate";
	import ExampleSelectBackfillOptionProp from "./examples/backfill-option-prop";
	import ExampleSelectMaxTagCount from "./examples/max-tag-count";
	import ExampleSelectHideSelectedOptions from "./examples/hide-selected-options";
	import ExampleSelectSize from "./examples/size";
	import ExampleSelectDisabled from "./examples/disabled";

	export default {
		mixins: [
			MixinCatalogue
		],
		components: {
			Markdown,
			ExampleSelectBasicUsage,
			ExampleSelectMultiple,
			ExampleSelectSearchable,
			ExampleSelectClearable,
			ExampleSelectGroup,
			ExampleSelectRemoteSearch,
			ExampleSelectUsers,
			ExampleSelectCoordinate,
			ExampleSelectBackfillOptionProp,
			ExampleSelectMaxTagCount,
			ExampleSelectHideSelectedOptions,
			ExampleSelectSize,
			ExampleSelectDisabled
		}
	};
</script>