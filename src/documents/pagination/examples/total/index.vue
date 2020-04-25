<template>
	<Example id="example-pagination-total">
		<template slot="source">
			<div class="example-pagination-total">
				<vui-pagination :total="95" showTotal />
				<vui-pagination :total="95" :showTotal="showTotal" />
			</div>
		</template>
		<template slot="title">总数</template>
		<template slot="describe">
			<p>通过设置 <code>showTotal</code> 展示总共有多少数据。 </p>
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
		},
		methods: {
			showTotal(total, range) {
				return range[0] + "~" + range[1] + " / " + total;
			}
		}
	};
</script>

<style>
	.example-pagination-total .vui-pagination + .vui-pagination { margin-top:15px; }
</style>