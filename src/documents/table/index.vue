<template>
	<div>
		<Markdown>
			<h1>Table 表格</h1>
			<p>展示行列数据。</p>
			<h2>何时使用</h2>
			<ul>
				<li>当有大量结构化的数据需要展现时；</li>
				<li>当需要对数据进行排序、筛选、分页、自定义操作等复杂行为时。</li>
			</ul>
			<h2>代码演示</h2>
		</Markdown>
		<ExampleTableBasicUsage />
		<ExampleTableBordered />
		<ExampleTableStriped />
		<ExampleTableFixedHeader />
		<ExampleTableFixedColumns />
		<ExampleTableFixedHeaderColumns />
		<ExampleTableSorter />
		<ExampleTableFilter />
		<ExampleTableCollapsion />
		<ExampleTableMultipleSelection />
		<ExampleTableSingleSelection />
		<ExampleTableGroupingColumns />
		<ExampleTableLoading />
		<Markdown>
			<h2 id="example-api">API</h2>
			<h3>Table 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="120">属性</th>
						<th>说明</th>
						<th width="120">类型</th>
						<th width="140">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>columns</td>
						<td>表格列的配置描述，<a href="javascript:;">详细配置见下表</a></td>
						<td>Array</td>
						<td><code>[]</code></td>
					</tr>
					<tr>
						<td>data</td>
						<td>数据数组。注意，每条数据中的 <code>columnClassNames</code> 字段用于设置对应行中任意单元格的样式类型，因此数据不能使用该字段，<a href="javascript:;">详见示例</a></td>
						<td>Array</td>
						<td><code>[]</code></td>
					</tr>
					<tr>
						<td>rowCollapsion</td>
						<td>表格行是否可折叠，<a href="javascript:;">详细配置见下表</a></td>
						<td>Object</td>
						<td>--</td>
					</tr>
					<tr>
						<td>rowSelection</td>
						<td>表格行是否可选择，<a href="javascript:;">详细配置见下表</a></td>
						<td>Object</td>
						<td>--</td>
					</tr>
					<tr>
						<td>showHeader</td>
						<td>是否显示表头</td>
						<td>Boolean</td>
						<td><code>true</code></td>
					</tr>
					<tr>
						<td>bordered</td>
						<td>是否显示外边框和列边框</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>striped</td>
						<td>是否显示间隔斑马纹</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>scroll</td>
						<td>设置横向或纵向滚动，格式：<code>{ x: number, y: number }</code></td>
						<td>Object</td>
						<td>--</td>
					</tr>
					<tr>
						<td>size</td>
						<td>表格尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
						<td>String</td>
						<td><code>medium</code></td>
					</tr>
					<tr>
						<td>loading</td>
						<td>表格是否处于加载中的状态</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>getRowKey</td>
						<td>指定表格行的 <code>key</code> 属性，可以是字符串或一个函数</td>
						<td>String | Function</td>
						<td><code>key</code></td>
					</tr>
					<tr>
						<td>getRowClassName</td>
						<td>指定表格行的样式类名，可以是字符串或一个函数</td>
						<td>String | Function</td>
						<td>--</td>
					</tr>
					<tr>
						<td>locale</td>
						<td>默认文案设置，目前包括筛选、暂无数据相关文案</td>
						<td>Object</td>
						<td>
							<div><code>confirm: "确认"</code></div>
							<div><code>clear: "清空"</code></div>
							<div><code>empty: "暂无数据"</code></div>
						</td>
					</tr>
				</tbody>
			</table>
			<p>注意：在 <code>Table</code> 中，<code>columns</code> 和 <code>data</code> 里的数据项都需要指定 <code>key</code> 值。对于 <code>data</code>，其数据项的 <code>key</code> 值会与行展开、行选择，以及行的渲染有着密切的关系。组件内部默认会将每项数据的 <code>key</code> 属性作为唯一的标识。如果你的数据没有这个属性，请务必使用 <code>getRowKey</code> 来指定数据项的主键，不同数据项的主键不允许重复。若没有指定，表格组件可能会出现各类奇怪的错误。</p>
			<p>比如你的数据主键是 uid，请按如下方式指定：</p>
			<p><code>&lt;vui-table getRowKey="uid" /&gt;</code></p>
			<p>或</p>
			<p><code>&lt;vui-table v-bind:getRowKey="row => row.uid" /&gt;</code></p>
			<h3>Table 事件</h3>
			<table class="example-api-events">
				<thead>
					<tr>
						<th width="80">事件名</th>
						<th>说明</th>
						<th width="120">类型</th>
						<th width="140">回调参数</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>collapse</td>
						<td>折叠行变化时触发</td>
						<td>Function</td>
						<td>
							<div><code>collapsedRowKeys</code> - 已展开行的 key 值集合</div>
						</td>
					</tr>
					<tr>
						<td>select</td>
						<td>选择行变化时触发</td>
						<td>Function</td>
						<td>
							<div><code>selectedRowKeys</code> - 已选择行的 key 值集合</div>
						</td>
					</tr>
					<tr>
						<td>sorter</td>
						<td>点击排序时触发</td>
						<td>Function</td>
						<td>
							<div><code>column</code> - 当前列数据</div>
							<div><code>order</code> - 当前选中的排序方式</div>
						</td>
					</tr>
					<tr>
						<td>filter</td>
						<td>点击筛选时触发</td>
						<td>Function</td>
						<td>
							<div><code>column</code> - 当前列数据</div>
							<div><code>value</code> - 当前选中的筛选条件</div>
						</td>
					</tr>
					<tr>
						<td>rowClick</td>
						<td>点击行时触发</td>
						<td>Function</td>
						<td>
							<div><code>row</code> - 当前行数据</div>
						</td>
					</tr>
					<tr>
						<td>rowDblclick</td>
						<td>双击行时触发</td>
						<td>Function</td>
						<td>
							<div><code>row</code> - 当前行数据</div>
						</td>
					</tr>
				</tbody>
			</table>
			<h3>Column 属性</h3>
			<p>列描述数据对象，是 columns 中的一项。</p>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="120">属性</th>
						<th>说明</th>
						<th width="120">类型</th>
						<th width="140">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>key</td>
						<td>Vue 循环所需要的 key，如果已经设置了唯一的 <code>dataIndex</code>，可以忽略这个属性</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>dataIndex</td>
						<td>列数据在数据项中对应的字段名称</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>title</td>
						<td>列头显示文本。如果设置为 Function 类型，则表示用户希望自定义渲染列头，此时将使用 Vue 的 render 函数，接收两个参数：<code>h</code>、<code>column</code>，其中 <code>column</code> 表示当前列的数据，<a href="https://cn.vuejs.org/v2/guide/render-function.html" target="_blank">学习 render 函数 & JSX</a></td>
						<td>String | Function</td>
						<td>--</td>
					</tr>
					<tr>
						<td>fixed</td>
						<td>列是否固定，可选值为 <code>left</code>、<code>right</code> 或者不设</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>className</td>
						<td>列的样式类名</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>width</td>
						<td>列的宽度</td>
						<td>Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>align</td>
						<td>列的文本对齐方式，可选值为 <code>left</code>、<code>center</code>、<code>right</code> 或者不设</td>
						<td>String</td>
						<td><code>left</code></td>
					</tr>
					<tr>
						<td>ellipsis</td>
						<td>开启后，文本将不换行，超出部分显示为省略号</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>tooltip</td>
						<td>开启后，文本将不换行，超出部分显示为省略号，并用 <code>Tooltip</code> 组件显示完整内容</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>render</td>
						<td>自定义渲染列内容，使用 Vue 的 render 函数，接收三个参数：<code>h</code>、<code>column</code>、<code>row</code>，其中 <code>column</code> 和 <code>row</code> 分别表示当前列和当前行的数据，<a href="https://cn.vuejs.org/v2/guide/render-function.html" target="_blank">学习 render 函数 & JSX</a></td>
						<td>Function</td>
						<td>--</td>
					</tr>
					<tr>
						<td>sorter</td>
						<td>对应列是否启用排序功能。当设置为 <code>Object</code> 类型时，<a href="javascript:;">详细配置见下表</a></td>
						<td>Boolean | Object</td>
						<td>--</td>
					</tr>
					<tr>
						<td>filter</td>
						<td>对应列是否启用筛选功能，<a href="javascript:;">详细配置见下表</a></td>
						<td>Object</td>
						<td>--</td>
					</tr>
					<tr>
						<td>children</td>
						<td>表头分组</td>
						<td>Array</td>
						<td>--</td>
					</tr>
				</tbody>
			</table>
			<h3>Sorter 属性</h3>
			<p>排序功能的配置描述。</p>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="120">属性</th>
						<th>说明</th>
						<th width="120">类型</th>
						<th width="140">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>order</td>
						<td>默认排序方式，可选值为 <code>none</code>、<code>asc</code>、<code>desc</code> 或者不设</td>
						<td>String</td>
						<td><code>none</code></td>
					</tr>
					<tr>
						<td>method</td>
						<td>自定义排序函数，接受三个参数：<code>a</code>、<code>b</code>、<code>order</code></td>
						<td>Function</td>
						<td>--</td>
					</tr>
					<tr>
						<td>useServerSort</td>
						<td>是否使用服务端排序。如果设置为 <code>true</code>，则表示用户希望服务端排序，此时需要监听 <code>Table</code> 的 <code>sort</code> 事件</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
				</tbody>
			</table>
			<h3>Filter 属性</h3>
			<p>筛选功能的配置描述 。</p>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="120">属性</th>
						<th>说明</th>
						<th width="120">类型</th>
						<th width="140">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>options</td>
						<td>筛选选项，必填；格式为数组，数组中的每一项都必须包含 <code>label</code> 和 <code>value</code> 两个属性</td>
						<td>Array</td>
						<td><code>[]</code></td>
					</tr>
					<tr>
						<td>multiple</td>
						<td>是否多选</td>
						<td>Boolean</td>
						<td><code>true</code></td>
					</tr>
					<tr>
						<td>value</td>
						<td>默认选中的选项。多选模式下是由多个选项的 <code>value</code> 值组成的数组，单选模式下为单个选项的 <code>value</code> 值</td>
						<td>Array</td>
						<td>--</td>
					</tr>
					<tr>
						<td>method</td>
						<td>自定义筛选函数，必填；接受两个参数：<code>value</code>、<code>row</code></td>
						<td>Function</td>
						<td>--</td>
					</tr>
					<tr>
						<td>useServerFilter</td>
						<td>是否启用服务端筛选。如果设置为 <code>true</code>，则表示用户希望服务端筛选，此时需要监听 <code>Table</code> 的 <code>filter</code> 事件</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
				</tbody>
			</table>
			<h3>rowCollapsion 属性</h3>
			<p>折叠功能的配置描述。注意：开启折叠功能后，将自动在表格左侧插入一列，用于显示折叠图标。</p>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="120">属性</th>
						<th>说明</th>
						<th width="120">类型</th>
						<th width="140">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>title</td>
						<td>列头显示文本</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>width</td>
						<td>列的宽度</td>
						<td>Number</td>
						<td><code>50</code></td>
					</tr>
					<tr>
						<td>align</td>
						<td>列的文本对齐方式，可选值为 <code>left</code>、<code>center</code>、<code>right</code> 或者不设</td>
						<td>String</td>
						<td><code>center</code></td>
					</tr>
					<tr>
						<td>clickRowToCollapse</td>
						<td>通过点击行来展开子行，展开子行的行为默认是由图标控制的</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>value</td>
						<td>默认展开的行，由行的 <code>key</code> 值组成的数组</td>
						<td>Array</td>
						<td><code>[]</code></td>
					</tr>
					<tr>
						<td>render</td>
						<td>自定义展开行的内容，使用 Vue 的 render 函数。接收两个参数：<code>h</code> 和 <code>row</code>；<a href="https://cn.vuejs.org/v2/guide/render-function.html" target="_blank">学习 render 函数 & JSX</a></td>
						<td>Function</td>
						<td>--</td>
					</tr>
				</tbody>
			</table>
			<h3>rowSelection 属性</h3>
			<p>选择功能的配置描述。注意：开启选择功能后，将自动在表格左侧插入一列，用于显示多选框/单选框。</p>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="120">属性</th>
						<th>说明</th>
						<th width="120">类型</th>
						<th width="140">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>title</td>
						<td>列头显示文本</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>width</td>
						<td>列的宽度</td>
						<td>Number</td>
						<td><code>50</code></td>
					</tr>
					<tr>
						<td>align</td>
						<td>列的文本对齐方式，可选值为 <code>left</code>、<code>center</code>、<code>right</code> 或者不设</td>
						<td>String</td>
						<td><code>center</code></td>
					</tr>
					<tr>
						<td>multiple</td>
						<td>是否多选</td>
						<td>Boolean</td>
						<td><code>true</code></td>
					</tr>
					<tr>
						<td>value</td>
						<td>默认选中的行。多选模式下是由多个行的 <code>key</code> 值组成的数组，单选模式下为单个行的 <code>key</code> 值</td>
						<td>Array | String | Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>getCompnentProps</td>
						<td>用于获取选择框属性配置的回调函数。接受 <code>row</code> 作为参数</td>
						<td>Function</td>
						<td>--</td>
					</tr>
				</tbody>
			</table>
		</Markdown>
	</div>
</template>

<script>
	import MixinCatalogue from "@/mixins/catalogue";
	import Markdown from "@/components/markdown";
	import ExampleTableBasicUsage from "./examples/basic-usage";
	import ExampleTableBordered from "./examples/bordered";
	import ExampleTableStriped from "./examples/striped";
	import ExampleTableFixedHeader from "./examples/fixed-header";
	import ExampleTableFixedColumns from "./examples/fixed-columns";
	import ExampleTableFixedHeaderColumns from "./examples/fixed-header-columns";
	import ExampleTableSorter from "./examples/sorter";
	import ExampleTableFilter from "./examples/filter";
	import ExampleTableCollapsion from "./examples/collapsion";
	import ExampleTableMultipleSelection from "./examples/multiple-selection";
	import ExampleTableSingleSelection from "./examples/single-selection";
	import ExampleTableGroupingColumns from "./examples/grouping-columns";
	import ExampleTableLoading from "./examples/loading";

	export default {
		name: "table-zh-cn",
		mixins: [
			MixinCatalogue
		],
		components: {
			Markdown,
			ExampleTableBasicUsage,
			ExampleTableBordered,
			ExampleTableStriped,
			ExampleTableFixedHeader,
			ExampleTableFixedColumns,
			ExampleTableFixedHeaderColumns,
			ExampleTableSorter,
			ExampleTableFilter,
			ExampleTableCollapsion,
			ExampleTableMultipleSelection,
			ExampleTableSingleSelection,
			ExampleTableGroupingColumns,
			ExampleTableLoading
		}
	};
</script>