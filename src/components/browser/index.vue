<template>
	<div class="browser">
		<div class="browser-header">
			<div class="location">
				<div class="location-href"></div>
			</div>
			<i class="btn btn-max"></i>
			<i class="btn btn-min"></i>
			<i class="btn btn-close"></i>
		</div>
		<div class="browser-body" :style="style">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Browser",
		props: {
			height: {
				type: [String, Number],
				default: undefined
			}
		},
		computed: {
			style() {
				let style = {};

				if (this.height) {
					style.height = `${this.height}px`;
				}

				return style;
			}
		}
	};
</script>

<style>
	.browser {  }

	.browser-header { display:flex; align-items:center; background-color:#f0f2f4; padding:15px; }
	.browser-header .location { flex:1; position:relative; border-radius:2px; background-color:#fff; padding:5px; }
	.browser-header .location .location-href { height:4px; border-radius:2px; background-color:#f0f2f4; }
	.browser-header .btn { width:12px; height:12px; border-radius:12px; margin-left:10px; }
	.browser-header .btn.btn-max { background-color:#5cb85c; }
	.browser-header .btn.btn-min { background-color:#f0ad4e; }
	.browser-header .btn.btn-close { background-color:#ed5565; }

	.browser-body { overflow:auto; }
</style>