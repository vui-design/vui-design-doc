<template>
	<vui-doc-example v-bind:code="code" id="example-alert-type">
		<template slot="demo">
			<div class="example-alert-type">
				<vui-alert message="Information" />
				<vui-alert type="warning" message="Warning" />
				<vui-alert type="success" message="Success" />
				<vui-alert type="error" message="Error" />
			</div>
		</template>
		<template slot="title">四种类型</template>
		<template slot="description">
			<p>共有 <code>info</code>、<code>warning</code>、<code>success</code>、<code>error</code> 四种类型可以选择，默认为 <code>info</code> 类型。</p>
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
	.example-alert-type .vui-alert + .vui-alert { margin-top:16px; }
</style>