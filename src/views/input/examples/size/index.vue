<template>
  <example v-bind:code="code" id="example-input-size">
    <template slot="demo">
      <div class="example-input-size">
        <section>
          <vui-radio-group type="button" v-model="size">
            <vui-radio label="Small" value="small" />
            <vui-radio label="Medium" value="medium" />
            <vui-radio label="Large" value="large" />
          </vui-radio-group>
        </section>
        <section>
          <vui-input v-bind:size="size" placeholder="Enter something..." />
          <vui-input v-bind:size="size" suffix="calendar" placeholder="Enter something..." />
          <vui-input v-bind:size="size" append="@qq.com" placeholder="Enter something..." />
        </section>
      </div>
    </template>
    <template slot="title">尺寸</template>
    <template slot="description">
      <p>提供三种尺寸：大、中（默认）、小。</p>
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
        size: "medium"
      };
    }
  };
</script>

<style>
  .example-input-size section + section{ margin-top:24px; }
  .example-input-size .vui-input + .vui-input { margin-top:24px; }
</style>