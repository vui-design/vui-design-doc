<template>
	<Example id="example-backtop-basic-usage">
		<template slot="source">
			<div>
				Scroll down to see the bottom-right gray button.
				<vui-backtop />
			</div>
		</template>
		<template slot="title">基本用法</template>
		<template slot="describe">
			<p>最简单的用法。</p>
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