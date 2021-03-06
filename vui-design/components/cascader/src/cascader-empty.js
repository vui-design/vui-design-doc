import VuiEmpty from "vui-design/components/empty";
import Locale from "vui-design/mixins/locale";
import PropTypes from "vui-design/utils/prop-types";
import getClassNamePrefix from "vui-design/utils/getClassNamePrefix";

const VuiCascaderEmpty = {
  name: "vui-cascader-empty",
  components: {
    VuiEmpty
  },
  mixins: [
    Locale
  ],
  props: {
    classNamePrefix: PropTypes.string,
    notFoundText: PropTypes.string
  },
  render(h) {
    const { $props: props, t: translate } = this;

    // notFoundText
    const notFoundText = props.notFoundText || translate("vui.cascader.notFound");

    // class
    const classNamePrefix = getClassNamePrefix(props.classNamePrefix, "empty");
    let classes = {};

    classes.el = `${classNamePrefix}`;

    // render
    return (
      <div class={classes.el}>
        <VuiEmpty size="small" description={notFoundText} />
      </div>
    );
  }
};

export default VuiCascaderEmpty;