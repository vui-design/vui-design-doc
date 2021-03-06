import Emitter from "vui-design/mixins/emitter";
import PropTypes from "vui-design/utils/prop-types";
import is from "vui-design/utils/is";
import getClassNamePrefix from "vui-design/utils/getClassNamePrefix";

const VuiRadio = {
  name: "vui-radio",
  inject: {
    vuiForm: {
      default: undefined
    },
    vuiRadioGroup: {
      default: undefined
    },
    vuiMutexGroup: {
      default: undefined
    }
  },
  mixins: [
    Emitter
  ],
  inheritAttrs: false,
  model: {
    prop: "checked",
    event: "input"
  },
  props: {
    classNamePrefix: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
    checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]).def(false),
    disabled: PropTypes.bool.def(false),
    checkedValue: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]).def(true),
    uncheckedValue: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]).def(false),
    validator: PropTypes.bool.def(true)
  },
  data() {
    const { $props: props } = this;
    const state = {
      focused: false,
      checked: props.checked
    };

    return {
      state
    };
  },
  watch: {
    checked(value) {
      const { $props: props, state } = this;

      if (state.checked === value) {
        return;
      }

      this.state.checked = value;

      if (props.validator) {
        this.dispatch("vui-form-item", "change", value);
      }
    }
  },
  methods: {
    handleFocus(e) {
      this.state.focused = true;
      this.$emit("focus");
    },
    handleBlur(e) {
      this.state.focused = false;
      this.$emit("blur");
    },
    handleChange(e) {
      const { vuiRadioGroup, vuiMutexGroup, $props: props } = this;
      const checked = e.target.checked;

      if (props.disabled) {
        return;
      }

      if (vuiRadioGroup) {
        vuiRadioGroup.handleChange(checked, props.value);
      }
      else if (vuiMutexGroup) {
        vuiMutexGroup.handleChange("radio", checked, props.value);
      }
      else {
        const value = checked ? props.checkedValue : props.uncheckedValue;
  
        this.state.checked = value;
        this.$emit("input", value);
        this.$emit('change', value);

        if (props.validator) {
          this.dispatch("vui-form-item", "change", value);
        }
      }
    }
  },
  render() {
    const { vuiForm, vuiRadioGroup, vuiMutexGroup, $slots: slots, $attrs: attrs, $props: props, state } = this;
    const { handleFocus, handleBlur, handleChange } = this;
  
    // props & state
    let type, name, label, value, size, minWidth, focused, checked, disabled;

    if (vuiRadioGroup) {
      type = vuiRadioGroup.type;
      name = vuiRadioGroup.name;
    }
    else if (vuiMutexGroup) {
      type = vuiMutexGroup.type;
      name = vuiMutexGroup.name;
    }
    else {
      type = props.type;
      name = props.name;
    }

    label = slots.default || props.label;
    value = props.value;

    if (props.size) {
      size = props.size;
    }
    else if (vuiRadioGroup && vuiRadioGroup.size) {
      size = vuiRadioGroup.size;
    }
    else if (vuiMutexGroup && vuiMutexGroup.size) {
      size = vuiMutexGroup.size;
    }
    else if (vuiForm && vuiForm.size) {
      size = vuiForm.size;
    }
    else {
      size = "medium";
    }

    if (props.minWidth) {
      minWidth = props.minWidth;
    }
    else if (vuiRadioGroup && vuiRadioGroup.minWidth) {
      minWidth = vuiRadioGroup.minWidth;
    }
    else if (vuiMutexGroup && vuiMutexGroup.minWidth) {
      minWidth = vuiMutexGroup.minWidth;
    }

    focused = state.focused;

    if (vuiRadioGroup) {
      checked = value === vuiRadioGroup.state.value;
    }
    else if (vuiMutexGroup) {
      checked = !is.array(vuiMutexGroup.state.value) && value === vuiMutexGroup.state.value;
    }
    else {
      checked = state.checked === props.checkedValue;
    }

    if (vuiForm && vuiForm.disabled) {
      disabled = vuiForm.disabled;
    }
    else if (vuiRadioGroup && vuiRadioGroup.disabled) {
      disabled = vuiRadioGroup.disabled;
    }
    else if (vuiMutexGroup && vuiMutexGroup.disabled) {
      disabled = vuiMutexGroup.disabled;
    }
    else {
      disabled = props.disabled;
    }

    // class
    const classNamePrefix = getClassNamePrefix(props.classNamePrefix, type === "button" ? "radio-button" : "radio");
    let classes = {};

    classes.el = {
      [`${classNamePrefix}`]: true,
      [`${classNamePrefix}-${size}`]: size,
      [`${classNamePrefix}-focused`]: focused,
      [`${classNamePrefix}-checked`]: checked,
      [`${classNamePrefix}-disabled`]: disabled
    };
    classes.elInput = `${classNamePrefix}-input`;
    classes.elLabel = `${classNamePrefix}-label`;

    // style
    let styles = {};

    if (type === "button" && minWidth) {
      styles.el = {
        minWidth: is.string(minWidth) ? minWidth : `${minWidth}px`
      };
    }

    // render
    const radioInputProps = {
      attrs: attrs,
      on: {
        focus: handleFocus,
        blur: handleBlur,
        change: handleChange
      }
    };
    const radioInput = (
      <input type="radio" name={name} value={value} checked={checked} disabled={disabled} {...radioInputProps} />
    );

    return (
      <label class={classes.el} style={styles.el}>
        <div class={classes.elInput}>{radioInput}</div>
        {
          label && (
            <div class={classes.elLabel}>{label}</div>
          )
        }
      </label>
    );
  }
};

export default VuiRadio;