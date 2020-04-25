<template>
	<Example vertical id="example-result-403">
		<template slot="source">
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
		<template slot="describe">
			<p>你没有此页面的访问权限。</p>
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