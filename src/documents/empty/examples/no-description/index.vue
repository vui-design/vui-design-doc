<template>
	<Example id="example-empty-no-description">
		<template slot="source">
			<vui-empty v-bind:description="false" />
		</template>
		<template slot="title">无描述</template>
		<template slot="describe">
			<p>无描述的空状态。</p>
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