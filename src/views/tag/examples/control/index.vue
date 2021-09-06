<template>
  <example v-bind:code="code" id="example-tag-control">
    <template slot="demo">
      <div class="example-tag-control">
        <vui-tag v-for="tag in tags" v-bind:key="tag" closable v-on:close="handleRemove(tag)">{{tag}}</vui-tag>
        <vui-input
          v-if="showInput"
          v-model="value"
          ref="input"
          size="small"
          style="width: 100px;"
          v-bind:value="value"
          v-on:keyup.enter="handleConfirm"
          v-on:blur="handleCancel"
        />
        <vui-button v-else type="primary" size="small" v-on:click="handleAdd">New Tag</vui-button>
      </div>
    </template>
    <template slot="title">动态添加和删除</template>
    <template slot="description">
      <p>用数组生成一组标签，可以动态添加和删除。</p>
    </template>
  </example>
</template>

<script>
  import Example from "src/components/example";
  import code from "./code";

  export default {
    components: {
      Example
    },
    data() {
      return {
        code,
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
      handleConfirm() {
        if (this.value && this.tags.indexOf(this.value) === -1) {
          this.tags.push(this.value);
        }

        this.showInput = false;
        this.value = "";
      },
      handleCancel() {
        this.showInput = false;
        this.value = "";
      },
      handleRemove(tag) {
        this.tags.splice(this.tags.indexOf(tag), 1);
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