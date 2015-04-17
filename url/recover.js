$(document).ready(function(){
//console.log('begin');
var links=$(".W_btn_cardlink");
//console.log(links.length);
var checkHref = /^http:\/\/t\.cn\/\w*$/;
var checkTitle = /^http:\/\/.*$/;
//var classTag="W_btn_b btn_22px W_btn_cardlink";
for(var i=0;i<links.length;i++){
	if(checkHref.test(links.eq(i).attr("href"))&&checkTitle.test(links.eq(i).attr("title"))){
		links.eq(i).attr("href",links.eq(i).attr("title"));
	}
	links.eq(i).attr("action-type","");
	links.eq(i).attr("mt","");
}

//console.log('end');

$(window).scroll(function() {
	var links=$(".W_btn_cardlink");
	var checkHref = /^http:\/\/t\.cn\/\w*$/;
	var checkTitle = /^http:\/\/.*$/;
	for(var i=0;i<links.length;i++){
		if(checkHref.test(links.eq(i).attr("href"))&&checkTitle.test(links.eq(i).attr("title"))){
		links.eq(i).attr("href",links.eq(i).attr("title"));
		}
		links.eq(i).attr("action-type","");
		links.eq(i).attr("mt","");
	}
});

//$("a").attr("href","https://www.baidu.com/"); 
});