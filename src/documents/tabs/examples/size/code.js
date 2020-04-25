const code =
`<template>
  <div class="example-tabs-size">
    <vui-radio-group type="button" v-model="size">
      <vui-radio label="Small" value="small" />
      <vui-radio label="Medium" value="medium" />
      <vui-radio label="Large" value="large" />
    </vui-radio-group>
    <vui-tabs :size="size">
      <vui-tab-panel v-for="panel in panels" :key="panel.name" :name="panel.name" :title="panel.title">
        {{panel.content}}
      </vui-tab-panel>
    </vui-tabs>
    <vui-tabs type="card" :size="size">
      <vui-tab-panel v-for="panel in panels" :key="panel.name" :name="panel.name" :title="panel.title">
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

        panels.push(panel);
      }

      return {
        size: "medium",
        panels: panels
      };
    }
  };
</script>

<style>
  .example-tabs-size {  }
  .example-tabs-size .vui-tabs { margin-top:20px; }
</style>
`;

export default code;