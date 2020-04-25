import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations([
      "setCatalogue"
    ])
  },
  mounted() {
    this.setCatalogue(this.$el);
  }
};