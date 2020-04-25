<template>
	<Example vertical id="example-result-500">
		<template slot="source">
			<vui-result
				status="500"
				title="500"
				description="Sorry, the server is wrong."
			>
				<template slot="extra">
					<vui-button type="primary">Back Home</vui-button>
				</template>
			</vui-result>
		</template>
		<template slot="title">500</template>
		<template slot="describe">
			<p>服务器发生了错误。</p>
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