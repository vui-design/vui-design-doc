<template>
	<vui-doc-example v-bind:code="code" id="example-transfer-basic-usage">
		<template slot="demo">
			<vui-cascade-transfer
				v-bind:value="value"
				v-bind:options="options"
				v-bind:valueKey="valueKey"
				v-bind:childrenKey="childrenKey"
				v-bind:title="title"
				v-bind:formatter="formatter"
				v-bind:showTargetPanel="showTargetPanel"
				v-bind:validator="validator"
				v-on:change="handleSelect"
			/>
		</template>
		<template slot="title">基本用法</template>
		<template slot="description">
			<p>最基本的用法，展示了 <code>titles</code>、<code>options</code>、<code>selectedKeys</code>、<code>targetKeys</code>、选项的渲染函数 <code>formatter</code> 以及回调函数 <code>onScroll</code>、<code>onSelect</code>、<code>onChange</code> 的用法。</p>
		</template>
	</vui-doc-example>
</template>

<script>
	import VuiDocExample from "src/components/example";
	import code from "./code";

	const options = [
		{
			"id": 0,
			"name": "灭神单职业",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "火龙合击",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "皇图2",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "传奇荣耀",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "传奇公测",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "灭神",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "合击版传奇",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "合击",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "刀刀烈火",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "英雄合击",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "变传奇",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "刀刀光柱",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "王者英雄录",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "热血合击",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "英雄合击版",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "初心者-集结",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "超高爆率传奇",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "刀刀切割",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "大话诛仙",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "单职业",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "爆率传奇",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "散人天堂",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "超变传奇",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "合击传奇",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "放置三国",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "版传奇",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "赤月合击",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "破魂斩",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "魔域世界",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "爽爆神装",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "美女武将",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "经典复古",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "良心回合制手游",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "海贼冒险团",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "三国魔将传",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "职业可选",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "爆率全开",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "雷霆一击",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "倍积分",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "传奇冰雪版",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "回合制",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "绝世仙王",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "传奇bt版",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "神魔三国志",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "经典复古传奇",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "返利版",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "真传奇",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "传世",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "蓝月返利版",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "极品神装",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "20w元宝",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "良心西游",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "火龙合击版",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "正版传奇",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "光柱",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "复古传奇",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "割草刀刀",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "回合制手游",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "割草刀",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "众仙听令",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "斗罗大陆-武魂觉醒",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "全新传奇",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "老传奇",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "微变传奇",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "上古王冠",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "天降福缘",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "劈星斩",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "公益传奇",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "石器变态版",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "蓝月",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "塔防单机版",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "口袋小精灵",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "10倍爆率",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "蓝月返利",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "传奇合击版",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "全新回合制",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "正版西游",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "单职业传奇",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "良心传奇",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "洗宠",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "塔防单机",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "上线送神装",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "大话封神",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "秒到手",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "装备秒回收",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "异次元梦境",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "蓝月版",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "梦幻回合制",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "自由交易",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "地图套装",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "汴梁",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "百倍爆率",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "石器时代单机版",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "良心回合手游",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "爆神装",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "无限洗练",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "大威天龙",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "传奇超变版",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "魔龙教主",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "原始传奇",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "全新回合",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "魔幻奇迹",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "上古战纪",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "地城进阶版",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "冰雪勇士",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "养龙寺",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "装备靠打",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "泡点",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "三国美女",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "西游单机版",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "航母世界",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "梦幻回合制手游",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "魔狱奇迹",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "玛法大陆",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "回到三国",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "传奇老玩家",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "传奇冰雪",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "无级别神装",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "热血合击-合击版传奇",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "机暴时代单机版",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "冰雪服",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "大王饶命",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "红包三国",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "装备自由交易",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "蓝月传奇",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "装备回收",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "魔法大陆",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "单机版",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "传奇高爆版",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "仙影",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "征战三国",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "装备全靠",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "级别神装",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "传奇爆率",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "少年三国志-零",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "职业传奇",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "火龙超变",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "福利版",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "传奇合击",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "全新梦幻",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "深渊大陆",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "三国志纯单机版",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "橙装",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "山海经",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "装备坐骑",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "刀刀暴击",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "西游单机",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "无限疲劳",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "这才是传奇",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		},
		{
			"id": 0,
			"name": "酷炫坐骑",
			"parentId": 0,
			"parentName": "",
			"tagClass": "KEYWORD"
		}
	];

	export default {
		components: {
			VuiDocExample
		},
		data() {
			return {
				code,
				value: [],
				options: options,
				valueKey: "name",
				childrenKey:"children",
				title: props => props.direction === "source" ? (props.level === 1 ? "行为类目词" : props.parent.name) : "已选",
				formatter: option => option.data.name,
				showTargetPanel: true,
				validator: false
			};
		},
		methods: {
			handleSelect() {
				console.log(66);
			}
		}
	};
</script>