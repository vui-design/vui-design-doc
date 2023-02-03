const code =
`<template>
  <div class="example-checkbox-group-options">
    <section>
      <vui-checkbox-group v-model="value1" v-bind:options="options1" />
    </section>
    <section>
      <vui-checkbox-group v-model="value2" v-bind:options="options2" />
    </section>
    <section>
      <vui-checkbox-group v-model="value3" v-bind:options="options3" disabled />
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: ["A"],
        options1: ["A", "B", "C", "D"],
        value2: ["A"],
        options2: [
          { label: "A", value: "A" },
          { label: "B", value: "B", disabled: true },
          { label: "C", value: "C" },
          { label: "D", value: "D" }
        ],
        value3: ["A"],
        options3: [
          { label: "A", value: "A" },
          { label: "B", value: "B" },
          { label: "C", value: "C" },
          { label: "D", value: "D" }
        ]
      };
    },
    watch: {
      value1(value) {
        console.log(value);
      },
      value2(value) {
        console.log(value);
      },
      value3(value) {
        console.log(value);
      }
    }
  };
</script>

<style>
  .example-checkbox-group-options section { line-height:1; }
  .example-checkbox-group-options section + section { margin-top:16px; }
</style>
`;

export default code;