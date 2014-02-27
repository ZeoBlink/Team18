$(document).ready(function(){

	//top header to align to bottom of head div (so that it aligns with logo)
	$('#topheader').css({
    	"position":'relative',
    	"top": (($('#head').height()) - (($('#topheader').height() * 1.4)))
	});

	$(window).resize(function(){
		var windowWidth = $(window).width();
		if (windowWidth>1100){
			$('#topheader').css({
    			"position":'relative',
    			"top": (($('#head').height()) - (($('#topheader').height() * 1.4)))
			});
		}
		else if (1100>windowWidth && windowWidth>900){
			$('#topheader').css({
    			"position":'relative',
    			"top": (($('#head').height()) - (($('#topheader').height() * 1.2)))
			});
		}
		else if (900>windowWidth && windowWidth>700){
			$('#topheader').css({
    			"position":'relative',
    			"top": (($('#head').height()) - (($('#topheader').height())))
			});
		}
		else{
			$('#topheader').css({
    			"position":'relative'
    		});
		}
	});

	/* old navbar js
	//hides subheader in nav bar at load of page
	$(".sub-header").hide();

	//toggle show/hide subheaders when clicking on header buttons
	$("#about").click(function(){
		$("#about-sub").toggle();
	});
	$("#search").click(function(){
		$("#search-sub").toggle();
	});
	$("#shop").click(function(){
		$("#shop-sub").toggle();
	});
	$("#cart").click(function(){
		$("#cart-sub").toggle();
	});
	*/
});
