const code =
`<template>
  <div class="example-time-type">
    <vui-time v-bind:value="value" />
    <br />
    <vui-time type="date" v-bind:value="value" />
    <br />
    <vui-time type="datetime" v-bind:value="value" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: new Date().getTime() - 5 * 24 * 60 * 60 * 1000
      };
    }
  };
</script>
`;

export default code;