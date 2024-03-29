const code =
`<template>
  <div class="example-cell-link">
    <vui-card v-bind:bordered="false" shadow="always" icon="list-settings-filled" bodyStyle="padding: 0;" title="选项">
      <vui-cell-group title="链接单元格">
        <vui-cell href="https://cn.vuejs.org/" target="_blank">跳转至 Vue 官网</vui-cell>
        <vui-cell to="/components/message">跳转至 Message 组件</vui-cell>
      </vui-cell-group>
      <vui-cell-group title="带图标的链接单元格">
        <vui-cell href="https://cn.vuejs.org/" target="_blank">
          跳转至 Vue 官网
          <vui-icon slot="icon" type="stack" />
        </vui-cell>
        <vui-cell to="/components/message">
          跳转至 Message 组件
          <vui-icon slot="icon" type="message-ellipsis" />
        </vui-cell>
      </vui-cell-group>
      <vui-cell-group title="带额外内容的链接单元格">
        <vui-cell href="https://cn.vuejs.org/" target="_blank">
          跳转至 Vue 官网
          <template slot="extra">额外内容</template>
        </vui-cell>
        <vui-cell to="/components/message">
          跳转至 Message 组件
          <template slot="extra">额外内容</template>
        </vui-cell>
      </vui-cell-group>
      <vui-cell-group title="带图标、额外内容的链接单元格" description="我是分组底部说明文字">
        <vui-cell href="https://cn.vuejs.org/" target="_blank">
          跳转至 Vue 官网
          <vui-icon slot="icon" type="stack" />
          <template slot="extra">额外内容</template>
        </vui-cell>
        <vui-cell to="/components/message">
          跳转至 Message 组件
          <vui-icon slot="icon" type="message-ellipsis" />
          <template slot="extra">额外内容</template>
        </vui-cell>
      </vui-cell-group>
    </vui-card>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-cell-link { background-color:#f6f6f6; padding:24px; }
  .example-cell-link > .vui-card { width:300px; }
</style>
`;

export default code;