import { createNamespacedHelpers } from "vuex";

const { mapMutations } = createNamespacedHelpers("app");

export default {
  methods: {
    ...mapMutations([
      "setAnchors"
    ])
  },
  mounted() {
    this.setAnchors(this.$el);
  }
};