<template>
	<Example vertical id="example-table-sorter">
		<template slot="source">
			<vui-table :columns="columns" :data="data" />
		</template>
		<template slot="title">排序</template>
		<template slot="describe">
			<p>通过给 <code>columns</code> 数据的项，设置 <code>sorter</code> 属性即可对该列数据进行排序。</p>
			<p>排序默认使用升序和降序，也可以通过设置 <code>sorter.method</code> 指定一个自定义排序函数，接收三个参数 <code>a</code>、<code>b</code> 和 <code>order</code>。</p>
			<p>通过给某一列设置 <code>sorter.order</code> 可以在初始化时使用排序。</p>
			<p>如果使用远程排序，可以设置 <code>sorter.server</code> 为 <code>true</code>，然后在触发排序事件 <code>onFilter</code> 后，进行远程排序，并手动设置新的 <code>data</code> 数据源。</p>
			<p>注意，排序并不会影响到源数据 <code>data</code>。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	export default {
		name: "ExampleTableSorter",
		components: {
			Example
		},
		data() {
			const columns = [
				{
					key: "name",
					dataIndex: "name",
					title: "Name",
					width: 200,
					sorter: {
						method(a, b, order) {
							if (order === "asc") {
								return a.length > b.length ? 1 : -1;
							}
							else if (order === "desc") {
								return a.length < a.length ? 1 : -1;
							}
							else {
								return 0;
							}
						}
					}
				},
				{
					key: "age",
					dataIndex: "age",
					title: "Age",
					width: 200,
					sorter: true
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