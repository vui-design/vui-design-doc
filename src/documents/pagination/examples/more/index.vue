<template>
	<Example id="example-pagination-more">
		<template slot="source">
			<vui-pagination v-model="page" :total="500" />
		</template>
		<template slot="title">更多分页</template>
		<template slot="describe">
			<p>更多分页，当页数过多时会自动折叠。</p>
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
				page: 6
			};
		},
		watch: {
			page(value) {
				console.log("page: " + value);
			}
		}
	};
</script>