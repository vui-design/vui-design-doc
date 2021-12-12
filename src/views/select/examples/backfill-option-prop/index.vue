<template>
  <example v-bind:code="code" id="example-select-backfill-option-prop">
    <template slot="demo">
      <vui-select v-model="value" backfillOptionProp="label" style="width: 200px;" placeholder="Please select">
        <vui-option value="new york" label="New York">
          New York<span style="float: right; opacity: 0.5;">America</span>
        </vui-option>
        <vui-option value="london" label="London">
          London<span style="float: right; opacity: 0.5;">U.K.</span>
        </vui-option>
        <vui-option value="sydney" label="Sydney">
          Sydney<span style="float: right; opacity: 0.5;">Australian</span>
        </vui-option>
      </vui-select>
    </template>
    <template slot="title">定制回填内容</template>
    <template slot="description">
      <p>可以对选项的内容进行自定义，使用 <code>backfillOptionProp</code> 指定回填到选择框的 <code>Option</code> 属性。</p>
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
        value: undefined
      };
    },
    watch: {
      value(value) {
        console.log(value);
      }
    }
  };
</script>