const code =
`<template>
  <vui-fullscreen v-model="fullscreen" class="example-fullscreen-basic-usage">
    <vui-card v-bind:bordered="false">
      <vui-form layout="inline">
        <vui-form-item prop="name">
          <vui-input placeholder="按规则名称查询" />
        </vui-form-item>
        <vui-form-item prop="description">
          <vui-input placeholder="按描述查询" />
        </vui-form-item>
        <vui-form-item>
          <vui-space>
            <vui-button>重置</vui-button>
            <vui-button type="primary">查询</vui-button>
          </vui-space>
        </vui-form-item>
      </vui-form>
    </vui-card>
    <vui-card v-bind:bordered="false" style="margin-top: 16px;" headerStyle="padding: 16px;" bodyStyle="padding: 0px; overflow: hidden;" title="查询表格">
      <vui-space slot="extra" divider v-bind:size="16">
        <vui-tooltip v-bind:content="fullscreen ? '退出全屏' : '全屏'">
          <a href="javascript:;" class="link-default" style="font-size: 16px;" v-on:click="handleFullscreen">
            <vui-icon v-bind:type="fullscreen ? 'fullscreen-exit' : 'fullscreen'" />
          </a>
        </vui-tooltip>
        <vui-space>
          <vui-button icon="download">导出</vui-button>
          <vui-button type="primary" icon="plus">新增</vui-button>
        </vui-space>
      </vui-space>
      <vui-table v-bind="list" v-on:rowSelect="handleRowSelect" style="max-width: unset; margin: -1px;">
        <template slot="count" slot-scope="{ row, rowIndex }">{{row.count}} 万</template>
        <template slot="state" slot-scope="{ row, rowIndex }">
          <vui-badge v-if="row.state == 1" status="default" text="未启用" />
          <vui-badge v-else-if="row.state == 2" status="success" text="已上线" />
          <vui-badge v-else-if="row.state == 3" status="processing" text="运行中" />
          <vui-badge v-else-if="row.state == 4" status="error" text="关闭" />
        </template>
        <template slot="action" slot-scope="{ row, rowIndex }">
          <vui-space divider>
            <a href="javascript:;" style="display: block;">编辑</a>
            <vui-popconfirm placement="top-end" okButtonType="danger" style="display: block;" title="确定要删除当前记录嘛？">
              <a href="javascript:;" style="display: block;">删除</a>
            </vui-popconfirm>
          </vui-space>
        </template>
      </vui-table>
      <div style="padding: 16px;">
        <div style="float: left; line-height: 34px;">共 {{pagination.total}} 条</div>
        <vui-pagination align="right" showPageSizer v-bind="pagination" />
      </div>
    </vui-card>
  </vui-fullscreen>
</template>

<script>
  export default {
    data() {
      return {
        fullscreen: false,
        pagination: {
          total: 100,
          page: 1,
          pageSize: 20
        },
        list: {
          loading: false,
          bordered: true,
          rowKey: "id",
          rowSelection: {
            width: 60,
            multiple: true,
            value: []
          },
          columns: [
            { key: "name", dataIndex: "name", title: "规则名称" },
            { key: "description", dataIndex: "description", title: "描述" },
            { key: "count", dataIndex: "count", sorter: true, slot: "count", title: "服务调用次数" },
            { key: "state", dataIndex: "state", slot: "state", title: "状态" },
            { key: "datetime", dataIndex: "datetime", width: 160, sorter: true, title: "上次调度时间" },
            { key: "action", width: 120, slot: "action", title: "操作" }
          ],
          data: [
            { id: 10, name: "TradeCode 10", description: "这是一段描述", count: 73, state: 4, datetime: "2020-01-10 08:00:00" },
            { id: 9, name: "TradeCode 9", description: "这是一段描述", count: 223, state: 3, datetime: "2020-01-09 08:00:00" },
            { id: 8, name: "TradeCode 8", description: "这是一段描述", count: 835, state: 4, datetime: "2020-01-08 08:00:00" },
            { id: 7, name: "TradeCode 7", description: "这是一段描述", count: 996, state: 3, datetime: "2020-01-07 08:00:00" },
            { id: 5, name: "TradeCode 5", description: "这是一段描述", count: 578, state: 3, datetime: "2020-01-05 08:00:00" },
            { id: 6, name: "TradeCode 6", description: "这是一段描述", count: 696, state: 4, datetime: "2020-01-06 08:00:00" },
            { id: 4, name: "TradeCode 4", description: "这是一段描述", count: 110, state: 4, datetime: "2020-01-04 08:00:00" },
            { id: 3, name: "TradeCode 3", description: "这是一段描述", count: 60, state: 3, datetime: "2020-01-03 08:00:00" },
            { id: 2, name: "TradeCode 2", description: "这是一段描述", count: 229, state: 2, datetime: "2020-01-02 08:00:00" },
            { id: 1, name: "TradeCode 1", description: "这是一段描述", count: 660, state: 4, datetime: "2020-01-01 08:00:00" }
          ]
        }
      };
    },
    methods: {
      handleRowSelect(value) {
        this.list.rowSelection.value = value;
      },
      handleFullscreen() {
        this.fullscreen = !this.fullscreen;
      }
    }
  };
</script>

<style>
  .example-fullscreen-basic-usage { background-color:#f6f6f6; padding:16px; }
</style>
`;

export default code;