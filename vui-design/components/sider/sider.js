import VuiIcon from "../icon";
import PropTypes from "../../utils/prop-types";
import is from "../../utils/is";
import noop from "../../utils/noop";
import getScrollbarSize from "../../utils/getScrollbarSize";
import getClassNamePrefix from "../../utils/getClassNamePrefix";

if (typeof window !== "undefined") {
  const matchMediaPolyfill = mediaQuery => {
    return {
      media: mediaQuery,
      matches: false,
      addListener: noop,
      removeListener: noop
    };
  };

  window.matchMedia = window.matchMedia || matchMediaPolyfill;
}

const dimensions = {
  xs: "480px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xl: "1600px"
};

const colors = ["light", "dark"];

export const createProps = () => {
  return {
    classNamePrefix: PropTypes.string,
    theme: PropTypes.string,
    color: PropTypes.string.def("light"),
    breakpoint: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).def(200),
    collapsible: PropTypes.bool.def(false),
    collapsed: PropTypes.bool.def(false),
    collapsedWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).def(80),
    showTrigger: PropTypes.bool.def(true),
    trigger: PropTypes.string,
    showScrollbar: PropTypes.bool.def(false)
  };
};

export default {
  name: "vui-sider",
  components: {
    VuiIcon
  },
  model: {
    prop: "collapsed",
    event: "collapse"
  },
  props: createProps(),
  data() {
    const { $props: props } = this;
    let matchMedia;
    let mediaQueryList = null;

    if (typeof window !== "undefined") {
      matchMedia = window.matchMedia;
    }

    if (matchMedia && props.breakpoint && props.breakpoint in dimensions) {
      mediaQueryList = matchMedia("(max-width: " + dimensions[props.breakpoint] + ")");
    }

    const state = {
      mediaQueryList,
      matches: false,
      collapsed: props.collapsed
    };

    return {
      state
    };
  },
  watch: {
    collapsed(value) {
      this.state.collapsed = value;
    }
  },
  methods: {
    responsive() {
      this.state.matches = this.state.mediaQueryList.matches;
      this.state.collapsed = this.state.collapsed !== this.state.matches ? this.state.matches : this.state.collapsed;
      this.$emit("collapse", this.state.collapsed);
    },
    toggle() {
      this.state.collapsed = !this.state.collapsed;
      this.$emit("collapse", this.state.collapsed);
    },
    handleTriggerClick() {
      this.toggle();
    }
  },
  mounted() {
    if (this.state.mediaQueryList) {
      this.responsive();
      this.state.mediaQueryList.addListener(() => this.responsive());
    }
  },
  beforeDestroy() {
    if (this.state.mediaQueryList) {
      this.state.mediaQueryList.removeListener(() => this.responsive());
    }
  },
  render(h) {
    const { $slots: slots, $props: props, state, handleTriggerClick } = this;

    // width
    let width;

    if (state.collapsed) {
      width = is.string(props.collapsedWidth) ? props.collapsedWidth : `${props.collapsedWidth}px`;
    }
    else {
      width = is.string(props.width) ? props.width : `${props.width}px`;
    }

    // scrollbarSize
    const scrollbarSize = props.showScrollbar ? 0 : getScrollbarSize();

    // showTrigger
    const showTrigger = (props.collapsible || state.matches) && props.showTrigger;

    // color
    const color = props.theme || props.color;
    const withPresetColor = color && colors.indexOf(color) > -1;
    const withCustomColor = color && colors.indexOf(color) === -1;

    // class
    const classNamePrefix = getClassNamePrefix(props.classNamePrefix, "layout-sider");
    let classes = {};

    classes.el = {
      [`${classNamePrefix}`]: true,
      [`${classNamePrefix}-${color}`]: withPresetColor
    };
    classes.elBody = `${classNamePrefix}-body`;
    classes.elBodyScrollbar = `${classNamePrefix}-body-scrollbar`;
    classes.elFooter = `${classNamePrefix}-footer`;
    classes.elTrigger = `${classNamePrefix}-trigger`;

    // style
    let styles = {};

    styles.el = {
      flex: `0 0 ${width}`,
      width: `${width}`,
      minWidth: `${width}`,
      maxWidth: `${width}`
    };
    styles.elBodyScrollbar = {
      marginRight: `-${scrollbarSize}px`
    };

    if (withCustomColor) {
      styles.el.backgroundColor = color;
    }

    // render
    let children = [];

    children.push(
      <div class={classes.elBody}>
        <div class={classes.elBodyScrollbar} style={styles.elBodyScrollbar}>
          {slots.default}
        </div>
      </div>
    );

    if (slots.footer) {
      children.push(
        <div class={classes.elFooter}>
          {slots.footer}
        </div>
      );
    }

    if (showTrigger) {
      let indicator;

      if (slots.trigger) {
        indicator = slots.trigger;
      }
      else if (props.trigger) {
        indicator = (
          <VuiIcon type={props.trigger} />
        );
      }
      else {
        const type = state.collapsed ? "menu-unfold" : "menu-fold";

        indicator = (
          <VuiIcon type={type} />
        );
      }

      children.push(
        <div class={classes.elTrigger} onClick={handleTriggerClick}>
          {indicator}
        </div>
      );
    }

    return (
      <div class={classes.el} style={styles.el}>
        {children}
      </div>
    );
  }
};