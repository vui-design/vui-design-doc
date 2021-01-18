<template>
	<vui-doc-example v-bind:code="code" id="example-transfer-disabled">
		<template slot="demo">
			<div class="example-transfer-disabled">
				<vui-switch v-model="disabled">
					<template slot="checked">Disabled</template>
					<template slot="unchecked">Disabled</template>
				</vui-switch>
				<vui-transfer
					v-bind:titles="titles"
					v-bind:data="data"
					v-bind:selectedKeys="selectedKeys"
					v-bind:targetKeys="targetKeys"
					v-bind:option="option"
					v-bind:searchable="searchable"
					v-bind:filterOptionProp="filterOptionProp"
					v-bind:disabled="disabled"
					v-on:select="handleSelect"
					v-on:change="handleChange"
				/>
			</div>
		</template>
		<template slot="title">禁用</template>
		<template slot="description">
			<p>穿梭框及其选项的不可用状态。</p>
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
				filterOptionProp: "title",
				disabled: false
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

<style>
	.example-transfer-disabled .vui-transfer { margin-top:16px; }
</style>