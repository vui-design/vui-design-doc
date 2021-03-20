<template>
  <vui-doc-example v-bind:code="code" id="example-affix-basic-usage">
    <template slot="demo">
      <div class="example-affix-basic-usage">
        <section>
          <vui-affix v-bind:offsetTop="top">
            <vui-button type="primary" v-on:click="addTop">Affix top</vui-button>
          </vui-affix>
        </section>
        <section>
          <vui-affix v-bind:offsetBottom="bottom">
            <vui-button type="primary" v-on:click="addBottom">Affix bottom</vui-button>
          </vui-affix>
        </section>
      </div>
    </template>
    <template slot="title">基本用法</template>
    <template slot="description">
      <p>最简单的用法。</p>
    </template>
  </vui-doc-example>
</template>

<script>
  import VuiDocExample from "src/components/example";
  import code from "./code";

  export default {
    components: {
      VuiDocExample
    },
    data() {
      return {
        code,
        top: 10,
        bottom: 10
      };
    },
    methods: {
      addTop() {
        this.top += 10;
      },
      addBottom() {
        this.bottom += 10;
      }
    }
  };
</script>

<style>
  .example-affix-basic-usage section + section { margin-top:16px; }
</style>