<template>
	<Example vertical id="example-cell-link">
		<template slot="source">
			<div class="example-cell-link">
				<vui-card icon="list-settings-filled" title="选项" borderless padding="0px">
					<vui-cell-group title="链接单元格">
						<vui-cell href="https://cn.vuejs.org/" target="_blank">跳转至 Vue 官网</vui-cell>
						<vui-cell to="/components/message">跳转至 Message 组件</vui-cell>
					</vui-cell-group>
					<vui-cell-group title="带图标的链接单元格">
						<vui-cell href="https://cn.vuejs.org/" target="_blank">
							跳转至 Vue 官网
							<vui-icon slot="icon" type="stack" />
						</vui-cell>
						<vui-cell to="/components/message">
							跳转至 Message 组件
							<vui-icon slot="icon" type="message-ellipsis" />
						</vui-cell>
					</vui-cell-group>
					<vui-cell-group title="带额外内容的链接单元格">
						<vui-cell href="https://cn.vuejs.org/" target="_blank">
							跳转至 Vue 官网
							<template slot="extra">额外内容</template>
						</vui-cell>
						<vui-cell to="/components/message">
							跳转至 Message 组件
							<template slot="extra">额外内容</template>
						</vui-cell>
					</vui-cell-group>
					<vui-cell-group title="带图标、额外内容的链接单元格" description="我是分组底部说明文字">
						<vui-cell href="https://cn.vuejs.org/" target="_blank">
							跳转至 Vue 官网
							<vui-icon slot="icon" type="stack" />
							<template slot="extra">额外内容</template>
						</vui-cell>
						<vui-cell to="/components/message">
							跳转至 Message 组件
							<vui-icon slot="icon" type="message-ellipsis" />
							<template slot="extra">额外内容</template>
						</vui-cell>
					</vui-cell-group>
				</vui-card>
			</div>
		</template>
		<template slot="title">链接</template>
		<template slot="describe">
			<p>包含链接用法的综合示例。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	export default {
		components: {
			Example
		},
		data() {
			return {
				code
			};
		}
	};
</script>

<style>
	.example-cell-link { background-color:#ececec; padding:20px; }
	.example-cell-link > .vui-card { width:300px; }
</style>