<template>
	<vui-doc-example v-bind:code="code" id="example-input-number-disabled">
		<template slot="demo">
			<vui-input-number :min="1" :max="10" v-model="value" disabled />
		</template>
		<template slot="title">禁用</template>
		<template slot="description">
			<p>通过添加 <code>disabled</code> 属性将数字输入框设为禁用状态。</p>
		</template>
	</vui-doc-example>
</template>

<script>
	import VuiDocExample from "src/components/example";
	import code from "./code";

	export default {
		components: {
			VuiDocExample
		},
		data() {
			return {
				code,
				value: 1
			};
		},
		watch: {
			value(value) {
				console.log(value);
			}
		}
	};
</script>