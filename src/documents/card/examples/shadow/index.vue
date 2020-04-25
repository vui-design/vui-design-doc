<template>
	<Example vertical id="example-card-shadow">
		<template slot="source">
			<div class="example-card-shadow">
				<vui-row :gutter="20">
					<vui-col :span="12">
						<vui-card title="Card title" shadow="always" :bordered="false">
							<p>Card content...</p>
							<p>Card content...</p>
							<p>Card content...</p>
						</vui-card>
					</vui-col>
					<vui-col :span="12">
						<vui-card title="Card title" shadow="hover" :bordered="false">
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
			<p><code>always</code> 表示始终显示阴影，<code>hover</code> 表示鼠标移入时显示阴影。</p>
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
	.example-card-shadow { background-color:#ececec; padding:20px; }
</style>