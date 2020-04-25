<template>
	<Example vertical id="example-breadcrumb-separator">
		<template slot="source">
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
		<template slot="describe">
			<p>使用 <code>separator</code> 属性可以自定义分隔符。</p>
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