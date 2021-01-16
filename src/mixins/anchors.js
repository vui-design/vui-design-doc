import { mapMutations } from "vuex";

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