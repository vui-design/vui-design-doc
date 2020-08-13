<template>
	<Example id="example-table-tree">
		<template slot="source">
			<vui-table v-bind:columns="columns" v-bind:data="data" v-bind:rowTree="rowTree" rowKey="id">
				<vui-separator slot="action" slot-scope="{ row, rowIndex }">
					<a href="javascript:;">Edit</a>
					<a href="javascript:;">Delete</a>
				</vui-separator>
			</vui-table>
		</template>
		<template slot="title">固定表头</template>
		<template slot="describe">
			<p>方便一页内展示大量数据。</p>
			<p>需要指定 <code>column</code> 的 <code>width</code> 属性，否则列头和内容可能不对齐。如果指定 <code>width</code> 不生效，请尝试留一列不设宽度以适应弹性布局，或者检查是否有超长连续字段破坏布局。</p>
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
			const columns = [
				{ key: "name", dataIndex: "name", width: 200, title: "Name" },
				{ key: "age", dataIndex: "age", width: 140, title: "Age" },
				{ key: "address", dataIndex: "address", title: "Address" },
				{ key: "action", width: 140, slot: "action", title: "Action" }
			];

			const data = [
				{
					id: 1, name: "John Brown",
					age: 20,
					address: "New York No. 1 Lake Park",
					children: [
						{
							id: 11,
							name: "Jim Green",
							age: 24,
							address: "London No. 1 Lake Park"
						},
						{
							id: 12, name: "Joe Black",
							age: 30,
							address: "Sidney No. 1 Lake Park",
							children: [
								{ id: 121, name: "Jon Snow", age: 26, address: "Ottawa No. 2 Lake Park" },
								{ id: 122, name: "John Brown", age: 20, address: "New York No. 1 Lake Park" },
								{ id: 123, name: "Jim Green", age: 24, address: "London No. 1 Lake Park" },
								{ id: 124, name: "Joe Black", age: 30, address: "Sidney No. 1 Lake Park" }
							]
						}
					]
				},
				{
					id: 2,
					name: "Jon Snow",
					age: 26,
					address: "Ottawa No. 2 Lake Park"
				},		
				{
					id: 3,
					name: "John Brown",
					age: 20,
					address: "New York No. 1 Lake Park",
					children: [
						{ id: 31, name: "Jim Green", age: 24, address: "London No. 1 Lake Park" },
						{ id: 32, name: "Joe Black", age: 30, address: "Sidney No. 1 Lake Park" },
						{ id: 33, name: "Jon Snow", age: 26, address: "Ottawa No. 2 Lake Park" }
					]
				},	
				{
					id: 4,
					name: "John Brown",
					age: 20,
					address: "New York No. 1 Lake Park",
					children: [
						{
							id: 41,
							name: "Jim Green",
							age: 24,
							address: "London No. 1 Lake Park",
							children: [
								{ id: 411, name: "Joe Black", age: 30, address: "Sidney No. 1 Lake Park" }
							]
						},
						{
							id: 42,
							name: "Joe Black",
							age: 30,
							address: "Sidney No. 1 Lake Park"
						},
						{
							id: 43,
							name: "Jon Snow",
							age: 26,
							address: "Ottawa No. 2 Lake Park",
							children: [
								{ id: 431, name: "Joe Black", age: 30, address: "Sidney No. 1 Lake Park" }
							]
						}
					]
				}
			];

			const rowTree = {
				children: "children"
			};

			return {
				code,
				columns,
				data,
				rowTree
			};
		}
	};
</script>