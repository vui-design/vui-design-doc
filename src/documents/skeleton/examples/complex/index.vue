<template>
	<Example id="example-skeleton-complex">
		<template slot="source">
			<vui-skeleton avatar v-bind:paragraph="{ rows: 4 }" />
		</template>
		<template slot="title">复杂的组合</template>
		<template slot="describe">
			<p>更复杂的组合。</p>
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