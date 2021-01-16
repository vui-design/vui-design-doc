const code =
`<template>
  <div class="example-checkbox-group-options">
    <div style="font-size: 0;">
      <vui-checkbox-group :options="options1" v-model="value1" />
    </div>
    <div style="margin-top: 15px; font-size: 0;">
      <vui-checkbox-group :options="options2" v-model="value2" />
    </div>
    <div style="margin-top: 15px; font-size: 0;">
      <vui-checkbox-group disabled :options="options3" v-model="value3" />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options1: ["A", "B", "C", "D"],
        value1: ["A"],
        options2: [
          { label: "A", value: "A" },
          { label: "B", value: "B", disabled: true },
          { label: "C", value: "C" },
          { label: "D", value: "D" }
        ],
        value2: ["A"],
        options3: [
          { label: "A", value: "A" },
          { label: "B", value: "B" },
          { label: "C", value: "C" },
          { label: "D", value: "D" }
        ],
        value3: ["A"]
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
`;

export default code;