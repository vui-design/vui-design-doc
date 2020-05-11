<template>
	<Example vertical id="example-result-comingsoon">
		<template slot="source">
			<vui-result
				status="comingsoon"
				title="Coming Soon!"
				description="Sorry, The current page is under development, so stay tuned!"
			>
				<template slot="extra">
					<vui-button type="primary">Back Home</vui-button>
				</template>
			</vui-result>
		</template>
		<template slot="title">Coming Soon</template>
		<template slot="describe">
			<p>敬请期待！</p>
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