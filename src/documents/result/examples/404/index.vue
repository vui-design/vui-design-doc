<template>
	<Example vertical id="example-result-404">
		<template slot="source">
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
		<template slot="describe">
			<p>此页面未找到。</p>
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