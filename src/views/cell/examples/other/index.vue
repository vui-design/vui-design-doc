<template>
  <example v-bind:code="code" id="example-cell-other">
    <template slot="demo">
      <div class="example-cell-other">
        <vui-card v-bind:bordered="false" shadow="always" icon="list-settings-filled" bodyStyle="padding: 0;" title="选项">
          <vui-cell-group title="选中&禁用">
            <vui-cell selected>选中的单元格</vui-cell>
            <vui-cell disabled>禁用的单元格</vui-cell>
          </vui-cell-group>
          <vui-cell-group title="选中&禁用">
            <vui-cell href="https://cn.vuejs.org/" selected>选中的链接单元格</vui-cell>
            <vui-cell href="https://cn.vuejs.org/" disabled>禁用的链接单元格</vui-cell>
          </vui-cell-group>
          <vui-cell-group title="其他" description="我是分组底部说明文字">
            <vui-cell href="https://cn.vuejs.org/">
              显示徽标<vui-badge slot="extra" v-bind:count="10" />
            </vui-cell>
            <vui-cell>
              开关<vui-switch slot="extra" />
            </vui-cell>
          </vui-cell-group>
        </vui-card>
      </div>
    </template>
    <template slot="title">其他用法</template>
    <template slot="description">
      <p>设置 <code>selected</code> 或 <code>disabled</code> 属性可以选中或禁用单元格。</p>
      <p>您还可以结合其他组件一起使用，较为灵活。</p>
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
        code
      };
    }
  };
</script>

<style>
  .example-cell-other { background-color:#f6f6f6; padding:24px; }
  .example-cell-other > .vui-card { width:300px; }
</style>