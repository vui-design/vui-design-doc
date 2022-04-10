const code =
`<template>
  <vui-tabs type="card" v-model="activeKey" closable v-on:close="handleClose">
    <vui-tab-panel v-for="tab in tabs" v-bind:key="tab.key" v-bind:title="tab.title" v-bind:closable="tab.closable">
      {{tab.content}}
    </vui-tab-panel>
  </vui-tabs>
</template>

<script>
  export default {
    data() {
      let tabs = [];
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

        tabs.push(panel);
      }

      return {
        tabs: tabs,
        activeKey: tabs[0].key
      };
    },
    methods: {
      handleClose(key) {
        this.tabs = this.tabs.filter(tab => tab.key !== key);
      }
    }
  };
</script>
`;

export default code;