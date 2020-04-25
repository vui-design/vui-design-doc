<template>
	<Example vertical id="example-switch-disabled">
		<template slot="source">
			<div>
				<vui-switch v-model="value" :disabled="disabled" />
				<br>
				<div style="margin-top: 10px;">
					<vui-button type="primary" size="small" @click="disabled = !disabled">
						{{disabled ? "Enabled" : "Disabled"}}
					</vui-button>
				</div>
			</div>
		</template>
		<template slot="title">禁用状态</template>
		<template slot="describe">
			<p>添加 <code>disabled</code> 属性即可让开关处于禁用状态。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	export default {
		name: "ExampleSwitchDisabled",
		components: {
			Example
		},
		data() {
			return {
				code,
				value: false,
				disabled: true
			};
		},
		watch: {
			value(value) {
				console.log(value);
			}
		}
	};
</script>