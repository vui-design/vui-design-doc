<template>
	<Example vertical id="example-pagination-align">
		<template slot="source">
			<div class="example-pagination-simple">
				<vui-pagination :total="500" />
				<vui-pagination :total="500" align="center" />
				<vui-pagination :total="500" align="right" />
			</div>
		</template>
		<template slot="title">对齐方式</template>
		<template slot="describe">
			<p>通过 <code>align</code> 属性设置分页的对齐方式。</p>
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

<style>
	.example-pagination-align .vui-pagination + .vui-pagination { margin-top:15px; }
</style>