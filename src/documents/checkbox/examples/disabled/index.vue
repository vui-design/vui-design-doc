<template>
	<Example vertical id="example-checkbox-disabled">
		<template slot="source">
			<div>
				<vui-checkbox checked :disabled="disabled">Checkbox</vui-checkbox>
				<vui-checkbox :disabled="disabled" style="margin-left: 10px;">Checkbox</vui-checkbox>
			</div>
		</template>
		<template slot="title">禁用状态</template>
		<template slot="describe">
			<p>通过设置 <code>disabled</code> 属性来禁用多选框。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	export default {
		name: "ExampleCheckboxDisabled",
		components: {
			Example
		},
		data() {
			return {
				code,
				disabled: true
			};
		}
	};
</script>