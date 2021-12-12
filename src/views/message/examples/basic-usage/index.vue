<template>
	<example v-bind:code="code" id="example-message-basic-usage">
		<template slot="demo">
			<vui-button type="primary" v-on:click="showNormalMessage">Normal</vui-button>
		</template>
		<template slot="title">基本用法</template>
		<template slot="description">
			<p>基本用法，适用于简短的警告提示。</p>
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
		},
		methods: {
			showNormalMessage() {
				this.$message.open("This is a normal message");
			}
		}
	};
</script>