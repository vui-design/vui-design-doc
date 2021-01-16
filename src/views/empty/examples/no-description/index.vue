<template>
	<vui-doc-example v-bind:code="code" id="example-empty-no-description">
		<template slot="demo">
			<vui-empty v-bind:description="false" />
		</template>
		<template slot="title">无描述</template>
		<template slot="description">
			<p>无描述的空状态。</p>
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