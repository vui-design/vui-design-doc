<template>
	<vui-doc-example v-bind:code="code" id="example-card-flexible-content">
		<template slot="demo">
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
		<template slot="description">
			<p>支持封面、头像、标题、描述信息以及操作区的卡片。</p>
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