$(document).ready(function(){
	$(window).on('scroll',function(){
		if ($(this).scrollTop() > 300) {
			$(".navbar").addClass("new");
		}else{
			$(".navbar").removeClass('new');
		}
	});
	$('#works').on('click',function(e){
		e.preventDefault();
		$("html,body").animate({scrollTop:1800},1000);
	});
		$('#kontaks').on('click',function(e){
		e.preventDefault();
		$("html,body").animate({scrollTop:900},1000);
	});
		$('#home').on('click',function(e){
		e.preventDefault();
		$("html,body").animate({scrollTop:0},1000);
	});
			$('#baru').on('click',function(e){
		e.preventDefault();
		$("html,body").animate({scrollTop:1100},1000);
	});

});