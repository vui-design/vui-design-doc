<template>
	<vui-doc-example v-bind:code="code" id="example-pagination-small">
		<template slot="demo">
			<div class="example-pagination-small">
				<vui-pagination small :total="50" />
				<vui-pagination small :total="50" showPageSizer showPageElevator />
				<vui-pagination small :total="50" showTotal />
			</div>
		</template>
		<template slot="title">小型尺寸</template>
		<template slot="description">
			<p>启用 <code>small</code> 属性使用小型尺寸，拥有普通的所有功能。</p>
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

<style>
	.example-pagination-small .vui-pagination + .vui-pagination { margin-top:15px; }
</style>