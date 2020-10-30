<template>
	<Example vertical id="example-grid-gutter">
		<template slot="source">
			<div class="example-grid-gutter">
				<vui-row v-bind:gutter="16">
					<vui-col v-bind:span="6"><div>col-6</div></vui-col>
					<vui-col v-bind:span="6"><div>col-6</div></vui-col>
					<vui-col v-bind:span="6"><div>col-6</div></vui-col>
					<vui-col v-bind:span="6"><div>col-6</div></vui-col>
				</vui-row>
			</div>
		</template>
		<template slot="title">区块间隔</template>
		<template slot="describe">
			<p>通过给 <code>row</code> 添加 <code>gutter</code> 属性，可以给下属的 <code>col</code> 添加间距，推荐使用 <code>(16+8n)px</code> 作为栅格间隔。（n 是自然数）</p>
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
	.example-grid-gutter .vui-row .vui-col div { height:50px; color:#fff; text-align:center; line-height:50px; }
	.example-grid-gutter .vui-row .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); }
	.example-grid-gutter .vui-row .vui-col:nth-child(even) div { background-color:rgba(45,140,240,1); }
</style>