<template>
	<example v-bind:code="code" id="example-pagination-goto">
		<template slot="demo">
			<vui-pagination
				v-model="page"
				:total="500"
				showPageElevator
				@change="handleChangePage"
			/>
		</template>
		<template slot="title">跳转</template>
		<template slot="description">
			<p>快速跳转到某一页。</p>
		</template>
	</example>
</template>

<script>
	import Example from "src/components/example";
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