const code =
`<template>
  <vui-transfer
    v-bind:titles="titles"
    v-bind:operations="operations"
    v-bind:panelStyle="panelStyle"
    v-bind:options="options"
    v-bind:selectedKeys="selectedKeys"
    v-bind:targetKeys="targetKeys"
    v-bind:formatter="formatter"
    v-bind:searchable="searchable"
    v-bind:filter="filter"
    v-on:scroll="handleScroll"
    v-on:select="handleSelect"
    v-on:change="handleChange"
  >
    <template slot="footer" slot-scope="props">
      <vui-button size="small" style="float: right;" v-on:click="handleReload">Reload</vui-button>
    </template>
  </vui-transfer>
</template>

<script>
  export default {
    data() {
      const dataSource = this.getDataSource();

      return {
        titles: ["选项列表", "已选选项"],
        operations: ["To Right", "To Left"],
        panelStyle: {
          width: "240px",
          height: "351px"
        },
        options: dataSource.options,
        selectedKeys: [],
        targetKeys: dataSource.targetKeys,
        formatter: option => option.title + " - " + option.description,
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

          if (Math.random() * 2 > 1) {
            targetKeys.push(key);
          }
        }

        return {
          options,
          targetKeys
        };
      },
      handleReload() {
        const dataSource = this.getDataSource();

        this.options = dataSource.options;
        this.selectedKeys = [];
        this.targetKeys = dataSource.targetKeys;
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
    }
  };
</script>
`;

export default code;