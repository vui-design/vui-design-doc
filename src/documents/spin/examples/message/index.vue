<template>
	<Example vertical id="example-spin-message">
		<template slot="source">
			<div class="example-spin-message">
				<vui-spin fixed message="Loading..." />
			</div>
		</template>
		<template slot="title">消息文案</template>
		<template slot="describe">
			<p>通过 <code>message</code> 属性设置消息文案。</p>
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
	.example-spin-message { position:relative; height:100px; border:1px solid #e6e6e6; }
</style>
