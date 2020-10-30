<template>
	<Example id="example-skeleton-animated">
		<template slot="source">
			<vui-skeleton animated />
		</template>
		<template slot="title">动画效果</template>
		<template slot="describe">
			<p>显示动画效果。</p>
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