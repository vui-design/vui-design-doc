<template>
	<Example vertical id="example-pagination-basic-usage">
		<template slot="source">
			<vui-pagination v-model="page" :total="50" />
		</template>
		<template slot="title">基本用法</template>
		<template slot="describe">
			<p>最简单的用法。</p>
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
				page: 1
			};
		},
		watch: {
			page(value) {
				console.log("page: " + value);
			}
		}
	};
</script>