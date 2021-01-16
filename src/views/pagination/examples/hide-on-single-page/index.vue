<template>
	<vui-doc-example v-bind:code="code" id="example-pagination-hide-on-single-page">
		<template slot="demo">
			<div class="example-pagination-hide-on-single-page">
				<vui-switch v-model="hideOnSinglePage" />
				<vui-pagination :total="8" :hideOnSinglePage="hideOnSinglePage" />
			</div>
		</template>
		<template slot="title">隐藏</template>
		<template slot="description">
			<p>当只有一页时，通过设置 <code>hideOnSinglePage</code> 属性来隐藏分页。</p>
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
				hideOnSinglePage: false
			};
		}
	};
</script>

<style>
	.example-pagination-hide-on-single-page .vui-pagination { margin-top:15px; }
</style>