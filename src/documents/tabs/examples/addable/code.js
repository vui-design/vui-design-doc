const code =
`<template>
  <vui-tabs type="card" v-model="activeTabPanel" addable @add="handleAdd">
    <vui-tab-panel v-for="panel in panels" :key="panel.name" :name="panel.name" :title="panel.title">
      {{panel.content}}
    </vui-tab-panel>
  </vui-tabs>
</template>

<script>
  export default {
    data() {
      let panels = [];
      let index = 1;

      for (; index < 4; index++) {
        let panel = {
          title: "Tab " + index,
          name: "tab" + index,
          content: "Content of Tab panel " + index
        };

        panels.push(panel);
      }

      return {
        panels: panels,
        activeTabPanel: panels[0].name,
        index: index
      };
    },
    methods: {
      handleAdd() {
        this.panels.push({
          title: "Tab " + this.index,
          name: "tab" + this.index,
          content: "Content of Tab panel " + this.index
        });
        this.activeTabPanel = "tab" + this.index;
        this.index++;
      }
    }
  };
</script>
`;

export default code;