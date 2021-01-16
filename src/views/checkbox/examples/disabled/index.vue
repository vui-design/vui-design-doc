<template>
	<vui-doc-example v-bind:code="code" id="example-checkbox-disabled">
		<template slot="demo">
			<div>
				<vui-checkbox checked :disabled="disabled">Checkbox</vui-checkbox>
				<vui-checkbox :disabled="disabled" style="margin-left: 10px;">Checkbox</vui-checkbox>
			</div>
		</template>
		<template slot="title">禁用状态</template>
		<template slot="description">
			<p>通过设置 <code>disabled</code> 属性来禁用多选框。</p>
		</template>
	</vui-doc-example>
</template>

<script>
	import VuiDocExample from "src/components/example";
	import code from "./code";

	export default {
		name: "ExampleCheckboxDisabled",
		components: {
			VuiDocExample
		},
		data() {
			return {
				code,
				disabled: true
			};
		}
	};
</script>