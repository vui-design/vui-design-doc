const code =
`<template>
  <div class="example-select-coordinate">
    <vui-select v-model="province">
      <vui-option v-for="province in provinces" :value="province">{{province}}</vui-option>
    </vui-select>
    <vui-select v-model="city">
      <vui-option v-for="city in cities" :value="city">{{city}}</vui-option>
    </vui-select>
  </div>
</template>

<script>
  const provinces = ["Zhejiang", "Jiangsu"];
  const cities = {
    Zhejiang: ["Hangzhou", "Ningbo", "Wenzhou"],
    Jiangsu: ["Nanjing", "Suzhou", "Zhenjiang"],
  };

  export default {
    data() {
      const province = provinces[0];
      const city = cities[province][0];

      return {
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
  .example-select-coordinate .vui-select { width:120px; margin-left:10px; }
</style>
`;

export default code;