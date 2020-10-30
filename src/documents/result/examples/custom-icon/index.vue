<template>
	<Example vertical id="example-result-custom-icon">
		<template slot="source">
			<vui-result
				icon="checkmark-circle"
				title="Great, we have done all the operations!"
			>
				<template slot="extra">
					<vui-button type="primary">Next</vui-button>
				</template>
			</vui-result>
		</template>
		<template slot="title">自定义图标</template>
		<template slot="describe">
			<p>通过 <code>icon</code> 属性自定义图标类型。</p>
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