<template>
  <example v-bind:code="code" id="example-tabs-addable">
    <template slot="demo">
      <vui-tabs type="card" v-model="activeKey" addable v-on:add="handleAdd">
        <vui-tab-panel v-for="tab in tabs" v-bind:key="tab.key" v-bind:title="tab.title">
          {{tab.content}}
        </vui-tab-panel>
      </vui-tabs>
    </template>
    <template slot="title">动态添加</template>
    <template slot="description">
      <p>结合 <code>addable</code> 属性和 <code>add</code> 事件实现动态添加页签。</p>
    </template>
  </example>
</template>

<script>
  import Example from "src/components/example";
  import code from "./code";

  export default {
    components: {
      Example
    },
    data() {
      let tabs = [];
      let index = 1;

      for (; index < 4; index++) {
        let tab = {
          key: "tab" + index,
          title: "Tab " + index,
          content: "Content of Tab panel " + index
        };

        tabs.push(tab);
      }

      return {
        code,
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
      }
    }
  };
</script>