<template>
	<Example vertical id="example-table-collapsion">
		<template slot="source">
			<vui-table :columns="columns" :data="data" :rowCollapsion="rowCollapsion" @collapse="handleCollapse" />
		</template>
		<template slot="title">折叠</template>
		<template slot="describe">
			<p>当表格内容较多，不能一次性完全展示时使用。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	export default {
		name: "ExampleTableCollapsion",
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

			const rowCollapsion = {
				title: "#",
				value: [1],
				clickRowToCollapse: true,
				render(h, row) {
					return row.name + ", " + row.age + ", " + row.address;
				}
			};

			return {
				code,
				columns,
				data,
				rowCollapsion
			};
		},
		methods: {
			handleCollapse(value) {
				console.log(value)
			}
		}
	};
</script>