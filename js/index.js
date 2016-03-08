require("./../css/style.css");
require("./../css/base.css");

var $ = require('jquery');


 for(i=0;i<=9;i++){
 	 var newslist = $('<li><a class="notice-title">浙江杭州吉利控股集团采购</a><span>[2015-03-23 08:35:58]</span><a class="download"></a></li>');
 	 $(".notice-con ul").append(newslist);
 }

$(".login-tab li").on("click",function(){
	$(".active").removeClass("active");
	$(this).addClass("active");
	$(".login-border div").addClass("fn-hide");
	var cid=$(this).attr("cid");
	$("."+cid).removeClass("fn-hide");
});
