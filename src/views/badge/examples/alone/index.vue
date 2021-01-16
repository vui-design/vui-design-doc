<template>
	<vui-doc-example v-bind:code="code" id="example-badge-alone">
		<template slot="demo">
			<div class="example-badge-alone">
				<vui-badge v-bind:count="99" />
				<vui-badge v-bind:count="100" />
				<vui-badge v-bind:count="1000" v-bind:overflowCount="999" />
				<vui-badge text="new" />
				<vui-badge text="hot" />
			</div>
		</template>
		<template slot="title">独立使用</template>
		<template slot="description">
			<p>不包裹任何元素或组件。</p>
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
	.example-badge-alone > .vui-badge { margin-right:20px; }
</style>