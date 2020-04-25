<template>
	<Example vertical id="example-table-striped">
		<template slot="source">
			<vui-table striped :columns="columns" :data="data" />
		</template>
		<template slot="title">斑马纹</template>
		<template slot="describe">
			<p>设置属性 <code>striped</code> ，表格行会间隔显示不同颜色，用于区分不同行数据。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	export default {
		name: "ExampleTableStriped",
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

			return {
				code,
				columns,
				data
			};
		}
	};
</script>