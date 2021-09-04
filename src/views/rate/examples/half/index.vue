<template>
	<example v-bind:code="code" id="example-rate-half">
		<template slot="demo">
			<vui-rate v-model="value" allowHalf />
		</template>
		<template slot="title">半星</template>
		<template slot="description">
			<p>支持选中半星。</p>
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
				value: 2.5
			};
		}
	};
</script>