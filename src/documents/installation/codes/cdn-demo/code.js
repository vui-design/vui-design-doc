const code =
`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>VUI Example</title>
  <link type="text/css" rel="stylesheet" href="http://unpkg.com/vui-design/dist/styles/vui.css" />
  <script src="http://vuejs.org/js/vue.min.js"></script>
  <script src="http://unpkg.com/vui-design/dist/vui.min.js"></script>
</head>

<body>
  <div id="app">
    <vui-button @click="showModal">Click me!</vui-button>
    <vui-modal v-model="visible" title="Welcome">Welcome to VUI!</vui-modal>
  </div>
  <script>
    new Vue({
      el: "#app",
      data: {
        visible: false
      },
      methods: {
        showModal: function() {
          this.visible = true;
        }
      }
    });
  </script>
</body>
</html>
`;

export default code;