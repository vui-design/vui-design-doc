<template>
	<example v-bind:code="code" id="example-rate-disabled">
		<template slot="demo">
			<vui-rate v-model="value" disabled />
		</template>
		<template slot="title">只读</template>
		<template slot="description">
			<p>只读，无法进行鼠标交互。</p>
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
				code,
				value: 2
			};
		}
	};
</script>