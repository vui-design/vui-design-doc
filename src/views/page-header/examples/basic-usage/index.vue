<template>
	<vui-doc-example v-bind:code="code" id="example-page-header-basic-usage">
		<template slot="demo">
			<vui-page-header
				style="border: 1px solid #f0f0f0;"
				title="Title"
				subTitle="This is a subtitle"
				v-on:back="handleBack"
			/>
		</template>
		<template slot="title">基本用法</template>
		<template slot="description">
			<p>标准页头，适合使用在需要简单描述的场景。</p>
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
		},
		methods: {
			handleBack() {
				this.$router.back();
			}
		}
	};
</script>