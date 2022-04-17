const code =
`<template>
  <div class="example-card-loading">
    <vui-switch v-model="loading" />
    <vui-card v-bind:loading="loading">
      <vui-card-meta title="Card title">
        <vui-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <template slot="description">This is the description</template>
      </vui-card-meta>
    </vui-card>
    <vui-card>
      <vui-skeleton v-bind:loading="loading" animated avatar>
        <vui-card-meta title="Card title">
          <vui-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <template slot="description">This is the description</template>
        </vui-card-meta>
      </vui-skeleton>
      <template slot="actions">
        <vui-icon type="edit" />
        <vui-icon type="dustbin" />
        <vui-icon type="more-x" />
      </template>
    </vui-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: true
      };
    }
  };
</script>

<style>
  .example-card-loading .vui-card { margin-top:24px; }
</style>
`;

export default code;