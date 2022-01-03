const code =
`<template>
  <vui-form ref="form" v-bind:model="form" v-bind:labelWidth="120">
    <vui-form-item
      v-for="(item, index) in form.items"
      v-bind:key="index"
      v-bind:prop="'items.' + index + '.value'"
      v-bind:rules="getRules(index)"
      v-bind:label="'Item ' + (index + 1)"
    >
      <vui-input v-model="item.value" style="width: 200px;" placeholder="Enter something..." />
      <vui-button-group style="margin-left: 16px;">
        <vui-button icon="minus" v-if="form.items.length > 1" v-on:click="handleRemove(index)" />
        <vui-button icon="plus" v-if="index === form.items.length - 1" v-on:click="handleAdd" />
      </vui-button-group>
    </vui-form-item>
    <vui-form-item>
      <vui-button type="primary" v-on:click="handleSubmit">Submit</vui-button>
      <vui-button style="margin-left: 16px;" v-on:click="handleReset">Reset</vui-button>
    </vui-form-item>
  </vui-form>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          items: [
            { value: "" }
          ]
        }
      };
    },
    watch: {
      form: {
        deep: true,
        handler: function(newValue, oldValue) {
          console.log(JSON.stringify(newValue));
        }
      }
    },
    methods: {
      getRules(index) {
        return {
          trigger: "blur",
          required: true,
          message: "Item " + (index + 1) + " can not be empty"
        };
      },
      handleAdd() {
        this.form.items.push({
          value: ""
        });
      },
      handleRemove(index) {
        this.form.items.splice(index, 1);
      },
      handleSubmit() {
        this.$refs.form.validate(valid => {
          if (valid) {
            this.$message.success("Validation passed");
          }
          else {
            this.$message.error("Validation failed");
          }
        });
      },
      handleReset() {
        this.$refs.form.reset();
      }
    }
  };
</script>
`;

export default code;