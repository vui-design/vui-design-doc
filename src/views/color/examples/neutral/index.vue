<template>
  <vui-row v-bind:gutter="16">
    <vui-col v-bind:span="6">
      <color v-bind:showFooter="false" value="#000000" title="基础黑色" />
      <color v-bind:showFooter="false" value="#ffffff" fontColor="#666666" title="基础白色" />
      <color v-bind:showFooter="false" value="transparent" fontColor="#666666" title="透明" />
    </vui-col>
    <vui-col v-bind:span="6">
      <color v-bind:showFooter="false" value="#262626" title="主要文字（标题）" />
      <color v-bind:showFooter="false" value="#595959" title="常规文字（正文）" />
      <color v-bind:showFooter="false" value="#8c8c8c" title="次要文字（辅助）" />
      <color v-bind:showFooter="false" value="#bfbfbf" title="占位文字（失效）" />
    </vui-col>
    <vui-col v-bind:span="6">
      <color v-bind:showFooter="false" value="#e0e0e0" fontColor="#666666" title="一级边框" />
      <color v-bind:showFooter="false" value="#e6e6e6" fontColor="#666666" title="二级边框" />
      <color v-bind:showFooter="false" value="#ececec" fontColor="#666666" title="三级边框" />
      <color v-bind:showFooter="false" value="#f3f3f3" fontColor="#666666" title="四级边框" />
    </vui-col>
    <vui-col v-bind:span="6">
      <color v-bind:showFooter="false" value="#ececec" fontColor="#666666" title="分割线" />
      <color v-bind:showFooter="false" value="#f9f9f9" fontColor="#666666" title="背景色" />
    </vui-col>
  </vui-row>
</template>

<script>
  import Color from "src/components/color";

  export default {
    components: {
      Color
    }
  };
</script>