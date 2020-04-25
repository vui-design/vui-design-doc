<template>
	<Example vertical id="example-textarea-disabled">
		<template slot="source">
			<vui-textarea placeholder="Enter something..." disabled />
		</template>
		<template slot="title">禁用状态</template>
		<template slot="describe">
			<p>通过添加 <code>disabled</code> 属性将文本域设为禁用状态。</p>
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
		}
	};
</script>