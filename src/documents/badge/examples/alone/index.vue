<template>
	<Example vertical id="example-badge-alone">
		<template slot="source">
			<div class="example-badge-alone">
				<vui-badge :count="99" />
				<vui-badge :count="100" />
				<vui-badge :count="1000" :overflowCount="999" />
				<vui-badge text="new" />
				<vui-badge text="hot" />
			</div>
		</template>
		<template slot="title">独立使用</template>
		<template slot="describe">
			<p>不包裹任何元素或组件。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	export default {
		name: "ExampleBadgeAlone",
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
	.example-badge-alone > .vui-badge { margin-right:20px; }
</style>