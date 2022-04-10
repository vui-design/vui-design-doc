<template>
  <example v-bind:code="code" id="example-tabs-custom-add-trigger">
    <template slot="demo">
      <vui-tabs type="card" v-model="activeKey" closable v-on:close="handleClose">
        <vui-link slot="extra" type="primary" icon="plus" block v-on:click="handleAdd">Add</vui-link>
        <vui-tab-panel v-for="tab in tabs" v-bind:key="tab.key" v-bind:title="tab.title" v-bind:closable="tab.closable">
          {{tab.content}}
        </vui-tab-panel>
      </vui-tabs>
    </template>
    <template slot="title">自定义添加触发器</template>
    <template slot="description">
      <p>通过给自定义触发器绑定事件实现动态添加页签。</p>
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

        if (index === 1) {
          tab.closable = false;
        }

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
      },
      handleClose(key) {
        this.tabs = this.tabs.filter(tab => tab.key !== key);
      }
    }
  };
</script>