<template>
	<div id="history">
		<!--导航栏-->
		<header-title title="曆史記錄"></header-title>

		<!--内容部分-->
		<div class="content">
			<div class="top">
				<div class="top-top">
					<p>2017年曆史開獎記錄</p>
				</div>
				
				<div class="top-bottom" v-for="item in historydataNew">
					<p class="tit">{{item.time}}</p>
					<ul>
						<li>
							<img :src="item.src[0]" alt="">
							<p>{{item.type[0]}}</p>
						</li>
						<li>
							<img :src="item.src[1]" alt="">
							<p>{{item.type[1]}}</p>
						</li>
						<li>
							<img :src="item.src[2]" alt="">
							<p>{{item.type[2]}}</p>
						</li>
						<li>
							<img :src="item.src[3]" alt="">
							<p>{{item.type[3]}}</p>
						</li>
						<li>
							<img :src="item.src[4]" alt="">
							<p>{{item.type[4]}}</p>
						</li>
						<li>
							<img :src="item.src[5]" alt="">
							<p>{{item.type[5]}}</p>
						</li>
					</ul>
					<div class="jia">
						<div class="jia1"></div>
						<div class="jia2"></div>
					</div>
					<div class="red">
						<p>特码</p>
					</div>
					<div class="te">
						<img :src="item.src[6]" alt="">
						<p>{{item.type[6]}}</p>
					</div>
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
		.pb(100);
		.top {
			.w(355);
			height: auto;
			margin: 0 auto;
			.top-top {
				border-radius: 4px 4px 0 0;
				background-color: #dfb1b2;
				text-align: center;
				.fs(18);
				color: #403b3b;
				.padding(10, 0);
				border-bottom: 1px solid #d0a6a7;
				p {
					.lh(34);
					span {
						color: #690000;
					}
				}
			}
			.top-bottom {
				background-color: #fbcdcd;
				overflow: hidden;
				.tit {
					.w(335px);
					.h(20);
					background-color: #e3b3b3;
					margin: 0 auto;
					.mb(10);
					.mt(8);
				}
				ul {
					float: left;
					.w(270);
					display: flex;
					justify-content: space-around;
					align-items: center;
					li {
						text-align: center;
						img {
							.w(30);
							.h(30);
						}
						p {
							.fs(14);
						}
					}
				}
				.jia {
					float: left;
					.w(20);
					.h(50);
					position: relative;
					.jia1 {
						.w(13);
						.h(3);
						background-color: #302020;
						position: absolute;
						.left(0);
						.top(28);
					}
					.jia2 {
						.w(3);
						.h(13);
						background-color: #302020;
						position: absolute;
						.left(5);
						.top(23);
					}
				}
				.red {
					.mt(7);
					float: left;
					text-align: center;
					.w(16);
					.h(44);
					background-color: #f03540;
					border-radius: 24px;
					p {
						.fs(12);
						color: #fff;
						.mt(4);
					}
				}
				.te {
					float: left;
					text-align: center;
					.fs(14);
					.ml(6);
					img {
						.w(30);
						.h(30);
					}
				}
			}
			.top-bottom:last-child {
				border-radius: 0 0 4px 4px;
			}
		}
	}
</style>

<script type="text/javascript">
	import header from '../../components/header.vue'
	import mydata from "../data";

	export default {
		data() {
			return {
				items: [],
				//curPage: 1,
				historydata: [],
				historydataNew: [],
			}
		},
		created(){
			this.getHistory();

		},
		computed: {},
		props: {},
		methods: {
			getHistory: function(){
				this.historydata = [];
				 for(let i=0; i<mydata.data.length-1; i++){
				 	let Record = mydata.data[i];
					this.historydata.push(Record);			
				 }

				 //判断是否开了当前期，如果开了则在历史记录里面追加
//				 if(mydata.curTime - (new Date()) < 0)
				 if((mydata.curTime - mydata.getServerDate()) < 0)
				 {
				 	let Record = mydata.data[mydata.data.length-1];
				 	this.historydata.push(Record);
				 }

//				 console.log(this.historydata);
				 

				 //组合新的显示数组
				 for(let i=0; i<this.historydata.length; i++){
				 	this.historydataNew[i] = {};
				 	this.historydataNew[i].time = "";
				 	this.historydataNew[i].src = [];
				 	this.historydataNew[i].type = [];
			 		this.historydataNew[i].time = "第"+this.historydata[i].time+"期";
			 		this.historydataNew[i].src[0] = require("../../assets/images/big/"+this.historydata[i].num[0]+".png");
			 		this.historydataNew[i].src[1] = require("../../assets/images/big/"+this.historydata[i].num[1]+".png");
			 		this.historydataNew[i].src[2] = require("../../assets/images/big/"+this.historydata[i].num[2]+".png");
			 		this.historydataNew[i].src[3] = require("../../assets/images/big/"+this.historydata[i].num[3]+".png");
			 		this.historydataNew[i].src[4] = require("../../assets/images/big/"+this.historydata[i].num[4]+".png");
			 		this.historydataNew[i].src[5] = require("../../assets/images/big/"+this.historydata[i].num[5]+".png");
			 		this.historydataNew[i].src[6] = require("../../assets/images/big/"+this.historydata[i].num[6]+".png");
			 		this.historydataNew[i].type = this.historydata[i].type;
				 }

				 this.historydataNew.reverse();
			}
		},
		components: {
			'header-title': header
		}
	}
</script>
