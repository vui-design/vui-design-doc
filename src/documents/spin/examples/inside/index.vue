<template>
	<Example vertical id="example-spin-inside">
		<template slot="source">
			<div class="example-spin-inside">
				<vui-spin />
			</div>
		</template>
		<template slot="title">容器</template>
		<template slot="describe">
			<p>放入一个容器中。</p>
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
	.example-spin-inside { border-radius:2px; background-color:#fafafa; padding:50px; text-align:center; }
</style>
