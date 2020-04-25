<template>
	<Example vertical id="example-card-flexible-content">
		<template slot="source">
			<vui-card style="width: 302px;">
				<img slot="cover" src="https://dummyimage.com/300x200/ececec/595959" />
				<vui-card-meta title="Card title">
					<vui-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
					<template slot="description">This is the description</template>
				</vui-card-meta>
				<template slot="actions">
					<vui-icon type="edit" />
					<vui-icon type="dustbin" />
					<vui-icon type="more-x" />
				</template>
			</vui-card>
		</template>
		<template slot="title">更多内容配置</template>
		<template slot="describe">
			<p>支持封面、头像、标题、描述信息以及操作区的卡片。</p>
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