<template>
	<Example vertical id="example-grid-flex-justify">
		<template slot="source">
			<div class="example-grid-flex-justify">
				<vui-row type="flex">
					<vui-col v-bind:span="4"><div>col-4</div></vui-col>
					<vui-col v-bind:span="4"><div>col-4</div></vui-col>
					<vui-col v-bind:span="4"><div>col-4</div></vui-col>
					<vui-col v-bind:span="4"><div>col-4</div></vui-col>
				</vui-row>
				<vui-row type="flex" justify="center">
					<vui-col v-bind:span="4"><div>col-4</div></vui-col>
					<vui-col v-bind:span="4"><div>col-4</div></vui-col>
					<vui-col v-bind:span="4"><div>col-4</div></vui-col>
					<vui-col v-bind:span="4"><div>col-4</div></vui-col>
				</vui-row>
				<vui-row type="flex" justify="end">
					<vui-col v-bind:span="4"><div>col-4</div></vui-col>
					<vui-col v-bind:span="4"><div>col-4</div></vui-col>
					<vui-col v-bind:span="4"><div>col-4</div></vui-col>
					<vui-col v-bind:span="4"><div>col-4</div></vui-col>
				</vui-row>
				<vui-row type="flex" justify="space-around">
					<vui-col v-bind:span="4"><div>col-4</div></vui-col>
					<vui-col v-bind:span="4"><div>col-4</div></vui-col>
					<vui-col v-bind:span="4"><div>col-4</div></vui-col>
					<vui-col v-bind:span="4"><div>col-4</div></vui-col>
				</vui-row>
				<vui-row type="flex" justify="space-between">
					<vui-col v-bind:span="4"><div>col-4</div></vui-col>
					<vui-col v-bind:span="4"><div>col-4</div></vui-col>
					<vui-col v-bind:span="4"><div>col-4</div></vui-col>
					<vui-col v-bind:span="4"><div>col-4</div></vui-col>
				</vui-row>
			</div>
		</template>
		<template slot="title">Flex 水平对齐</template>
		<template slot="describe">
			<p>为 <code>row</code> 设置 <code>type</code> 属性来定义 <code>flex</code> 布局，其子元素根据不同的值 <code>start</code>、<code>center</code>、<code>end</code>、<code>space-around</code>、<code>space-between</code>，分别定义其在父节点里面的排版方式。</p>
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
	.example-grid-flex-justify .vui-row-flex { background-color:#ececec; }
	.example-grid-flex-justify .vui-row-flex:not(:last-child) { margin-bottom:15px; }
	.example-grid-flex-justify .vui-row-flex .vui-col div { height:50px; color:#fff; text-align:center; line-height:50px; }
	.example-grid-flex-justify .vui-row-flex .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); }
	.example-grid-flex-justify .vui-row-flex .vui-col:nth-child(even) div { background-color:rgba(45,140,240,1); }
</style>