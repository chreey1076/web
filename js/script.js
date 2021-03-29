$(function(){
	/*팝업창*/
	$(".logo").click(function(){
		$("#Pdjqckd").show();
	});
	$(".end").click(function(){
		$("#Pdjqckd").hide();
	});

	
	/*로그인창*/
	$(".block").mouseover(function(){
		$("fieldset").show();		
	});
	$(".block").mouseout(function(){
		$("fieldset").hide();		
	});
	
	
	/*슬라이더*/
	
	$("figure img").each(function(aa){
		$(this).css({left:aa*1200});
	});

	setInterval(function(){
		$("figure img").each(function(){
			var left=parseInt($(this).css("left"));
			var move=left-1200;
			$(this).animate({left:move},1000,function(){
				if(left==-1200){
					$(this).css({left:1200});
				}
			});//ani 끝
		});//each 끝
	},3000);//set 끝
	
	/*메뉴*/
	
	$("#menu1 .MEun1").mouseover(function(){
		$(this).find(".all").stop().slideDown();
	});
	$("#menu1 .MEun1").mouseout(function(){
		$(this).find(".all").stop().slideUp();
	});
});