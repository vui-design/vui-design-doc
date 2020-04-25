const code =
`<template>
  <vui-row :gutter="10">
    <vui-col :span="8">
      <div class="example-spin-custom">
        <vui-spin fixed>Loading...</vui-spin>
      </div>
    </vui-col>
    <vui-col :span="8">
      <div class="example-spin-custom">
        <vui-spin fixed>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 44 44" stroke="currentColor">
            <g fill="none" fill-rule="evenodd" stroke-width="2">
              <circle cx="22" cy="22" r="12.8281">
                <animate attributeName="r" begin="0s" dur="1.8s" values="1;20" calcMode="spline" keyTimes="0;1" keySplines="0.165,0.84,0.44,1" repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1;0" calcMode="spline" keyTimes="0;1" keySplines="0.3,0.61,0.355,1" repeatCount="indefinite" />
              </circle>
              <circle cx="22" cy="22" r="19.5756">
                <animate attributeName="r" begin="-0.9s" dur="1.8s" values="1;20" calcMode="spline" keyTimes="0;1" keySplines="0.165,0.84,0.44,1" repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1;0" calcMode="spline" keyTimes="0;1" keySplines="0.3,0.61,0.355,1" repeatCount="indefinite" />
              </circle>
            </g>
          </svg>
          <div style="margin-top: 10px;">Loading...</div>
        </vui-spin>
      </div>
    </vui-col>
    <vui-col :span="8">
      <div class="example-spin-custom">
        <vui-spin fixed>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="4" viewBox="0 0 34 4">
            <rect x="0" y="0" width="10" height="4" fill="currentColor">
              <animate attributeName="opacity" values="1;.2; 1" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
            </rect>
            <rect x="12" y="0" width="10" height="4" fill="currentColor">
              <animate attributeName="opacity" values="1;.2; 1" begin="0.2s" dur="0.6s" repeatCount="indefinite"></animate>
            </rect>
            <rect x="24" y="0" width="10" height="4" fill="currentColor">
              <animate attributeName="opacity" values="1;.2; 1" begin="0.4s" dur="0.6s" repeatCount="indefinite"></animate>
            </rect>
          </svg>
        </vui-spin>
      </div>
    </vui-col>
  </vui-row>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-spin-custom { position:relative; height:100px; border:1px solid #e6e6e6; }
</style>
`;

export default code;