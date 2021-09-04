<template>
	<example v-bind:code="code" id="example-grid-responsive-more">
		<template slot="demo">
			<div class="example-grid-responsive-more">
				<vui-row>
					<vui-col v-bind:xs="{ span: 5, offset: 1 }" v-bind:lg="{ span: 6, offset: 2 }"><div>Col</div></vui-col>
					<vui-col v-bind:xs="{ span: 11, offset: 1 }" v-bind:lg="{ span: 6, offset: 2 }"><div>Col</div></vui-col>
					<vui-col v-bind:xs="{ span: 5, offset: 1 }" v-bind:lg="{ span: 6, offset: 2 }"><div>Col</div></vui-col>
				</vui-row>
			</div>
		</template>
		<template slot="title">其它属性的响应式</template>
		<template slot="description">
			<p><code>span</code>、<code>offset</code>、<code>push</code>、<code>pull</code>、<code>order</code> 属性可以通过内嵌到 <code>xs</code>、<code>sm</code>、<code>md</code>、<code>lg</code>、<code>xl</code>、<code>xxl</code> 属性中来使用。</p>
			<p>其中 <code>:xs="6"</code> 相当于 <code>:xs="{ span: 6 }"</code>。</p>
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
	.example-grid-responsive-more .vui-row .vui-col div { height:50px; color:#fff; text-align:center; line-height:50px; }
	.example-grid-responsive-more .vui-row .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); }
	.example-grid-responsive-more .vui-row .vui-col:nth-child(even) div { background-color:rgba(45,140,240,1); }
</style>