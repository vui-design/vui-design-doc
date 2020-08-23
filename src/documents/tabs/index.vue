<template>
	<div>
		<Markdown>
			<h1>Tabs 标签页</h1>
			<p>选项卡切换组件。</p>
			<h2>何时使用</h2>
			<p>常用于平级区域大块内容的的收纳和展现，保持界面整洁。</p>
			<p>Vui 依次提供了三级选项卡，分别用于不同的场景。</p>
			<ul>
				<li>卡片式的页签，提供可关闭的样式，常用于容器顶部；</li>
				<li>标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs；</li>
				<li><router-link to="radio">RadioButton</router-link> 可作为更次级的页签来使用。</li>
			</ul>
			<h2>代码演示</h2>
		</Markdown>
		<vui-row v-bind:gutter="20">
			<vui-col v-bind:span="12">
				<ExampleTabsBasicUsage />
				<ExampleTabsCard />
				<ExampleTabsIcon />
				<ExampleTabsDisabled />
				<ExampleTabsCustomTitle />
				<ExampleTabsExtra />
			</vui-col>
			<vui-col v-bind:span="12">
				<ExampleTabsSize />
				<ExampleTabsAddable />
				<ExampleTabsClosable />
				<ExampleTabsEditable />
				<ExampleTabsCustomAddTrigger />
			</vui-col>
		</vui-row>
		<Markdown>
			<h2 id="example-api">API</h2>
			<h3>Tabs 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="80">属性</th>
						<th>说明</th>
						<th width="150">类型</th>
						<th width="80">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>type</td>
						<td>页签基本样式，可选值为 <code>line</code>、<code>card</code> 或者不设</td>
						<td>String</td>
						<td><code>line</code></td>
					</tr>
					<tr>
						<td>size</td>
						<td>页签尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
						<td>String</td>
						<td><code>medium</code></td>
					</tr>
					<tr>
						<td>activeKey</td>
						<td>当前激活面板的 <code>key</code> 值属性，可以使用 <code>v-model</code> 双向绑定数据</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>addable</td>
						<td>是否可以添加页签</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>closable</td>
						<td>是否允许关闭页签</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>editable</td>
						<td>是否可以动态增减页签，即同时具有添加和关闭功能</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
				</tbody>
			</table>
			<h3>Tabs 插槽</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="80">名称</th>
						<th>说明</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>extra</td>
						<td>页签右侧附加内容</td>
					</tr>
					<tr>
						<td>default</td>
						<td>页签面板列表</td>
					</tr>
				</tbody>
			</table>
			<h3>Tabs 事件</h3>
			<table class="example-api-events">
				<thead>
					<tr>
						<th width="80">事件名</th>
						<th>说明</th>
						<th width="150">类型</th>
						<th width="80">回调参数</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>add</td>
						<td>添加页签时触发，仅在 <code>addable</code> 或 <code>editable</code> 属性为 <code>true</code> 时有效</td>
						<td>Function</td>
						<td>--</td>
					</tr>
					<tr>
						<td>close</td>
						<td>关闭页签时触发，仅在 <code>closable</code> 或 <code>editable</code> 属性为 <code>true</code> 时有效</td>
						<td>Function</td>
						<td><code>key</code></td>
					</tr>
					<tr>
						<td>input</td>
						<td>切换页签时触发，可以使用 <code>v-model</code> 双向绑定数据</td>
						<td>Function</td>
						<td><code>key</code></td>
					</tr>
					<tr>
						<td>change</td>
						<td>切换页签时触发</td>
						<td>Function</td>
						<td><code>key</code></td>
					</tr>
				</tbody>
			</table>
			<h3>TabPanel 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="80">属性</th>
						<th>说明</th>
						<th width="150">类型</th>
						<th width="80">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>key</td>
						<td>当前页签唯一标识，对应父级 <code>Tabs</code> 组件的 <code>activeKey</code> 值，默认页签索引</td>
						<td>String | Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>icon</td>
						<td>当前页签图标类型</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>title</td>
						<td>当前页签标题</td>
						<td>String | Number</td>
						<td>--</td>
					</tr>
					<tr>
						<td>closable</td>
						<td>是否允许关闭当前页签</td>
						<td>Boolean</td>
						<td>--</td>
					</tr>
					<tr>
						<td>disabled</td>
						<td>是否禁用当前页签</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
				</tbody>
			</table>
			<h3>TabPanel 插槽</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="80">名称</th>
						<th>说明</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>title</td>
						<td>当前页签标题</td>
					</tr>
					<tr>
						<td>default</td>
						<td>当前页签主体内容</td>
					</tr>
				</tbody>
			</table>
		</Markdown>
	</div>
</template>

<script>
	import MixinCatalogue from "@/mixins/catalogue";
	import Markdown from "@/components/markdown";
	import ExampleTabsBasicUsage from "./examples/basic-usage";
	import ExampleTabsCard from "./examples/card";
	import ExampleTabsIcon from "./examples/icon";
	import ExampleTabsDisabled from "./examples/disabled";
	import ExampleTabsCustomTitle from "./examples/custom-title";
	import ExampleTabsExtra from "./examples/extra";
	import ExampleTabsSize from "./examples/size";
	import ExampleTabsAddable from "./examples/addable";
	import ExampleTabsClosable from "./examples/closable";
	import ExampleTabsEditable from "./examples/editable";
	import ExampleTabsCustomAddTrigger from "./examples/custom-add-trigger";

	export default {
		mixins: [
			MixinCatalogue
		],
		components: {
			Markdown,
			ExampleTabsBasicUsage,
			ExampleTabsCard,
			ExampleTabsIcon,
			ExampleTabsDisabled,
			ExampleTabsCustomTitle,
			ExampleTabsExtra,
			ExampleTabsSize,
			ExampleTabsAddable,
			ExampleTabsClosable,
			ExampleTabsEditable,
			ExampleTabsCustomAddTrigger
		}
	};
</script>