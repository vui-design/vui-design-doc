const code =
`<template>
  <div class="example-radio-size">
    <div style="font-size: 0;">
      <vui-radio-group size="small" v-model="value1">
        <vui-radio :value="1">A</vui-radio>
        <vui-radio :value="2">B</vui-radio>
        <vui-radio :value="3">C</vui-radio>
        <vui-radio :value="4">D</vui-radio>
      </vui-radio-group>
    </div>
    <div style="margin-top: 15px; font-size: 0;">
      <vui-radio-group v-model="value2">
        <vui-radio :value="1">A</vui-radio>
        <vui-radio :value="2" disabled>B</vui-radio>
        <vui-radio :value="3">C</vui-radio>
        <vui-radio :value="4">D</vui-radio>
      </vui-radio-group>
    </div>
    <div style="margin-top: 15px; font-size: 0;">
      <vui-radio-group size="large" v-model="value3" disabled>
        <vui-radio :value="1">A</vui-radio>
        <vui-radio :value="2">B</vui-radio>
        <vui-radio :value="3">C</vui-radio>
        <vui-radio :value="4">D</vui-radio>
      </vui-radio-group>
    </div>
    <div style="margin-top: 15px; font-size: 0;">
      <vui-radio-group type="button" size="small" v-model="value1">
        <vui-radio :value="1">A</vui-radio>
        <vui-radio :value="2">B</vui-radio>
        <vui-radio :value="3">C</vui-radio>
        <vui-radio :value="4">D</vui-radio>
      </vui-radio-group>
    </div>
    <div style="margin-top: 15px; font-size: 0;">
      <vui-radio-group type="button" v-model="value2">
        <vui-radio :value="1">A</vui-radio>
        <vui-radio :value="2" disabled>B</vui-radio>
        <vui-radio :value="3">C</vui-radio>
        <vui-radio :value="4">D</vui-radio>
      </vui-radio-group>
    </div>
    <div style="margin-top: 15px; font-size: 0;">
      <vui-radio-group type="button" size="large" v-model="value3" disabled>
        <vui-radio :value="1">A</vui-radio>
        <vui-radio :value="2">B</vui-radio>
        <vui-radio :value="3">C</vui-radio>
        <vui-radio :value="4">D</vui-radio>
      </vui-radio-group>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: 1,
        value2: 1,
        value3: 1
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