const code =
`<template>
  <vui-transfer
    v-bind:titles="titles"
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

<script>
  export default {
    data() {
      const dataSource = this.getDataSource();

      return {
        titles: ["Source", "Target"],
        data: dataSource.data,
        selectedKeys: [],
        targetKeys: dataSource.targetKeys,
        option: item => item.title,
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
`;

export default code;