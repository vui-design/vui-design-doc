<template>
  <example v-bind:code="code" id="example-select-hide-selected-options">
    <template slot="demo">
      <vui-select v-model="value" multiple placeholder="Please select">
        <vui-option
          v-for="option in options"
          v-if="value.indexOf(option) === -1"
          v-bind:key="option"
          v-bind:value="option"
        >
          {{option}}
        </vui-option>
      </vui-select>
    </template>
    <template slot="title">隐藏已选选项</template>
    <template slot="description">
      <p>隐藏下拉列表中已选择的选项。</p>
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
        value: [],
        options: [
          "New York", "London", "Sydney",
          "Ottawa", "Paris", "Canberra"
        ]
      };
    }
  };
</script>