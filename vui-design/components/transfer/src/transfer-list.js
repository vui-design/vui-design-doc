import VuiCheckbox from "vui-design/components/checkbox";
import VuiTransferSearch from "./transfer-search";
import PropTypes from "vui-design/utils/prop-types";
import is from "vui-design/utils/is";
import getClassNamePrefix from "vui-design/utils/getClassNamePrefix";
import utils from "./utils";

const VuiTransferList = {
	name: "vui-transfer-list",
	components: {
		VuiCheckbox,
		VuiTransferSearch
	},
	props: {
		classNamePrefix: PropTypes.string,
		direction: PropTypes.string,
		title: PropTypes.string,
		footer: PropTypes.any,
		data: PropTypes.array.def([]),
		rowKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).def("key"),
		selectedKeys: PropTypes.array.def([]),
		showSelectAll: PropTypes.bool.def(true),
		searchable: PropTypes.bool.def(false),
		filter: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).def(true),
		filterOptionProp: PropTypes.string.def("label"),
		body: PropTypes.any,
		footer: PropTypes.any,
		disabled: PropTypes.bool.def(false)
	},
	data() {
		const state = {
			keyword: ""
		};

		return {
			state
		};
	},
	methods: {
		getListHeader(classNamePrefix, title, options, rowKey, selectedKeys, showSelectAll, disabled) {
			// classes
			classNamePrefix = `${classNamePrefix}-header`;

			let classes = {};

			classes.el = `${classNamePrefix}`;
			classes.elSelection = `${classNamePrefix}-selection`;
			classes.elTitle = `${classNamePrefix}-title`;
			classes.elSelected = `${classNamePrefix}-selected`;

			// render
			let children = [];

			if (showSelectAll) {
				const enabled = options.filter(option => option.disabled === false);
				let checkboxStatus;

				if (selectedKeys.length === 0) {
					checkboxStatus = "none";
				}
				else if (enabled.every(option => selectedKeys.indexOf(utils.getRowKey(option, rowKey)) > -1)) {
					checkboxStatus = "all";
				}
				else {
					checkboxStatus = "part";
				}

				const isAllChecked = checkboxStatus === "all";
				const isPartChecked = checkboxStatus === "part";

				let checkbox;
				let onCheckboxChange = () => {
					this.$emit("selectAll", enabled.map(option => utils.getRowKey(option, rowKey)), !isAllChecked);
				};

				if (showSelectAll) {
					checkbox = (
						<VuiCheckbox disabled={disabled || enabled.length === 0} checked={isAllChecked} indeterminate={isPartChecked} onChange={onCheckboxChange} />
					);
				}

				children.push(
					<div class={classes.elSelection}>
						{checkbox}
					</div>
				);
			}

			if (title) {
				children.push(
					<div class={classes.elTitle}>
						{title}
					</div>
				);
			}

			children.push(
				<div class={classes.elSelected}>
					{selectedKeys.length > 0 ? `${selectedKeys.length} / ${options.length}` : `${options.length}`}
				</div>
			);

			return (
				<div class={classes.el}>
					{children}
				</div>
			);
		},
		getListBody(classNamePrefix, searchable, body) {
			if (body) {
				return body;
			}

			// classes
			classNamePrefix = `${classNamePrefix}-body`;

			let classes = {};

			classes.el = {
				[`${classNamePrefix}`]: true,
				[`${classNamePrefix}-with-search`]: searchable
			};

			// render
			let children = [];

			if (searchable) {
				children.push(
					<VuiTransferSearch
						classNamePrefix={classNamePrefix}
					/>
				);
			}

			return (
				<div class={classes.el}>
					{children}
				</div>
			);
		},
		getListFooter() {

		}
	},
	render() {
		const { $slots: slots, $props: props, state } = this;

		// options
		let options = [];

		if (props.searchable && props.keyword && props.filter) {
			options = utils.getFilteredOptions(props.data, state.keyword, props.filter, props.filterOptionProp);
		}
		else {
			options = [
				...props.data
			];
		}

		// body & footer
		const body = props.body && props.body(props);
		const footer = props.footer && props.footer(props);

		// classes
		const classNamePrefix = getClassNamePrefix(props.classNamePrefix, "list");
		let classes = {};

		classes.el = {
			[`${classNamePrefix}`]: true,
			[`${classNamePrefix}-with-footer`]: footer
		};

		// render
		return (
			<div class={classes.el}>
				{this.getListHeader(classNamePrefix, props.title, options, props.rowKey, props.selectedKeys, props.showSelectAll, props.disabled)}
				{this.getListBody(classNamePrefix, props.searchable, body)}
				{this.getListFooter(classNamePrefix, footer)}
			</div>
		);
	}
};

export default VuiTransferList;