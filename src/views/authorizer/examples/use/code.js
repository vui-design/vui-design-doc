const code =
`<vui-authorizer value="admin">
  <!-- // 管理员允许编辑 -->
  <a href="javascript:;">编辑</a>
  <!-- // 非管理员只允许查看 -->
  <a slot="replacement" href="javascript:;">查看</a>
</vui-authorizer>`;

export default code;