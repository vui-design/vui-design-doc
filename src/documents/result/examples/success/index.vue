<template>
	<Example vertical id="example-result-success">
		<template slot="source">
			<vui-result
				status="success"
				title="This is result title"
				description="Here is a brief description of the result of the operation."
			>
				<template slot="extra">
					<vui-button type="primary">Back Home</vui-button>
					<vui-button>Continue</vui-button>
				</template>
			</vui-result>
		</template>
		<template slot="title">成功类型</template>
		<template slot="describe">
			<p>操作成功的结果展示。</p>
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