<template>
	<Example id="example-space-customize">
		<template slot="source">
			<div class="example-space-customize">
				<section>
					<vui-space v-bind:size="40">
						<vui-button type="primary">Primary</vui-button>
						<vui-button>Default</vui-button>
						<vui-button type="dashed">Dashed</vui-button>
						<vui-button type="text">Text</vui-button>
					</vui-space>
				</section>
				<section>
					<vui-space divider v-bind:size="20">
						<a href="javascript:;">Link</a>
						<a href="javascript:;">Link</a>
						<a href="javascript:;">Link</a>
					</vui-space>
				</section>
			</div>
		</template>
		<template slot="title">自定义间距尺寸</template>
		<template slot="describe">
			<p>自定义间距尺寸。</p>
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
	.example-space-customize section { margin-top:20px; }
</style>