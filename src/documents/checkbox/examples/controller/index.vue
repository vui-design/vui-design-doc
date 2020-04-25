<template>
	<Example vertical id="example-checkbox-controller">
		<template slot="source">
			<div>
				<vui-checkbox v-model="checked" :disabled="disabled">
					{{checked ? "Checked" : "Unchecked"}} - {{disabled ? "Disabled" : "Enabled"}}
				</vui-checkbox>
				<br>
				<div style="margin-top: 10px;">
					<vui-button type="primary" size="small" @click="checked = !checked">
						{{checked ? "Unchecked" : "Checked"}}
					</vui-button>
					<vui-button type="primary" size="small" @click="disabled = !disabled" style="margin-left: 10px;">
						{{disabled ? "Enabled" : "Disabled"}}
					</vui-button>
				</div>
			</div>
		</template>
		<template slot="title">与其它组件通信</template>
		<template slot="describe">
			<p>与其它组件进行数据联动。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	export default {
		name: "ExampleCheckboxController",
		components: {
			Example
		},
		data() {
			return {
				code,
				checked: false,
				disabled: false
			};
		}
	};
</script>