<template>
	<vui-doc-example v-bind:code="code" id="example-textarea-resize">
		<template slot="demo">
			<vui-textarea v-model="value" placeholder="Enter something..." resize />
		</template>
		<template slot="title">手动改变高度</template>
		<template slot="description">
			<p>启用 <code>resize</code> 属性，用户可拖动改变文本域的高度。</p>
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