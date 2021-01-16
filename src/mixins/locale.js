import useI18n from "src/config/useI18n";

export default {
  methods: {
    translate(path) {
      if (!useI18n || !this.$te || !this.$t) {
        return path;
      }

      return this.$te(path) ? this.$t(path) : path;
    }
  }
};