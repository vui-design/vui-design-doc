const code =
`<template>
  <vui-tabs type="card" v-model="activeKey" addable v-on:add="handleAdd">
    <vui-tab-panel v-for="panel in panels" v-bind:key="panel.key" v-bind:title="panel.title">
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
          key: "tab" + index,
          title: "Tab " + index,
          content: "Content of Tab panel " + index
        };

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
      }
    }
  };
</script>
`;

export default code;