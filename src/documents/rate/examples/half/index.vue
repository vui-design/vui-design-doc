<template>
	<Example id="example-rate-half">
		<template slot="source">
			<vui-rate v-model="value" allowHalf />
		</template>
		<template slot="title">半星</template>
		<template slot="describe">
			<p>支持选中半星。</p>
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
				value: 2.5
			};
		}
	};
</script>