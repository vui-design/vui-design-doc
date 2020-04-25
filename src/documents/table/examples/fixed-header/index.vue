<template>
	<Example vertical id="example-table-fixed-header">
		<template slot="source">
			<vui-table :columns="columns" :data="data" :scroll="scroll" />
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
		name: "ExampleTableFixedHeader",
		components: {
			Example
		},
		data() {
			const columns = [
				{
					key: "name",
					dataIndex: "name",
					title: "Name",
					width: 200
				},
				{
					key: "age",
					dataIndex: "age",
					title: "Age",
					width: 200
				},
				{
					key: "address",
					dataIndex: "address",
					title: "Address"
				},
				{
					key: "action",
					title: "Action",
					width: 150,
					render(h, { column, row, index }) {
						return (
							<div>
								<a href="javascript:;">Edit</a>
								<vui-divider type="vertical" />
								<a href="javascript:;">Delete</a>
							</div>
						);
					}
				}
			];

			const data = [
				{
					key: 1,
					name: "John Brown",
					age: 20,
					address: "New York No. 1 Lake Park"
				},
				{
					key: 2,
					name: "Jim Green",
					age: 24,
					address: "London No. 1 Lake Park"
				},
				{
					key: 3,
					name: "Joe Black",
					age: 30,
					address: "Sidney No. 1 Lake Park"
				},
				{
					key: 4,
					name: "Jon Snow",
					age: 26,
					address: "Ottawa No. 2 Lake Park"
				},
				{
					key: 5,
					name: "John Brown",
					age: 20,
					address: "New York No. 1 Lake Park"
				},
				{
					key: 6,
					name: "Jim Green",
					age: 24,
					address: "London No. 1 Lake Park"
				},
				{
					key: 7,
					name: "Joe Black",
					age: 30,
					address: "Sidney No. 1 Lake Park"
				},
				{
					key: 8,
					name: "Jon Snow",
					age: 26,
					address: "Ottawa No. 2 Lake Park"
				}
			];

			const scroll = {
				y: 180
			};

			return {
				code,
				columns,
				data,
				scroll
			};
		}
	};
</script>