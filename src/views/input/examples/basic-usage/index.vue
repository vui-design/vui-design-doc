<template>
	<vui-doc-example v-bind:code="code" id="example-input-basic-usage">
		<template slot="demo">
			<vui-input v-model="value" placeholder="Basic usage" />
		</template>
		<template slot="title">基本用法</template>
		<template slot="description">
			<p>最简单的用法，可以使用 <code>v-model</code> 双向绑定数据。</p>
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
				value: ""
			};
		}
	};
</script>