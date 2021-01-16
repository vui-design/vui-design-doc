<template>
	<vui-doc-example v-bind:code="code" id="example-pagination-more">
		<template slot="demo">
			<vui-pagination v-model="page" :total="500" />
		</template>
		<template slot="title">更多分页</template>
		<template slot="description">
			<p>更多分页，当页数过多时会自动折叠。</p>
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
				page: 6
			};
		},
		watch: {
			page(value) {
				console.log("page: " + value);
			}
		}
	};
</script>