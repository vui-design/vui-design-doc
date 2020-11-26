<template>
	<Example id="example-statistic-icon-and-unit">
		<template slot="source">
			<vui-row v-bind:gutter="16">
				<vui-col v-bind:span="12">
					<vui-statistic v-bind:value="1024" title="Feedback">
						<vui-icon slot="prefix" type="thumb-up" />
					</vui-statistic>
				</vui-col>
				<vui-col v-bind:span="12">
					<vui-statistic v-bind:value="88" title="Unmerged">
						<template slot="suffix">/ 100</template>
					</vui-statistic>
				</vui-col>
			</vui-row>
		</template>
		<template slot="title">图标/单位</template>
		<template slot="describe">
			<p>通过前缀和后缀添加图标/单位。</p>
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