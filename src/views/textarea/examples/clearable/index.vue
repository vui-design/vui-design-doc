<template>
	<vui-doc-example v-bind:code="code" id="example-textarea-clearable">
		<template slot="demo">
			<vui-textarea v-model="value" placeholder="Enter something..." clearable />
		</template>
		<template slot="title">可清空</template>
		<template slot="description">
		<p>含有清空图标的文本域，点击图标清空所有内容。</p>
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