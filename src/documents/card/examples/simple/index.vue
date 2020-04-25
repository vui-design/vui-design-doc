<template>
	<Example vertical id="example-card-simple">
		<template slot="source">
			<vui-card>
				<p>Card content...</p>
				<p>Card content...</p>
				<p>Card content...</p>
			</vui-card>
		</template>
		<template slot="title">简洁卡片</template>
		<template slot="describe">
			<p>只含有主体内容。</p>
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