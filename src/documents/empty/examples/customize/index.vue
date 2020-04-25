<template>
	<Example vertical id="example-empty-customize">
		<template slot="source">
			<vui-empty>
				<img slot="image" style="height: 60px;" src="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg" />
				<div slot="description">Customize description, <a href="javascript:;">Link</a></div>
				<vui-button type="primary">Create Now</vui-button>
			</vui-empty>
		</template>
		<template slot="title">自定义</template>
		<template slot="describe">
			<p>自定义图片、描述、附属内容。</p>
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