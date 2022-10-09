const code =
`<template>
  <vui-table v-bind="list" v-on:paging="handlePaging">
    <template slot="name" slot-scope="{ row }">{{row.name.first}} {{row.name.last}}</template>
  </vui-table>
</template>

<script>
  import axios from "axios";

  export default {
    data() {
      const columns = [
        { key: "name", dataIndex: "name", width: 240, slot: "name", title: "Name" },
        { key: "gender", dataIndex: "gender", width: 240, title: "Gender" },
        { key: "email", dataIndex: "email", title: "Email" }
      ];

      const pagination = {
        position: "bottom",
        align: "right",
        page: 1,
        pageSize: 10,
        total: 0
      };

      return {
        list: {
          loading: false,
          rowKey: row => row.login.uuid,
          columns,
          data: [],
          pagination
        }
      };
    },
    methods: {
      getData() {
        const payload = {
          params: {
            page: this.list.pagination.page,
            results: this.list.pagination.pageSize
          }
        };

        this.list.loading = true;
        axios.get("https://randomuser.me/api", payload).then(response => {
          this.list.loading = false;
          this.list.data = response.data.results;
          this.list.pagination.total = 200;
        }).catch(e => {
          this.list.loading = false;
          this.list.data = [];
        });
      },
      handlePaging(page, pageSize) {
        this.list.pagination.page = page;
        this.list.pagination.pageSize = pageSize;
        this.getData();
      }
    },
    created() {
      this.getData();
    }
  };
</script>
`;

export default code;