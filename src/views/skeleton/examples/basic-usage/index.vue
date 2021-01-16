<template>
	<vui-doc-example v-bind:code="code" id="example-skeleton-basic-usage">
		<template slot="demo">
			<vui-skeleton />
		</template>
		<template slot="title">基本用法</template>
		<template slot="description">
			<p>最简单的占位效果。</p>
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