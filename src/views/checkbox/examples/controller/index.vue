<template>
	<vui-doc-example v-bind:code="code" id="example-checkbox-controller">
		<template slot="demo">
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
		<template slot="description">
			<p>与其它组件进行数据联动。</p>
		</template>
	</vui-doc-example>
</template>

<script>
	import VuiDocExample from "src/components/example";
	import code from "./code";

	export default {
		name: "ExampleCheckboxController",
		components: {
			VuiDocExample
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