<template>
	<Example vertical id="example-message-basic-usage">
		<template slot="source">
			<vui-button type="primary" @click="showNormalMessage">Normal</vui-button>
		</template>
		<template slot="title">基本用法</template>
		<template slot="describe">
			<p>基本用法，适用于简短的警告提示。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
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