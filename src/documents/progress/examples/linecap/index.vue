<template>
	<Example vertical id="example-progress-linecap">
		<template slot="source">
			<div class="example-progress-linecap">
				<vui-progress :percentage="50" linecap="square" />
				<vui-progress type="circle" :percentage="75" status="exception" linecap="square" />
				<vui-progress type="dashboard" :percentage="100" linecap="square" />
			</div>
		</template>
		<template slot="title">线条边缘形状</template>
		<template slot="describe">
			<p>通过 <code>linecap</code> 可以调整线条边缘形状。</p>
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
	.example-progress-linecap > .vui-progress-line { margin-bottom:15px; }
	.example-progress-linecap > .vui-progress-circle { margin-right:15px; }
	.example-progress-linecap > .vui-progress-dashboard {  }
</style>