$(document).ready(function(){
	$(window).on('scroll',function(){
		if ($(this).scrollTop() > 300) {
			$(".navbar").addClass("new");
		}else{
			$(".navbar").removeClass('new');
		}
	});
	$(".sc").on('click',function(e){
		var href=$(this).attr('href');
		var element=$(href);

		if (href =="#work") {
			$("html,body").animate({
				scrollTop:Math.floor(element.offset().top -180)
			},1000);
		}else if (href =="#baru") {
			$("html,body").animate({
				scrollTop:Math.floor(element.offset().top +60)
			},1000);
		}
		else{
			$("html,body").animate({
				scrollTop:Math.floor(element.offset().top -80)
			},1000);
		}
		e.preventDefault();
	});
	// $('#works').on('click',function(e){
	// 	e.preventDefault();
	// 	$("html,body").animate({scrollTop:1800},1000);
	// });
	// 	$('#kontaks').on('click',function(e){
	// 	e.preventDefault();
	// 	$("html,body").animate({scrollTop:900},1000);
	// });
	// 	$('#home').on('click',function(e){
	// 	e.preventDefault();
	// 	$("html,body").animate({scrollTop:0},1000);
	// });
	// 		$('#baru').on('click',function(e){
	// 	e.preventDefault();
	// 	$("html,body").animate({scrollTop:1100},1000);
	// });

});