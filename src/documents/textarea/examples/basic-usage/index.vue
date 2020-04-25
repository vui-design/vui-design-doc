<template>
	<Example vertical id="example-textarea-basic-usage">
		<template slot="source">
			<vui-textarea v-model="value" placeholder="Basic usage" />
		</template>
		<template slot="title">基本用法</template>
		<template slot="describe">
			<p>最简单的用法，可以使用 <code>v-model</code> 双向绑定数据。</p>
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