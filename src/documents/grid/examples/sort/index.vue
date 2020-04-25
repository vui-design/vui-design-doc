<template>
	<Example vertical id="example-grid-sort">
		<template slot="source">
			<div class="example-grid-sort">
				<vui-row>
					<vui-col :span="18" :push="6"><div>col-18 | push-6</div></vui-col>
					<vui-col :span="6" :pull="18"><div>col-6 | pull-18</div></vui-col>
				</vui-row>
			</div>
		</template>
		<template slot="title">栅格排序</template>
		<template slot="describe">
			<p>通过使用 <code>push</code> 和 <code>pull</code> 属性可以很容易的改变列的顺序。</p>
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
	.example-grid-sort .vui-row .vui-col div { height:50px; color:#fff; text-align:center; line-height:50px; }
	.example-grid-sort .vui-row .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); }
	.example-grid-sort .vui-row .vui-col:nth-child(even) div { background-color:rgba(45,140,240,1); }
</style>