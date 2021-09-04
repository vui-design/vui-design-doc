<template>
	<example v-bind:code="code" id="example-transfer-customized-search">
		<template slot="demo">
			<vui-transfer
				v-bind:titles="titles"
				v-bind:options="options"
				v-bind:selectedKeys="selectedKeys"
				v-bind:targetKeys="targetKeys"
				v-bind:formatter="formatter"
				v-bind:searchable="searchable"
				v-bind:filter="filter"
				v-on:select="handleSelect"
				v-on:change="handleChange"
			/>
		</template>
		<template slot="title">自定义搜索</template>
		<template slot="description">
			<p>带搜索框的穿梭框，可以通过 <code>filter</code> 属性自定义筛选函数。</p>
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
				filter: (keyword, option) => option.title.indexOf(keyword) > -1 || option.description.indexOf(keyword) > -1
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