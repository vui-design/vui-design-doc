<template>
	<Example vertical id="example-divider-vertical">
		<template slot="source">
			<div class="example-divider-vertical">
				Text
				<vui-divider type="vertical" />
				<a href="javascript:;">Link</a>
				<vui-divider type="vertical" />
				<a href="javascript:;">Link</a>
			</div>
		</template>
		<template slot="title">垂直方向</template>
		<template slot="describe">
			<p>使用 <code>type="vertical"</code> 设置行内垂直方向的分割线。</p>
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