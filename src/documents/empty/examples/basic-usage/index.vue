<template>
	<Example vertical id="example-empty-basic-usage">
		<template slot="source">
			<vui-empty />
		</template>
		<template slot="title">基本用法</template>
		<template slot="describe">
			<p>简单的展示。</p>
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