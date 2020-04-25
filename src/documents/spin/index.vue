<template>
	<div>
		<Markdown>
			<h1>Spin 加载中</h1>
			<p>用于页面和区块的加载中状态。</p>
			<h2>何时使用</h2>
			<p>页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。</p>
			<h2>代码演示</h2>
		</Markdown>
		<vui-row :gutter="20">
			<vui-col :span="12">
				<ExampleSpinBasicUsage />
				<ExampleSpinSize />
				<ExampleSpinFixed />
				<ExampleSpinMessage />
			</vui-col>
			<vui-col :span="12">
				<ExampleSpinCustom />
				<ExampleSpinState />
				<ExampleSpinFullscreen />
			</vui-col>
		</vui-row>
		<Markdown>
			<h2 id="example-api">API</h2>
			<h3>Spin 属性</h3>
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
						<td>fixed</td>
						<td>是否固定，需要父级有 <code>relative</code> 或 <code>absolute</code> 定位</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>size</td>
						<td>尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
						<td>String</td>
						<td><code>medium</code></td>
					</tr>
					<tr>
						<td>message</td>
						<td>消息文案</td>
						<td>String</td>
						<td>--</td>
					</tr>
				</tbody>
			</table>
			<h3>Spin 插槽</h3>
			<table>
				<thead>
					<tr>
						<th width="80">名称</th>
						<th>说明</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>default</td>
						<td>自定义内容，设置 <code>slot</code> 后，部分默认的样式可能不生效</td>
					</tr>
				</tbody>
			</table>
			<p><code>Vui</code> 为 <code>Vue.prototype</code> 添加了全局方法 <code>$spin</code>，因此可以直接通过以下方式来使用：</p>
			<ul>
				<li><code>this.$spin.open(options)</code></li>
			</ul>
			<p>以上方法隐式的创建及维护组件，参数 <code>options</code> 可以是字符串或对象。当为字符串时，仅仅表示消息文案；当为对象时，具体说明如下：</p>
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
						<td>size</td>
						<td>尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
						<td>String</td>
						<td><code>large</code></td>
					</tr>
					<tr>
						<td>message</td>
						<td>消息文案</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>render</td>
						<td>自定义内容，使用 <code>Vue</code> 的 <code>render</code> 函数。接收 <code>h</code> 作为参数，<a href="https://cn.vuejs.org/v2/guide/render-function.html" target="_blank">学习 render 函数 & JSX</a></td>
						<td>Function</td>
						<td>--</td>
					</tr>
				</tbody>
			</table>
			<p>以上方法调用后，会返回一个引用，可以通过该引用关闭对应的 <code>Spin</code> 组件，详见上述示例。</p>
			<ul>
				<li><code>spin.close()</code></li>
			</ul>
		</Markdown>
	</div>
</template>

<script>
	import MixinCatalogue from "@/mixins/catalogue";
	import Markdown from "@/components/markdown";
	import ExampleSpinBasicUsage from "./examples/basic-usage";
	import ExampleSpinSize from "./examples/size";
	import ExampleSpinFixed from "./examples/fixed";
	import ExampleSpinMessage from "./examples/message";
	import ExampleSpinCustom from "./examples/custom";
	import ExampleSpinState from "./examples/state";
	import ExampleSpinFullscreen from "./examples/fullscreen";

	export default {
		mixins: [
			MixinCatalogue
		],
		components: {
			Markdown,
			ExampleSpinBasicUsage,
			ExampleSpinSize,
			ExampleSpinFixed,
			ExampleSpinMessage,
			ExampleSpinCustom,
			ExampleSpinState,
			ExampleSpinFullscreen
		}
	};
</script>