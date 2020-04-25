const code =
`<template>
  <div class="example-tag-control">
    <vui-tag v-for="tag in tags" :key="tag" closable @close="handleRemove(tag)">{{tag}}</vui-tag>
    <vui-input
      v-if="showInput"
      v-model="value"
      ref="input"
      size="small"
      style="width: 100px;"
      @keyup.enter="handleInputConfirm"
      @blur="handleInputCancel"
    />
    <vui-button v-else type="primary" size="small" @click="handleAdd">New Tag</vui-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tags: ["Tag 1", "Tag 2", "Tag 3"],
        showInput: false,
        value: ""
      };
    },
    methods: {
      handleAdd() {
        this.showInput = true;
        this.$nextTick(() => this.$refs.input.focus());
      },
      handleInputConfirm() {
        if (this.value && this.tags.indexOf(this.value) === -1) {
          this.tags.push(this.value);
        }

        this.showInput = false;
        this.value = "";

        console.log(this.tags);
      },
      handleInputCancel() {
        this.showInput = false;
        this.value = "";
      },
      handleRemove(tag) {
        this.tags.splice(this.tags.indexOf(tag), 1);

        console.log(this.tags);
      }
    }
  };
</script>

<style>
  .example-tag-control:before,
  .example-tag-control:after { content:""; display:block; width:100%; height:0; visibility:hidden; clear:both; }
  .example-tag-control > .vui-tag,
  .example-tag-control > .vui-input,
  .example-tag-control > .vui-button { float:left; margin-right:10px; margin-bottom:10px; }
</style>
`;

export default code;