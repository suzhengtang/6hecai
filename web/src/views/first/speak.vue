<template>
	<div id="speak">
		<!--导航栏-->
		<header-title title="彩票簡介"></header-title>

		<!--内容部分-->
		<div class="content">
			<div class="top">
				<div class="top-top">
					<p>1-49彩珠五行分布圖</p>
				</div>
				<div class="top-bottom">
					<img src="../../assets/images/speak/01.png" alt="">
				</div>
			</div>

			<div class="top top-center">
				<div class="top-top">
					<p>1-49彩珠門數號碼分布圖</p>
				</div>
				<div class="top-bottom">
					<img src="../../assets/images/speak/02.png" alt="">
				</div>
			</div>

			<div class="top top-center">
				<div class="top-top">
					<p>港澳2017年生肖排期表</p>
				</div>
				<div class="top-bottom top-btm1">
					<img src="../../assets/images/speak/03.png" alt="">
					<img src="../../assets/images/speak/04.png" alt="">
					<img src="../../assets/images/speak/05.png" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	@import "../../assets/less/index.less";

	/*内容部分*/
	.content {
		width: 100%;
		height: 100%;
		background-color: #4e0203;
		.pt(54);
		.top {
			.w(355);
			height: auto;
			margin: 0 auto;
			.top-top {
				border-radius: 4px 4px 0 0;
				background-color: #dfb1b2;
				.fs(18);
				color: #403b3b;
				.padding(10, 0);
				border-bottom: 1px solid #d0a6a7;
				.pl(10);
				.mt(10);
			}
			.top-bottom {
				border-radius: 0 0 4px 4px;
				background-color: #fbcdcd;
				img {
					.w(355);
				}
			}
			.top-btm1 {
				text-align: center;
				img {
					.w(335);
					vertical-align: top;
					.mt(10);
				}
			}
		}
		.top-center {
			.mb(10);
		}
	}
</style>

<script type="text/javascript">
	import header from '../../components/header.vue'

	export default {
		data() {
			return {}
		},
		computed: {},
		props: {},
		methods: {},
		components: {
			'header-title': header
		}
	}
</script>
