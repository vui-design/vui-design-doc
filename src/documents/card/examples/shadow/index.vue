<template>
	<Example vertical id="example-card-shadow">
		<template slot="source">
			<div class="example-card-shadow">
				<vui-row v-bind:gutter="20">
					<vui-col v-bind:span="12">
						<vui-card v-bind:bordered="false" shadow="hover" title="Card title">
							<p>Card content...</p>
							<p>Card content...</p>
							<p>Card content...</p>
						</vui-card>
					</vui-col>
					<vui-col v-bind:span="12">
						<vui-card v-bind:bordered="false" shadow="always" title="Card title">
							<p>Card content...</p>
							<p>Card content...</p>
							<p>Card content...</p>
						</vui-card>
					</vui-col>
				</vui-row>
			</div>
		</template>
		<template slot="title">卡片阴影</template>
		<template slot="describe">
			<p><code>hover</code> 表示鼠标移入时显示阴影，<code>always</code> 表示始终显示阴影。</p>
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
	.example-card-shadow { background-color:#f6f6f6; padding:20px; }
</style>