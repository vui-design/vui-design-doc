<template>
	<example v-bind:code="code" jsFiddle="Lqbejuo5" id="example-divider-vertical">
		<template slot="demo">
			<div class="example-divider-vertical">
				Text
				<vui-divider type="vertical" />
				<a href="javascript:;">Link</a>
				<vui-divider type="vertical" />
				<a href="javascript:;">Link</a>
			</div>
		</template>
		<template slot="title">垂直方向</template>
		<template slot="description">
			<p>使用 <code>type="vertical"</code> 设置行内垂直方向的分割线。</p>
		</template>
	</example>
</template>

<script>
	import Example from "src/components/example";
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