const code =
`<template>
  <div>
    <vui-checkbox checked :disabled="disabled">Checkbox</vui-checkbox>
    <vui-checkbox :disabled="disabled" style="margin-left: 10px;">Checkbox</vui-checkbox>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        disabled: true
      };
    }
  };
</script>
`;

export default code;