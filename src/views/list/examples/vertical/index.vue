<template>
  <example v-bind:code="code" id="example-list-vertical">
    <template slot="demo">
      <vui-list layout="vertical" size="large">
        <vui-list-item v-for="(item, index) in data" v-bind:key="index">
          <vui-list-item-meta v-bind:avatar="item.avatar" v-bind:description="item.description" >
            <a slot="title" href="javascript:;">{{item.title}}</a>
          </vui-list-item-meta>
          <article>{{item.content}}</article>
          <template slot="actions">
            <a href="javascript:;">
              <vui-icon type="star" style="margin-right: 4px;" />{{item.collection}}
            </a>
            <a href="javascript:;">
              <vui-icon type="thumb-up" style="margin-right: 4px;" />{{item.like}}
            </a>
            <a href="javascript:;">
              <vui-icon type="chat-ellipsis" style="margin-right: 4px;" />{{item.comment}}
            </a>
          </template>
          <img slot="extra" width="280" height="166" v-bind:src="item.image" />
        </vui-list-item>
      </vui-list>
    </template>
    <template slot="title">竖排列表样式</template>
    <template slot="description">
      <p>通过设置 <code>layout</code> 属性为 <code>vertical</code> 可实现竖排列表样式。</p>
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
        data: [
          {
            avatar: "https://dummyimage.com/32x32/2d8cf0/fff",
            title: "List Item Title",
            description: "This is the description of the list item, which may be very long!",
            content: "The official guide assumes intermediate level knowledge of HTML, CSS, and JavaScript. If you are totally new to frontend development, it might not be the best idea to jump right into a framework as your first step - grasp the basics then come back!",
            collection: 100,
            like: 666,
            comment: 888,
            image: "https://dummyimage.com/280x166/ececec/595959"
          },
          {
            avatar: "https://dummyimage.com/32x32/2d8cf0/fff",
            title: "List Item Title",
            description: "This is the description of the list item, which may be very long!",
            content: "The official guide assumes intermediate level knowledge of HTML, CSS, and JavaScript. If you are totally new to frontend development, it might not be the best idea to jump right into a framework as your first step - grasp the basics then come back!",
            collection: 100,
            like: 666,
            comment: 888,
            image: "https://dummyimage.com/280x166/ececec/595959"
          }
        ]
      };
    }
  };
</script>