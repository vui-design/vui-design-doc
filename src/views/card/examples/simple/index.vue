<template>
	<vui-doc-example v-bind:code="code" id="example-card-simple">
		<template slot="demo">
			<vui-card>
				<p>Card content...</p>
				<p>Card content...</p>
				<p>Card content...</p>
			</vui-card>
		</template>
		<template slot="title">简洁卡片</template>
		<template slot="description">
			<p>只含有主体内容。</p>
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