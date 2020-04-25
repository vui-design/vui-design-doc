<template>
	<Example vertical id="example-input-clearable">
		<template slot="source">
			<vui-input v-model="value" clearable placeholder="Enter something..." />
		</template>
		<template slot="title">可清空</template>
		<template slot="describe">
		<p>含有清空图标的输入框，点击图标清空所有内容。</p>
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