<template>
	<vui-doc-example v-bind:code="code" id="example-backtop-basic-usage">
		<template slot="demo">
			<div>
				Scroll down to see the bottom-right gray button.
				<vui-backtop />
			</div>
		</template>
		<template slot="title">基本用法</template>
		<template slot="description">
			<p>最简单的用法。</p>
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