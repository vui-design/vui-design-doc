import VuiRadio from "vui-design/components/radio";
import VuiCheckbox from "vui-design/components/checkbox";
import Emitter from "vui-design/mixins/emitter";
import PropTypes from "vui-design/utils/prop-types";
import is from "vui-design/utils/is";
import guid from "vui-design/utils/guid";
import getClassNamePrefix from "vui-design/utils/getClassNamePrefix";

const VuiMutexGroup = {
  name: "vui-mutex-group",
  inject: {
    vuiForm: {
      default: undefined
    }
  },
  provide() {
    return {
      vuiMutexGroup: this
    };
  },
  components: {
    VuiRadio,
    VuiCheckbox
  },
  mixins: [
    Emitter
  ],
  model: {
    prop: "value",
    event: "input"
  },
  props: {
    classNamePrefix: PropTypes.string,
    name: PropTypes.string.def(() => guid()),
    layout: PropTypes.oneOf(["horizontal", "vertical"]).def("horizontal"),
    type: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.array]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.array]),
    options: PropTypes.array.def(() => []),
    disabled: PropTypes.bool.def(false),
    validator: PropTypes.bool.def(true)
  },
  data() {
    const { $props: props } = this;
    const state = {
      value: props.value
    };

    return {
      state
    };
  },
  watch: {
    value(value) {
      const { $props: props, state } = this;

      if (state.value === value) {
        return;
      }

      this.state.value = value;

      if (props.validator) {
        this.dispatch("vui-form-item", "change", value);
      }
    }
  },
  methods: {
    handleChange(type, checked, value) {
      const { $props: props, state } = this;
      let nextValue = is.array(state.value) ? [...state.value] : state.value;

      if (type === "radio") {
        nextValue = checked ? value : props.defaultValue;
      }
      else if (type === "checkbox") {
        if (checked) {
          if (is.array(nextValue)) {
            nextValue.push(value);
          }
          else {
            nextValue = [value];
          }
        }
        else {
          if (is.array(nextValue)) {
            nextValue.splice(nextValue.indexOf(value), 1);
          }
          else {
            nextValue = [];
          }
        }

        if (nextValue.length === 0) {
          nextValue = props.defaultValue;
        }
      }

      this.state.value = nextValue;
      this.$emit("input", nextValue);
      this.$emit('change', nextValue);

      if (props.validator) {
        this.dispatch("vui-form-item", "change", nextValue);
      }
    }
  },
  render() {
    const { $slots: slots, $props: props, state } = this;

    // class
    const classNamePrefix = getClassNamePrefix(props.classNamePrefix, "mutex-group");
    let classes = {};

    classes.el = {
      [`${classNamePrefix}`]: true,
      [`${classNamePrefix}-${props.layout}`]: true
    };

    // render
    let children;

    if (props.options && props.options.length > 0) {
      children = props.options.map((option, index) => {
        if (!is.object(option)) {
          return;
        }

        if (option.type === "radio") {
          return (
            <VuiRadio key={is.boolean(option.value) ? index : option.value} value={option.value} disabled={option.disabled}>{option.label}</VuiRadio>
          );
        }
        else if (option.type === "checkbox") {
          return (
            <VuiCheckbox key={option.value} value={option.value} disabled={option.disabled}>{option.label}</VuiCheckbox>
          );
        }
      });
    }
    else {
      children = slots.default;
    }

    return (
      <div class={classes.el}>{children}</div>
    );
  }
};

export default VuiMutexGroup;