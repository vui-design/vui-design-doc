const code =
`<template>
  <vui-list v-bind:grid="grid" v-bind:data="data">
    <vui-list-item slot="item" slot-scope="item, index">
      <vui-card v-bind:title="item.title">{{item.description}}</vui-card>
    </vui-list-item>
  </vui-list>
</template>

<script>
  export default {
    data() {
      return {
        grid: {
          gutter: 16,
          columns: 4
        },
        data: [
          {
            title: "List Item Title",
            description: "This is the description!"
          },
          {
            title: "List Item Title",
            description: "This is the description!"
          },
          {
            title: "List Item Title",
            description: "This is the description!"
          },
          {
            title: "List Item Title",
            description: "This is the description!"
          },
          {
            title: "List Item Title",
            description: "This is the description!"
          },
          {
            title: "List Item Title",
            description: "This is the description!"
          },
          {
            title: "List Item Title",
            description: "This is the description!"
          },
          {
            title: "List Item Title",
            description: "This is the description!"
          }
        ]
      };
    }
  };
</script>
`;

export default code;