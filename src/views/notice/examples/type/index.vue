<template>
	<vui-doc-example v-bind:code="code" id="example-notice-type">
		<template slot="demo">
			<div class="example-notice-type">
				<section>
					<h4>With description</h4>
					<vui-button type="info" @click="showInfoNotice(true)">Info</vui-button>
					<vui-button type="warning" @click="showWarningNotice(true)">Warning</vui-button>
					<vui-button type="success" @click="showSuccessNotice(true)">Success</vui-button>
					<vui-button type="error" @click="showErrorNotice(true)">Error</vui-button>
				</section>
				<section>
					<h4>No description</h4>
					<vui-button @click="showInfoNotice(false)">Info</vui-button>
					<vui-button @click="showWarningNotice(false)">Warning</vui-button>
					<vui-button @click="showSuccessNotice(false)">Success</vui-button>
					<vui-button @click="showErrorNotice(false)">Error</vui-button>
				</section>
			</div>
		</template>
		<template slot="title">提示类型</template>
		<template slot="description">
			<p>不同的提示类型：<code>info</code>、<code>warning</code>、<code>success</code>、<code>error</code>。</p>
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
		},
		methods: {
			showInfoNotice(flag) {
				this.$notice.info({
					title: "This is the title",
					description: flag ? "This is the description of the notice. This is the description of the notice. This is the description of the notice." : ""
				});
			},
			showWarningNotice(flag) {
				this.$notice.warning({
					title: "This is the title",
					description: flag ? "This is the description of the notice. This is the description of the notice. This is the description of the notice." : ""
				});
			},
			showSuccessNotice(flag) {
				this.$notice.success({
					title: "This is the title",
					description: flag ? "This is the description of the notice. This is the description of the notice. This is the description of the notice." : ""
				});
			},
			showErrorNotice(flag) {
				this.$notice.error({
					title: "This is the title",
					description: flag ? "This is the description of the notice. This is the description of the notice. This is the description of the notice." : ""
				});
			}
		}
	};
</script>

<style>
	.example-notice-type section + section { margin-top:10px; }
	.example-notice-type section h4 { margin-bottom:10px; }
	.example-notice-type section .vui-button + .vui-button { margin-left:10px; }
</style>