<template>
	<div>
		<document>
			<h1>Datepicker日期选择框</h1>
			<p>输入或选择日期的控件。</p>
			<h2>何时使用</h2>
			<p>当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。</p>
			<h2>代码演示</h2>
		</document>
		<vui-row v-bind:gutter="16">
			<vui-col v-bind:span="12">
				<ExampleDatepickerBasicUsage />
			</vui-col>
			<vui-col v-bind:span="12">

			</vui-col>
		</vui-row>
	</div>
</template>

<script>
	import MixinAnchors from "src/mixins/anchors";
	import Document from "src/components/document";
	import ExampleDatepickerBasicUsage from "./examples/basic-usage";

	export default {
		mixins: [
			MixinAnchors
		],
		components: {
			Document,
			ExampleDatepickerBasicUsage
		}
	};
</script>