<template>
	<vui-doc-example v-bind:code="code" id="example-pagination-basic-usage">
		<template slot="demo">
			<vui-pagination v-model="page" :total="50" />
		</template>
		<template slot="title">基本用法</template>
		<template slot="description">
			<p>最简单的用法。</p>
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
				page: 1
			};
		},
		watch: {
			page(value) {
				console.log("page: " + value);
			}
		}
	};
</script>