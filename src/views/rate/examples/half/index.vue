<template>
	<vui-doc-example v-bind:code="code" id="example-rate-half">
		<template slot="demo">
			<vui-rate v-model="value" allowHalf />
		</template>
		<template slot="title">半星</template>
		<template slot="description">
			<p>支持选中半星。</p>
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
				value: 2.5
			};
		}
	};
</script>