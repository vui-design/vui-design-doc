const code = `
<template>
  <div class="example-avatar-dynamic">
    <vui-avatar v-bind:style="{backgroundColor: color}">{{user}}</vui-avatar>
    <vui-button size="small" v-on:click="handleChange">Change</vui-button>
  </div>
</template>

<script>
  const colors = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];
  const users = ["U", "Lucy", "Tom", "Edward"];

  export default {
    components: {
      Example
    },
    data() {
      return {
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
  .example-avatar-badge .vui-badge + .vui-badge { margin-left:16px; }
</style>
`;

export default code.trim();