<template>
  <example v-bind:code="code" id="example-select-remote-search">
    <template slot="demo">
      <vui-select
        v-model="value"
        v-bind:filter="false"
        v-bind:loading="loading"
        v-on:search="handleSearch"
        searchable
        style="width: 200px;"
        placeholder="Please select"
      >
        <vui-option
          v-for="option in options"
          v-bind:key="option"
          v-bind:value="option"
        >
          {{option}}
        </vui-option>
      </vui-select>
    </template>
    <template slot="title">远程搜索</template>
    <template slot="description">
      <p>搜索和远程数据结合。</p>
    </template>
  </example>
</template>

<script>
  import Example from "src/components/example";
  import code from "./code";

  const dataSource = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California",
    "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
    "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
    "Montana", "Nebraska", "Nevada", "New hampshire", "New jersey",
    "New mexico", "New york", "North carolina", "North dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode island", "South carolina",
    "South dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West virginia", "Wisconsin", "Wyoming"
  ];

  export default {
    components: {
      Example
    },
    data() {
      return {
        code,
        loading: false,
        options: [],
        value: undefined
      };
    },
    watch: {
      value(value) {
        console.log(value);
      }
    },
    methods: {
      getDataSource(keyword, callback) {
        if (this.timeout) {
          clearTimeout(this.timeout);
          this.timeout = null;
        }

        this.timeout = setTimeout(() => {
          const options = dataSource.filter(option => option.toLowerCase().indexOf(keyword.toLowerCase()) > -1);

          callback(options);
        }, 1000);
      },
      handleSearch(keyword) {
        if (keyword) {
          this.loading = true;
          this.getDataSource(keyword, options => {
            this.loading = false;
            this.options = options;
          });
        }
        else {
          // this.options = [];
        }
      }
    }
  };
</script>