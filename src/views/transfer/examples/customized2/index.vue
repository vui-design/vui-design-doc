<template>
	<vui-doc-example v-bind:code="code" id="example-transfer-customized2">
		<template slot="demo">
			<vui-transfer
				v-bind:titles="titles"
				v-bind:panelStyle="panelStyle"
				v-bind:data="data"
				v-bind:selectedKeys="selectedKeys"
				v-bind:targetKeys="targetKeys"
				v-bind:searchable="searchable"
				v-bind:filter="filter"
				v-on:select="handleSelect"
				v-on:change="handleChange"
			>
				<template slot="option" slot-scope="data">
					{{data.title}} <span style="opacity: 0.65;">- {{data.description}}</span>
				</template>
			</vui-transfer>
		</template>
		<template slot="title">自定义渲染（二）</template>
		<template slot="description">
			<p>通过 <code>option</code> 作用域插槽自定义渲染选项数据。</p>
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