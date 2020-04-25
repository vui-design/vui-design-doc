const code =
`<template>
  <vui-card style="width: 302px;">
    <img slot="cover" src="https://dummyimage.com/300x200/ececec/595959" />
    <vui-card-meta title="Card title">
      <vui-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <template slot="description">This is the description</template>
    </vui-card-meta>
    <template slot="actions">
      <vui-icon type="edit" />
      <vui-icon type="dustbin" />
      <vui-icon type="more-x" />
    </template>
  </vui-card>
</template>

<script>
  export default {

  };
</script>
`;

export default code;