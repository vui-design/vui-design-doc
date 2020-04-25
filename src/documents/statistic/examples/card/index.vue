<template>
	<Example vertical id="example-statistic-card">
		<template slot="source">
			<div class="example-statistic-card">
				<vui-row :gutter="16">
					<vui-col :span="12">
						<vui-card :bordered="false">
							<vui-statistic class="demo1" title="Active" suffix="%" :value="11.5" :precision="2">
								<vui-icon type="arrow-up" slot="prefix" />
							</vui-statistic>
						</vui-card>
					</vui-col>
					<vui-col :span="12">
						<vui-card :bordered="false">
							<vui-statistic class="demo2" title="Idle" suffix="%" :value="9.5" :precision="2">
								<vui-icon type="arrow-down" slot="prefix" />
							</vui-statistic>
						</vui-card>
					</vui-col>
				</vui-row>
			</div>
		</template>
		<template slot="title">在卡片中使用</template>
		<template slot="describe">
			<p>在卡片中展示统计数值。</p>
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
	.example-statistic-card { background-color:#ececec; padding:20px; }

	.example-statistic-card .demo1 .vui-statistic-main { color:#53a653; }
	.example-statistic-card .demo2 .vui-statistic-main { color:#d54d5b; }
</style>