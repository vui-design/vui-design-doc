import VuiIcon from "../icon";
import VuiTooltip from "../tooltip";
import PropTypes from "../../utils/prop-types";
import is from "../../utils/is";
import getClassNamePrefix from "../../utils/getClassNamePrefix";

export const createProps = () => {
  return {
    classNamePrefix: PropTypes.string,
    index: PropTypes.number,
    value: PropTypes.number,
    character: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    tooltip: PropTypes.string,
    disabled: PropTypes.bool.def(false)
  };
};

export default {
  name: "vui-rate-star",
  inject: {
    vuiRate: {
      default: undefined
    }
  },
  components: {
    VuiIcon,
    VuiTooltip
  },
  props: createProps(),
  methods: {
    handleMouseenter(e, half) {
      const { $props: props } = this;

      if (props.disabled) {
        return;
      }

      this.$emit("mouseenter", e, props.value, half);
    },
    handleClick(e, half) {
      const { $props: props } = this;

      if (props.disabled) {
        return;
      }
 
      this.$emit("click", e, props.value, half);
    }
  },
  render() {
    const { vuiRate, $slots: slots, $props: props, state } = this;
    const { $props: vuiRateProps, state: vuiRateState } = vuiRate;
    const { handleMouseenter, handleClick } = this;

    // vuiRateValue
    const vuiRateValue = vuiRateState.mouseentered === undefined ? vuiRateState.value : vuiRateState.mouseentered;

    // status
    let status;

    if (vuiRateProps.allowHalf && props.value === vuiRateValue + 0.5) {
      status = "half";
    }
    else if (vuiRateValue < props.value) {
      status = "zero";
    }
    else {
      status = "full";
    }

    // character
    let character;

    if (slots.default) {
      character = slots.default;
    }
    else if (is.string(props.character)) {
      character = props.character;
    }
    else if (is.function(props.character)) {
      character = props.character(props.index);
    }
    else {
      character = (
        <VuiIcon type="star-filled" />
      );
    }

    // class
    const classNamePrefix = getClassNamePrefix(props.classNamePrefix, "star");
    let classes = {};

    classes.el = {
      [`${classNamePrefix}`]: true,
      [`${classNamePrefix}-${status}`]: status,
      [`${classNamePrefix}-disabled`]: props.disabled
    };

    // render
    const halfStates = [1, 0];
    const star = (
      <div class={classes.el}>
        {
          halfStates.map(halfState => {
            const className = halfState ? `${classNamePrefix}-first` : `${classNamePrefix}-second`;
            const onMouseenter = e => handleMouseenter(e, halfState);
            const onClick = e => handleClick(e, halfState);

            return (
              <div class={className} onMouseenter={onMouseenter} onClick={onClick}>{character}</div>
            );
          })
        }
      </div>
    );

    if (props.tooltip) {
      return (
        <VuiTooltip content={props.tooltip}>{star}</VuiTooltip>
      );
    }

    return star;
  }
};