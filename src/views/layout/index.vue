<template>
	<div>
		<vui-doc-markdown>
			<h1>Layout 布局</h1>
			<p>协助进行页面级整体布局。</p>
			<h2>设计规则</h2>
			<h3>尺寸</h3>
			<p>一级导航项偏左靠近 logo 放置，辅助菜单偏右放置。</p>
			<ul>
				<li>顶部导航（大部分系统）：一级导航高度 <code>64px</code>，二级导航 <code>48px</code>。</li>
				<li>顶部导航（展示类页面）：一级导航高度 <code>80px</code>，二级导航 <code>56px</code>。</li>
				<li>顶部导航高度的范围计算公式为：<code>48 + 8n</code>。</li>
				<li>侧边导航宽度的范围计算公式：<code>200 + 8n</code>。</li>
			</ul>
			<h3>交互</h3>
			<ul>
				<li>一级导航和末级的导航需要在可视化的层面被强调出来；</li>
				<li>当前项应该在呈现上优先级最高；</li>
				<li>当导航收起的时候，当前项的样式自动赋予给它的上一个层级；</li>
				<li>左侧导航栏的收放交互同时支持手风琴和全展开的样式，根据业务的要求进行适当的选择。</li>
			</ul>
			<h3>视觉</h3>
			<p>导航样式上需要根据信息层级合理的选择样式：</p>
			<ul>
				<li>大色块强调 — 建议用于底色为深色系时，当前页面父级的导航项。</li>
				<li>高亮火柴棍 — 当导航栏底色为浅色系时使用，可用于当前页面对应导航项，建议尽量在导航路径的最终项使用。</li>
				<li>字体高亮变色 — 从可视化层面，字体高亮的视觉强化力度低于大色块，通常在当前项的上一级使用。</li>
				<li>字体放大 — <code>12px</code>、<code>14px</code> 是导航的标准字号，<code>14px</code> 字体用在一、二级导航中。字号可以考虑导航项的等级做相应选择。</li>
			</ul>
			<h3>组件概述</h3>
			<ul>
				<li><code>Layout</code> — 布局容器，其下可嵌套 <code>Header</code>、<code>Sider</code>、<code>Content</code>、<code>Footer</code> 或 <code>Layout</code> 本身，可以放在任何父容器中。</li>
				<li><code>Header</code> — 顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。</li>
				<li><code>Sider</code> — 侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。</li>
				<li><code>Content</code> — 内容部分，自带默认样式，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。</li>
				<li><code>Footer</code> — 底部布局，自带默认样式，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。</li>
			</ul>
			<p>注意：采用 <code>flex</code> 布局实现，请注意<a href="https://caniuse.com/#search=flex" target="_blank">浏览器兼容性</a>问题。</p>
			<h2>代码演示</h2>
		</vui-doc-markdown>
		<ExampleLayoutBasicUsage />
		<ExampleLayoutVertical />
		<ExampleLayoutHeaderSiderFirst />
		<ExampleLayoutHeaderSiderSecond />
		<ExampleLayoutSider />
		<ExampleLayoutCustomTrigger />
		<ExampleLayoutResponsive />
		<vui-doc-markdown>
			<h2 id="example-api">API</h2>
			<h3>Layout 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="100">属性</th>
						<th>说明</th>
						<th width="150">类型</th>
						<th width="100">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>withSider</td>
						<td>表示子元素里含有 <code>Sider</code> 组件，一般不用指定。可用于服务端渲染时避免样式闪动</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
				</tbody>
			</table>
			<h3>Header 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="100">属性</th>
						<th>说明</th>
						<th width="150">类型</th>
						<th width="100">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>color / theme</td>
						<td>主题颜色，可选值为 <code>light</code>、<code>dark</code>，支持自定义颜色值</td>
						<td>String</td>
						<td><code>light</code></td>
					</tr>
				</tbody>
			</table>
			<h3>Sider 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="100">属性</th>
						<th>说明</th>
						<th width="150">类型</th>
						<th width="100">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>color / theme</td>
						<td>主题颜色，可选值为 <code>light</code>、<code>dark</code>，支持自定义颜色值</td>
						<td>String</td>
						<td><code>light</code></td>
					</tr>
					<tr>
						<td>breakpoint</td>
						<td>触发响应式布局的断点，可选值为 <code>xs</code>、<code>sm</code>、<code>md</code>、<code>lg</code>、<code>xl</code>、<code>xxl</code> 或者不设</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>collapsible</td>
						<td>是否可折叠</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>collapsed</td>
						<td>当前折叠状态，可以使用 <code>v-model</code> 双向绑定数据</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>width</td>
						<td>宽度，单位 <code>px</code></td>
						<td>String | Number</td>
						<td><code>200</code></td>
					</tr>
					<tr>
						<td>collapsedWidth</td>
						<td>折叠宽度，单位 <code>px</code></td>
						<td>String | Number</td>
						<td><code>80</code></td>
					</tr>
					<tr>
						<td>showTrigger</td>
						<td>可折叠状态下是否显示折叠触发器</td>
						<td>Boolean</td>
						<td><code>true</code></td>
					</tr>
				</tbody>
			</table>
			<h3>Sider 事件</h3>
			<table class="example-api-events">
				<thead>
					<tr>
						<th width="100">事件名</th>
						<th>说明</th>
						<th width="150">类型</th>
						<th width="100">回调参数</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>collapse</td>
						<td>展开或收起时的事件回调函数，由点击 <code>trigger</code> 以及响应式反馈两种方式触发，可以使用 <code>v-model</code> 双向绑定数据</td>
						<td>Function</td>
						<td><code>collapsed</code></td>
					</tr>
				</tbody>
			</table>
			<h3>Breakpoint</h3>
			<ul>
				<li><code>xs</code> - 480px</li>
				<li><code>sm</code> - 576px</li>
				<li><code>md</code> - 768px</li>
				<li><code>lg</code> - 992px</li>
				<li><code>xl</code> - 1200px</li>
				<li><code>xxl</code> - 1600px</li>
			</ul>
		</vui-doc-markdown>
	</div>
</template>

<script>
	import MixinAnchors from "src/mixins/anchors";
	import VuiDocMarkdown from "src/components/markdown";
	import ExampleLayoutBasicUsage from "./examples/basic-usage";
	import ExampleLayoutVertical from "./examples/vertical";
	import ExampleLayoutHeaderSiderFirst from "./examples/header-sider-first";
	import ExampleLayoutHeaderSiderSecond from "./examples/header-sider-second";
	import ExampleLayoutSider from "./examples/sider";
	import ExampleLayoutCustomTrigger from "./examples/custom-trigger";
	import ExampleLayoutResponsive from "./examples/responsive";

	export default {
		mixins: [
			MixinAnchors
		],
		components: {
			VuiDocMarkdown,
			ExampleLayoutBasicUsage,
			ExampleLayoutVertical,
			ExampleLayoutHeaderSiderFirst,
			ExampleLayoutHeaderSiderSecond,
			ExampleLayoutSider,
			ExampleLayoutCustomTrigger,
			ExampleLayoutResponsive
		}
	};
</script>