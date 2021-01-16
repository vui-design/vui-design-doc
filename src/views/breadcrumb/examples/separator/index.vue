<template>
	<vui-doc-example v-bind:code="code" id="example-breadcrumb-separator">
		<template slot="demo">
			<div class="example-breadcrumb-separator">
				<vui-breadcrumb separator=">">
					<vui-breadcrumb-item to="/">Home</vui-breadcrumb-item>
					<vui-breadcrumb-item to="/components">Components</vui-breadcrumb-item>
					<vui-breadcrumb-item>Navigation</vui-breadcrumb-item>
					<vui-breadcrumb-item>Breadcrumb</vui-breadcrumb-item>
				</vui-breadcrumb>
			</div>
		</template>
		<template slot="title">分隔符</template>
		<template slot="description">
			<p>使用 <code>separator</code> 属性可以自定义分隔符。</p>
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