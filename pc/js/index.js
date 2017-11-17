$(function () {
	$('#login').click(function () {
		// alert(1)
	})

   //图库资料栏的tabbar切换
	$('#title_act li').click(function () {
		$(this).addClass('active').siblings().removeClass('active');
		var index = $(this).index();
		$('#picture img').eq(index).addClass('current').siblings().removeClass('current');
	})
	
	//获取当前时间,设置倒计时
	var time = 1000;
	var curqh = curNum ;//显示的期号
	var beingBool = false ; //是否正在开奖过程
	timerFun(); //刚进页面的时候执行一次，不然会出现延时画面
	function timerFun() {
		//var ts = curTime - (new Date());//计算当前期剩余的毫秒数
		var ts = curTime - getServerDate();//计算当前期剩余的毫秒数
		//当前期已经开奖了
		if(ts < 0){
			//ts = nextTime - (new Date());//计算下一期剩余的毫秒数
			ts = nextTime - getServerDate();//计算下一期剩余的毫秒数
			
			//如果正在开奖过程中跳过下面的赋值
			if(beingBool){
				return;
			}

			$("#qihao").html(" " +nextNum+ " ");

			var nextqi = "c" + nextNum; //获取下一期
			var n_year = alldate[nextqi][0]; //获取下一期的年
			var n_month = alldate[nextqi][1]; //获取下一期的月
			var n_date = alldate[nextqi][2]; //获取下一期的日
			$("#qihao2").html(n_year+"/"+nextNum);
			$("#ktime").html(n_year+"/"+n_month+"/"+n_date + "&nbsp;&nbsp;&nbsp;&nbsp;21:00")
			var lastnumhtml =` <li><img id="cel1" src="images/big/`+data[data.length-1].num[0]+`.png" alt=""><p>`+data[data.length-1].type[0]+`</p></li>  
						<li><img id="cel2" src="images/big/`+data[data.length-1].num[1]+`.png" alt=""><p>`+data[data.length-1].type[1]+`</p></li> 
						<li><img id="cel3" src="images/big/`+data[data.length-1].num[2]+`.png" alt=""><p>`+data[data.length-1].type[2]+`</p></li> 
						<li><img id="cel4" src="images/big/`+data[data.length-1].num[3]+`.png" alt=""><p>`+data[data.length-1].type[3]+`</p></li>
						<li><img id="cel5" src="images/big/`+data[data.length-1].num[4]+`.png" alt=""><p>`+data[data.length-1].type[4]+`</p></li>
						<li><img id="cel6" src="images/big/`+data[data.length-1].num[5]+`.png" alt=""><p>`+data[data.length-1].type[5]+`</p></li>`;
			$("#lastNum").html(lastnumhtml);
			var specialhtml=`<img id="cel7" src="images/big/`+data[data.length-1].num[6]+`.png" alt="">
							<p>`+data[data.length-1].type[6]+`</p>`;
			$("#specialNum").html(specialhtml)
		}
		//当前期没有开奖
		else{
			$("#qihao").html(" " +curqh+ " ");
			var curqi = "c" + curNum; //获取当期
			var c_year = alldate[curqi][0]; //获取当期的年
			var c_month = alldate[curqi][1]; //获取当期的月
			var c_date = alldate[curqi][2]; //获取当期的日
			$("#qihao2").html(c_year+"/"+curNum);
			$("#ktime").html(c_year+"/"+c_month+"/"+c_date + "&nbsp;&nbsp;&nbsp;&nbsp;21:00")

			//如果正在开奖过程中跳过下面的赋值
			if(beingBool){
				return;
			}

			var lastnumhtml =` <li><img id="cel1" src="images/big/`+data[data.length-2].num[0]+`.png" alt=""><p>`+data[data.length-2].type[0]+`</p></li>  
						<li><img id="cel2" src="images/big/`+data[data.length-2].num[1]+`.png" alt=""><p>`+data[data.length-2].type[1]+`</p></li> 
						<li><img id="cel3" src="images/big/`+data[data.length-2].num[2]+`.png" alt=""><p>`+data[data.length-2].type[2]+`</p></li> 
						<li><img id="cel4" src="images/big/`+data[data.length-2].num[3]+`.png" alt=""><p>`+data[data.length-2].type[3]+`</p></li>
						<li><img id="cel5" src="images/big/`+data[data.length-2].num[4]+`.png" alt=""><p>`+data[data.length-2].type[4]+`</p></li>
						<li><img id="cel6" src="images/big/`+data[data.length-2].num[5]+`.png" alt=""><p>`+data[data.length-2].type[5]+`</p></li>`;
			

			var specialhtml=`<img id="cel7" src="images/big/`+data[data.length-2].num[6]+`.png" alt="">
							<p>`+data[data.length-2].type[6]+`</p>`;
			
			$("#lastNum").html(lastnumhtml);
			$("#specialNum").html(specialhtml);
		}
		var dd = parseInt(ts / 1000 / 60 / 60 / 24);//计算剩余的天数
		var hh = parseInt(ts / 1000 / 60 / 60 % 24);//计算剩余的小时数
		var mm = parseInt(ts / 1000 / 60 % 60);//计算剩余的分钟数
		var ss = parseInt(ts / 1000 % 60);//计算剩余的秒数
		dd = checkTime(dd);
		hh = checkTime(hh);
		mm = checkTime(mm);
		ss = checkTime(ss);
		$('#timmer').val(dd + "天" + hh + "时" + mm + "分" + ss + "秒")
		document.getElementById("timmer").innerHTML = dd + "天" + hh + "时" + mm + "分" + ss + "秒";
	}
	setInterval(function () {
		timerFun();
		if(document.getElementById('timmer').innerHTML == '00天00时00分00秒'){

			//如果正在开奖过程中跳过下面的赋值
			if(beingBool){
				return;
			}
		    document.getElementById("timmer").innerHTML = "正在开奖中...";

			var lastnumhtml =` <li><img id="cel1" src="images/big/0.png" alt=""><p>?</p></li>
						<li><img id="cel2" src="images/big/0.png" alt=""><p>?</p></li>
						<li><img id="cel3" src="images/big/0.png" alt=""><p>?</p></li>
						<li><img id="cel4" src="images/big/0.png" alt=""><p>?</p></li>
						<li><img id="cel5" src="images/big/0.png" alt=""><p>?</p></li>
						<li><img id="cel6" src="images/big/0.png" alt=""><p>?</p></li>`;
			

			var specialhtml=`<img id="cel7" src="images/big/0.png" alt="">
							<p>?</p>`;
			
			$("#lastNum").html(lastnumhtml);
			$("#specialNum").html(specialhtml);
			beingBool = true;
			play();
		}
	},time);
	function checkTime(i) {
		if(i < 10){
			i = '0' + i;
		}return i;
	}

	//设置定时器,让球动起来
	var max = 1;
	var timer;
	var numArr = data[data.length-1].num;//开奖数字数组
	var typeArr = data[data.length-1].type;//开奖类型数组
	var pos = 1; //起始第一个球
	var times = 1;//单个球转动的循环次数
	function play() {
		timer = setInterval(function () {
			max++;
			if(max == 50 && times != 3 ){
				max = 1;
				times ++;
				$('#cel'+pos).attr('src', 'images/big/'+ max +'.png');
			}
			if(max == 50 && times == 3){
				max = 1;
				times = 1;
				clearInterval(timer);
				$('#cel'+pos).attr('src', 'images/big/'+ numArr[pos-1] +'.png');
				$('#cel'+pos).next("p").html(typeArr[pos-1]);
				pos++;
				if(pos == 8){
					beingBool = false;
					return;
				}else{
					play();
				}
			}else{
				$('#cel'+pos).attr('src', 'images/big/'+ max +'.png');
			}
		},50);
	}
})