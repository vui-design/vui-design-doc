const code =
`<template>
  <div class="example-checkbox-size">
    <div style="font-size: 0;">
      <vui-checkbox-group size="small" v-model="value1">
        <vui-checkbox :value="1">A</vui-checkbox>
        <vui-checkbox :value="2">B</vui-checkbox>
        <vui-checkbox :value="3">C</vui-checkbox>
        <vui-checkbox :value="4">D</vui-checkbox>
      </vui-checkbox-group>
    </div>
    <div style="margin-top: 15px; font-size: 0;">
      <vui-checkbox-group v-model="value2">
        <vui-checkbox :value="1">A</vui-checkbox>
        <vui-checkbox :value="2" disabled>B</vui-checkbox>
        <vui-checkbox :value="3">C</vui-checkbox>
        <vui-checkbox :value="4">D</vui-checkbox>
      </vui-checkbox-group>
    </div>
    <div style="margin-top: 15px; font-size: 0;">
      <vui-checkbox-group size="large" v-model="value3" disabled>
        <vui-checkbox :value="1">A</vui-checkbox>
        <vui-checkbox :value="2">B</vui-checkbox>
        <vui-checkbox :value="3">C</vui-checkbox>
        <vui-checkbox :value="4">D</vui-checkbox>
      </vui-checkbox-group>
    </div>
    <div style="margin-top: 15px; font-size: 0;">
      <vui-checkbox-group type="button" size="small" v-model="value1">
        <vui-checkbox :value="1">A</vui-checkbox>
        <vui-checkbox :value="2">B</vui-checkbox>
        <vui-checkbox :value="3">C</vui-checkbox>
        <vui-checkbox :value="4">D</vui-checkbox>
      </vui-checkbox-group>
    </div>
    <div style="margin-top: 15px; font-size: 0;">
      <vui-checkbox-group type="button" v-model="value2">
        <vui-checkbox :value="1">A</vui-checkbox>
        <vui-checkbox :value="2" disabled>B</vui-checkbox>
        <vui-checkbox :value="3">C</vui-checkbox>
        <vui-checkbox :value="4">D</vui-checkbox>
      </vui-checkbox-group>
    </div>
    <div style="margin-top: 15px; font-size: 0;">
      <vui-checkbox-group type="button" size="large" v-model="value3" disabled>
        <vui-checkbox :value="1">A</vui-checkbox>
        <vui-checkbox :value="2">B</vui-checkbox>
        <vui-checkbox :value="3">C</vui-checkbox>
        <vui-checkbox :value="4">D</vui-checkbox>
      </vui-checkbox-group>
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