const code =
`<template>
    <vui-radio checked :disabled="disabled">Radio</vui-radio>
    <vui-radio :disabled="disabled" style="margin-left: 10px;">Radio</vui-radio>
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