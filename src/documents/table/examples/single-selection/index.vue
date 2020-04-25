<template>
	<Example vertical id="example-table-single-selection">
		<template slot="source">
			<vui-table :columns="columns" :data="data" :rowSelection="rowSelection" />
		</template>
		<template slot="title">单选</template>
		<template slot="describe">
			<p>设置 <code>rowSelection.multiple</code> 属性为 <code>false</code>，表格行将只允许单选。<a href="javascript:;">详见下文 API 说明</a>。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	export default {
		name: "ExampleTableSingleSelection",
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
				}
			];

			const rowSelection = {
				value: 1,
				multiple: false,
				getComponentProps(row) {
					return {
						disabled: row.name === "Joe Black"
					};
				}
			};

			return {
				code,
				columns,
				data,
				rowSelection
			};
		}
	};
</script>