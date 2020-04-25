<template>
	<Example vertical id="example-progress-color">
		<template slot="source">
			<div class="example-progress-color">
				<vui-progress :percentage="50" color="#722ed1" />
				<vui-progress type="circle" :percentage="75" status="exception" color="#f8ac59" />
				<vui-progress type="dashboard" :percentage="100" color="#1ab394" />
			</div>
		</template>
		<template slot="title">自定义颜色</template>
		<template slot="describe">
			<p>通过 <code>color</code> 自定义颜色（会覆盖 <code>status</code> 状态下的默认颜色）。</p>
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
	.example-progress-color > .vui-progress-line { margin-bottom:15px; }
	.example-progress-color > .vui-progress-circle { margin-right:15px; }
	.example-progress-color > .vui-progress-dashboard {  }
</style>