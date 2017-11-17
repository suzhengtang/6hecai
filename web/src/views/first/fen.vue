<template>
	<div id="fen">
		<!--导航栏-->
		<header-title title="獎金分配"></header-title>

		<!--内容部分-->
		<div class="content">
			<div class="top">
				<div class="top-top">
					<p>獎金分配</p>
				</div>
				<div class="top-bottom">
					<p><span>單調特碼</span> 49選１ 賠率為45倍，如下注100元特碼1號，開獎後特碼為1號，玩家中4500元獎金。</p>
					<p><span>單調平碼</span> 49選1  賠率為7倍，如下注100元平碼1號，開獎其中一個平碼開1號,玩家中700元獎金。</p>
					<p><span>波色（特碼） 紅，藍，綠。</span>三選一 賠率為2.6倍，如下注100元紅波特碼，開獎後特碼為紅色，玩家中260元獎金。</p>
					<p><span>單雙（特碼）</span> 二選一（25打平） 賠率為1.8倍，如下注100元選雙特码,開獎特碼為雙，玩家中180元獎金，如開25號波僅退本金。</p>
					<p><span>波色+單雙 紅波雙/單，綠波雙/單，藍波雙/單</span> 賠率為5倍，如下注100元選紅波雙，開獎特码開紅波雙,玩家中500元獎金。</p>
					<p><span>大小(特碼） 二選一（25打平）</span> 賠率為1.8倍，如下注100元選大，開獎特码開大,玩家中180元獎金，如開25號波僅退本金。</p>
					<p><span>生肖 （特平肖）</span> 賠率為2倍（含本命年生肖1.9倍），如下注100元選本年生肖特码或平码，開獎任何一个数字開本年生肖（中多个号码只赔一次）,玩家中190元獎金；平碼則中200元獎金。</p>
					<p><span>生肖 （特肖）</span> 賠率為11倍，本命年生肖為10倍，如下注100元選本年生肖特码或平码，開獎任何一个数字開本年生肖（中多个号码只赔一次）,玩家中1000元獎金，平碼則中1100元獎金。 </p>
					<p><span>二肖 （特平肖）</span> 賠率為4倍，如下注100元選龍和蛇，開獎特码或平码任何2个数字開出龍和蛇（中多个号码只赔一次）,玩家中400元獎金。</p>
					<p><span>三肖 （特平肖）</span> 賠率為15倍（含本命年生肖14倍），如下注100元選龍、蛇和馬，開獎特码或平码中任何3个数字同时開出龍、蛇和馬（中多个号码只赔一次）,玩家中1500元獎金，如果含本命年生肖則為1400元獎金。</p>
					<p><span>四肖 （特平肖）</span>賠率為30倍（含本命年生肖28倍），如下注100元選龍、蛇、馬和猴，開獎特码或平码任何4个数字開出龍、蛇、馬和猴,玩家中3000元獎金，如果含本命年生肖則為2800元獎金。</p>
					<p><span>二中二（平碼，不含特碼）</span> 49選2  賠率為61倍，如下注100元選1號和2號，開獎平碼中開出1號和2號,玩家中6100元獎金。</p>
					<p><span>三中三（平碼，不含特碼）</span> 49選3 賠率為601倍，如下注100元選1號、2號和3號，開獎平碼中開出1號、2號和3號,玩家中60100元獎金。</p>
					<p><span>三中二（平碼，不含特碼）</span> 49選3  賠率為21倍，如下注100元選1號、2號和3號，開獎平碼中開出1號、2號和3號任意兩個號碼,玩家中2100元獎金。</p>
					<p><span>門類（特碼）</span> 五選一 賠率為4倍，如下注100元買第一門，開獎特碼開在1－9之間的任何號碼，玩家中400元獎金。</p>
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
				.padding(10, 10);
				color: #444;
				.fs(15);
				p {
					.lh(24);
					.mb(10);
					span {
						color: #fa3200;
					}
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
