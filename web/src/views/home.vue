<template>
	<div class="hello">
		<!--标题部分-->
		<header-title back=""></header-title>

		<!--内容部分-->
		<div class="content">
			<div class="top">
				<div class="top-top">
					<p>開獎期數：<span>{{qihao2}}</span></p>
					<p>開獎日期：<span>{{ktime}}</span></p>
					<p>第<span> {{qihao}} </span>期開獎倒計時：<span>{{curtimenum}}</span></p>
				</div>
				<div class="top-bottom">
					<ul>
						<li>
							<img id="cel1" :src="numpic[0]" alt="">
							<p>{{type[0]}}</p>
						</li>
						<li>
							<img id="cel2" :src="numpic[1]" alt="">
							<p>{{type[1]}}</p>
						</li>
						<li>
							<img id="cel3" :src="numpic[2]" alt="">
							<p>{{type[2]}}</p>
						</li>
						<li>
							<img id="cel4" :src="numpic[3]" alt="">
							<p>{{type[3]}}</p>
						</li>
						<li>
							<img id="cel5" :src="numpic[4]" alt="">
							<p>{{type[4]}}</p>
						</li>
						<li>
							<img id="cel6" v-bind:src="numpic[5]" alt="">
							<p>{{type[5]}}</p>
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
						<img id="cel7" :src="numpic[6]" alt="">
						<p>{{type[6]}}</p>
					</div>
				</div>
			</div>
			<div class="bottom">
				<ul class="btm-list">
					<router-link tag="li" to="./speak">
						<img src="../assets/images/index/jian.png" alt="">
						<p>彩票簡介</p>
					</router-link>
					<router-link tag="li" to="./zheng">
						<img src="../assets/images/index/zheng.png" alt="">
						<p>公司證書</p>
					</router-link>
					<router-link tag="li" to="./things">
						<img src="../assets/images/index/things.png" alt="">
						<p>公司董事</p>
					</router-link>
					<router-link tag="li" to="./fen">
						<img src="../assets/images/index/fen.png" alt="">
						<p>獎金分配</p>
					</router-link>
					<router-link tag="li" to="./date">
						<img src="../assets/images/index/date.png" alt="">
						<p>開獎日期</p>
					</router-link>
					<router-link tag="li" to="./picture">
						<img src="../assets/images/index/picture.png" alt="">
						<p>圖庫資料</p>
					</router-link>
					<router-link tag="li" to="./history">
						<img src="../assets/images/index/history.png" alt="">
						<p>曆史記錄</p>
					</router-link>
				</ul>
			</div>
		</div>
	</div>
</template>

<script src="./data.js" type="text/javascript"></script>
<script>

	import mydata from "./data";
	 
	import header from '../components/header.vue'

	export default {
		data() {
			return {
				curtimenum: '00天00时00分00秒',
				time: 0,
				x:0,
				qihao: mydata.curNum, //当前期号
				qihao2: 0, //开奖期数
				beingBool : false , //是否正在开奖过程
				ktime: 0,//开奖日期
				numpic: [0,0,0,0,0,0,0],
				//numpic0: 0,
				type: ["?","?","?","?","?","?","?"],
				max: 1, //球转动的次数
				timer: null, //play函数里面的定时器
				pos: 1, //起始第一个球
				times: 1,//单个球转动的循环次数
				numArr: mydata.data[mydata.data.length-1].num,//开奖数字数组
	 			typeArr: mydata.data[mydata.data.length-1].type,//开奖类型数组
			}
		},
		created() {
			this.getcurTime();
			this.timerFun();
		},
		computed: {},
		props: {},
		methods: {
			//倒计时
			getcurTime: function(){
				var ts = mydata.curTime - mydata.getServerDate();//计算当前期剩余的毫秒数
				//当前期已经开奖了
				if(ts < 0){
					ts = mydata.nextTime - mydata.getServerDate();//计算下一期剩余的毫秒数
					//如果正在开奖过程中跳过下面的赋值
					if(this.beingBool){
						return;
					}

					//更新期号为下一期期号
					this.qihao = mydata.nextNum;

					let nextqi = "c" + mydata.nextNum; //获取下一期
					let n_year = mydata.alldate[nextqi][0]; //获取下一期的年
					let n_month = mydata.alldate[nextqi][1]; //获取下一期的月
					let n_date = mydata.alldate[nextqi][2]; //获取下一期的日
					this.ktime = n_year+"/"+n_month+"/"+n_date + " 21:00";
					this.qihao2 = n_year+"/"+mydata.nextNum;

					let curdataArr = mydata.data[mydata.data.length-1];
					this.numpic[0] = require("../assets/images/big/"+curdataArr.num[0]+".png");
					this.numpic[1] = require("../assets/images/big/"+curdataArr.num[1]+".png");
					this.numpic[2] = require("../assets/images/big/"+curdataArr.num[2]+".png");
					this.numpic[3] = require("../assets/images/big/"+curdataArr.num[3]+".png");
					this.numpic[4] = require("../assets/images/big/"+curdataArr.num[4]+".png");
					this.numpic[5] = require("../assets/images/big/"+curdataArr.num[5]+".png");
					this.numpic[6] = require("../assets/images/big/"+curdataArr.num[6]+".png");
					this.type = curdataArr.type;
				}
				//当期没开奖
				else{
					//更新期号为当期期号
					this.qihao = mydata.curNum;

					let curqi = "c" + mydata.curNum; //获取当期
					let c_year = mydata.alldate[curqi][0]; //获取当期的年
					let c_month = mydata.alldate[curqi][1]; //获取当期的月
					let c_date = mydata.alldate[curqi][2]; //获取当期的日
					this.ktime = c_year+"/"+c_month+"/"+c_date + " 21:00";
					this.qihao2 = c_year+"/"+mydata.curNum;

					//如果正在开奖过程中跳过下面的赋值
					if(this.beingBool){
						return;
					}

					let curdataArr = mydata.data[mydata.data.length-2];
					this.numpic[0] = require("../assets/images/big/"+curdataArr.num[0]+".png");
					this.numpic[1] = require("../assets/images/big/"+curdataArr.num[1]+".png");
					this.numpic[2] = require("../assets/images/big/"+curdataArr.num[2]+".png");
					this.numpic[3] = require("../assets/images/big/"+curdataArr.num[3]+".png");
					this.numpic[4] = require("../assets/images/big/"+curdataArr.num[4]+".png");
					this.numpic[5] = require("../assets/images/big/"+curdataArr.num[5]+".png");
					this.numpic[6] = require("../assets/images/big/"+curdataArr.num[6]+".png");
					this.type = curdataArr.type;
				}
				

				var dd = parseInt(ts / 1000 / 60 / 60 / 24);//计算剩余的天数
				var hh = parseInt(ts / 1000 / 60 / 60 % 24);//计算剩余的小时数
				var mm = parseInt(ts / 1000 / 60 % 60);//计算剩余的分钟数
				var ss = parseInt(ts / 1000 % 60);//计算剩余的秒数
				dd = this.checkTime(dd);
				hh = this.checkTime(hh);
				mm = this.checkTime(mm);
				ss = this.checkTime(ss);
				var curtimestr = dd + "天" + hh + "时" + mm + "分" + ss + "秒";
				//alert(curtimestr)
				this.curtimenum = curtimestr;
			},

			//开奖过程
			play: function(){
				let that = this;
				that.timer = setInterval(function () {
					that.max++;
					if(that.max == 50 && that.times != 3 ){
						that.max = 1;
						that.times ++;
						//$('#cel'+that.pos).attr('src', '../images/big/'+ that.max +'.png');
						 

						that.numpic[that.pos-1] = require("../assets/images/big/"+(that.max)+".png");
						 

					}
					if(that.max == 50 && that.times == 3){
						that.max = 1;
						that.times = 1;
						clearInterval(that.timer);
						//$('#cel'+that.pos).attr('src', '../images/big/'+ that.numArr[pos-1] +'.png');
						//$('#cel'+that.pos).next("p").html(that.typeArr[pos-1]);
						that.numpic[that.pos-1] = require("../assets/images/big/"+that.numArr[that.pos-1]+".png");
						that.type[that.pos-1] = that.typeArr[that.pos-1];
						that.pos++;
						if(that.pos == 8){
							that.beingBool = false;
							return;
						}else{
							that.play();
						}
					}else{
						 
						//$('#cel'+that.pos).attr('src', '../images/big/'+ that.max +'.png');
						console.log(that.pos)
						that.numpic[that.pos-1] = require("../assets/images/big/"+that.max+".png");
						let virArr = [];
						virArr[0] = that.pos > 1 ? that.typeArr[0] : "?";
						virArr[1] = that.pos > 2 ? that.typeArr[1] : "?";
						virArr[2] = that.pos > 3 ? that.typeArr[2] : "?";
						virArr[3] = that.pos > 4 ? that.typeArr[3] : "?";
						virArr[4] = that.pos > 5 ? that.typeArr[4] : "?";
						virArr[5] = that.pos > 6 ? that.typeArr[5] : "?";
						virArr[6] = that.pos > 7 ? that.typeArr[6] : "?";
						that.type = virArr;
					}
				},50);
			},

			//补双
			checkTime: function(i){
				if(i < 10){
					i = '0' + i;
				}return i;
			},

			//定时器
			timerFun: function(){
				let that = this;
				setInterval(
					function(){
						that.getcurTime();
						if(that.curtimenum == "00天00时00分00秒"){
							//如果正在开奖过程中跳过下面的赋值
							if(that.beingBool){
								return;
							}
							that.curtimenum = "正在开奖中";
							that.numpic[0] = require("../assets/images/big/0.png");
							that.numpic[1] = require("../assets/images/big/0.png");
							that.numpic[2] = require("../assets/images/big/0.png");
							that.numpic[3] = require("../assets/images/big/0.png");
							that.numpic[4] = require("../assets/images/big/0.png");
							that.numpic[5] = require("../assets/images/big/0.png");
							that.numpic[6] = require("../assets/images/big/0.png");
							that.type = ["?","?","?","?","?","?","?"];
							that.beingBool = true;
							that.play();
						}
					},	
				that.time)
			}


		},
		components: {
			'header-title': header
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	@import "../assets/less/index.less";

	/*内容部分*/
	.content{
		width: 100%;
		height: 100%;
		background-color: #4e0203;
		.pt(54);
		.top{
			.w(355);
			height:auto;
			margin: 0 auto;
			.top-top{
				border-radius: 4px 4px 0 0;
				background-color: #dfb1b2;
				text-align: center;
				.fs(18);
				color: #403b3b;
				.padding(10,0);
				border-bottom: 1px solid #d0a6a7;
				p{
					.lh(34);
					span{
						color: #690000;
					}
				}
			}
			.top-bottom{
				border-radius: 0 0 4px 4px;
				background-color: #fbcdcd;
				.padding(30,0);
				overflow: hidden;
				ul{
					float: left;
					.w(270);
					display: flex;
					justify-content: space-around;
					align-items: center;
					li{
						text-align: center;
						img{
							.w(30);
							.h(30);
						}
						p{
							.fs(14);
						}
					}
				}
				.jia{
					float: left;
					.w(20);
					.h(50);
					position: relative;
					.jia1{
						.w(13);
						.h(3);
						background-color: #302020;
						position: absolute;
						.left(0);
						.top(28);
					}
					.jia2{
						.w(3);
						.h(13);
						background-color: #302020;
						position: absolute;
						.left(5);
						.top(23);
					}
				}
				.red{
					.mt(7);
					float: left;
					text-align: center;
					.w(16);
					.h(44);
					background-color: #f03540;
					border-radius: 24px;
					p{
						.fs(12);
						color: #fff;
						.mt(4);
					}
				}
				.te{
					float: left;
					text-align: center;
					.fs(14);
					.ml(6);
					img{
						.w(30);
						.h(30);
					}
				}
			}
		}
		.bottom{
			.w(355);
			height: auto;
			border-radius: 4px;
			background-color: #e3b3b3;
			margin: 0 auto;
			.mb(20);
			.mt(10);
			.btm-list{
				overflow: hidden;
				li{
					float: left;
					.w(118);
					.h(118);
					border-bottom: 1px solid #cf9e9e;
					border-right: 1px solid #cf9e9e;
					text-align: center;
					.padding(20,0);
					img{
						.w(50);
						.h(50);
					}
				}
			}
		}
	}
</style>
