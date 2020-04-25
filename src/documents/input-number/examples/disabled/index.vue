<template>
	<Example vertical id="example-input-number-disabled">
		<template slot="source">
			<vui-input-number :min="1" :max="10" v-model="value" disabled />
		</template>
		<template slot="title">禁用</template>
		<template slot="describe">
			<p>通过添加 <code>disabled</code> 属性将数字输入框设为禁用状态。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	export default {
		components: {
			Example
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