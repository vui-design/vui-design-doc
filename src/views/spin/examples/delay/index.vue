<template>
  <example v-bind:code="code" id="example-spin-delay">
    <template slot="demo">
      <div class="example-spin-delay">
        <vui-switch v-model="spinning" />
        <vui-spin v-bind:delay="delay" v-bind:spinning="spinning">
          <vui-alert
            type="info"
            message="Alert message title"
            description="Further details about the context of this alert."
          />
        </vui-spin>
      </div>
    </template>
    <template slot="title">延迟</template>
    <template slot="description">
      <p>延迟显示 <code>spinning</code> 效果，当 <code>spinning</code> 状态在 <code>delay</code> 时间内结束，则不显示 <code>spinning</code> 状态。</p>
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
        delay: 500,
        spinning: false
      };
    }
  };
</script>

<style>
  .example-spin-delay .vui-spin { margin-top:16px; }
</style>