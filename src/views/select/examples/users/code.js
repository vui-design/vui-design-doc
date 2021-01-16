const code =
`<template>
  <vui-select
    placeholder="请选择用户"
    searchable
    multiple
    v-model="value"
    :filter="false"
    :loading="loading"
    @search="handleSearch"
  >
    <vui-option v-for="option in options" :key="option" :value="option">{{option}}</vui-option>
  </vui-select>
</template>

<script>
  const dataSource = [
    "Abby", "Aimee", "Alisa", "Allison", "Amber", "Amy", "Anastasia", "Angelia", "Beatrice", "Becky",
    "Beenle", "Betty", "Camille", "Candice", "Carrie", "Cassandra", "Cindy", "Demi", "Diana", "Dolores",
    "Editha", "Edith", "Elizabeth", "Ellen", "Fannie", "Frances", "Grace", "Greta", "Gwendolyn", "Heidi",
    "Helena", "Ingrid", "Jacqueline", "Jean", "Jenny", "Kitty", "Lareina", "Lena", "Lillian", "Lydia",
    "Miranda", "Moon", "Nancy", "Purplegrape", "Qearl", "Sammy", "Sunny", "Vanessa", "Vicky", "Victoria"
  ];

  export default {
    data() {
      return {
        loading: false,
        value: [],
        options: []
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
`;

export default code;