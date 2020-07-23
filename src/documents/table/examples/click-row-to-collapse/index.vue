<template>
	<Example vertical id="example-table-click-row-to-collapse">
		<template slot="source">
			<vui-table
				v-bind:columns="columns"
				v-bind:data="data"
				v-bind:rowCollapsion="rowCollapsion"
				v-on:collapse="handleCollapse"
			>
				<template slot="action" slot-scope="{ row, rowIndex }">
					<vui-action-list>
						<a href="javascript:;">Edit</a>
						<a href="javascript:;">Delete</a>
					</vui-action-list>
				</template>
			</vui-table>
		</template>
		<template slot="title">点击行展开</template>
		<template slot="describe">
			<p>点击行来展开子行，展开子行的行为默认是由图标控制的。通过 <code>ignoreElements</code> 方法过滤需要忽略的元素，如本例中的操作按钮。</p>
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
				{ key: "name", dataIndex: "name", title: "Name", width: 200 },
				{ key: "age", dataIndex: "age", title: "Age", width: 200 },
				{ key: "address", dataIndex: "address", title: "Address" },
				{ key: "action", title: "Action", width: 150, slot: "action" }
			];

			const data = [
				{ key: 1, name: "John Brown", age: 20, address: "New York No. 1 Lake Park" },
				{ key: 2, name: "Jim Green", age: 24, address: "London No. 1 Lake Park" },
				{ key: 3, name: "Joe Black", age: 30, address: "Sidney No. 1 Lake Park" },
				{ key: 4, name: "Jon Snow", age: 26, address: "Ottawa No. 2 Lake Park" }
			];

			const rowCollapsion = {
				title: "#",
				clickRowToCollapse: true,
				ignoreElements(element) {
					return element && element.tagName.toLowerCase() == "a";
				},
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
				console.log(value);
				this.rowCollapsion.value = value;
			}
		}
	};
</script>