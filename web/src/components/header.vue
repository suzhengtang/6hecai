<template>
	<div class="header" @click="$router.go(-1)">
		<span>{{back}}</span>
		<h2>{{title}}</h2>
	</div>
</template>
<style lang="less" scoped>
	@import "../assets/less/index.less";

	.header{
		width: 100%;
		.h(44);
		background: #97020c;
		/* 一些不支持背景渐变的浏览器 */
		background: -moz-linear-gradient(top, #97020c, #87060e);
		background: -webkit-gradient(linear, 0 0, 0 bottom, from(#97020c), to(#87060e));
		background: -o-linear-gradient(top, #97020c, #87060e);
		text-align: center;
		border-bottom: 1px solid #92070f;
		position: fixed;
		z-index: 9999;
		h2{
			.fs(18);
			color: #ffd7d8;
			.lh(44);
		}
		span{
			position: absolute;
			.left(10);
			.top(10);
			color: #ffd7d8;
			.fs(16);
		}
	}
</style>
<script type="text/javascript">
	export default {
		data() {
			return {}
		},
		computed: {},
		props: {
			back: {
				type: String,
				default: '< 返回'
			},
			title: {
				type: String,
				default: '港澳六合彩'
			}
		},
		methods: {},
		components: {}
	}
</script>
