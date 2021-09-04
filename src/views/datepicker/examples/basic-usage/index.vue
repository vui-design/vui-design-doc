<template>
	<example v-bind:code="code" id="example-datepicker-basic-usage">
		<template slot="demo">
			<div class="vui-datepicker">
				<div class="vui-datepicker-selection">
					<input type="text" />
				</div>
				<div class="vui-datepicker-dropdown">
					<div class="vui-datepicker-dropdown-header">
						<div class="vui-datepicker-dropdown-prev-year">
							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 10 10">
								<path d="M1.4,5l4.1-4.1c0.2-0.2,0.2-0.6,0-0.8c-0.2-0.2-0.6-0.2-0.8,0L0.2,4.6c-0.2,0.2-0.2,0.6,0,0.8l4.5,4.4c0.2,0.2,0.6,0.2,0.8,0c0.2-0.2,0.2-0.6,0-0.8L1.4,5z M5.8,5l4.1-4.1c0.2-0.2,0.2-0.6,0-0.8C9.6-0.1,9.3-0.1,9,0.2L4.6,4.6c-0.2,0.2-0.2,0.6,0,0.8L9,9.8c0.2,0.2,0.6,0.2,0.8,0s0.2-0.6,0-0.8L5.8,5z" />
							</svg>
						</div>
						<div class="vui-datepicker-dropdown-prev-month">
							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 10 10">
								<path d="M3.6,5l4.1-4.1c0.2-0.2,0.2-0.6,0-0.8c-0.2-0.2-0.6-0.2-0.8,0L2.4,4.6c-0.2,0.2-0.2,0.6,0,0.8l4.5,4.4 c0.2,0.2,0.6,0.2,0.8,0c0.2-0.2,0.2-0.6,0-0.8L3.6,5z" />
							</svg>
						</div>
						<div class="vui-datepicker-dropdown-year">2020年</div>
						<div class="vui-datepicker-dropdown-month">12月</div>
						<div class="vui-datepicker-dropdown-next-month">
							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 10 10">
								<path d="M6.4,5L2.4,0.9c-0.2-0.2-0.2-0.6,0-0.8c0.2-0.2,0.6-0.2,0.8,0l4.5,4.4c0.2,0.2,0.2,0.6,0,0.8L3.2,9.8c-0.2,0.2-0.6,0.2-0.8,0c-0.2-0.2-0.2-0.6,0-0.8L6.4,5z" />
							</svg>
						</div>
						<div class="vui-datepicker-dropdown-next-year">
							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 10 10">
								<path d="M8.6,5L4.6,0.9c-0.2-0.2-0.2-0.6,0-0.8c0.2-0.2,0.6-0.2,0.8,0l4.5,4.4c0.2,0.2,0.2,0.6,0,0.8L5.4,9.8c-0.2,0.2-0.6,0.2-0.8,0c-0.2-0.2-0.2-0.6,0-0.8L8.6,5z M4.2,5L0.2,0.9c-0.2-0.2-0.2-0.6,0-0.8c0.2-0.2,0.6-0.2,0.8,0l4.5,4.4c0.2,0.2,0.2,0.6,0,0.8L1,9.8c-0.2,0.2-0.6,0.2-0.8,0c-0.2-0.2-0.2-0.6,0-0.8L4.2,5z" />
							</svg>
						</div>
					</div>
					<div class="vui-datepicker-dropdown-body">
						<div style="width: 220px;"></div>
						<!-- <VuiDatepickerDateTable
							mode={this.mode}
							date={this.defaultValue}
							value={dates}
							showWeekNumber={this.showWeekNumber}
							getDateDisabled={this.getDateDisabled}
						/> -->
					</div>
				</div>
			</div>
		</template>
		<template slot="title">基本用法</template>
		<template slot="description">
			<p>最简单的用法，在浮层中可以选择或者输入日期。</p>
		</template>
	</example>
</template>

<script>
	import Example from "src/components/example";
	import code from "./code";

	export default {
		components: {
			Example
		},
		data() {
			return {
				code
			};
		}
	};
</script>

<style>
	.vui-datepicker { position:relative; display:inline-table; border-collapse:separate; border-spacing:0; width:220px; vertical-align:middle; line-height:normal; }




	.vui-datepicker-selection { position:relative; display:table-cell; box-sizing:border-box; width:100%; }
	.vui-datepicker-selection input { position:relative; appearance:none; outline:none; display:block; box-sizing:border-box; height:34px; width:100%; border:1px solid #e0e0e0; border-radius:2px; background-color:#fff; margin:0; padding:0 8px; color:#595959; font-size:14px; font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif; line-height:normal; transition:all 0.2s; }
	.vui-datepicker-selection input::-webkit-input-placeholder { color:tint(@font-color, 60%); }
	.vui-datepicker-selection input:-moz-placeholder { color:tint(@font-color, 60%); }
	.vui-datepicker-selection input::-moz-placeholder { color:tint(@font-color, 60%); }
	.vui-datepicker-selection input:-ms-input-placeholder { color:tint(@font-color, 60%); }
	.vui-datepicker-selection input:hover { z-index:1; border-color:tint(#2d8cf0, 10%); }
	.vui-datepicker-selection input:focus { z-index:2; border-color:tint(#2d8cf0, 10%); box-shadow:0 0 0 2px fade(tint(#2d8cf0, 10%), 15); }
	.vui-datepicker-selection input:disabled { cursor:not-allowed; border-color:@border-color; background-color:shade(@component-background-color, 3.5%); color:@font-disabled-color; }
	.vui-datepicker-selection .vui-datepicker-selection-prefix { position:absolute; top:50%; z-index:3; display:block; color:@font-secondary-color; line-height:1; transform:translate(0, -50%); transition:all @transition-duration; }
	.vui-datepicker-selection .vui-datepicker-selection-prefix .vui-icon { display:block; }
	.vui-datepicker-selection .vui-datepicker-selection-suffix { position:absolute; top:50%; z-index:3; display:block; color:@font-secondary-color; line-height:1; transform:translate(0, -50%); transition:all @transition-duration; }
	.vui-datepicker-selection .vui-datepicker-selection-suffix .vui-icon { display:block; }






	.vui-datepicker-dropdown { position:absolute; top:39px; left:0; z-index:2000; border-radius:2px; background-color:#fff; box-shadow:0 1px 6px rgba(0, 0, 0, 0.1); }

	.vui-datepicker-dropdown .vui-datepicker-dropdown-header { position:relative; display:flex; justify-content:center; align-items:center; height:40px; border-bottom:1px solid #f3f3f3; line-height:40px; }

	.vui-datepicker-dropdown-prev-year { position:absolute; top:0; bottom:0; left:10px; cursor:pointer; display:block; padding:0 5px; color:#8f8f8f; transition:all 0.2s; }
	.vui-datepicker-dropdown-prev-year svg { width:10px; height:10px; fill:currentColor; }
	.vui-datepicker-dropdown-prev-year:hover { color:#2d8cf0; }
	.vui-datepicker-dropdown-prev-year:hover svg {  }

	.vui-datepicker-dropdown-next-year { position:absolute; top:0; bottom:0; right:10px; cursor:pointer; display:block; padding:0 5px; color:#8f8f8f; transition:all 0.2s; }
	.vui-datepicker-dropdown-next-year svg { width:10px; height:10px; fill:currentColor; }
	.vui-datepicker-dropdown-next-year:hover { color:#2d8cf0; }
	.vui-datepicker-dropdown-next-year:hover svg {  }

	.vui-datepicker-dropdown-prev-month { position:absolute; top:0; bottom:0; left:30px; cursor:pointer; display:block; padding:0 5px; color:#8f8f8f; transition:all 0.2s; }
	.vui-datepicker-dropdown-prev-month svg { width:10px; height:10px; fill:currentColor; }
	.vui-datepicker-dropdown-prev-month:hover { color:#2d8cf0; }
	.vui-datepicker-dropdown-prev-month:hover svg {  }

	.vui-datepicker-dropdown-next-month { position:absolute; top:0; bottom:0; right:30px; cursor:pointer; display:block; padding:0 5px; color:#8f8f8f; transition:all 0.2s; }
	.vui-datepicker-dropdown-next-month svg { width:10px; height:10px; fill:currentColor; }
	.vui-datepicker-dropdown-next-month:hover { color:#2d8cf0; }
	.vui-datepicker-dropdown-next-month:hover svg {  }

	.vui-datepicker-dropdown-year { cursor:pointer; display:block; margin:0 2px; transition:all 0.2s; }
	.vui-datepicker-dropdown-year:hover { color:#2d8cf0; }

	.vui-datepicker-dropdown-month { cursor:pointer; display:block; margin:0 2px; transition:all 0.2s; }
	.vui-datepicker-dropdown-month:hover { color:#2d8cf0; }

	.vui-datepicker-dropdown .vui-datepicker-dropdown-body { padding:10px; }

	.vui-datepicker-dropdown .vui-datepicker-dropdown-footer { border-top:1px solid #f3f3f3; padding:10px; text-align:right; }
	.vui-datepicker-dropdown .vui-datepicker-dropdown-footer a { float:left; cursor:pointer; height:24px; color:#595959; line-height:24px; transition:all 0.2s; }
	.vui-datepicker-dropdown .vui-datepicker-dropdown-footer a:hover { color:tint(#2d8cf0, 20%); }
	.vui-datepicker-dropdown .vui-datepicker-dropdown-footer a:active { color: shade(#2d8cf0, 5%); }
	.vui-datepicker-dropdown .vui-datepicker-dropdown-footer .vui-button-group {  }


































	.vui-datepicker-date-table {  }
	.vui-datepicker-date-table-colgroup { display:flex; flex-flow:row nowrap; padding:3px 0; }

	.vui-datepicker-date-table-col { float:left; display:block; box-sizing:border-box; width:34px; background-color:transparent; text-align:center; transition:all 0.2s; }
	.vui-datepicker-date-table-col em { display:block; box-sizing:border-box; width:24px; height:24px; border:1px solid transparent; border-radius:2px; background-color:transparent; margin:0 auto; color:#595959; font-size:14px; text-align:center; line-height:22px; transition:all 0.2s; }
	.vui-datepicker-date-table-col em:hover {  }
	.vui-datepicker-date-table-col em:active {  }

	.vui-datepicker-date-table-col-week-day {  }
	.vui-datepicker-date-table-col-week-day em { border-color:transparent; background-color:transparent; color:#595959; }
	.vui-datepicker-date-table-col-week-day em:hover { border-color:transparent; background-color:transparent; color:#595959; }
	.vui-datepicker-date-table-col-week-day em:active { border-color:transparent; background-color:transparent; color:#595959; }

	.vui-datepicker-date-table-col-week-number {  }
	.vui-datepicker-date-table-col-week-number em { border-color:transparent; background-color:transparent; color:#bfbfbf; }
	.vui-datepicker-date-table-col-week-number em:hover { border-color:transparent; background-color:transparent; color:#bfbfbf; }
	.vui-datepicker-date-table-col-week-number em:active { border-color:transparent; background-color:transparent; color:#bfbfbf; }

	.vui-datepicker-date-table-col-day-in-prev-month {  }
	.vui-datepicker-date-table-col-day-in-prev-month em { cursor:pointer; border-color:transparent; background-color:transparent; color:#bfbfbf; }
	.vui-datepicker-date-table-col-day-in-prev-month em:hover { border-color:transparent; background-color:transparent; color:#bfbfbf; }
	.vui-datepicker-date-table-col-day-in-prev-month em:active { border-color:transparent; background-color:transparent; color:#bfbfbf; }

	.vui-datepicker-date-table-col-day-in-next-month {  }
	.vui-datepicker-date-table-col-day-in-next-month em { cursor:pointer; border-color:transparent; background-color:transparent; color:#bfbfbf; }
	.vui-datepicker-date-table-col-day-in-next-month em:hover { border-color:transparent; background-color:transparent; color:#bfbfbf; }
	.vui-datepicker-date-table-col-day-in-next-month em:active { border-color:transparent; background-color:transparent; color:#bfbfbf; }

	.vui-datepicker-date-table-col-today {  }
	.vui-datepicker-date-table-col-today em { cursor:pointer; border-color:#2d8cf0; background-color:transparent; color:#2d8cf0; }
	.vui-datepicker-date-table-col-today em:hover { border-color:#2d8cf0; background-color:#e6f7ff; color:#2d8cf0; }
	.vui-datepicker-date-table-col-today em:active { border-color:#2d8cf0; background-color:#2d8cf0; color:#fff; }

	.vui-datepicker-date-table-col-day {  }
	.vui-datepicker-date-table-col-day em { cursor:pointer; border-color:transparent; background-color:transparent; color:#595959; }
	.vui-datepicker-date-table-col-day em:hover { border-color:#e6f7ff; background-color:#e6f7ff; color:#595959; }
	.vui-datepicker-date-table-col-day em:active { border-color:#2d8cf0; background-color:#2d8cf0; color:#fff; }

	.vui-datepicker-date-table-col-in-range { background-color:#e6f7ff; }
	.vui-datepicker-date-table-col-in-range em {  }
	.vui-datepicker-date-table-col-in-range em:hover {  }
	.vui-datepicker-date-table-col-in-range em:active {  }

	.vui-datepicker-date-table-col-selected {  }
	.vui-datepicker-date-table-col-selected em { border-color:#2d8cf0; background-color:#2d8cf0; color:#fff; }
	.vui-datepicker-date-table-col-selected em:hover { border-color:#2d8cf0; background-color:#2d8cf0; color:#fff; }
	.vui-datepicker-date-table-col-selected em:active { border-color:#2d8cf0; background-color:#2d8cf0; color:#fff; }

	.vui-datepicker-date-table-col-disabled {  }
	.vui-datepicker-date-table-col-disabled em { cursor:not-allowed; }
	.vui-datepicker-date-table-col-disabled em:hover em {  }
	.vui-datepicker-date-table-col-disabled em:active em {  }












</style>