<template>
	<example v-bind:code="code" id="example-progress-format">
		<template slot="demo">
			<div class="example-progress-format">
				<vui-progress type="circle" :percentage="75" :format="format" />
				<vui-progress type="circle" :percentage="100" :format="format" />
			</div>
		</template>
		<template slot="title">自定义文字格式</template>
		<template slot="description">
			<p>利用 <code>format</code> 属性指定文字格式。</p>
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
		},
		methods: {
			format(percentage) {
				return percentage < 100 ? `${percentage} Days` : `Done`;
			}
		}
	};
</script>

<style>
	.example-progress-format > .vui-progress:not(:first-child) { margin-left:15px; }
</style>