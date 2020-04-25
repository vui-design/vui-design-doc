<template>
	<Example vertical id="example-textarea-resize">
		<template slot="source">
			<vui-textarea v-model="value" placeholder="Enter something..." resize />
		</template>
		<template slot="title">手动改变高度</template>
		<template slot="describe">
			<p>启用 <code>resize</code> 属性，用户可拖动改变文本域的高度。</p>
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
				code,
				value: ""
			};
		}
	};
</script>