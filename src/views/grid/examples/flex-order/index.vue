<template>
	<example v-bind:code="code" id="example-grid-flex-order">
		<template slot="demo">
			<div class="example-grid-flex-order">
				<vui-row type="flex">
					<vui-col v-bind:span="6" v-bind:order="4"><div>1 | order-4</div></vui-col>
					<vui-col v-bind:span="6" v-bind:order="3"><div>2 | order-3</div></vui-col>
					<vui-col v-bind:span="6" v-bind:order="2"><div>3 | order-2</div></vui-col>
					<vui-col v-bind:span="6" v-bind:order="1"><div>4 | order-1</div></vui-col>
				</vui-row>
			</div>
		</template>
		<template slot="title">Flex 排序</template>
		<template slot="description">
			<p>通过 Flex 布局的 <code>order</code> 来改变列的顺序。</p>
		</template>
	</example>
</template>

<script>
	import Example from "src/components/example";
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
	.example-grid-flex-order .vui-row-flex .vui-col div { height:50px; color:#fff; text-align:center; line-height:50px; }
	.example-grid-flex-order .vui-row-flex .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); }
	.example-grid-flex-order .vui-row-flex .vui-col:nth-child(even) div { background-color:rgba(45,140,240,1); }
</style>