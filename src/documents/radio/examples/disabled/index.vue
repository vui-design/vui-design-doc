<template>
	<Example vertical id="example-radio-disabled">
		<template slot="source">
			<vui-radio checked :disabled="disabled">Radio</vui-radio>
			<vui-radio :disabled="disabled" style="margin-left: 10px;">Radio</vui-radio>
		</template>
		<template slot="title">禁用状态</template>
		<template slot="describe">
			<p>通过设置 <code>disabled</code> 属性来禁用单选框。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	export default {
		name: "ExampleRadioDisabled",
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