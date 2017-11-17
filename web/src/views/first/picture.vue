<template>
	<div id="picture">
		<!--导航栏-->
		<header-title title="圖庫資料"></header-title>

		<!--内容部分-->
		<div class="content">
			<div class="top">
				<router-link to="./picture/one">
					<div class="top-top">
						<p>馬經發財報</p>
						<span>&gt;</span>
					</div>
				</router-link>
				<router-link to="./picture/two">
					<div class="top-top">
						<p>特碼詩</p>
						<span>&gt;</span>
					</div>
				</router-link>
				<router-link to="./picture/three">
					<div class="top-top">
						<p>平特水心報</p>
						<span>&gt;</span>
					</div>
				</router-link>
				<router-link to="./picture/fore">
					<div class="top-top">
						<p>內幕玄機</p>
						<span>&gt;</span>
					</div>
				</router-link>
				<router-link to="./picture/five">
					<div class="top-top">
						<p>馬經玄機圖</p>
						<span>&gt;</span>
					</div>
				</router-link>
				<router-link to="./picture/six">
					<div class="top-top">
						<p>馬經平特圖</p>
						<span>&gt;</span>
					</div>
				</router-link>
				<router-link to="./picture/seven">
					<div class="top-top">
						<p>九龍內幕傳真</p>
						<span>&gt;</span>
					</div>
				</router-link>
				<router-link to="./picture/eight">
					<div class="top-top">
						<p>富婆仙機</p>
						<span>&gt;</span>
					</div>
				</router-link>
				<router-link to="./picture/nine">
					<div class="top-top">
						<p>藏寶圖</p>
						<span>&gt;</span>
					</div>
				</router-link>
				<router-link to="./picture/ten">
					<div class="top-top">
						<p>伯樂相馬經</p>
						<span>&gt;</span>
					</div>
				</router-link>
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
				border-radius: 4px;
				background-color: #dfb1b2;
				.fs(18);
				color: #403b3b;
				.padding(10, 10);
				border-bottom: 1px solid #d0a6a7;
				overflow: hidden;
				.mb(10);
				p {
					float: left;
				}
				span {
					float: right;
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
