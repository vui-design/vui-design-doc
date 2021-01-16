<template>
	<vui-doc-example v-bind:code="code" jsFiddle="14be5f7d" id="example-divider-with-text">
		<template slot="demo">
			<div class="example-divider-with-text">
				<p>Be careful how you judge people, most of all friends. You don’t sum up a man’s life in one moment.</p>
				<vui-divider>Text</vui-divider>
				<p>That was my way of getting through difficult times of low confidence – hard work.</p>
				<vui-divider orientation="left">Left Text</vui-divider>
				<p>There is not a heart but has its moments of longing, yearning for something better, nobler and holier than it knows before.</p>
				<vui-divider orientation="right">Right Text</vui-divider>
				<p>It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.</p>
			</div>
		</template>
		<template slot="title">带文本的分割线</template>
		<template slot="description">
			<p>分割线中可以加入文本，使用 <code>orientation</code> 指定文本位置。</p>
		</template>
	</vui-doc-example>
</template>

<script>
	import VuiDocExample from "src/components/example";
	import code from "./code";

	export default {
		components: {
			VuiDocExample
		},
		data() {
			return {
				code
			};
		}
	};
</script>