$(document).ready(function(){

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
});