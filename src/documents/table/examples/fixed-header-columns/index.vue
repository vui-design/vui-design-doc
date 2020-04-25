<template>
	<Example vertical id="example-table-fixed-header-columns">
		<template slot="source">
			<vui-table :columns="columns" :data="data" :scroll="scroll" />
		</template>
		<template slot="title">固定表头和列</template>
		<template slot="describe">
			<p>适合同时展示有大量数据和数据列的表格。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	export default {
		name: "ExampleTableFixedHeaderColumns",
		components: {
			Example
		},
		data() {
			const columns = [
				{
					key: "name",
					dataIndex: "name",
					title: "Name",
					fixed: "left",
					width: 150
				},
				{
					key: "age",
					dataIndex: "age",
					title: "Age",
					width: 100
				},
				{
					key: "gender",
					dataIndex: "gender",
					title: "Gender",
					width: 100
				},
				{
					key: "country",
					dataIndex: "country",
					title: "Country",
					width: 150
				},
				{
					key: "city",
					dataIndex: "city",
					title: "City",
					width: 150
				},
				{
					key: "address",
					dataIndex: "address",
					title: "Address"
				},
				{
					key: "postcode",
					dataIndex: "postcode",
					title: "Postcode",
					width: 100
				},
				{
					key: "action",
					title: "Action",
					fixed: "right",
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
					gender: "M",
					country: "America",
					city: "New York",
					address: "New York No. 1 Lake Park",
					postcode: 100000
				},
				{
					key: 2,
					name: "Jim Green",
					age: 24,
					gender: "M",
					country: "France",
					city: "London",
					address: "London No. 1 Lake Park",
					postcode: 100000
				},
				{
					key: 3,
					name: "Joe Black",
					age: 30,
					gender: "M",
					country: "Australia",
					city: "Sidney",
					address: "Sidney No. 1 Lake Park",
					postcode: 100000
				},
				{
					key: 4,
					name: "Jon Snow",
					age: 26,
					gender: "M",
					country: "Canada",
					city: "Ottawa",
					address: "Ottawa No. 2 Lake Park",
					postcode: 100000
				},
				{
					key: 5,
					name: "John Brown",
					age: 20,
					gender: "M",
					country: "America",
					city: "New York",
					address: "New York No. 1 Lake Park",
					postcode: 100000
				},
				{
					key: 6,
					name: "Jim Green",
					age: 24,
					gender: "M",
					country: "France",
					city: "London",
					address: "London No. 1 Lake Park",
					postcode: 100000
				},
				{
					key: 7,
					name: "Joe Black",
					age: 30,
					gender: "M",
					country: "Australia",
					city: "Sidney",
					address: "Sidney No. 1 Lake Park",
					postcode: 100000
				},
				{
					key: 8,
					name: "Jon Snow",
					age: 26,
					gender: "M",
					country: "Canada",
					city: "Ottawa",
					address: "Ottawa No. 2 Lake Park",
					postcode: 100000
				}
			];

			const scroll = {
				x: 1200,
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