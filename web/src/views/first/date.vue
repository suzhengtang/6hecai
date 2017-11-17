<template>
	<div id="date">
		<!--导航栏-->
		<header-title title="開獎日期"></header-title>

		<!--内容部分-->
		<div class="content">
			<div class="top">
				<div class="top-top">
					<p>開獎日期</p>
				</div>
				<div class="top-bottom">
					<p>港澳六合彩公益彩逢週一、三、五晚9:00開獎， 攬珠結果當晚將在電臺與本網站公佈。</p>
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
		.pb(200);
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
				.padding(0, 10);
				.pt(10);
				.pb(400);
				color: #444;
				.fs(15);
				p {
					.lh(24);
					.mb(10);
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
