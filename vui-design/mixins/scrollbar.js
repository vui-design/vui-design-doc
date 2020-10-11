import getScrollbarSize from "vui-design/utils/getScrollbarSize";

export default {
	methods: {
		setScrollbar() {
			let fullWindowWidth = window.innerWidth;

			// workaround for missing window.innerWidth in IE8
			if (!fullWindowWidth) {
				const documentElementRect = document.documentElement.getBoundingClientRect();

				fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
			}

			const bodyIsOverflowed = document.body.clientWidth < fullWindowWidth;
			let size;

			if (bodyIsOverflowed) {
				size = getScrollbarSize();
			}

			if (!bodyIsOverflowed || !size) {
				return;
			}

			document.body.style.paddingRight = `${size}px`;
		},
		resetScrollbar() {
			document.body.style.paddingRight = "";
		},
		addScrollbarEffect() {
			this.setScrollbar();
			document.body.style.overflow = "hidden";
		},
		removeScrollbarEffect() {
			this.resetScrollbar();
			document.body.style.overflow = "";
		}
	}
};