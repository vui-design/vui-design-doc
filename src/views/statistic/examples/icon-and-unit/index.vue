<template>
	<example v-bind:code="code" id="example-statistic-icon-and-unit">
		<template slot="demo">
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
		<template slot="description">
			<p>通过前缀和后缀添加图标/单位。</p>
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
				code
			};
		}
	};
</script>