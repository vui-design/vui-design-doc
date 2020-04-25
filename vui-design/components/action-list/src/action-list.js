import getClassNamePrefix from "vui-design/utils/getClassNamePrefix";
import getElementWithoutBlankspace from "vui-design/utils/getElementWithoutBlankspace";

const VuiActionList = {
	name: "vui-action-list",

	props: {
		classNamePrefix: {
			type: String,
			default: undefined
		},
		align: {
			type: String,
			default: "center",
			validator: value => ["left", "center", "right"].indexOf(value) > -1
		}
	},

	render(h) {
		let { $slots: slots, $props: props } = this;

		// class
		let classNamePrefix = getClassNamePrefix(props.classNamePrefix, "action-list");
		let classes = {};

		classes.el = {
			[`${classNamePrefix}`]: true,
			[`${classNamePrefix}-${props.align}`]: props.align
		};
		classes.elItem = `${classNamePrefix}-item`;
		classes.elItemSeparator = `${classNamePrefix}-item-separator`;

		// render
		let children = [];
		let actions = getElementWithoutBlankspace(slots.default);

		actions.forEach((action, index) => {
			if (index > 0) {
				children.push(
					<div class={classes.elItemSeparator}></div>
				);
			}

			children.push(
				<div class={classes.elItem}>{action}</div>
			);
		});

		return (
			<div class={classes.el}>
				{children}
			</div>
		);
	}
};

export default VuiActionList;