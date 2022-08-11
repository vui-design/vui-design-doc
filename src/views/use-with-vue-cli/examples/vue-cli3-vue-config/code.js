const code =
`module.exports = {
  devServer: {
    open: true
  },
+  transpileDependencies: [
+    /[\\\\/]node_modules[\\\\/]vui-design[\\\\/]/
+  ]
}`;

export default code;