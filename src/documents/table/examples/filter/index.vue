<template>
	<Example vertical id="example-table-filter">
		<template slot="source">
			<vui-table :columns="columns" :data="data" />
		</template>
		<template slot="title">筛选</template>
		<template slot="describe">
			<p>通过给 <code>columns</code> 数据的项，设置 <code>filter</code> 属性即可对该列数据进行筛选。</p>
			<p><code>filter.options</code> 指定筛选下拉菜单的选项。</p>
			<p>必须指定一个筛选函数 <code>filter.method</code> 才可以进行筛选，传入两个参数 <code>value</code> 和 <code>row</code>，详见 Demo 和 API。</p>
			<p>如果指定 <code>filter.multiple</code> 为 <code>false</code>，则表示使用单选，默认为多选。</p>
			<p>注意，筛选并不会影响到源数据 <code>data</code>。</p>
		</template>
		<template slot="code">{{code}}</template>
	</Example>
</template>

<script>
	import Example from "@/components/example";
	import code from "./code";

	export default {
		name: "ExampleTableFilter",
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
					filter: {
						options: [
							{
								label: "John",
								value: "John"
							},
							{
								label: "Joe",
								value: "Joe"
							}
						],
						multiple: true,
						value: [],
						method(value, row) {
							if (value.length === 0) {
								return true;
							}

							return value.some(val => {
								return row.name.indexOf(val) > -1;
							});
						}
					}
				},
				{
					key: "age",
					dataIndex: "age",
					title: "Age",
					width: 200,
					filter: {
						options: [
							{
								label: "Less than 25",
								value: 1
							},
							{
								label: "Greater tha 25",
								value: 2
							}
						],
						multiple: false,
						method(value, row) {
							if (!value) {
								return true;
							}

							if (value === 1) {
								return row.age <= 25;
							}
							else if (value === 2) {
								return row.age > 25;
							}
						}
					}
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