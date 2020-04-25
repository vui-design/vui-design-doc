<template>
	<Example vertical id="example-spin-basic-usage">
		<template slot="source">
			<vui-spin />
		</template>
		<template slot="title">基本用法</template>
		<template slot="describe">
			<p>一个简单的加载状态。</p>
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