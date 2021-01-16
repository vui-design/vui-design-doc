<template>
	<vui-doc-example v-bind:code="code" id="example-card-grid">
		<template slot="demo">
			<vui-card title="Card title">
				<vui-card-grid style="width: 25%;">Content...</vui-card-grid>
				<vui-card-grid style="width: 25%;">Content...</vui-card-grid>
				<vui-card-grid style="width: 25%;">Content...</vui-card-grid>
				<vui-card-grid style="width: 25%;">Content...</vui-card-grid>
				<vui-card-grid style="width: 25%;">Content...</vui-card-grid>
				<vui-card-grid style="width: 25%;">Content...</vui-card-grid>
				<vui-card-grid style="width: 25%;">Content...</vui-card-grid>
				<vui-card-grid style="width: 25%;">Content...</vui-card-grid>
			</vui-card>
		</template>
		<template slot="title">内容区隔</template>
		<template slot="description">
			<p>常见的卡片内容区隔模式。</p>
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