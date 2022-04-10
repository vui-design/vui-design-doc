const code =
`<template>
  <div class="example-tabs-editable">
    <vui-tabs v-model="activeKey" addable closable v-on:add="handleAdd" v-on:close="handleClose">
      <vui-tab-panel v-for="tab in tabs" v-bind:key="tab.key" v-bind:title="tab.title">
        {{tab.content}}
      </vui-tab-panel>
    </vui-tabs>
    <vui-tabs type="card" v-model="activeKey" addable closable v-on:add="handleAdd" v-on:close="handleClose">
      <vui-tab-panel v-for="tab in tabs" v-bind:key="tab.key" v-bind:title="tab.title">
        {{tab.content}}
      </vui-tab-panel>
    </vui-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      let tabs = [];
      let index = 1;

      for (; index < 4; index++) {
        let tab = {
          key: "tab" + index,
          title: "Tab " + index,
          content: "Content of Tab panel " + index
        };

        if (index === 1) {
          tab.closable = false;
        }

        tabs.push(tab);
      }

      return {
        tabs: tabs,
        activeKey: tabs[0].key,
        index: index
      };
    },
    methods: {
      handleAdd() {
        this.tabs.push({
          key: "tab" + this.index,
          title: "Tab " + this.index,
          content: "Content of Tab panel " + this.index
        });
        this.activeKey = "tab" + this.index;
        this.index++;
      },
      handleClose(key) {
        this.tabs = this.tabs.filter(tab => tab.key !== key);
      }
    }
  };
</script>

<style>
  .example-tabs-editable .vui-tabs + .vui-tabs { margin-top:24px; }
</style>
`;

export default code;