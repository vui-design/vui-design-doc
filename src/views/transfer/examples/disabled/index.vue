<template>
	<example v-bind:code="code" id="example-transfer-disabled">
		<template slot="demo">
			<div class="example-transfer-disabled">
				<vui-switch v-model="disabled">
					<template slot="checked">Disabled</template>
					<template slot="unchecked">Disabled</template>
				</vui-switch>
				<vui-transfer
					v-bind:titles="titles"
					v-bind:options="options"
					v-bind:selectedKeys="selectedKeys"
					v-bind:targetKeys="targetKeys"
					v-bind:formatter="formatter"
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
				filterOptionProp: "title",
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

<style>
	.example-transfer-disabled .vui-transfer { margin-top:16px; }
</style>