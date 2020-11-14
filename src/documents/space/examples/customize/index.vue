<template>
	<Example id="example-space-customize">
		<template slot="source">
			<vui-space v-bind:size="50">
				<vui-button type="primary">Primary</vui-button>
				<vui-button>Default</vui-button>
				<vui-button type="dashed">Dashed</vui-button>
				<vui-button type="text">Text</vui-button>
			</vui-space>
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