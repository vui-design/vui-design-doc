<template>
	<vui-doc-example v-bind:code="code" id="example-textarea-maxLength">
		<template slot="demo">
			<vui-textarea v-model="value" maxLength="100" placeholder="Enter something..." />
		</template>
		<template slot="title">输入长度限制</template>
		<template slot="description">
		<p>开启 <code>maxLength</code> 属性来限制输入长度，并显示字数统计。</p>
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
				value: ""
			};
		}
	};
</script>