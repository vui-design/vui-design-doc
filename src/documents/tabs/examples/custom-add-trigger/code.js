const code =
`<template>
  <div class="example-tabs-custom-add-trigger">
    <vui-button @click="handleAdd">Add</vui-button>
    <vui-tabs type="card" v-model="activeTabPanel" closable @close="handleClose">
      <vui-tab-panel v-for="panel in panels" :key="panel.name" :name="panel.name" :title="panel.title" :closable="panel.closable">
        {{panel.content}}
      </vui-tab-panel>
    </vui-tabs>
  </div>
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

        if (index === 1) {
          panel.closable = false;
        }

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
      },
      handleClose(name) {
        let activeTabPanel = this.activeTabPanel;
        let lastIndex;

        this.panels.forEach((panel, index) => {
          if (panel.name === name) {
            lastIndex = index - 1;
          }
        });

        let panels = this.panels.filter(panel => panel.name !== name);

        if (panels.length && activeTabPanel === name) {
          if (lastIndex >= 0) {
            activeTabPanel = panels[lastIndex].name;
          }
          else {
            activeTabPanel = panels[0].name;
          }
        }

        this.panels = panels;
        this.activeTabPanel = activeTabPanel;
      }
    }
  };
</script>

<style>
  .example-tabs-custom-add-trigger {  }
  .example-tabs-custom-add-trigger .vui-tabs { margin-top:20px; }
</style>
`;

export default code;