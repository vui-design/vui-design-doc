<template>
	<vui-doc-example v-bind:code="code" id="example-rate-disabled">
		<template slot="demo">
			<vui-rate v-model="value" disabled />
		</template>
		<template slot="title">只读</template>
		<template slot="description">
			<p>只读，无法进行鼠标交互。</p>
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
				value: 2
			};
		}
	};
</script>