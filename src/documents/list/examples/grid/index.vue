<template>
	<Example vertical id="example-list-grid">
		<template slot="source">
			<vui-list v-bind:grid="grid" v-bind:data="data">
				<vui-list-item slot="item" slot-scope="item, index">
					<vui-card v-bind:title="item.title">{{item.description}}</vui-card>
				</vui-list-item>
			</vui-list>
		</template>
		<template slot="title">栅格列表</template>
		<template slot="describe">
			<p>可以通过设置 <code>List</code> 的 <code>grid</code> 属性来实现栅格列表，<code>columns</code> 可设置期望显示的列数。</p>
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
				code,
				grid: {
					gutter: 16,
					columns: 4
				},
				data: [
					{
						title: "List Item Title",
						description: "This is the description!"
					},
					{
						avatar: "https://dummyimage.com/32x32/2d8cf0/fff",
						title: "List Item Title",
						description: "This is the description!"
					},
					{
						avatar: "https://dummyimage.com/32x32/2d8cf0/fff",
						title: "List Item Title",
						description: "This is the description!"
					},
					{
						avatar: "https://dummyimage.com/32x32/2d8cf0/fff",
						title: "List Item Title",
						description: "This is the description!"
					}
				]
			};
		}
	};
</script>