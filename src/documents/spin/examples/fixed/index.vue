<template>
	<Example vertical id="example-spin-fixed">
		<template slot="source">
			<div class="example-spin-fixed">
				<vui-spin fixed />
			</div>
		</template>
		<template slot="title">居中固定</template>
		<template slot="describe">
			<p>在容器内部垂直居中固定，需要父级有 <code>relative</code> 或 <code>absolute</code> 定位。</p>
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
	.example-spin-fixed { position:relative; height:100px; border:1px solid #e6e6e6; }
</style>
