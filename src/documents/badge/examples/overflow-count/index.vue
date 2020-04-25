<template>
	<Example vertical id="example-badge-overflow-count">
		<template slot="source">
			<div class="example-badge-overflow-count">
				<vui-badge :count="99">
					<img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
				</vui-badge>
				<vui-badge :count="100">
					<img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
				</vui-badge>
				<vui-badge :count="1000" :overflowCount="999">
					<img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
				</vui-badge>
			</div>
		</template>
		<template slot="title">封顶数值</template>
		<template slot="describe">
			<p>当 <code>count</code> 大于 <code>overflowCount</code> 限定的值时会显示为 <code>overflowCount+</code>，默认的 <code>overflowCount</code> 为 <code>99</code>。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	export default {
		name: "ExampleBadgeOverflowCount",
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
	.example-badge-overflow-count > .vui-badge { margin-right:20px; }
	.example-badge-overflow-count > .vui-badge > img { width:48px; height:48px; border-radius:5px; }
</style>