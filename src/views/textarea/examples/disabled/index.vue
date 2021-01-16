<template>
	<vui-doc-example v-bind:code="code" id="example-textarea-disabled">
		<template slot="demo">
			<vui-textarea placeholder="Enter something..." disabled />
		</template>
		<template slot="title">禁用状态</template>
		<template slot="description">
			<p>通过添加 <code>disabled</code> 属性将文本域设为禁用状态。</p>
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
				code
			};
		}
	};
</script>