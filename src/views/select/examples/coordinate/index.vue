<template>
	<vui-doc-example v-bind:code="code" id="example-select-coordinate">
		<template slot="demo">
			<div class="example-select-coordinate">
				<vui-select v-model="province">
					<vui-option v-for="province in provinces" :key="province" :value="province">{{province}}</vui-option>
				</vui-select>
				<vui-select v-model="city">
					<vui-option v-for="city in cities" :key="city" :value="city">{{city}}</vui-option>
				</vui-select>
			</div>
		</template>
		<template slot="title">联动</template>
		<template slot="description">
			<p>省市联动是典型的例子。</p>
		</template>
	</vui-doc-example>
</template>

<script>
	import VuiDocExample from "src/components/example";
	import code from "./code";

	const provinces = ["Zhejiang", "Jiangsu"];
	const cities = {
		Zhejiang: ["Hangzhou", "Ningbo", "Wenzhou"],
		Jiangsu: ["Nanjing", "Suzhou", "Zhenjiang"],
	};

	export default {
		components: {
			VuiDocExample
		},
		data() {
			const province = provinces[0];
			const city = cities[province][0];

			return {
				code,
				provinces: provinces,
				cities: cities[province],
				province: province,
				city: city
			};
		},
		watch: {
			province(value) {
				this.cities = cities[value];
				this.city = cities[value][0];
			}
		}
	};
</script>

<style>
	.example-select-coordinate .vui-select { width:120px; margin-right:10px; }
</style>