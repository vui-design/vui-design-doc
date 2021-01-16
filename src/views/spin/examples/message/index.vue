<template>
	<vui-doc-example v-bind:code="code" id="example-spin-message">
		<template slot="demo">
			<div class="example-spin-message">
				<vui-spin message="Loading...">
					<vui-alert
						type="info"
						message="Alert message title"
						description="Further details about the context of this alert."
					/>
				</vui-spin>
			</div>
		</template>
		<template slot="title">自定义消息文案</template>
		<template slot="description">
			<p>通过 <code>message</code> 属性设置消息文案。</p>
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
