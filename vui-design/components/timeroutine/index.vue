<template>
	<div class="vui-pro-timeroutine-selector">
		<table>
			<thead>
				<tr>
					<th rowspan="2" colspan="1" class="vui-pro-timeroutine-selector-">星期/时间</th>
					<th rowspan="1" colspan="24">00:00 - 12:00</th>
					<th rowspan="1" colspan="24">12:00 - 24:00</th>
				</tr>
				<tr>
					<th rowspan="1" colspan="2">0</th>
					<th rowspan="1" colspan="2">1</th>
					<th rowspan="1" colspan="2">2</th>
					<th rowspan="1" colspan="2">3</th>
					<th rowspan="1" colspan="2">4</th>
					<th rowspan="1" colspan="2">5</th>
					<th rowspan="1" colspan="2">6</th>
					<th rowspan="1" colspan="2">7</th>
					<th rowspan="1" colspan="2">8</th>
					<th rowspan="1" colspan="2">9</th>
					<th rowspan="1" colspan="2">10</th>
					<th rowspan="1" colspan="2">11</th>
					<th rowspan="1" colspan="2">12</th>
					<th rowspan="1" colspan="2">13</th>
					<th rowspan="1" colspan="2">14</th>
					<th rowspan="1" colspan="2">15</th>
					<th rowspan="1" colspan="2">16</th>
					<th rowspan="1" colspan="2">17</th>
					<th rowspan="1" colspan="2">18</th>
					<th rowspan="1" colspan="2">19</th>
					<th rowspan="1" colspan="2">20</th>
					<th rowspan="1" colspan="2">21</th>
					<th rowspan="1" colspan="2">22</th>
					<th rowspan="1" colspan="2">23</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td data-week="0">星期一</td>
					<td v-for="(item, index) in rowUnit[0]"></td>
					<td data-week="0" data-time="0"></td>
					<td data-week="0" data-time="1"></td>
					<td data-week="0" data-time="2"></td>
					<td data-week="0" data-time="3"></td>
					<td data-week="0" data-time="4"></td>
					<td data-week="0" data-time="5"></td>
					<td data-week="0" data-time="6"></td>
					<td data-week="0" data-time="7"></td>
					<td data-week="0" data-time="8"></td>
					<td data-week="0" data-time="9"></td>
					<td data-week="0" data-time="10"></td>
					<td data-week="0" data-time="11"></td>
					<td data-week="0" data-time="12"></td>
					<td data-week="0" data-time="13"></td>
					<td data-week="0" data-time="14"></td>
					<td data-week="0" data-time="15"></td>
					<td data-week="0" data-time="16"></td>
					<td data-week="0" data-time="17"></td>
					<td data-week="0" data-time="18"></td>
					<td data-week="0" data-time="19"></td>
					<td data-week="0" data-time="20"></td>
					<td data-week="0" data-time="21"></td>
					<td data-week="0" data-time="22"></td>
					<td data-week="0" data-time="23"></td>
					<td data-week="0" data-time="24"></td>
					<td data-week="0" data-time="25"></td>
					<td data-week="0" data-time="26"></td>
					<td data-week="0" data-time="27"></td>
					<td data-week="0" data-time="28"></td>
					<td data-week="0" data-time="29"></td>
					<td data-week="0" data-time="30"></td>
					<td data-week="0" data-time="31"></td>
					<td data-week="0" data-time="32"></td>
					<td data-week="0" data-time="33"></td>
					<td data-week="0" data-time="34"></td>
					<td data-week="0" data-time="35"></td>
					<td data-week="0" data-time="36"></td>
					<td data-week="0" data-time="37"></td>
					<td data-week="0" data-time="38"></td>
					<td data-week="0" data-time="39"></td>
					<td data-week="0" data-time="40"></td>
					<td data-week="0" data-time="41"></td>
					<td data-week="0" data-time="42"></td>
					<td data-week="0" data-time="43"></td>
					<td data-week="0" data-time="44"></td>
					<td data-week="0" data-time="45"></td>
					<td data-week="0" data-time="46"></td>
					<td data-week="0" data-time="47"></td>
				</tr>
			</tbody>
			<tfoot>
				
			</tfoot>
		</table>
	</div>
</template>

<script>
	export default {
		props: {
			weekdays: {
				type: Object,
				default() {
					return {
						sun: "星期日",
						mon: "星期一",
						tue: "星期二",
						wed: "星期三",
						thu: "星期四",
						fri: "星期五",
						sat: "星期六"
					}
				}
			},
			firstDayOfWeek: 1
		},
		data() {
			let rowUnit = [];
			let timeContent = [];
			let timeSection = [];
			let timeStr = [];

			for (let i = 0; i < 7; i++) {
				let cols = [];

				for (let j = 0; j < 48; j++) {
					cols.push({
						class: undefined,
						time: j
					});
				}

				rowUnit.push(cols);
				timeContent.push({
					arr: []
				});
				timeSection.push([]);
				timeStr.push("");
			}

			const state = {
				rowUnit: [],
				timeContent: [],
				timeSection: [],
				timeStr: []
			};

			return {
				state
			};
		}
	};
</script>

<style>
	.vui-pro-timeroutine-selector {  }
	.vui-pro-timeroutine-selector table { border-collapse:collapse; border-spacing:0; }
	.vui-pro-timeroutine-selector thead tr { height:40px; }
	.vui-pro-timeroutine-selector tbody tr { height:30px; }
	.vui-pro-timeroutine-selector th,
	.vui-pro-timeroutine-selector td { min-width:12px; border:1px solid #f0f0f0; line-height:20px; text-align:center; }
</style>