<template>
	<Example vertical id="example-table-loading">
		<template slot="source">
			<vui-table :columns="columns" :data="data" :loading="loading" />
			<vui-switch v-model="loading" style="margin-top: 10px;" />
		</template>
		<template slot="title">加载中</template>
		<template slot="describe">
			<p>通过设置 <code>loading</code> 属性可以让表格处于加载中状态，在异步请求数据、分页时非常有用。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	export default {
		name: "ExampleTableBasicUsage",
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
				data,
				loading: false
			};
		}
	};
</script>