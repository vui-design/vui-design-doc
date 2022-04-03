<template>
  <example v-bind:code="code" id="example-spin-nested">
    <template slot="demo">
      <div class="example-spin-nested">
        <vui-switch v-model="spinning" />
        <vui-spin v-bind:spinning="spinning">
          <vui-alert
            type="info"
            message="Alert message title"
            description="Further details about the context of this alert."
          />
        </vui-spin>
      </div>
    </template>
    <template slot="title">卡片加载中</template>
    <template slot="description">
      <p>可以直接把内容内嵌到 <code>Spin</code> 中，将现有容器变为加载状态。</p>
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
        spinning: false
      };
    }
  };
</script>

<style>
  .example-spin-nested .vui-spin { margin-top:16px; }
</style>