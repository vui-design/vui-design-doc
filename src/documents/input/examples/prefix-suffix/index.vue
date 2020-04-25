<template>
	<Example vertical id="example-input-prefix-suffix">
		<template slot="source">
			<div class="example-input-prefix-suffix">
				<vui-input prefix="mic" placeholder="Enter something..." />
				<vui-input suffix="calendar" placeholder="Enter something..." />
				<vui-input placeholder="Enter something...">
					<vui-icon slot="prefix" type="group" />
					<vui-tooltip slot="suffix" content="Extra Information">
						<vui-icon type="info" />
					</vui-tooltip>
				</vui-input>
			</div>
		</template>
		<template slot="title">前缀/后缀图标</template>
		<template slot="describe">
			<p>通过设置 <code>prefix</code> 和 <code>suffix</code> 或同名插槽设置前缀/后缀图标。</p>
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
	.example-input-prefix-suffix > .vui-input:not(:first-child) { margin-top:20px; }
</style>