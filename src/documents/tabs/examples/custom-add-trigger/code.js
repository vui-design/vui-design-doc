const code =
`<template>
  <div class="example-tabs-custom-add-trigger">
    <vui-button v-on:click="handleAdd">Add</vui-button>
    <vui-tabs type="card" v-model="activeKey" closable v-on:close="handleClose">
      <vui-tab-panel v-for="panel in panels" v-bind:key="panel.key" v-bind:title="panel.title" v-bind:closable="panel.closable">
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
          key: "tab" + index,
          title: "Tab " + index,
          content: "Content of Tab panel " + index
        };

        if (index === 1) {
          panel.closable = false;
        }

        panels.push(panel);
      }

      return {
        panels: panels,
        activeKey: panels[0].key,
        index: index
      };
    },
    methods: {
      handleAdd() {
        this.panels.push({
          key: "tab" + this.index,
          title: "Tab " + this.index,
          content: "Content of Tab panel " + this.index
        });
        this.activeKey = "tab" + this.index;
        this.index++;
      },
      handleClose(key) {
        let activeKey = this.activeKey;
        let lastIndex;

        this.panels.forEach((panel, index) => {
          if (panel.key === key) {
            lastIndex = index - 1;
          }
        });

        let panels = this.panels.filter(panel => panel.key !== key);

        if (panels.length && activeKey === key) {
          if (lastIndex >= 0) {
            activeKey = panels[lastIndex].key;
          }
          else {
            activeKey = panels[0].key;
          }
        }

        this.panels = panels;
        this.activeKey = activeKey;
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