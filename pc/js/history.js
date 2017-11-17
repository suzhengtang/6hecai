$(function() {
	 var historydata = [];
	 for(let i=0; i<data.length-1; i++){
	 	let htmlStr = `<li>
						<ul>
							<li><p class="pp11">`+data[i].time+`</p></li>
							<li>
								<ul class="ulli">
									<li><img src="images/sml/x`+data[i].num[0]+`.png" alt=""><p>`+data[i].type[0]+`</p></li> <!--2-->
									<li><img src="images/sml/x`+data[i].num[1]+`.png" alt=""><p>`+data[i].type[1]+`</p></li> <!--3-->
									<li><img src="images/sml/x`+data[i].num[2]+`.png" alt=""><p>`+data[i].type[2]+`</p></li> <!--11-->
									<li><img src="images/sml/x`+data[i].num[3]+`.png" alt=""><p>`+data[i].type[3]+`</p></li> <!--26-->
									<li><img src="images/sml/x`+data[i].num[4]+`.png" alt=""><p>`+data[i].type[4]+`</p></li> <!--36-->
									<li><img src="images/sml/x`+data[i].num[5]+`.png" alt=""><p>`+data[i].type[5]+`</p></li> <!--41-->
								</ul>
							</li>
							<li><img class="img11" src="images/sml/x`+data[i].num[6]+`.png" alt=""><p>`+data[i].type[6]+`</p></li>
						</ul>
					</li>`;
		//$(".list").prepend(htmlStr);
		historydata.push(htmlStr);			
	 }

	 //判断是否开了当前期，如果开了则在历史记录里面追加
	 //if(curTime - (new Date()) < 0)
	 if((curTime - getServerDate()) < 0)
	 {
	 	let htmlStr = `<li>
						<ul>
							<li><p class="pp11">`+data[data.length-1].time+`</p></li>
							<li>
								<ul class="ulli">
									<li><img src="images/sml/x`+data[data.length-1].num[0]+`.png" alt=""><p>`+data[data.length-1].type[0]+`</p></li> <!--2-->
									<li><img src="images/sml/x`+data[data.length-1].num[1]+`.png" alt=""><p>`+data[data.length-1].type[1]+`</p></li> <!--3-->
									<li><img src="images/sml/x`+data[data.length-1].num[2]+`.png" alt=""><p>`+data[data.length-1].type[2]+`</p></li> <!--11-->
									<li><img src="images/sml/x`+data[data.length-1].num[3]+`.png" alt=""><p>`+data[data.length-1].type[3]+`</p></li> <!--26-->
									<li><img src="images/sml/x`+data[data.length-1].num[4]+`.png" alt=""><p>`+data[data.length-1].type[4]+`</p></li> <!--36-->
									<li><img src="images/sml/x`+data[data.length-1].num[5]+`.png" alt=""><p>`+data[data.length-1].type[5]+`</p></li> <!--41-->
								</ul>
							</li>
							<li><img class="img11" src="images/sml/x`+data[data.length-1].num[6]+`.png" alt=""><p>`+data[data.length-1].type[6]+`</p></li>
						</ul>
					</li>`;

		//$(".list").prepend(htmlStr);
		historydata.push(htmlStr);
	 }

	 var pagenum = 0;
	 var historyNum = historydata.length;//历史记录条数

	 function page(page){
	     $(".list").html("");
		 for(var i=0; i< 10; i++)
		 {
		 	$(".list").append(historydata[historyNum-10*page-1-i])
		 }
		 $(".page li").removeClass("pagecur");
		 $(".page li").eq(page+1).addClass("pagecur");
	 }
	 page(pagenum);
	 var pages = Math.ceil(historyNum/10);
	 for(let i=0; i<pages; i++){
	 	if(i==0){

	 	}
	 	let liHtml = '<li class="pageli '+ (i==0 ? "pagecur": "") +'">'+(i+1)+'</li>'
	 	$("#nextpage").before(liHtml);
	 }

	 $(".pageli").click(function(){
	 	var oIndex = $(this).index()-1;
	 	pagenum = oIndex;
	 	page(oIndex);
	 })

	  

	 $("#nextpage").click(function(){
	 	pagenum++;
	 	if(pagenum>=pages-1){
			pagenum	= pages-1;
	 	}
	 	page(pagenum);
	 })
	 $("#prepage").click(function(){
	 	pagenum--
	 	if(pagenum<=0){
			pagenum	= 0;
	 	}
	 	page(pagenum);
	 })
	 
	 
})

