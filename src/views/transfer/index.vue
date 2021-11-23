<template>
	<div>
		<document>
			<h1>Transfer 穿梭框</h1>
			<p>双栏穿梭选择框。</p>
			<h2>何时使用</h2>
			<ul>
				<li>需要在多个可选项中进行多选时。</li>
				<li>相较于 <code>Select</code>，穿梭框占据更大的空间，可以展示可选项的更多信息。</li>
			</ul>
			<p>穿梭选择框用直观的方式在两栏中移动元素，完成选择行为。</p>
			<p>选择一个或以上的选项后，点击对应的方向键，可以把选中的选项移动到另一栏。其中，左边一栏为 <code>source</code>，右边一栏为 <code>target</code>，API 的设计也反映了这两个概念。</p>
			<h2>代码演示</h2>
		</document>
		<ExampleTransferBasicUsage />
		<ExampleTransferSearchable1 />
		<ExampleTransferCustomizedSearch />
		<ExampleTransferDisabled />
		<ExampleTransferCustomized1 />
		<ExampleTransferCustomized2 />
		<ExampleTransferAdvanced />
		<ExampleTransferTable />
		<document>
			<h2 id="example-api">API</h2>
			<h3>Transfer 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="160">属性</th>
						<th>说明</th>
						<th width="220">类型</th>
						<th width="342">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>titles</td>
						<td>标题集合，顺序从左至右</td>
						<td>Array</td>
						<td><code>["", ""]</code></td>
					</tr>
					<tr>
						<td>operations</td>
						<td>操作文案集合，顺序从上至下</td>
						<td>Array</td>
						<td><code>["&gt;", "&lt;"]</code></td>
					</tr>
					<tr>
						<td>panelStyle</td>
						<td>两个穿梭框的自定义样式</td>
						<td>Object | String | Function</td>
						<td>--</td>
					</tr>
					<tr>
						<td>options</td>
						<td>可选项数据源，其中的数据将会被渲染到左边一栏中，<code>targetKeys</code> 属性中指定的除外</td>
						<td>Array</td>
						<td><code>[]</code></td>
					</tr>
					<tr>
						<td>optionKey</td>
						<td>指定数据项的 <code>key</code> 属性，可以是字符串或一个函数，为函数时  <code>options</code> 中的数据项作为参数</td>
						<td>String | Function</td>
						<td><code>key</code></td>
					</tr>
					<tr>
						<td>selectedKeys</td>
						<td>设置选中项</td>
						<td>Array</td>
						<td><code>[]</code></td>
					</tr>
					<tr>
						<td>targetKeys</td>
						<td>显示在右侧一栏中的数据 <code>key</code> 值集合，可以使用 <code>v-model</code> 双向绑定数据</td>
						<td>Array</td>
						<td><code>[]</code></td>
					</tr>
					<tr>
						<td>formatter</td>
						<td>自定义渲染选项数据，接收 <code>options</code> 中的数据项作为参数</td>
						<td>Function | Scoped Slot</td>
						<td><code>option => option.key</code></td>
					</tr>
					<tr>
						<td>body</td>
						<td>自定义选项列表，接收 <code>props</code> 作为参数</td>
						<td>Scoped Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>footer</td>
						<td>自定义底部内容，接收 <code>props</code> 作为参数</td>
						<td>Scoped Slot</td>
						<td>--</td>
					</tr>
					<tr>
						<td>showSelectAll</td>
						<td>是否展示全选勾选框</td>
						<td>Boolean</td>
						<td><code>true</code></td>
					</tr>
					<tr>
						<td>searchable</td>
						<td>是否支持搜索</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>keywords</td>
						<td>支持搜索时，搜索框搜索关键词集合，顺序从左至右</td>
						<td>Array</td>
						<td><code>["", ""]</code></td>
					</tr>
					<tr>
						<td>filter</td>
						<td>是否根据输入关键词进行筛选。当其为一个函数时，会接收 <code>keyword</code>、<code>option</code> 两个参数，若 <code>option</code> 符合筛选条件，应返回 <code>true</code>，反之返回 <code>false</code></td>
						<td>Boolean | Function</td>
						<td><code>true</code></td>
					</tr>
					<tr>
						<td>filterOptionProp</td>
						<td>搜索时按 <code>option</code> 的指定属性进行筛选，在设置了自定义 <code>filter</code> 函数时可忽略此属性</td>
						<td>String</td>
						<td><code>key</code></td>
					</tr>
					<tr>
						<td>locale</td>
						<td>默认文案设置，目前包括搜索输入框占位文本、暂无数据等相关文案</td>
						<td>Object</td>
						<td>
							<div><code>search: "请输入搜索内容"</code></div>
							<div><code>notFound: "暂无数据"</code></div>
						</td>
					</tr>
					<tr>
						<td>disabled</td>
						<td>是否禁用</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
				</tbody>
			</table>
			<h3>Transfer Body 属性</h3>
			<p>Transfer 支持通过 <code>body</code> 作用域插槽来自定义渲染选项列表（详见示例〔表格穿梭框〕），并返回以下参数：</p>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="160">属性</th>
						<th>说明</th>
						<th width="342">类型</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>classNamePrefix</td>
						<td>样式类名的前缀</td>
						<td>String</td>
					</tr>
					<tr>
						<td>direction</td>
						<td>渲染列表的方向，值为 <code>left</code> 或 <code>right</code></td>
						<td>String</td>
					</tr>
					<tr>
						<td>options</td>
						<td>经过输入筛选后的数据源</td>
						<td>Array</td>
					</tr>
					<tr>
						<td>optionKey</td>
						<td>数据项的 <code>key</code> 属性</td>
						<td>String | Function</td>
					</tr>
					<tr>
						<td>selectedKeys</td>
						<td>选中项的 <code>key</code> 值集合</td>
						<td>Array</td>
					</tr>
					<tr>
						<td>disabled</td>
						<td>是否禁用选项列表</td>
						<td>Boolean</td>
					</tr>
					<tr>
						<td>onSelect</td>
						<td>勾选一组选项</td>
						<td>Function</td>
					</tr>
				</tbody>
			</table>
			<p>注意：在 <code>Transfer</code> 中，<code>data</code> 里的数据项都需要指定 <code>key</code> 值。组件内部默认会将每项数据的 <code>key</code> 属性作为唯一标识。如果你的数据没有这个属性，请务必使用 <code>optionKey</code> 来指定数据项的主键，不同数据项的主键不允许重复。若没有指定，或出现重复，穿梭框组件可能会出现意想不到的错误。</p>
			<p>比如你的数据主键是 <code>uid</code>，请按如下方式指定：</p>
			<p><code>&lt;vui-transfer optionKey="uid" /&gt;</code></p>
			<p>或</p>
			<p><code>&lt;vui-transfer v-bind:optionKey="option => option.uid" /&gt;</code></p>
			<h3>Transfer 事件</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="160">事件名</th>
						<th>说明</th>
						<th width="120">类型</th>
						<th width="320">回调参数</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>search</td>
						<td>搜索框内容时改变时触发的事件回调函数</td>
						<td>Function</td>
						<td><code>direction, keyword</code></td>
					</tr>
					<tr>
						<td>scroll</td>
						<td>选项列表滚动时触发的事件回调函数</td>
						<td>Function</td>
						<td><code>e, direction</code></td>
					</tr>
					<tr>
						<td>select</td>
						<td>选中项发生改变时触发的事件回调函数</td>
						<td>Function</td>
						<td><code>sourceSelectedKeys, targetSelectedKeys</code></td>
					</tr>
					<tr>
						<td>input</td>
						<td>选项在两栏之间转移时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
						<td>Function</td>
						<td><code>targetKeys</code></td>
					</tr>
					<tr>
						<td>change</td>
						<td>选项在两栏之间转移时触发的事件回调函数</td>
						<td>Function</td>
						<td><code>targetKeys, direction, moveKeys</code></td>
					</tr>
				</tbody>
			</table>
		</document>
	</div>
</template>

<script>
	import MixinAnchors from "src/mixins/anchors";
	import Document from "src/components/document";
	import ExampleTransferBasicUsage from "./examples/basic-usage";
	import ExampleTransferSearchable1 from "./examples/searchable";
	import ExampleTransferCustomizedSearch from "./examples/customized-search";
	import ExampleTransferDisabled from "./examples/disabled";
	import ExampleTransferCustomized1 from "./examples/customized1";
	import ExampleTransferCustomized2 from "./examples/customized2";
	import ExampleTransferAdvanced from "./examples/advanced";
	import ExampleTransferTable from "./examples/table";

	export default {
		mixins: [
			MixinAnchors
		],
		components: {
			Document,
			ExampleTransferBasicUsage,
			ExampleTransferSearchable1,
			ExampleTransferCustomizedSearch,
			ExampleTransferDisabled,
			ExampleTransferCustomized1,
			ExampleTransferCustomized2,
			ExampleTransferAdvanced,
			ExampleTransferTable
		}
	};
</script>