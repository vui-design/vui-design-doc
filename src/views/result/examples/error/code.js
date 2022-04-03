const code =
`<template>
  <vui-result
    status="error"
    title="This is result title"
    description="Here is a brief description of the result of the operation."
  >
    <div class="example-result-error-content">
      <h4 class="example-result-error-content-title">The content you submitted has the following error:</h4>
      <div class="example-result-error-content-reason">
        <vui-icon type="crossmark-circle" color="#ff4d4f" />
        <span>Your account has been frozen.</span>
        <a href="javascript:;">Thaw immediately ></a>
      </div>
      <div class="example-result-error-content-reason">
        <vui-icon type="crossmark-circle" color="#ff4d4f" />
        <span>Your account is not yet eligible to apply.</span>
        <a href="javascript:;">Apply Unlock ></a>
      </div>
    </div>
    <vui-space slot="extra">
      <vui-button type="primary">Back Home</vui-button>
      <vui-button>Try Again</vui-button>
    </vui-space>
  </vui-result>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-result-error-content {  }
  .example-result-error-content-title { margin-bottom:16px; color:#262626; font-size:16px; font-weight:600; }
  .example-result-error-content-reason { color:#595959; }
  .example-result-error-content-reason span { margin-left:4px; }
  .example-result-error-content-reason a { margin-left:4px; }
  .example-result-error-content-reason +  .example-result-error-content-reason { margin-top:4px; }
</style>
`;

export default code;