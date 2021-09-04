<template>
	<example v-bind:code="code" id="example-transfer-table">
		<template slot="demo">
			<div class="example-transfer-table">
				<vui-space>
					<vui-switch v-model="searchable">
						<template slot="checked">Searchable</template>
						<template slot="unchecked">Searchable</template>
					</vui-switch>
					<vui-switch v-model="disabled">
						<template slot="checked">Disabled</template>
						<template slot="unchecked">Disabled</template>
					</vui-switch>
				</vui-space>
				<vui-transfer
					v-bind:titles="titles"
					v-bind:panelStyle="panelStyle"
					v-bind:options="options"
					v-bind:selectedKeys="selectedKeys"
					v-bind:targetKeys="targetKeys"
					v-bind:showSelectAll="showSelectAll"
					v-bind:searchable="searchable"
					v-bind:filter="filter"
					v-bind:disabled="disabled"
					v-on:select="handleSelect"
					v-on:change="handleChange"
				>
					<template slot="body" slot-scope="props">
						<vui-table v-bind="getTableProps(props)" v-on:rowSelect="props.onSelect" />
					</template>
				</vui-transfer>
			</div>
		</template>
		<template slot="title">表格穿梭框</template>
		<template slot="description">
			<p>使用 <code>Table</code> 组件作为自定义渲染列表。</p>
		</template>
	</example>
</template>

<script>
	import Example from "src/components/example";
	import code from "./code";

	export default {
		components: {
			Example
		},
		data() {
			const dataSource = this.getDataSource();

			return {
				code,
				titles: ["Source", "Target"],
				panelStyle: {
					width: "400px",
					height: "451px"
				},
				options: dataSource.options,
				selectedKeys: [],
				targetKeys: dataSource.targetKeys,
				showSelectAll: false,
				searchable: false,
				filter: (keyword, option) => option.title.indexOf(keyword) > -1 || option.description.indexOf(keyword) > -1,
				disabled: false
			};
		},
		methods: {
			getDataSource() {
				let options = [];
				let targetKeys = [];

				for (let i = 0; i < 20; i++) {
					const key = i + 1;

					options.push({
						key: key,
						title: "Option " + key,
						description: "Description of option " + key,
						disabled: i % 4 === 0
					});

					if (Math.random() * 2 > 1) {
						targetKeys.push(key);
					}
				}

				return {
					options,
					targetKeys
				};
			},
			getTableProps(props) {
				return {
					rowKey: props.optionKey,
					columns: [
						{ key: "title", dataIndex: "title", width: 120, ellipsis: true, title: "Title" },
						{ key: "description", dataIndex: "description", ellipsis: true, title: "Description" }
					],
					rowSelection: {
						multiple: true,
						value: props.selectedKeys,
						getComponentProps: row => {
							return {
								disabled: props.disabled || row.disabled
							};
						}
					},
					data: props.options
				};
			},
			handleSelect(sourceSelectedKeys, targetSelectedKeys) {
				console.log("sourceSelectedKeys:", sourceSelectedKeys, "targetSelectedKeys:", targetSelectedKeys);

				this.selectedKeys = [...sourceSelectedKeys, ...targetSelectedKeys];
			},
			handleChange(nextTargetKeys, direction, moveKeys) {
				console.log("targetKeys:", nextTargetKeys);
				console.log("direction:", direction);
				console.log("moveKeys:", moveKeys);

				this.targetKeys = nextTargetKeys;
			}
		}
	};
</script>

<style>
	.example-transfer-table .vui-space { display:flex; }
	.example-transfer-table .vui-switch { display:block; }
	.example-transfer-table .vui-transfer { margin-top:16px; }
</style>