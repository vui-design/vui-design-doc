import useI18n from "@/config/useI18n";

export default {
  methods: {
    translate(sort, name) {
      const path = [sort, name].join(".");

      if (!useI18n || !name || !this.$te || !this.$t) {
        return path;
      }

      return this.$te(path) ? this.$t(path) : path;
    }
  }
};