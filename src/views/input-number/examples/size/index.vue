<template>
  <example v-bind:code="code" id="example-input-number-size">
    <template slot="demo">
      <div class="example-input-number-size">
        <section>
          <vui-radio-group type="button" v-model="size">
            <vui-radio value="small" label="Small" />
            <vui-radio value="medium" label="Medium" />
            <vui-radio value="large" label="Large" />
          </vui-radio-group>
        </section>
        <section style="margin-top: 16px;">
          <vui-input-number v-model="value" v-bind:size="size" />
        </section>
      </div>
    </template>
    <template slot="title">尺寸</template>
    <template slot="description">
      <p>三种大小的数字输入框。</p>
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
        size: "medium",
        value: 1
      };
    },
    watch: {
      value(value) {
        console.log(value);
      }
    }
  };
</script>