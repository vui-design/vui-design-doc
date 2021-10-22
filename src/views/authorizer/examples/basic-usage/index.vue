<template>
  <example v-bind:code="code" id="example-authorizer-basic-usage">
    <template slot="demo">
      <div class="example-authorizer-basic-usage">
        <vui-authorizer value="admin">
          <a href="javascript:;">编辑</a>
          <a slot="replacement" href="javascript:;">查看</a>
        </vui-authorizer>
      </div>
    </template>
    <template slot="title">基本用法</template>
    <template slot="description">
      <p>最基本的用法。</p>
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