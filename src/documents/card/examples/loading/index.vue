<template>
	<Example vertical id="example-card-loading">
		<template slot="source">
			<div class="example-card-loading">
				<vui-switch v-model="loading" />
				<vui-card v-bind:loading="loading">
					<vui-card-meta title="Card title">
						<vui-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
						<template slot="description">This is the description</template>
					</vui-card-meta>
				</vui-card>
				<vui-card>
					<vui-skeleton v-bind:loading="loading" animated avatar>
						<vui-card-meta title="Card title">
							<vui-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
							<template slot="description">This is the description</template>
						</vui-card-meta>
					</vui-skeleton>
					<template slot="actions">
						<vui-icon type="edit" />
						<vui-icon type="dustbin" />
						<vui-icon type="more-x" />
					</template>
				</vui-card>
			</div>
		</template>
		<template slot="title">加载状态</template>
		<template slot="describe">
			<p>数据读入前会有文本块样式。</p>
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
				loading: true
			};
		}
	};
</script>

<style>
	.example-card-loading .vui-card { margin-top:20px; }
</style>