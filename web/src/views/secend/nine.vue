<template>
	<div id="zheng">
		<!--标题部分-->
		<header-title title="藏寶圖"></header-title>

		<!--内容部分-->
		<div class="content">
			<div class="top">
				<div class="top-top">
					<p>藏寶圖</p>
				</div>
				<div class="top-bottom">
					<img src="../../assets/images/nine.jpg" alt="">
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
		.pb(350);
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
			}
			.top-bottom {
				border-radius: 0 0 4px 4px;
				background-color: #fbcdcd;
				text-align: center;
				.padding(10, 0);
				img {
					.w(335);
				}
			}
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

