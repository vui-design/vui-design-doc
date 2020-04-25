<template>
	<Example vertical id="example-card-basic-usage">
		<template slot="source">
			<vui-card icon="menu-unfold" title="Card title">
				<p>Card content...</p>
				<p>Card content...</p>
				<p>Card content...</p>
				<a href="javascript:;" slot="extra">More</a>
			</vui-card>
		</template>
		<template slot="title">基本用法</template>
		<template slot="describe">
			<p>自定义图标、标题、主体和附加内容，可以完全自由控制各个部分，也可以结合其它组件一起使用，较为灵活。</p>
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