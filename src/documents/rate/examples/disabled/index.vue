<template>
	<Example id="example-rate-disabled">
		<template slot="source">
			<vui-rate v-model="value" disabled />
		</template>
		<template slot="title">只读</template>
		<template slot="describe">
			<p>只读，无法进行鼠标交互。</p>
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
				value: 2
			};
		}
	};
</script>