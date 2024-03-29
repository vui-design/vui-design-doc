import VuiSelectSelection from "./select-selection";
import VuiSelectDropdown from "./select-dropdown";
import VuiSelectSpin from "./select-spin";
import VuiSelectEmpty from "./select-empty";
import VuiSelectMenu from "./select-menu";
import Emitter from "../../mixins/emitter";
import PropTypes from "../../utils/prop-types";
import is from "../../utils/is";
import getClassNamePrefix from "../../utils/getClassNamePrefix";
import utils from "./utils";

const valueProp = PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]);

export const createProps = () => {
  return {
    classNamePrefix: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.oneOfType([valueProp, PropTypes.arrayOf(valueProp)]),
    backfillOptionProp: PropTypes.string.def("children"),
    options: PropTypes.array.def([]),
    multiple: PropTypes.bool.def(false),
    maxTagCount: PropTypes.number,
    maxTagPlaceholder: PropTypes.func.def(count => "+" + count),
    searchable: PropTypes.bool.def(false),
    filter: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).def(true),
    filterOptionProp: PropTypes.string.def("children"),
    allowCreate: PropTypes.bool.def(false),
    loading: PropTypes.bool.def(false),
    loadingText: PropTypes.string,
    notFoundText: PropTypes.string,
    clearKeywordOnSelect: PropTypes.bool.def(true),
    bordered: PropTypes.bool.def(true),
    clearable: PropTypes.bool.def(false),
    disabled: PropTypes.bool.def(false),
    placement: PropTypes.oneOf(["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end"]).def("bottom-start"),
    animation: PropTypes.string.def("vui-select-dropdown-scale"),
    dropdownClassName: PropTypes.string,
    dropdownAutoWidth: PropTypes.bool.def(true),
    getPopupContainer: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]).def(() => document.body),
    beforeSelect: PropTypes.func,
    beforeDeselect: PropTypes.func,
    validator: PropTypes.bool.def(true)
  };
};

export default {
  name: "vui-select",
  inject: {
    vuiForm: {
      default: undefined
    },
    vuiInputGroup: {
      default: undefined
    }
  },
  provide() {
    return {
      vuiSelect: this
    };
  },
  components: {
    VuiSelectSelection,
    VuiSelectDropdown,
    VuiSelectSpin,
    VuiSelectEmpty,
    VuiSelectMenu
  },
  mixins: [
    Emitter
  ],
  model: {
    prop: "value",
    event: "input"
  },
  props: createProps(),
  data() {
    const { $props: props } = this;

    return {
      state: {
        hovered: false,
        focused: false,
        actived: false,
        searching: false,
        keyword: "",
        value: utils.getValue(props.value, undefined, props),
        options: [],
        activedEventType: "navigate",
        activedMenuItemIndex: 0,
        activedMenuItem: undefined
      }
    };
  },
  computed: {
    actived() {
      return this.state.actived;
    },
    keyword() {
      return this.state.keyword;
    }
  },
  watch: {
    value(value) {
      this.state.value = utils.getValue(value, this.state.value, this.$props);
    },
    options(value) {
      this.state.value = utils.getValue(this.value, this.state.value, this.$props);
    },
    actived(value) {
      this.$nextTick(() => this.resetActivedMenuItem());
    },
    keyword(value) {
      this.$nextTick(() => this.resetActivedMenuItem());
    }
  },
  methods: {
    getDropdownReference() {
      return this.$refs.selection.$el;
    },
    focus() {
      this.$refs.selection.focus();
    },
    blur() {
      this.$refs.selection.blur();
    },
    changeActivedMenuItem(direction, lastIndex) {
      const { $props: props, state } = this;
      const options = state.searching ? state.options : props.options;

      if (!options.length) {
        return;
      }

      const min = 0;
      const max = options.length - 1;
      let index = (lastIndex === undefined ? state.activedMenuItemIndex : lastIndex) + direction;

      if (index < min) {
        index = max;
      }
      else if (index > max) {
        index = min;
      }

      const option = options[index];

      if (option.type === "option-group" || option.disabled) {
        this.changeActivedMenuItem(direction, index);
      }
      else {
        this.state.activedEventType = "navigate";
        this.state.activedMenuItemIndex = index;
        this.state.activedMenuItem = option;
      }
    },
    resetActivedMenuItem() {
      const { $props: props, state } = this;

      if (props.loading || !state.actived) {
        return;
      }

      const options = state.searching ? state.options : props.options;
      const enabledOptions = options.filter(option => option.type !== "option-group" && !option.disabled);

      let index = -1;
      let option = undefined;

      if (enabledOptions.length > 0) {
        const firstSelectedOption = enabledOptions.find(option => {
          if (props.multiple) {
            return state.value.findIndex(target => target.value === option.value) > -1;
          }
          else {
            return state.value && state.value.value === option.value;
          }
        });

        if (firstSelectedOption) {
          index = options.findIndex(target => target.type !== "option-group" && target.value === firstSelectedOption.value);
          option = firstSelectedOption;
        }
        else {
          const firstEnabledOption = enabledOptions[0];

          index = options.findIndex(target => target.type !== "option-group" && target.value === firstEnabledOption.value);
          option = firstEnabledOption;
        }
      }

      this.state.activedEventType = "navigate";
      this.state.activedMenuItemIndex = index;
      this.state.activedMenuItem = option;
    },
    handleMouseenter(e) {
      this.state.hovered = true;
      this.$emit("mouseenter", e);
    },
    handleMouseleave(e) {
      this.state.hovered = false;
      this.$emit("mouseleave", e);
    },
    handleFocus(e) {
      this.state.focused = true;
      this.$emit("focus", e);
    },
    handleBlur(e) {
      this.state.focused = false;
      this.state.actived = false;
      this.state.keyword = "";
      this.$emit("blur", e);
    },
    handleToggle(e) {
      const { $props: props, state } = this;

      if (props.searchable) {
        this.state.actived = true;
      }
      else {
        this.state.actived = !state.actived;
      }
    },
    handleKeydown(e) {
      const { $props: props, state } = this;
      const keyCode = e.keyCode;

      if (state.actived && [13, 27, 38, 40].indexOf(keyCode) > -1) {
        e.preventDefault();

        switch(keyCode) {
          case 13:
            state.activedMenuItem && this.handleSelect(state.activedMenuItem);
            break;
          case 27:
            this.state.actived = false;
            break;
          case 38:
            this.changeActivedMenuItem(-1);
            break;
          case 40:
            this.changeActivedMenuItem(1);
            break;
        }
      }
      else if (!state.actived && [38, 40].indexOf(keyCode) > -1) {
        e.preventDefault();
        this.state.actived = true;
      }
      else if (keyCode === 8 && props.multiple && props.searchable && state.value.length > 0 && e.target.value === "") {
        const value = state.value.filter(target => !target.disabled);

        if (value.length === 0) {
          return;
        }

        const option = value[value.length - 1];

        if (option) {
          this.handleDeselect(option);
        }
      }
    },
    handleInput(e) {
      if (/^composition(start|update)?$/g.test(e.type)) {
        this.compositing = true;
      }
      else if (/^composition(end)?$/g.test(e.type)) {
        this.compositing = false;
      }

      if (this.compositing) {
        return;
      }

      const { $props: props, state } = this;

      if (!props.searchable) {
        return;
      }

      const keyword = e.target.value;

      this.state.actived = true;
      this.state.keyword = keyword;

      if (props.filter) {
        const searching = keyword !== "";
        let options = [];

        if (searching) {
          options = utils.getFilteredOptions(keyword, props.options, props.filter, props.filterOptionProp);

          if (props.allowCreate && !utils.isExisted(keyword, props.options)) {
            options.unshift({
              type: "keyword",
              label: keyword,
              value: keyword,
              children: keyword
            });
          }
        }

        this.state.searching = searching;
        this.state.options = options;
      }
      else {
        this.$emit("search", keyword);
      }
    },
    handleActive(option) {
      const { $props: props, state } = this;
      let options = [];

      if (state.searching) {
        options = state.options;
      }
      else {
        options = props.options;
      }

      const index = options.findIndex(target => target.type !== "option-group" && target.value === option.value);

      this.state.activedEventType = "mouseenter";
      this.state.activedMenuItemIndex = index;
      this.state.activedMenuItem = option;
    },
    handleSelect(option) {
      const { $props: props, state } = this;

      if (props.multiple) {
        const callback = index => {
          if (props.searchable && props.clearKeywordOnSelect && state.keyword) {
            const keyword = "";

            this.state.searching = false;
            this.state.keyword = keyword;

            if (!props.filter) {
              this.$emit("search", keyword);
            }
          }

          if (index === -1) {
            this.state.value.push(option);
          }
          else {
            this.state.value.splice(index, 1);
          }

          const value = this.state.value.map(target => target.value);
          const label = this.state.value.map(target => target.label);

          this.$emit("input", value);
          this.$emit("change", value, label);

          if (props.validator) {
            this.dispatch("vui-form-item", "change", value);
          }
        };

        const index = state.value.findIndex(target => target.value === option.value);
        const beforeCallback = index === -1 ? props.beforeSelect : props.beforeDeselect;
        let hook = true;

        if (is.function(beforeCallback)) {
          hook = beforeCallback(option.value, option);
        }

        if (is.promise(hook)) {
          hook.then(() => callback(index)).catch(error => {});
        }
        else if (is.boolean(hook) && hook === false) {
          return;
        }
        else {
          callback(index);
        }
      }
      else {
        const callback = () => {
          this.state.actived = false;

          if (props.searchable && props.clearKeywordOnSelect && state.keyword) {
            const keyword = "";

            this.state.searching = false;
            this.state.keyword = keyword;

            if (!props.filter) {
              this.$emit("search", keyword);
            }
          }

          this.state.value = option;

          const value = option.value;
          const label = option.label;

          this.$emit("input", value);
          this.$emit("change", value, label);

          if (props.validator) {
            this.dispatch("vui-form-item", "change", value);
          }
        };

        let hook = true;

        if (is.function(props.beforeSelect)) {
          hook = props.beforeSelect(option.value, option);
        }

        if (is.boolean(hook) && hook === false) {
          return;
        }

        if (is.promise(hook)) {
          hook.then(() => callback()).catch(error => {});
        }
        else {
          callback();
        }
      }
    },
    handleDeselect(option) {
      const { $props: props, state } = this;
      const deselect = () => {
        const index = state.value.findIndex(target => target.value === option.value);

        this.state.value.splice(index, 1);

        const value = this.state.value.map(target => target.value);
        const label = this.state.value.map(target => target.label);

        this.$emit("input", value);
        this.$emit("change", value, label);

        if (props.validator) {
          this.dispatch("vui-form-item", "change", value);
        }
      };

      let hook = true;

      if (is.function(props.beforeDeselect)) {
        hook = props.beforeDeselect(option.value, option);
      }

      if (is.promise(hook)) {
        hook.then(() => deselect()).catch(error => {});
      }
      else if (is.boolean(hook) && hook === false) {
        return;
      }
      else {
        deselect();
      }
    },
    handleClear(e) {
      const { $props: props } = this;
      const keyword = "";
      const value = props.multiple ? [] : undefined;
      const label = props.multiple ? [] : undefined;

      this.state.searching = false;
      this.state.keyword = keyword;
      this.state.value = value;
      this.state.options = [];
      this.$emit("input", value);
      this.$emit("change", value, label);

      if (props.validator) {
        this.dispatch("vui-form-item", "change", value);
      }
    },
    handleResize(e) {
      this.$nextTick(() => this.$refs.dropdown && this.$refs.dropdown.reregister());
    },
    handleBeforeOpen() {
      this.$emit("beforeOpen");
    },
    handleAfterOpen() {
      this.$emit("afterOpen");
    },
    handleBeforeClose() {
      this.$emit("beforeClose");
    },
    handleAfterClose() {
      this.state.searching = false;
      this.state.options = [];
      this.$emit("afterClose");
    }
  },
  render() {
    const { vuiForm, vuiInputGroup, $props: props, state } = this;
    const { handleMouseenter, handleMouseleave, handleFocus, handleBlur, handleToggle, handleKeydown, handleInput, handleActive, handleSelect, handleDeselect, handleClear, handleResize } = this;
    const { handleBeforeOpen, handleAfterOpen, handleBeforeClose, handleAfterClose } = this;

    // size: self > vuiInputGroup > vuiForm > vui
    let size;

    if (props.size) {
      size = props.size;
    }
    else if (vuiInputGroup && vuiInputGroup.size) {
      size = vuiInputGroup.size;
    }
    else if (vuiForm && vuiForm.size) {
      size = vuiForm.size;
    }
    else {
      size = "medium";
    }

    // disabled: vuiForm > vuiInputGroup > self
    let disabled;

    if (vuiForm && vuiForm.disabled) {
      disabled = vuiForm.disabled;
    }
    else if (vuiInputGroup && vuiInputGroup.disabled) {
      disabled = vuiInputGroup.disabled;
    }
    else {
      disabled = props.disabled;
    }

    // options
    let options = [];

    if (state.searching) {
      options = state.options;
    }
    else {
      options = props.options;
    }

    // dropdownVisible
    let dropdownVisible = state.actived;

    if (props.searchable && props.filter === false && !props.loading && state.keyword === "" && options.length === 0) {
      dropdownVisible = false;
    }

    // class
    let classNamePrefix = getClassNamePrefix(props.classNamePrefix, "select");
    let classes = {};

    classes.el = {
      [`${classNamePrefix}`]: true,
      [`${classNamePrefix}-single`]: !props.multiple,
      [`${classNamePrefix}-multiple`]: props.multiple,
      [`${classNamePrefix}-${size}`]: size,
      [`${classNamePrefix}-bordered`]: props.bordered,
      [`${classNamePrefix}-hovered`]: state.hovered,
      [`${classNamePrefix}-focused`]: state.focused,
      [`${classNamePrefix}-actived`]: state.actived,
      [`${classNamePrefix}-disabled`]: disabled
    };

    // render
    let menu;

    if (props.loading) {
      menu = (
        <VuiSelectSpin
          classNamePrefix={classNamePrefix}
          loadingText={props.loadingText}
        />
      );
    }
    else if (options.length === 0) {
      menu = (
        <VuiSelectEmpty
          classNamePrefix={classNamePrefix}
          notFoundText={props.notFoundText}
        />
      );
    }
    else {
      menu = (
        <VuiSelectMenu
          classNamePrefix={classNamePrefix}
          value={state.value}
          options={options}
          multiple={props.multiple}
          visible={dropdownVisible}
          onActive={handleActive}
          onSelect={handleSelect}
          onDeselect={handleDeselect}
        />
      );
    }

    return (
      <div class={classes.el}>
        <VuiSelectSelection
          ref="selection"
          classNamePrefix={classNamePrefix}
          placeholder={props.placeholder}
          value={state.value}
          backfillOptionProp={props.backfillOptionProp}
          multiple={props.multiple}
          maxTagCount={props.maxTagCount}
          maxTagPlaceholder={props.maxTagPlaceholder}
          searchable={props.searchable}
          keyword={state.keyword}
          clearable={props.clearable}
          hovered={state.hovered}
          focused={props.searchable && state.actived}
          disabled={disabled}
          onMouseenter={handleMouseenter}
          onMouseleave={handleMouseleave}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClick={handleToggle}
          onKeydown={handleKeydown}
          onInput={handleInput}
          onDeselect={handleDeselect}
          onClear={handleClear}
          onResize={handleResize}
        />
        <VuiSelectDropdown
          ref="dropdown"
          classNamePrefix={classNamePrefix}
          visible={dropdownVisible}
          class={props.dropdownClassName}
          placement={props.placement}
          autoWidth={props.dropdownAutoWidth}
          animation={props.animation}
          getPopupReference={this.getDropdownReference}
          getPopupContainer={props.getPopupContainer}
          onBeforeOpen={handleBeforeOpen}
          onAfterOpen={handleAfterOpen}
          onBeforeClose={handleBeforeClose}
          onAfterClose={handleAfterClose}
        >
          {menu}
        </VuiSelectDropdown>
      </div>
    );
  }
};