import VuiTooltip from "vui-design/components/tooltip";
import VuiAvatar from "vui-design/components/avatar";
import PropTypes from "vui-design/utils/prop-types";
import getClassNamePrefix from "vui-design/utils/getClassNamePrefix";
import getValidElements from "vui-design/utils/getValidElements";

const VuiAvatarGroup = {
	name: "vui-avatar-group",
	components: {
		VuiTooltip,
		VuiAvatar
	},
	props: {
		classNamePrefix: PropTypes.string,
		maxCount: PropTypes.number,
		maxTooltipTheme: PropTypes.oneOf(["light", "dark"]).def("light"),
		maxTooltipPlacement: PropTypes.oneOf(["top", "bottom"]).def("top")
	},
	render() {
		const { $slots: slots, $props: props } = this;
		const maxCount = props.maxCount && props.maxCount > 0 ? props.maxCount : 0;

		// class
		const classNamePrefix = getClassNamePrefix(props.classNamePrefix, "avatar-group");
		let classes = {};

		classes.el = `${classNamePrefix}`;
		classes.elItem = `${classNamePrefix}-item`;
		classes.elPlaceholder = `${classNamePrefix}-placeholder`;
		classes.elTooltipContent = `${classNamePrefix}-tooltip-content`;

		// render
		const avatars = getValidElements(slots.default);
		const overflowedCount = avatars.length - maxCount;
		let children = [];

		avatars.forEach((avatar, index) => {
			if (maxCount && index >= maxCount) {
				return;
			}

			children.push(
				<div class={classes.elItem}>{avatar}</div>
			);
		});

		if (maxCount && overflowedCount > 0) {
			children.push(
				<div class={classes.elPlaceholder}>
					<VuiTooltip theme={props.maxTooltipTheme} placement={props.maxTooltipPlacement}>
						<VuiAvatar>&#43;{overflowedCount}</VuiAvatar>
						<div slot="content" class={classes.elTooltipContent}>{avatars.slice(maxCount)}</div>
					</VuiTooltip>
				</div>
			);
		}

		return (
			<div class={classes.el}>
				{children}
			</div>
		);
	}
};

export default VuiAvatarGroup;