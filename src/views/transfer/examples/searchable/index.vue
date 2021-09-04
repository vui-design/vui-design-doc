<template>
	<example v-bind:code="code" id="example-transfer-searchable">
		<template slot="demo">
			<vui-transfer
				v-bind:titles="titles"
				v-bind:options="options"
				v-bind:selectedKeys="selectedKeys"
				v-bind:targetKeys="targetKeys"
				v-bind:formatter="formatter"
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
				options: dataSource.options,
				selectedKeys: [],
				targetKeys: dataSource.targetKeys,
				formatter: option => option.title,
				searchable: true,
				filterOptionProp: "title"
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
						description: "Description of option " + key
					});

					if (key > 10) {
						targetKeys.push(key);
					}
				}

				return {
					options,
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