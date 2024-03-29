import PropTypes from "../../utils/prop-types";
import getClassNamePrefix from "../../utils/getClassNamePrefix";

const colors = ["light", "dark"];

export const createProps = () => {
  return {
    classNamePrefix: PropTypes.string,
    theme: PropTypes.string,
    color: PropTypes.string.def("light")
  };
};

export default {
  name: "vui-header",
  props: createProps(),
  render(h) {
    const { $slots: slots, $props: props } = this;

    // color
    const color = props.theme || props.color;
    const withPresetColor = color && colors.indexOf(color) > -1;
    const withCustomColor = color && colors.indexOf(color) === -1;

    // class
    const classNamePrefix = getClassNamePrefix(props.classNamePrefix, "layout-header");
    let classes = {};

    classes.el = {
      [`${classNamePrefix}`]: true,
      [`${classNamePrefix}-${color}`]: withPresetColor
    };

    // style
    let styles = {};

    if (withCustomColor) {
      styles.el = {
        backgroundColor: color
      };
    }

    // render
    return (
      <div class={classes.el} style={styles.el}>{slots.default}</div>
    );
  }
};