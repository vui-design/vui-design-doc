<template>
	<vui-doc-example v-bind:code="code" id="example-spin-indicator">
		<template slot="demo">
			<div class="example-spin-indicator">
				<vui-spin>
					<vui-icon slot="indicator" type="loading-filled" style="font-size: 24px" />
				</vui-spin>
				<vui-spin v-bind:indicator="indicator" />
			</div>
		</template>
		<template slot="title">自定义指示符</template>
		<template slot="description">
			<p>使用自定义指示符。</p>
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
				code,
				indicator(h) {
					return h("vui-icon", {
						props: {
							type: "loading-spinner"
						},
						style: {
							fontSize: "24px"
						}
					});
				}
			};
		}
	};
</script>

<style>
	.example-spin-indicator > .vui-spin { margin-right:20px; }
</style>
