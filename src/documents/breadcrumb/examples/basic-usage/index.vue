<template>
	<Example vertical id="example-breadcrumb-basic-usage">
		<template slot="source">
			<div class="example-breadcrumb-basic-usage">
				<vui-breadcrumb>
					<vui-breadcrumb-item>Home</vui-breadcrumb-item>
					<vui-breadcrumb-item>Components</vui-breadcrumb-item>
					<vui-breadcrumb-item>Navigation</vui-breadcrumb-item>
					<vui-breadcrumb-item>Breadcrumb</vui-breadcrumb-item>
				</vui-breadcrumb>
			</div>
		</template>
		<template slot="title">基本用法</template>
		<template slot="describe">
			<p>基本用法。</p>
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