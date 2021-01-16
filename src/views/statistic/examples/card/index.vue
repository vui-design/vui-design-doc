<template>
	<vui-doc-example v-bind:code="code" id="example-statistic-card">
		<template slot="demo">
			<div class="example-statistic-card">
				<vui-row v-bind:gutter="16">
					<vui-col v-bind:span="12">
						<vui-card v-bind:bordered="false">
							<vui-statistic v-bind:value="11.5" v-bind:precision="2" suffix="%" bodyStyle="color: #53a653;" title="Active">
								<vui-icon slot="prefix" type="arrow-up" />
							</vui-statistic>
						</vui-card>
					</vui-col>
					<vui-col v-bind:span="12">
						<vui-card v-bind:bordered="false">
							<vui-statistic v-bind:value="9.5" v-bind:precision="2" suffix="%" bodyStyle="color: #d54d5b;" title="Idle">
								<vui-icon slot="prefix" type="arrow-down" />
							</vui-statistic>
						</vui-card>
					</vui-col>
				</vui-row>
			</div>
		</template>
		<template slot="title">在卡片中使用</template>
		<template slot="description">
			<p>在卡片中展示统计数值。</p>
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
	.example-statistic-card { background-color:#fafafa; padding:16px; }
</style>