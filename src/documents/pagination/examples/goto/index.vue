<template>
	<Example id="example-pagination-goto">
		<template slot="source">
			<vui-pagination
				v-model="page"
				:total="500"
				showPageElevator
				@change="handleChangePage"
			/>
		</template>
		<template slot="title">跳转</template>
		<template slot="describe">
			<p>快速跳转到某一页。</p>
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
				page: 2
			};
		},
		methods: {
			handleChangePage(value) {
				console.log("page: " + value);
			}
		}
	};
</script>