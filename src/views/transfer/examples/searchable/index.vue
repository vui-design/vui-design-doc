<template>
	<vui-doc-example v-bind:code="code" id="example-transfer-searchable">
		<template slot="demo">
			<vui-transfer
				v-bind:titles="titles"
				v-bind:data="data"
				v-bind:selectedKeys="selectedKeys"
				v-bind:targetKeys="targetKeys"
				v-bind:option="option"
				v-bind:searchable="searchable"
				v-bind:filterOptionProp="filterOptionProp"
				v-on:select="handleSelect"
				v-on:change="handleChange"
			/>
		</template>
		<template slot="title">带搜索框</template>
		<template slot="description">
			<p>带搜索框的穿梭框，默认使用内置的过滤函数进行筛选，通过 <code>filterOptionProp</code> 属性来指定选项的筛选字段。</p>
			<p>本示例演示了搜索时，通过选项的 <code>title</code> 字段与查询关键词进行比较来筛选。</p>
		</template>
	</vui-doc-example>
</template>

<script>
	import VuiDocExample from "src/components/example";
	import code from "./code";

	export default {
		components: {
			VuiDocExample
		},
		data() {
			const dataSource = this.getDataSource();

			return {
				code,
				titles: ["Source", "Target"],
				data: dataSource.data,
				selectedKeys: [],
				targetKeys: dataSource.targetKeys,
				option: item => item.title,
				searchable: true,
				filterOptionProp: "title"
			};
		},
		methods: {
			getDataSource() {
				let data = [];
				let targetKeys = [];

				for (let i = 0; i < 20; i++) {
					const key = i + 1;

					data.push({
						key: key,
						title: "Option " + key,
						description: "Description of option " + key
					});

					if (key > 10) {
						targetKeys.push(key);
					}
				}

				return {
					data,
					targetKeys
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