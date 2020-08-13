<template>
	<Example id="example-table-single-selection">
		<template slot="source">
			<vui-table
				rowKey="id"
				v-bind:columns="columns"
				v-bind:data="data"
				v-bind:rowSelection="rowSelection"
				v-on:rowSelect="handleRowSelect"
			>
				<vui-separator slot="action" slot-scope="{ row, rowIndex }">
					<a href="javascript:;">Edit</a>
					<a href="javascript:;">Delete</a>
				</vui-separator>
			</vui-table>
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
				{ id: 1, name: "John Brown", age: 20, address: "New York No. 1 Lake Park" },
				{ id: 2, name: "Jim Green", age: 24, address: "London No. 1 Lake Park" },
				{ id: 3, name: "Joe Black", age: 30, address: "Sidney No. 1 Lake Park" },
				{ id: 4, name: "Jon Snow", age: 26, address: "Ottawa No. 2 Lake Park" }
			];

			const rowSelection = {
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
		},
		methods: {
			handleRowSelect(value) {
				console.log(value);
			}
		}
	};
</script>