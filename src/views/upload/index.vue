<template>
	<div>
		<document>
			<h1>Upload 上传</h1>
			<p>文件选择上传和拖拽上传控件。</p>
			<h2>何时使用</h2>
			<p>上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。</p>
			<ul>
				<li>当需要上传一个或一些文件时；</li>
				<li>当需要展现上传的进度时；</li>
				<li>当需要使用拖拽交互时。</li>
			</ul>
			<h2>代码演示</h2>
		</document>
		<vui-row :gutter="20">
			<vui-col :span="12">
				<ExampleUploadBasicUsage />
				<ExampleUploadPicture />
				<ExampleUploadPictureCard />
				<ExampleUploadDraggable />
			</vui-col>
			<vui-col :span="12">
				<ExampleUploadList />
				<ExampleUploadAvatar />
				<ExampleUploadManually />
			</vui-col>
		</vui-row>
		<document>
			<h2 id="example-api">API</h2>
			<h3>Upload 属性</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="100">属性</th>
						<th>说明</th>
						<th width="150">类型</th>
						<th width="200">默认值</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>draggable</td>
						<td>是否启用拖拽上传</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>multiple</td>
						<td>是否支持多选</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>accept</td>
						<td>接受上传的<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input/file#accept" target="_blank">文件类型</a></td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>showList</td>
						<td>是否显示上传列表</td>
						<td>Boolean</td>
						<td><code>true</code></td>
					</tr>
					<tr>
						<td>list</td>
						<td>已经上传的文件列表</td>
						<td>Array</td>
						<td><code>[]</code></td>
					</tr>
					<tr>
						<td>listType</td>
						<td>上传列表展示类型，可选值为 <code>text</code>、<code>picture</code>、<code>picture-card</code> 或者不设</td>
						<td>String</td>
						<td><code>text</code></td>
					</tr>
					<tr>
						<td>request</td>
						<td>覆盖默认的上传行为，可自定义上传实现</td>
						<td>Function</td>
						<td>--</td>
					</tr>
					<tr>
						<td>action</td>
						<td>设置上传请求的地址，必填</td>
						<td>String</td>
						<td>--</td>
					</tr>
					<tr>
						<td>headers</td>
						<td>设置上传请求的头部信息</td>
						<td>Object</td>
						<td>--</td>
					</tr>
					<tr>
						<td>withCredentials</td>
						<td>上传请求时是否携带 <code>cookie</code> 信息</td>
						<td>Boolean</td>
						<td><code>false</code></td>
					</tr>
					<tr>
						<td>name</td>
						<td>设置上传请求的文件参数名称</td>
						<td>String</td>
						<td><code>file</code></td>
					</tr>
					<tr>
						<td>data</td>
						<td>设置上传请求的额外参数或返回额外参数的函数</td>
						<td>Object | Function</td>
						<td>--</td>
					</tr>
					<tr>
						<td>autoUpload</td>
						<td>是否启用自动上传，即选取文件后立即进行上传</td>
						<td>Boolean</td>
						<td><code>true</code></td>
					</tr>
					<tr>
						<td>beforeUpload</td>
						<td>上传文件之前的钩子函数，接收 <code>file</code>、<code>fileList</code> 作为参数<br />若该钩子函数返回 <code>false</code> 则禁止上传；支持返回一个 <code>Promise</code> 对象，<code>Promise</code> 对象 <code>resolve</code> 时允许上传，<code>reject</code> 时禁止上传</td>
						<td>Function</td>
						<td>--</td>
					</tr>
					<tr>
						<td>beforeRemove</td>
						<td>删除文件之前的钩子函数，接收 <code>file</code>、<code>fileList</code> 作为参数<br />若该钩子函数返回 <code>false</code> 则禁止删除；支持返回一个 <code>Promise</code> 对象，<code>Promise</code> 对象 <code>resolve</code> 时允许删除，<code>reject</code> 时禁止删除</td>
						<td>Function</td>
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
			<h3>Upload 插槽</h3>
			<table class="example-api-props">
				<thead>
					<tr>
						<th width="100">名称</th>
						<th>说明</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>trigger</td>
						<td>触发文件选择的内容</td>
					</tr>
				</tbody>
			</table>
			<h3>Upload 方法</h3>
			<table class="example-api-events">
				<thead>
					<tr>
						<th width="100">方法名</th>
						<th>说明</th>
						<th width="150">类型</th>
						<th width="200">参数</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>upload</td>
						<td>手动上传</td>
						<td>Function</td>
						<td>--</td>
					</tr>
					<tr>
						<td>abort</td>
						<td>取消上传请求</td>
						<td>Function</td>
						<td>--</td>
					</tr>
				</tbody>
			</table>
			<h3>Upload 事件</h3>
			<table class="example-api-events">
				<thead>
					<tr>
						<th width="100">事件名</th>
						<th>说明</th>
						<th width="150">类型</th>
						<th width="200">回调参数</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>ready</td>
						<td>文件上传前的事件回调</td>
						<td>Function</td>
						<td><code>file, fileList</code></td>
					</tr>
					<tr>
						<td>progress</td>
						<td>文件上传时的事件回调</td>
						<td>Function</td>
						<td><code>progress, file, fileList</code></td>
					</tr>
					<tr>
						<td>success</td>
						<td>文件上传成功的事件回调</td>
						<td>Function</td>
						<td><code>response, file, fileList</code></td>
					</tr>
					<tr>
						<td>error</td>
						<td>文件上传失败的事件回调</td>
						<td>Function</td>
						<td><code>error, file, fileList</code></td>
					</tr>
					<tr>
						<td>preview</td>
						<td>点击预览按钮的事件回调</td>
						<td>Function</td>
						<td><code>file, fileList</code></td>
					</tr>
					<tr>
						<td>remove</td>
						<td>点击删除按钮的事件回调</td>
						<td>Function</td>
						<td><code>file, fileList</code></td>
					</tr>
					<tr>
						<td>change</td>
						<td>文件状态发生变化时的事件回调，添加文件、上传中/成功/失败、删除文件时都会被调用</td>
						<td>Function</td>
						<td><code>file, fileList</code></td>
					</tr>
				</tbody>
			</table>
			<p>以上事件回调中，参数 <code>file</code> 的元信息如下：</p>
			<ul>
				<li><code>rawFile</code> - 原始文件对象</li>
				<li><code>id</code> - 文件唯一标识</li>
				<li><code>name</code> - 文件名称</li>
				<li><code>size</code> - 文件大小</li>
				<li><code>url</code> - 文件预览地址</li>
				<li><code>status</code> - 文件状态，包括：<code>ready</code>、<code>progress</code>、<code>success</code>、<code>error</code></li>
				<li><code>percentage</code> - 文件上传进度，状态为 <code>progress</code> 时有效</li>
				<li><code>progress</code> - 文件上传进度信息，状态为 <code>progress</code> 时有效</li>
				<li><code>response</code> - 文件上传成功后的响应内容，状态为 <code>success</code> 时有效</li>
				<li><code>error</code> - 文件上传失败后的错误信息，状态为 <code>error</code> 时有效</li>
			</ul>
		</document>
	</div>
</template>

<script>
	import MixinAnchors from "src/mixins/anchors";
	import Document from "src/components/document";
	import ExampleUploadBasicUsage from "./examples/basic-usage";
	import ExampleUploadPicture from "./examples/picture";
	import ExampleUploadPictureCard from "./examples/picture-card";
	import ExampleUploadDraggable from "./examples/draggable";
	import ExampleUploadList from "./examples/list";
	import ExampleUploadAvatar from "./examples/avatar";
	import ExampleUploadManually from "./examples/manually";

	export default {
		mixins: [
			MixinAnchors
		],
		components: {
			Document,
			ExampleUploadBasicUsage,
			ExampleUploadPicture,
			ExampleUploadPictureCard,
			ExampleUploadDraggable,
			ExampleUploadList,
			ExampleUploadAvatar,
			ExampleUploadManually
		}
	};
</script>