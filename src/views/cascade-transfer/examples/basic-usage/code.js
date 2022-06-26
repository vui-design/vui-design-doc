const code =
`<template>
  <vui-cascade-transfer
    valueKey="id"
    checkedStrategy="children"
    v-bind:value="value"
    v-bind:options="options"
    v-bind:title="getPanelTitle"
    v-bind:formatter="getOptionLabel"
    v-bind:showChildrenCount="true"
    v-bind:searchable="true"
    v-on:change="handleChange"
  />
</template>

<script>
  export default {
    data() {
      return {
        value: [],
        options: [
          {
            id: 1,
            label: "Item1"
          },
          {
            id: 2,
            label: "Item2",
            children: [
              {
                id: 21,
                label: "Item2-1"
              },
              {
                id: 22,
                label: "Item2-2",
                children: [
                  {
                    id: 221,
                    label: "Item2-2-1"
                  },
                  {
                    id: 222,
                    label: "Item2-2-2"
                  },
                  {
                    id: 223,
                    label: "Item2-2-3"
                  },
                  {
                    id: 224,
                    label: "Item2-2-4"
                  }
                ]
              },
              {
                id: 23,
                label: "Item2-3"
              },
              {
                id: 24,
                label: "Item2-4"
              },
              {
                id: 25,
                label: "Item2-5"
              }
            ]
          },
          {
            id: 3,
            label: "Item3"
          },
          {
            id: 4,
            label: "Item4",
            children: [
              {
                id: 41,
                label: "Item4-1"
              },
              {
                id: 42,
                label: "Item4-2"
              }
            ]
          },
          {
            id: 5,
            label: "Item5",
            children: [
              {
                id: 51,
                label: "Item5-1"
              }
            ]
          },
          {
            id: 6,
            label: "Item6",
            children: [
              {
                id: 61,
                label: "Item6-1"
              },
              {
                id: 62,
                label: "Item6-2"
              },
              {
                id: 63,
                label: "Item6-3"
              },
              {
                id: 64,
                label: "Item6-4"
              }
            ]
          }
        ]
      };
    },
    methods: {
      getPanelTitle(props) {
        if (props.type === "source") {
          return props.level === 1 ? "全选" : props.parent.label;
        }
        else if (props.type === "target") {
          return "已选";
        }
      },
      getOptionLabel(props) {
        if (props.type === "source") {
          return props.option.label + " (" + props.option.id + ")";
        }
        else if (props.type === "target") {
          return props.option.label + " (" + props.option.id + ")";
        }
      },
      handleChange(value) {
        this.value = value;
      }
    }
  };
</script>
`;

export default code;