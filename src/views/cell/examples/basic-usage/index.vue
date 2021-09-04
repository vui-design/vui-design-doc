<template>
	<example v-bind:code="code" id="example-cell-basic-usage">
		<template slot="demo">
			<div class="example-cell-basic-usage">
				<vui-card v-bind:bordered="false" shadow="always" icon="list-settings-filled" bodyStyle="padding: 0;" title="选项">
					<vui-cell-group title="单元格">
						<vui-cell>标题文字</vui-cell>
						<vui-cell>标题文字</vui-cell>
					</vui-cell-group>
					<vui-cell-group title="带图标的单元格">
						<vui-cell>
							标题文字
							<vui-icon slot="icon" type="stack" />
						</vui-cell>
						<vui-cell>
							标题文字
							<vui-icon slot="icon" type="message-ellipsis" />
						</vui-cell>
					</vui-cell-group>
					<vui-cell-group title="带额外内容的单元格">
						<vui-cell>
							标题文字
							<template slot="extra">额外内容</template>
						</vui-cell>
						<vui-cell>
							标题文字
							<template slot="extra">额外内容</template>
						</vui-cell>
					</vui-cell-group>
					<vui-cell-group title="带图标、额外内容的单元格" description="我是分组底部说明文字">
						<vui-cell>
							标题文字
							<vui-icon slot="icon" type="stack" />
							<template slot="extra">额外内容</template>
						</vui-cell>
						<vui-cell>
							标题文字
							<vui-icon slot="icon" type="message-ellipsis" />
							<template slot="extra">额外内容</template>
						</vui-cell>
					</vui-cell-group>
				</vui-card>
			</div>
		</template>
		<template slot="title">基本用法</template>
		<template slot="description">
			<p>包含基本用法的综合示例。</p>
		</template>
	</example>
</template>

<script>
	import Example from "src/components/example";
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
	.example-cell-basic-usage { background-color:#f6f6f6; padding:20px; }
	.example-cell-basic-usage > .vui-card { width:300px; }
</style>