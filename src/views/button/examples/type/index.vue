<template>
	<vui-doc-example v-bind:code="code" id="example-button-type">
		<template slot="demo">
			<div class="example-button-type">
				<section>
					<vui-button type="primary">Primary</vui-button>
					<vui-button type="info">Info</vui-button>
					<vui-button type="warning">Warning</vui-button>
					<vui-button type="success">Success</vui-button>
					<vui-button type="error">Error</vui-button>
				</section>
				<section>
					<vui-button>Default</vui-button>
					<vui-button type="dashed">Dashed</vui-button>
					<vui-button type="text">Text</vui-button>
				</section>
			</div>
		</template>
		<template slot="title">按钮类型</template>
		<template slot="description">
			<p>按钮包含八种类型。一般情况下，我们将 <code>primary</code> 类型用于主按钮，而次按钮使用 <code>default</code> 类型，建议主按钮在同一个操作区域最多出现一次。</p>
		</template>
	</vui-doc-example>
</template>

<script>
	import VuiDocExample from "src/components/example";
	import code from "./code";

	export default {
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
	.example-button-type > section:not(:last-child) { margin-bottom:20px; }
	.example-button-type > section > .vui-button { margin-right:10px; }
	.example-button-type > section > .vui-button > svg { width:14px; vertical-align:-0.125em; fill:currentColor; margin-right:5px; }
</style>