<template>
	<Example id="example-alert-basic-usage">
		<template slot="source">
			<vui-alert message="Infomation" />
		</template>
		<template slot="title">基本用法</template>
		<template slot="describe">
			<p>基本用法，适用于简短的警告提示。</p>
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