import PropTypes from "vui-design/utils/prop-types";
import is from "vui-design/utils/is";
import getClassNamePrefix from "vui-design/utils/getClassNamePrefix";

const VuiSkeletonTitle = {
  name: "vui-skeleton-title",
  props: {
    classNamePrefix: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  },
  render() {
    const { $props: props } = this;

    const classNamePrefix = getClassNamePrefix(props.classNamePrefix, "title");
    let classes = {};

    classes.el = `${classNamePrefix}`;

    let styles = {};

    styles.el = {
      width: is.number(props.width) ? `${props.width}px` : props.width
    };

    return (
      <div class={classes.el} style={styles.el}></div>
    );
  }
};

export default VuiSkeletonTitle;