<template>
	<example v-bind:code="code" id="example-grid-responsive">
		<template slot="demo">
			<div class="example-grid-responsive">
				<vui-row>
					<vui-col v-bind:xs="2" v-bind:sm="4" v-bind:md="6" v-bind:lg="8" v-bind:xl="10"><div>Col</div></vui-col>
					<vui-col v-bind:xs="20" v-bind:sm="16" v-bind:md="12" v-bind:lg="8" v-bind:xl="4"><div>Col</div></vui-col>
					<vui-col v-bind:xs="2" v-bind:sm="4" v-bind:md="6" v-bind:lg="8" v-bind:xl="10"><div>Col</div></vui-col>
				</vui-row>
			</div>
		</template>
		<template slot="title">响应式布局</template>
		<template slot="description">
			<p>参照 Bootstrap 的响应式设计，预设了五个响应尺寸：<code>xs</code>、<code>sm</code>、<code>md</code>、<code>lg</code>、<code>xl</code> 和 <code>xxl</code>，详见 API。</p>
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
	.example-grid-responsive .vui-row .vui-col div { height:50px; color:#fff; text-align:center; line-height:50px; }
	.example-grid-responsive .vui-row .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); }
	.example-grid-responsive .vui-row .vui-col:nth-child(even) div { background-color:rgba(45,140,240,1); }
</style>