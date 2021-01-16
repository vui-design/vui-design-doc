<template>
	<div>
		<vui-doc-markdown>
			<h1>Notice 通知提醒</h1>
			<p>全局展示通知提醒信息。</p>
			<h2>何时使用</h2>
			<p>在系统四个角显示通知提醒信息。经常用于以下情况：</p>
			<ul>
				<li>较为复杂的通知内容。</li>
				<li>带有交互的通知，给出用户下一步的行动点。</li>
				<li>系统主动推送。</li>
			</ul>
			<h2>代码演示</h2>
		</vui-doc-markdown>
		<vui-row :gutter="20">
			<vui-col :span="12">
				<ExampleNoticeBasicUsage />
				<ExampleNoticeType />
				<ExampleNoticeDuration />
			</vui-col>
			<vui-col :span="12">
				<ExampleNoticePlacement />
				<ExampleNoticeMoreContent />
			</vui-col>
		</vui-row>
		<vui-doc-markdown>
			<h2 id="example-api">API</h2>
			<p><code>Vui</code> 为 <code>Vue.prototype</code> 添加了全局方法 <code>$notice</code>，可以直接通过以下方式来使用：</p>
			<ul>
				<li><code>this.$notice.open(options)</code></li>
				<li><code>this.$notice.info(options)</code></li>
				<li><code>this.$notice.warning(options)</code></li>
				<li><code>this.$notice.success(options)</code></li>
				<li><code>this.$notice.error(options)</code></li>
			</ul>
			<p>以上方式隐式的创建及维护 <code>Vue</code> 组件，参数 <code>options</code> 可以是字符串、函数或对象。当为字符串或函数时，仅仅表示提醒标题或返回标题的函数；当为对象时，具体说明如下：</p>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="100">选项</th>
						<th>说明</th>
						<th width="200">类型</th>
						<th width="100">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>type</td>
						<td>提醒类型，可选值为 <code>info</code>、<code>warning</code>、<code>success</code>、<code>error</code> 或者不设</td>
						<td>String</td>
						<td><code>info</code></td>
					</tr>
					<tr>
						<td>title</td>
						<td>提醒标题</td>
						<td>String | VNode | Function</td>
						<td>--</td>
					</tr>
					<tr>
						<td>description</td>
						<td>提醒内容</td>
						<td>String | VNode | Function</td>
						<td>--</td>
					</tr>
					<tr>
						<td>icon</td>
						<td>自定义图标类型</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>closable</td>
						<td>是否显示关闭按钮</td>
						<td>Boolean</td>
						<td><code>true</code></td>
					</tr>
					<tr>
						<td>closeText</td>
						<td>关闭按钮文本，仅在 <code>closable</code> 为 <code>true</code> 时有效</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>duration</td>
						<td>停留时长，单位秒。设为 <code>0</code> 时不会自动关闭</td>
						<td>Number</td>
						<td><code>5</code></td>
					</tr>
					<tr>
						<td>placement</td>
						<td>弹出位置，可选值为 <code>top-left</code>、<code>top-right</code>、<code>bottom-left</code>、<code>bottom-right</code> 或者不设</td>
						<td>String</td>
						<td><code>top-right</code></td>
					</tr>
					<tr>
						<td>onOpen</td>
						<td>提醒打开时触发的回调函数</td>
						<td>Function</td>
						<td>--</td>
					</tr>
					<tr>
						<td>onAfterOpen</td>
						<td>提醒完全打开时（打开动画完成后）触发的事件回调</td>
						<td>Function</td>
						<td>--</td>
					</tr>
					<tr>
						<td>onClose</td>
						<td>提醒关闭时触发的事件回调</td>
						<td>Function</td>
						<td>--</td>
					</tr>
					<tr>
						<td>onAfterClose</td>
						<td>提醒完全关闭时（关闭动画完成后）触发的事件回调</td>
						<td>Function</td>
						<td>--</td>
					</tr>
				</tbody>
			</table>
			<p>以上方法调用后，均会返回一个引用，可以通过该引用更新和关闭通知提醒。</p>
			<ul>
				<li><code>notice.update(options)</code></li>
				<li><code>notice.close()</code></li>
			</ul>
			<p>其中 <code>notice.upadte</code> 方法的参数 <code>options</code> 同 <code>this.$notice[type]</code> 方法一致。</p>
		</vui-doc-markdown>
	</div>
</template>

<script>
	import MixinAnchors from "src/mixins/anchors";
	import VuiDocMarkdown from "src/components/markdown";
	import ExampleNoticeBasicUsage from "./examples/basic-usage";
	import ExampleNoticeType from "./examples/type";
	import ExampleNoticeDuration from "./examples/duration";
	import ExampleNoticePlacement from "./examples/placement";
	import ExampleNoticeMoreContent from "./examples/more-content";

	export default {
		mixins: [
			MixinAnchors
		],
		components: {
			VuiDocMarkdown,
			ExampleNoticeBasicUsage,
			ExampleNoticeType,
			ExampleNoticeDuration,
			ExampleNoticePlacement,
			ExampleNoticeMoreContent
		}
	};
</script>