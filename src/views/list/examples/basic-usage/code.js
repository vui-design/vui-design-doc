const code =
`<template>
  <vui-list>
    <vui-list-item v-for="(item, index) in data" v-bind:key="index">
      <vui-list-item-meta v-bind:avatar="item.avatar" v-bind:description="item.description">
        <a slot="title" href="javascript:;">{{item.title}}</a>
      </vui-list-item-meta>
    </vui-list-item>
  </vui-list>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            avatar: "https://dummyimage.com/32x32/2d8cf0/fff",
            title: "List Item Title 1",
            description: "This is the description of the list item, which may be very long!"
          },
          {
            avatar: "https://dummyimage.com/32x32/2d8cf0/fff",
            title: "List Item Title 2",
            description: "This is the description of the list item, which may be very long!"
          },
          {
            avatar: "https://dummyimage.com/32x32/2d8cf0/fff",
            title: "List Item Title 3",
            description: "This is the description of the list item, which may be very long!"
          },
          {
            avatar: "https://dummyimage.com/32x32/2d8cf0/fff",
            title: "List Item Title 4",
            description: "This is the description of the list item, which may be very long!"
          }
        ]
      };
    }
  };
</script>
`;

export default code;