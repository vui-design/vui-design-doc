<template>
	<vui-doc-example v-bind:code="code" id="example-input-number-digit">
		<template slot="demo">
			<vui-input-number :min="0" :max="10" :step="0.1" v-model="value" />
		</template>
		<template slot="title">小数</template>
		<template slot="description">
			<p>和原生的数字输入框一样，<code>value</code> 的精度由 <code>step</code> 的小数位数决定。</p>
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
				value: 0
			};
		},
		watch: {
			value(value) {
				console.log(value);
			}
		}
	};
</script>