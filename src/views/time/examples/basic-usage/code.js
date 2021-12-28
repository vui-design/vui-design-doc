const code =
`<template>
  <div class="example-time-basic-usage">
    <vui-time v-bind:value="value1" />
    <br />
    <vui-time v-bind:value="value2" />
    <br />
    <vui-time v-bind:value="value3" />
    <br />
    <vui-time v-bind:value="value4" />
    <br />
    <vui-time v-bind:value="value5" />
    <br />
    <vui-time v-bind:value="value6" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: new Date("2014-01-01"),
        value2: "2019-04-01",
        value3: new Date().getTime() - 5 * 24 * 60 * 60 * 1000,
        value4: new Date().getTime() - 5 * 60 * 60 * 1000,
        value5: new Date().getTime() - 5 * 60 * 1000,
        value6: new Date().getTime()
      };
    }
  };
</script>
`;

export default code;