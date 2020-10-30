<template>
	<Example id="example-avatar-basic-usage">
		<template slot="source">
			<div class="example-avatar-basic-usage">
				<section>
					<vui-avatar icon="user" v-bind:size="64" />
					<vui-avatar icon="user" size="large" />
					<vui-avatar icon="user" />
					<vui-avatar icon="user" size="small" />
				</section>
				<section>
					<vui-avatar icon="user" shape="square" v-bind:size="64" />
					<vui-avatar icon="user" shape="square" size="large" />
					<vui-avatar icon="user" shape="square" />
					<vui-avatar icon="user" shape="square" size="small" />
				</section>
			</div>
		</template>
		<template slot="title">基本用法</template>
		<template slot="describe">
			<p>头像有三种尺寸，两种形状可选；其中尺寸支持自定义数值。</p>
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
	.example-avatar-basic-usage section + section { margin-top:20px; }
	.example-avatar-basic-usage .vui-avatar + .vui-avatar { margin-left:20px; }
</style>