<template>
	<vui-doc-example v-bind:code="code" id="example-switch-text">
		<template slot="demo">
			<div class="example-switch-text">
				<vui-switch>
					<template slot="checked">开</template>
					<template slot="unchecked">关</template>
				</vui-switch>
				<vui-switch>
					<template slot="checked">1</template>
					<template slot="unchecked">0</template>
				</vui-switch>
				<vui-switch checked>
					<vui-icon type="checkmark" slot="checked" />
					<vui-icon type="crossmark" slot="unchecked" />
				</vui-switch>
			</div>
		</template>
		<template slot="title">文字图标</template>
		<template slot="description">
			<p>带有文字或图标的开关。</p>
		</template>
	</vui-doc-example>
</template>

<script>
	import VuiDocExample from "src/components/example";
	import code from "./code";

	export default {
		name: "ExampleSwitchText",
		components: {
			VuiDocExample
		},
		data() {
			return {
				code
			};
		}
	};
</script>

<style>
	.example-switch-text .vui-switch { margin-right:10px; }
</style>