<template>
	<Example vertical id="example-result-custom-icon">
		<template slot="source">
			<vui-result
				icon="emotion-happy"
				title="Great, we have done all the operations!"
			>
				<template slot="extra">
					<vui-button type="primary">Next</vui-button>
				</template>
			</vui-result>
		</template>
		<template slot="title">自定义图标</template>
		<template slot="describe">
			<p>自定义图标的结果展示</p>
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