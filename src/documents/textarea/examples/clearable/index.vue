<template>
	<Example vertical id="example-textarea-clearable">
		<template slot="source">
			<vui-textarea v-model="value" placeholder="Enter something..." clearable />
		</template>
		<template slot="title">可清空</template>
		<template slot="describe">
		<p>含有清空图标的文本域，点击图标清空所有内容。</p>
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