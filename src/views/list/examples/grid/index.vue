<template>
	<vui-doc-example v-bind:code="code" id="example-list-grid">
		<template slot="demo">
			<vui-list v-bind:grid="grid" v-bind:data="data">
				<vui-list-item slot="item" slot-scope="item, index">
					<vui-card v-bind:title="item.title">{{item.description}}</vui-card>
				</vui-list-item>
			</vui-list>
		</template>
		<template slot="title">栅格列表</template>
		<template slot="description">
			<p>可以通过设置 <code>List</code> 的 <code>grid</code> 属性来实现栅格列表，<code>columns</code> 可设置期望显示的列数。</p>
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
						title: "List Item Title",
						description: "This is the description!"
					},
					{
						title: "List Item Title",
						description: "This is the description!"
					},
					{
						title: "List Item Title",
						description: "This is the description!"
					},
					{
						title: "List Item Title",
						description: "This is the description!"
					},
					{
						title: "List Item Title",
						description: "This is the description!"
					},
					{
						title: "List Item Title",
						description: "This is the description!"
					},
					{
						title: "List Item Title",
						description: "This is the description!"
					}
				]
			};
		}
	};
</script>