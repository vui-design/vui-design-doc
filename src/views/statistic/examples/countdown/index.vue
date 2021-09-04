<template>
	<example v-bind:code="code" id="example-statistic-countdown">
		<template slot="demo">
			<vui-row v-bind:gutter="16">
				<vui-col v-bind:span="12">
					<vui-countdown v-bind:value="deadline" v-on:finish="handleFinish" title="Countdown" />
				</vui-col>
				<vui-col v-bind:span="12">
					<vui-countdown v-bind:value="deadline" formatter="HH:mm:ss:SSS" title="Million Seconds" />
				</vui-col>
				<vui-col v-bind:span="24" style="margin-top: 16px;">
					<vui-countdown v-bind:value="deadline" formatter="D 天 H 时 m 分 s 秒" title="Day Level" />
				</vui-col>
			</vui-row>
		</template>
		<template slot="title">倒计时</template>
		<template slot="description">
			<p>倒计时组件。</p>
		</template>
	</example>
</template>

<script>
	import Example from "src/components/example";
	import code from "./code";

	export default {
		components: {
			Example
		},
		data() {
			return {
				code,
				deadline: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30
			};
		},
		methods: {
			handleFinish() {
				console.log("finished!");
			}
		}
	};
</script>