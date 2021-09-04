<template>
	<example v-bind:code="code" id="example-empty-no-description">
		<template slot="demo">
			<vui-empty v-bind:description="false" />
		</template>
		<template slot="title">无描述</template>
		<template slot="description">
			<p>无描述的空状态。</p>
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