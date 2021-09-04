<template>
	<example v-bind:code="code" id="example-empty-basic-usage">
		<template slot="demo">
			<vui-empty />
		</template>
		<template slot="title">基本用法</template>
		<template slot="description">
			<p>简单的展示。</p>
		</template>
	</example>
</template>

<script>
	import Example from "src/components/example";
	import code from "./code";

	export default {
		components: {
			Example
		},
		data() {
			return {
				code
			};
		}
	};
</script>