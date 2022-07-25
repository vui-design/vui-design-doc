const code =
`<template>
  <div class="example-table-export">
    <vui-button-group type="primary">
      <vui-button v-on:click="handleExport(1)">导出原始数据</vui-button>
      <vui-button v-on:click="handleExport(2)">导出过滤和排序后的数据</vui-button>
      <vui-button v-on:click="handleExport(3)">导出自定义数据</vui-button>
    </vui-button-group>
    <vui-table ref="table" v-bind:columns="columns" v-bind:data="data" v-bind:scroll="scroll" rowKey="id" />
  </div>
</template>

<script>
  export default {
    data() {
      const columns = [
        {
          key: "name",
          dataIndex: "name",
          fixed: "left",
          width: 200,
          title: "Name"
        },
        {
          key: "show",
          dataIndex: "show",
          width: 140,
          title: "Show",
          sorter: true,
          filter: {
            options: [
              {
                value: 1,
                label: "Greater than 4000"
              },
              {
                value: 2,
                label: "Less than 4000"
              }
            ],
            multiple: false,
            method(value, row) {
              if (!value) {
                return true;
              }

              if (value === 1) {
                return row.show > 4000;
              }
              else if (value === 2) {
                return row.show < 4000;
              }
            }
          }
        },
        {
          key: "weak",
          dataIndex: "weak",
          width: 140,
          title: "Weak",
          sorter: true
        },
        {
          key: "signin",
          dataIndex: "signin",
          width: 140,
          title: "Signin",
          sorter: true
        },
        {
          key: "click",
          dataIndex: "click",
          width: 140,
          title: "Click",
          sorter: true
        },
        {
          key: "active",
          dataIndex: "active",
          width: 140,
          title: "Active",
          sorter: true
        },
        {
          key: "day7",
          dataIndex: "day7",
          width: 140,
          title: "7d retained",
          sorter: true
        },
        {
          key: "day30",
          dataIndex: "day30",
          width: 140,
          title: "30d retained",
          sorter: true
        },
        {
          key: "tomorrow",
          dataIndex: "tomorrow",
          width: 160,
          title: "The next day left",
          sorter: true
        },
        {
          key: "day",
          dataIndex: "day",
          width: 140,
          title: "Day Active",
          sorter: true
        },
        {
          key: "week",
          dataIndex: "week",
          width: 140,
          title: "Week Active",
          sorter: true
        },
        {
          key: "month",
          dataIndex: "month",
          title: "Month Active",
          sorter: true
        }
      ];

      const data = [
        { id: 1, name: "Name1", fav: 0, show: 7302, weak: 5627, signin: 1563, click: 4254, active: 1438, day7: 274, day30: 285, tomorrow: 1727, day: 558, week: 4440, month: 5610 },
        { id: 2, name: "Name2", fav: 0, show: 4720, weak: 4086, signin: 3792, click: 8690, active: 8470, day7: 8172, day30: 5197, tomorrow: 1684, day: 2593, week: 2507, month: 1537 },
        { id: 3, name: "Name3", fav: 0, show: 7181, weak: 8007, signin: 8477, click: 1879, active: 16, day7: 2249, day30: 3450, tomorrow: 377, day: 1561, week: 3219, month: 1588 },
        { id: 4, name: "Name4", fav: 0, show: 9911, weak: 8976, signin: 8807, click: 8050, active: 7668, day7: 1547, day30: 2357, tomorrow: 7278, day: 5309, week: 1655, month: 9043 },
        { id: 5, name: "Name5", fav: 0, show: 934, weak: 1394, signin: 6463, click: 5278, active: 9256, day7: 209, day30: 3563, tomorrow: 8285, day: 1230, week: 4840, month: 9908 },
        { id: 6, name: "Name6", fav: 0, show: 6856, weak: 1608, signin: 457, click: 4949, active: 2909, day7: 4525, day30: 6171, tomorrow: 1920, day: 1966, week: 904, month: 6851 },
        { id: 7, name: "Name7", fav: 0, show: 5107, weak: 6407, signin: 4166, click: 7970, active: 1002, day7: 8701, day30: 9040, tomorrow: 7632, day: 4061, week: 4359, month: 3676 },
        { id: 8, name: "Name8", fav: 0, show: 862, weak: 6520, signin: 6696, click: 3209, active: 6801, day7: 6364, day30: 6850, tomorrow: 9408, day: 2481, week: 1479, month: 2346 },
        { id: 9, name: "Name9", fav: 0, show: 567, weak: 5859, signin: 128, click: 6593, active: 1971, day7: 7596, day30: 3546, tomorrow: 6641, day: 1611, week: 5534, month: 3190 },
        { id: 10, name: "Name10", fav: 0, show: 3651, weak: 1819, signin: 4595, click: 7499, active: 7405, day7: 8710, day30: 5518, tomorrow: 428, day: 9768, week: 2864, month: 5811 }
      ];

      const scroll = {
        x: 1760
      };

      return {
        code,
        columns,
        data,
        scroll
      };
    },
    methods: {
      handleExport(type) {
        if (type === 1) {
          this.$refs.table.export({
            filename: "The original data"
          });
        }
        else if (type === 2) {
          this.$refs.table.export({
            original: false,
            filename: "Filtering and sorting data"
          });
        }
        else if (type === 3) {
          this.$refs.table.export({
            filename: "Custom data",
            columns: this.columns.filter((column, index) => index < 4),
            data: this.data.filter((row, index) => index < 4)
          });
        }
      }
    }
  };
</script>

<style>
  .example-table-export .vui-button-group { margin-bottom:16px; }
  .example-table-export .vui-button-group .vui-button { margin-left:1px; }
</style>
`;

export default code;