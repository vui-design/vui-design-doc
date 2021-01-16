<template>
	<vui-doc-example v-bind:code="code" id="example-result-404">
		<template slot="demo">
			<vui-result
				status="404"
				title="404"
				description="Sorry, the page you visited does not exist."
			>
				<template slot="extra">
					<vui-button type="primary">Back Home</vui-button>
				</template>
			</vui-result>
		</template>
		<template slot="title">404</template>
		<template slot="description">
			<p>此页面未找到。</p>
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