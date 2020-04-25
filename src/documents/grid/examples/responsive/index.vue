<template>
	<Example vertical id="example-grid-responsive">
		<template slot="source">
			<div class="example-grid-responsive">
				<vui-row>
					<vui-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10"><div>Col</div></vui-col>
					<vui-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4"><div>Col</div></vui-col>
					<vui-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10"><div>Col</div></vui-col>
				</vui-row>
			</div>
		</template>
		<template slot="title">响应式布局</template>
		<template slot="describe">
			<p>参照 Bootstrap 的响应式设计，预设了五个响应尺寸：<code>xs</code>、<code>sm</code>、<code>md</code>、<code>lg</code>、<code>xl</code> 和 <code>xxl</code>，详见 API。</p>
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
	.example-grid-responsive .vui-row .vui-col div { height:50px; color:#fff; text-align:center; line-height:50px; }
	.example-grid-responsive .vui-row .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); }
	.example-grid-responsive .vui-row .vui-col:nth-child(even) div { background-color:rgba(45,140,240,1); }
</style>