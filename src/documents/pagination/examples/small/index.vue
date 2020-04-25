<template>
	<Example id="example-pagination-small">
		<template slot="source">
			<div class="example-pagination-small">
				<vui-pagination small :total="50" />
				<vui-pagination small :total="50" showPageSizer showPageElevator />
				<vui-pagination small :total="50" showTotal />
			</div>
		</template>
		<template slot="title">小型尺寸</template>
		<template slot="describe">
			<p>启用 <code>small</code> 属性使用小型尺寸，拥有普通的所有功能。</p>
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
	.example-pagination-small .vui-pagination + .vui-pagination { margin-top:15px; }
</style>