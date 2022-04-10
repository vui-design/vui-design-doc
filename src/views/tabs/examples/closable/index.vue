<template>
  <example v-bind:code="code" id="example-tabs-closable">
    <template slot="demo">
      <vui-tabs type="card" v-model="activeKey" closable v-on:close="handleClose">
        <vui-tab-panel v-for="tab in tabs" v-bind:key="tab.key" v-bind:title="tab.title" v-bind:closable="tab.closable">
          {{tab.content}}
        </vui-tab-panel>
      </vui-tabs>
    </template>
    <template slot="title">动态关闭</template>
    <template slot="description">
      <p>结合 <code>closable</code> 属性和 <code>close</code> 事件实现动态关闭页签。</p>
      <p>可以显式设置某个 <code>TabPanel</code> 的 <code>closable</code> 属性为 <code>false</code>，禁止其关闭。</p>
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
        code,
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