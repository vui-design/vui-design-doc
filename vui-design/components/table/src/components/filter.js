import VuiCheckboxGroup from "vui-design/components/checkbox-group";
import VuiCheckbox from "vui-design/components/checkbox";
import VuiRadioGroup from "vui-design/components/radio-group";
import VuiRadio from "vui-design/components/radio";
import Portal from "vui-design/directives/portal";
import Outclick from "vui-design/directives/outclick";
import Locale from "vui-design/mixins/locale";
import Popup from "vui-design/utils/popup";
import is from "vui-design/utils/is";
import clone from "vui-design/utils/clone";

const VuiTableFilter = {
	name: "vui-table-filter",

	inject: {
		vuiTable: {
			default: undefined
		},
		vuiTableThead: {
			default: undefined
		}
	},

	components: {
		VuiCheckboxGroup,
		VuiCheckbox,
		VuiRadioGroup,
		VuiRadio
	},

	directives: {
		Portal,
		Outclick,
	},

	mixins: [
		Locale
	],

	props: {
		classNamePrefix: {
			type: String,
			default: "vui-table"
		},
		options: {
			type: Array,
			default: []
		},
		multiple: {
			type: Boolean,
			default: true
		},
		value: {
			type: [String, Number, Array],
			default: undefined
		},
		locale: {
			type: Object,
			default: undefined
		},
		animation: {
			type: String,
			default: "vui-table-column-filter-dropdown-slide"
		},
		placement: {
			type: String,
			default: "bottom-end",
			validator: value => ["top-start", "top", "top-end", "bottom-start", "bottom", "bottom-end"].indexOf(value) > -1
		},
		getPopupContainer: {
			type: Function,
			default: () => document.body
		}
	},

	data() {
		const { $props: props } = this;
		const state = {
			visible: false,
			value: props.multiple ? clone(props.value) : props.value
		};

		return { state };
	},

	watch: {
		value(value) {
			let { $props: props } = this;

			this.state.value = props.multiple ? clone(value) : value;
		}
	},

	methods: {
		createPopup() {
			if (is.server) {
				return;
			}

			if (this.popup) {
				return;
			}

			let { $refs: refs, $props: props } = this;
			let reference = refs.trigger;
			let target = refs.dropdown;
			let settings = {
				placement: props.placement
			};

			if (!reference || !target || !settings.placement) {
				return;
			}

			this.popup = new Popup(reference, target, settings);
			this.popup.target.style.zIndex = Popup.nextZIndex();
		},
		destroyPopup() {
			if (is.server) {
				return;
			}

			if (!this.popup) {
				return;
			}

			this.popup.destroy();
			this.popup = null;
		},
		handleToggle(e) {
			e.stopPropagation();

			this.state.visible = !this.state.visible;
		},
		handleClose(e) {
			let { $el: el, $refs: refs, $props: props } = this;

			if (!el.contains(refs.dropdown) && refs.dropdown.contains(e.target)) {
				return;
			}

			this.state.visible = false;
			this.state.value = props.multiple ? clone(props.value) : props.value;
		},
		handleChange(value) {
			this.state.value = value;
		},
		handleConfirm(e) {
			let { $props: props, state } = this;

			this.state.visible = false;
			this.state.value = props.multiple ? clone(state.value) : state.value;
			this.$emit("change", props.multiple ? clone(this.state.value) : this.state.value);
		},
		handleClear(e) {
			let { $props: props } = this;

			this.state.visible = false;
			this.state.value = props.multiple ? [] : undefined;
			this.$emit("change", props.multiple ? clone(this.state.value) : this.state.value);
		},
		handleBeforeEnter(el) {
			this.$nextTick(() => this.createPopup());
		},
		handleAfterLeave(el) {
			this.$nextTick(() => this.destroyPopup());
		}
	},

	render() {
		let { $props: props, state, t: translate } = this;
		let { handleToggle, handleClose, handleChange, handleConfirm, handleClear, handleBeforeEnter, handleAfterLeave } = this;
		let portal = props.getPopupContainer();

		// locale
		let btnConfirmText = props.locale && props.locale.confirm ? props.locale.confirm : translate("vui.table.confirm");
		let btnClearText = props.locale && props.locale.clear ? props.locale.clear : translate("vui.table.clear");

		// class
		let classes = {};

		classes.el = `${props.classNamePrefix}-column-filter`;
		classes.elTrigger = {
			[`${props.classNamePrefix}-column-filter-trigger`]: true,
			[`open`]: state.visible,
			[`on`]: props.multiple ? state.value.length : state.value
		};
		classes.elDropdown = `${props.classNamePrefix}-column-filter-dropdown`;
		classes.elDropdownBody = `${props.classNamePrefix}-column-filter-dropdown-body`;
		classes.elDropdownFooter = `${props.classNamePrefix}-column-filter-dropdown-footer`;

		// render
		return (
			<div class={classes.el} v-outclick={handleClose}>
				<div ref="trigger" class={classes.elTrigger} onClick={handleToggle}>
					<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024">
						<path d="M0 0h1024L624.390244 462.04878v561.95122l-224.780488-112.390244V449.560976L0 0z m0 0"></path>
					</svg>
				</div>
				<transition appear name={props.animation} onBeforeEnter={handleBeforeEnter} onAfterLeave={handleAfterLeave}>
					<div ref="dropdown" v-portal={portal} v-show={state.visible} class={classes.elDropdown}>
						<div class={classes.elDropdownBody}>
							{
								props.multiple ? (
									<VuiCheckboxGroup value={state.value} onChange={handleChange}>
										{
											props.options.map(option => {
												return (
													<VuiCheckbox key={option.value} value={option.value} label={option.label} />
												);
											})
										}
									</VuiCheckboxGroup>
								) : (
									<VuiRadioGroup value={state.value} onChange={handleChange}>
										{
											props.options.map(option => {
												return (
													<VuiRadio key={option.value} value={option.value} label={option.label} />
												);
											})
										}
									</VuiRadioGroup>
								)
							}
						</div>
						<div class={classes.elDropdownFooter}>
							<a href="javascript:;" onClick={handleConfirm}>{btnConfirmText}</a>
							<a href="javascript:;" onClick={handleClear}>{btnClearText}</a>
						</div>
					</div>
				</transition>
			</div>
		);
	}
};

export default VuiTableFilter;