<template>
  <example v-bind:code="code" id="example-avatar-basic-usage">
    <template slot="demo">
      <div class="example-avatar-basic-usage">
        <section>
          <vui-avatar icon="user" v-bind:size="54" />
          <vui-avatar icon="user" size="large" />
          <vui-avatar icon="user" />
          <vui-avatar icon="user" size="small" />
        </section>
        <section>
          <vui-avatar icon="user" shape="square" v-bind:size="54" />
          <vui-avatar icon="user" shape="square" size="large" />
          <vui-avatar icon="user" shape="square" />
          <vui-avatar icon="user" shape="square" size="small" />
        </section>
      </div>
    </template>
    <template slot="title">基本用法</template>
    <template slot="description">
      <p>头像有三种尺寸，两种形状可选；其中尺寸支持自定义数值。</p>
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
  .example-avatar-basic-usage section + section { margin-top:24px; }
  .example-avatar-basic-usage .vui-avatar + .vui-avatar { margin-left:16px; }
</style>