<template>
	<Example id="example-pagination-hide-on-single-page">
		<template slot="source">
			<div class="example-pagination-hide-on-single-page">
				<vui-switch v-model="hideOnSinglePage" />
				<vui-pagination :total="8" :hideOnSinglePage="hideOnSinglePage" />
			</div>
		</template>
		<template slot="title">隐藏</template>
		<template slot="describe">
			<p>当只有一页时，通过设置 <code>hideOnSinglePage</code> 属性来隐藏分页。</p>
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
				hideOnSinglePage: false
			};
		}
	};
</script>

<style>
	.example-pagination-hide-on-single-page .vui-pagination { margin-top:15px; }
</style>