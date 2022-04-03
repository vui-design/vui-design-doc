<template>
  <example v-bind:code="code" id="example-drawer-multi-level">
    <template slot="demo">
      <div class="example-drawer-multi-level">
        <vui-button type="primary" v-on:click="showDrawer">Open drawer</vui-button>
        <vui-drawer v-model="visible" title="Drawer Title">
          <vui-button type="primary" v-on:click="showChildrenDrawer">Open children drawer</vui-button>
          <vui-drawer v-model="childrenVisible" title="Children Drawer Title">
            <p>This is children drawer</p>
          </vui-drawer>
        </vui-drawer>
      </div>
    </template>
    <template slot="title">多层抽屉</template>
    <template slot="description">
      <p>在抽屉内打开新的抽屉，用以解决多分支任务的复杂状况。</p>
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
      return {
        code,
        visible: false,
        childrenVisible: false
      };
    },
    methods: {
      showDrawer() {
        this.visible = true;
      },
      showChildrenDrawer() {
        this.childrenVisible = true;
      }
    }
  };
</script>