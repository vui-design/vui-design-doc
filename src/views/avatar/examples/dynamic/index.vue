<template>
  <example v-bind:code="code" id="example-avatar-dynamic">
    <template slot="demo">
      <div class="example-avatar-dynamic">
        <vui-avatar v-bind:style="{backgroundColor: color}">{{user}}</vui-avatar>
        <vui-button size="small" v-on:click="handleChange">Change</vui-button>
      </div>
    </template>
    <template slot="title">自动调整字符大小</template>
    <template slot="description">
      <p>对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。</p>
    </template>
  </example>
</template>

<script>
  import Example from "src/components/example";
  import code from "./code";

  const colors = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];
  const users = ["U", "Lucy", "Tom", "Edward"];

  export default {
    components: {
      Example
    },
    data() {
      return {
        code,
        color: colors[0],
        user: users[0]
      };
    },
    methods: {
      handleChange() {
        const index = users.indexOf(this.user);

        this.color = index < colors.length - 1 ? colors[index + 1] : colors[0];
        this.user = index < users.length - 1 ? users[index + 1] : users[0];
      }
    }
  };
</script>

<style>
  .example-avatar-dynamic .vui-button { margin-left:16px; }
</style>