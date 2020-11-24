<template>
	<Example id="example-space-divider">
		<template slot="source">
			<vui-space divider>
				<a href="javascript:;">Link</a>
				<a href="javascript:;">Link</a>
				<a href="javascript:;">Link</a>
			</vui-space>
		</template>
		<template slot="title">分割线</template>
		<template slot="describe">
			<p>相邻标签或组件使用分割线进行分隔。</p>
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