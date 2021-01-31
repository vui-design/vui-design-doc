const code =
`<template>
  <vui-transfer
    v-bind:titles="titles"
    v-bind:options="options"
    v-bind:selectedKeys="selectedKeys"
    v-bind:targetKeys="targetKeys"
    v-bind:formatter="formatter"
    v-on:scroll="handleScroll"
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
        options: dataSource.options,
        selectedKeys: [],
        targetKeys: dataSource.targetKeys,
        formatter: option => option.title
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
      handleScroll(e, direction) {
        console.log("target:", e.target);
        console.log("direction:", direction);
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
  };
</script>
`;

export default code;