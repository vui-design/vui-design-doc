const code =
`<template>
  <div class="example-tabs-size">
    <vui-radio-group type="button" v-model="size">
      <vui-radio value="small" label="Small" />
      <vui-radio value="medium" label="Medium" />
      <vui-radio value="large" label="Large" />
    </vui-radio-group>
    <vui-tabs v-bind:size="size">
      <vui-tab-panel v-for="tab in tabs" v-bind:key="tab.key" v-bind:title="tab.title">
        {{tab.content}}
      </vui-tab-panel>
    </vui-tabs>
    <vui-tabs type="card" v-bind:size="size">
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

        tabs.push(tab);
      }

      return {
        size: "medium",
        tabs: tabs
      };
    }
  };
</script>

<style>
  .example-tabs-size {  }
  .example-tabs-size .vui-tabs { margin-top:24px; }
</style>
`;

export default code;