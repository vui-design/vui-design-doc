<template>
	<vui-doc-example v-bind:code="code" id="example-result-403">
		<template slot="demo">
			<vui-result
				status="403"
				title="403"
				description="Sorry, you are not authorized to access this page."
			>
				<template slot="extra">
					<vui-button type="primary">Back Home</vui-button>
				</template>
			</vui-result>
		</template>
		<template slot="title">403</template>
		<template slot="description">
			<p>你没有此页面的访问权限。</p>
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