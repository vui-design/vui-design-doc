<template>
	<Example vertical id="example-textarea-maxLength">
		<template slot="source">
			<vui-textarea v-model="value" maxLength="100" placeholder="Enter something..." />
		</template>
		<template slot="title">输入长度限制</template>
		<template slot="describe">
		<p>开启 <code>maxLength</code> 属性来限制输入长度，并显示字数统计。</p>
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