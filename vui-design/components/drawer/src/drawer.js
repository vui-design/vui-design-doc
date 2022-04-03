import VuiLazyRender from "../../lazy-render";
import VuiIcon from "../../icon";
import VuiButton from "../../button";
import Portal from "../../../directives/portal";
import Locale from "../../../mixins/locale";
import Popup from "../../../libs/popup";
import PropTypes from "../../../utils/prop-types";
import is from "../../../utils/is";
import merge from "../../../utils/merge";
import styleToObject from "../../../utils/styleToObject";
import addScrollbarEffect from "../../../utils/addScrollbarEffect";
import getStyle from "../../../utils/getStyle";
import setStyle from "../../../utils/setStyle";
import getElementByEvent from "../../../utils/getElementByEvent";
import getClassNamePrefix from "../../../utils/getClassNamePrefix";

const VuiDrawer = {
  name: "vui-drawer",
  provide() {
    return {
      vuiDrawer: this
    };
  },
  inject: {
    vuiDrawer: {
      default: undefined
    }
  },
  components: {
    VuiLazyRender,
    VuiIcon,
    VuiButton
  },
  directives: {
    Portal
  },
  mixins: [
    Locale
  ],
  model: {
    prop: "visible",
    event: "input"
  },
  props: {
    classNamePrefix: PropTypes.string,
    visible: PropTypes.bool.def(false),
    title: PropTypes.string,
    showFooter: PropTypes.bool.def(true),
    showCancelButton: PropTypes.bool.def(true),
    cancelButtonProps: PropTypes.object,
    cancelText: PropTypes.string,
    cancelAsync: PropTypes.bool.def(false),
    showOkButton: PropTypes.bool.def(true),
    okButtonProps: PropTypes.object,
    okText: PropTypes.string,
    okAsync: PropTypes.bool.def(false),
    autofocusButton: PropTypes.oneOf(["ok", "cancel"]),
    closable: PropTypes.bool.def(true),
    placement: PropTypes.oneOf(["top", "bottom", "left", "right"]).def("right"),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).def(480),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).def(480),
    className: PropTypes.string,
    headerStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    bodyStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    footerStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    backdrop: PropTypes.bool.def(true),
    backdropClassName: PropTypes.string,
    backdropStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    clickBackdropToClose: PropTypes.bool.def(true),
    destroyOnClose: PropTypes.bool.def(false),
    animations: PropTypes.array.def(["vui-drawer-backdrop-fade", "vui-drawer-slide"]),
    getPopupContainer: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.element, PropTypes.func]).def(() => document.body)
  },
  data() {
    const { $props: props } = this;
    const state = {
      visible: props.visible,
      closed: props.visible ? false : true,
      cancelLoading: false,
      okLoading: false,
      zIndex: Popup.nextZIndex()
    };

    return {
      state
    };
  },
  watch: {
    visible(value) {
      if (this.state.visible === value) {
        return;
      }

      this.state.visible = value;

      if (!value) {
        return;
      }

      this.state.zIndex = Popup.nextZIndex();
    }
  },
  methods: {
    toggle(visible) {
      this.state.visible = visible;
      this.$emit("input", visible);
      this.$emit("change", visible);
    },
    open() {
      this.toggle(true);
    },
    close() {
      this.toggle(false);
    },
    push() {
      const { vuiDrawer, $refs: references, $props: props } = this;
      const drawer = references.drawer;
      const placement = props.placement;
      const distance = parseInt(getStyle(drawer, placement)) + 240;

      setStyle(drawer, placement, distance + "px");

      if (vuiDrawer) {
        vuiDrawer.push();
      }
    },
    pull() {
      const { vuiDrawer, $refs: references, $props: props } = this;
      const drawer = references.drawer;
      const placement = props.placement;
      const distance = parseInt(getStyle(drawer, placement)) - 240;

      setStyle(drawer, placement, distance + "px");

      if (vuiDrawer) {
        vuiDrawer.pull();
      }
    },
    handleBackdropClick() {
      const { $props: props } = this;

      if (!props.backdrop || !props.clickBackdropToClose) {
        return;
      }

      this.handleCancel();
    },
    handleWrapperClick(e) {
      const { $refs: references } = this;
      const target = getElementByEvent(e);

      if (!target || !references.wrapper || target !== references.wrapper) {
        return;
      }

      this.handleBackdropClick();
    },
    handleCancel() {
      const { $props: props } = this;

      if (props.cancelAsync) {
        new Promise(resolve => {
          this.state.cancelLoading = true;
          this.$emit("cancel", resolve);
        }).then(value => {
          this.state.cancelLoading = false;

          if (value === false) {
            return;
          }

          this.close();
        });
      }
      else {
        this.close();
        this.$emit("cancel");
      }
    },
    handleOk() {
      const { $props: props } = this;

      if (props.okAsync) {
        new Promise(resolve => {
          this.state.okLoading = true;
          this.$emit("ok", resolve);
        }).then(value => {
          this.state.okLoading = false;

          if (value === false) {
            return;
          }

          this.close();
        });
      }
      else {
        this.close();
        this.$emit("ok");
      }
    },
    handleBeforeEnter() {
      this.state.closed = false;
      this.$emit("beforeOpen");
    },
    handleEnter() {
      if (this.vuiDrawer) {
        this.vuiDrawer.push();
      }
      else {
        this.scrollbarEffect = addScrollbarEffect();
      }

      this.$emit("open");
    },
    handleAfterEnter() {
      this.$emit("afterOpen");
    },
    handleBeforeLeave() {
      this.$emit("beforeClose");
    },
    handleLeave() {
      if (this.vuiDrawer) {
        this.vuiDrawer.pull();
      }

      this.$emit("close");
    },
    handleAfterLeave() {
      this.state.closed = true;

      if (this.scrollbarEffect) {
        this.scrollbarEffect.remove();
      }

      this.$emit("afterClose");
    }
  },
  beforeDestroy() {
    if (this.scrollbarEffect) {
      this.scrollbarEffect.remove();
    }
  },
  render() {
    const { $slots: slots, $props: props, state, t: translate } = this;
    const { handleBackdropClick, handleWrapperClick, handleCancel, handleOk, handleBeforeEnter, handleEnter, handleAfterEnter, handleBeforeLeave, handleLeave, handleAfterLeave } = this;
    const showHeader = slots.title || props.title;

    // class
    const classNamePrefix = getClassNamePrefix(props.classNamePrefix, "drawer");
    let classes = {};

    classes.elBackdrop = {
      [`${classNamePrefix}-backdrop`]: true,
      [`${props.backdropClassName}`]: props.backdropClassName
    };
    classes.elWrapper = `${classNamePrefix}-wrapper`;
    classes.el = {
      [`${classNamePrefix}`]: true,
      [`${classNamePrefix}-${props.placement}`]: props.placement,
      [`${classNamePrefix}-with-header`]: showHeader,
      [`${classNamePrefix}-with-footer`]: props.showFooter,
      [`${props.className}`]: props.className
    };
    classes.elHeader = `${classNamePrefix}-header`;
    classes.elTitle = `${classNamePrefix}-title`;
    classes.elBody = `${classNamePrefix}-body`;
    classes.elFooter = `${classNamePrefix}-footer`;
    classes.elBtnClose = `${classNamePrefix}-btn-close`;

    // styles
    let styles = {};

    styles.elBackdrop = {
      zIndex: state.zIndex
    };
    styles.elWrapper = {
      zIndex: state.zIndex
    };
    styles.el = {};

    if (["left", "right"].indexOf(props.placement) > -1) {
      styles.el.width = is.string(props.width) ? props.width : `${props.width}px`;
    }
    else {
      styles.el.height = is.string(props.height) ? props.height : `${props.height}px`;
    }

    // render
    let children = [];

    if (props.backdrop) {
      let backdropProps = {
        class: classes.elBackdrop,
        style: [
          styles.elBackdrop,
          is.string(props.backdropStyle) ? styleToObject(props.backdropStyle) : props.backdropStyle
        ]
      };

      if (props.clickBackdropToClose) {
        backdropProps.on = {
          click: handleBackdropClick
        };
      }

      children.push(
        <transition appear name={props.animations[0]}>
          <div ref="backdrop" v-show={state.visible} {...backdropProps}></div>
        </transition>
      );
    }

    let header;

    if (showHeader) {
      header = (
        <div class={classes.elHeader} style={props.headerStyle}>
          <div class={classes.elTitle}>{slots.title || props.title}</div>
        </div>
      );
    }

    let body;

    body = (
      <div class={classes.elBody} style={props.bodyStyle}>{props.destroyOnClose && state.closed ? null : slots.default}</div>
    );

    let footer;

    if (props.showFooter) {
      if (slots.footer) {
        footer = (
          <div class={classes.elFooter} style={props.footerStyle}>{slots.footer}</div>
        );
      }
      else {
        let buttons = [];

        if (props.showCancelButton) {
          const cancelButtonProps = {
            props: {
              loading: state.cancelLoading,
              autofocus: props.autofocusButton === "cancel"
            },
            on: {
              click: handleCancel
            }
          };
          const mergedCancelButtonProps = merge(true, cancelButtonProps, props.cancelButtonProps);

          buttons.push(
            <VuiButton {...mergedCancelButtonProps}>{props.cancelText || translate("vui.drawer.cancelText")}</VuiButton>
          );
        }

        if (props.showOkButton) {
          const okButtonProps = {
            props: {
              type: "primary",
              loading: state.okLoading,
              autofocus: props.autofocusButton === "ok"
            },
            on: {
              click: handleOk
            }
          };
          const mergedOkButtonProps = merge(true, okButtonProps, props.okButtonProps);

          buttons.push(
            <VuiButton {...mergedOkButtonProps}>{props.okText || translate("vui.drawer.okText")}</VuiButton>
          );
        }

        footer = (
          <div class={classes.elFooter} style={props.footerStyle}>{buttons}</div>
        );
      }
    }

    let btnClose;

    if (props.closable) {
      btnClose = (
        <div class={classes.elBtnClose} onClick={handleCancel}>
          <VuiIcon type="crossmark" />
        </div>
      );
    }

    children.push(
      <transition appear name={props.animations[0]}>
        <div ref="wrapper" v-show={state.visible} class={classes.elWrapper} style={styles.elWrapper} onClick={handleWrapperClick}>
          <transition appear name={props.animations[1]} onBeforeEnter={handleBeforeEnter} onEnter={handleEnter} onAfterEnter={handleAfterEnter} onBeforeLeave={handleBeforeLeave} onLeave={handleLeave} onAfterLeave={handleAfterLeave}>
            <div ref="drawer" v-show={state.visible} class={classes.el} style={styles.el}>
              {header}
              {body}
              {footer}
              {btnClose}
            </div>
          </transition>
        </div>
      </transition>
    );

    return (
      <VuiLazyRender render={state.visible}>
        <div v-portal={props.getPopupContainer}>
          {children}
        </div>
      </VuiLazyRender>
    );
  }
};

export default VuiDrawer;