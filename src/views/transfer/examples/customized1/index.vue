<template>
	<vui-doc-example v-bind:code="code" id="example-transfer-customized1">
		<template slot="demo">
			<vui-transfer
				v-bind:titles="titles"
				v-bind:panelStyle="panelStyle"
				v-bind:data="data"
				v-bind:selectedKeys="selectedKeys"
				v-bind:targetKeys="targetKeys"
				v-bind:option="option"
				v-bind:searchable="searchable"
				v-bind:filter="filter"
				v-on:select="handleSelect"
				v-on:change="handleChange"
			/>
		</template>
		<template slot="title">自定义渲染（一）</template>
		<template slot="description">
			<p>可通过 <code>option</code> 函数自定义渲染选项，常用于渲染复杂数据。</p>
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
				panelStyle: {
					width: "240px"
				},
				data: dataSource.data,
				selectedKeys: [],
				targetKeys: dataSource.targetKeys,
				option: item => item.title + " - " + item.description,
				searchable: true,
				filter: (keyword, option) => option.title.indexOf(keyword) > -1 || option.description.indexOf(keyword) > -1
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

					if (Math.random() * 2 > 1) {
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