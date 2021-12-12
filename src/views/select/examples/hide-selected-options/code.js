const code =
`<template>
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

<script>
  export default {
    data() {
      return {
        value: [],
        options: [
          "New York", "London", "Sydney",
          "Ottawa", "Paris", "Canberra"
        ]
      };
    }
  };
</script>
`;

export default code;