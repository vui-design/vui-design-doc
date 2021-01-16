<template>
	<vui-doc-example v-bind:code="code" id="example-button-disabled">
		<template slot="demo">
			<div class="example-button-disabled">
				<section>
					<vui-button type="primary">Primary</vui-button>
					<vui-button type="primary" disabled>Primary(disabled)</vui-button>
				</section>
				<section>
					<vui-button>Default</vui-button>
					<vui-button disabled>Default(disabled)</vui-button>
				</section>
				<section>
					<vui-button type="dashed">Dashed</vui-button>
					<vui-button type="dashed" disabled>Dashed(disabled)</vui-button>
				</section>
				<section>
					<vui-button type="text">Text</vui-button>
					<vui-button type="text" disabled>Text(disabled)</vui-button>
				</section>
			</div>
		</template>
		<template slot="title">禁用状态</template>
		<template slot="description">
			<p>添加 <code>disabled</code> 属性即可让按钮处于禁用状态。</p>
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
	.example-button-disabled > section:not(:last-child) { margin-bottom:20px; }
	.example-button-disabled > section > .vui-button { margin-right:10px; }
</style>