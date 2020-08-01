<template>
	<Example id="example-space-size">
		<template slot="source">
			<div class="example-space-size">
				<vui-radio-group v-model="size">
					<vui-radio label="Small" value="small" />
					<vui-radio label="Medium" value="medium" />
					<vui-radio label="Large" value="large" />
				</vui-radio-group>
				<vui-space v-bind:size="size" style="width: 100%;">
					<vui-button type="primary">Primary</vui-button>
					<vui-button>Default</vui-button>
					<vui-button type="dashed">Dashed</vui-button>
					<vui-button type="text">Text</vui-button>
				</vui-space>
			</div>
		</template>
		<template slot="title">尺寸</template>
		<template slot="describe">
			<p>间距预设小、中、大三种尺寸，默认为中等间距。</p>
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
				code,
				size: "small"
			};
		}
	};
</script>

<style>
	.example-space-size {  }
	.example-space-size .vui-space { margin-top:20px; }
</style>