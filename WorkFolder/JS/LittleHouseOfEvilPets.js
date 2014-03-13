$(document).ready(function(){

	//check window width on load
	var windowWidth = $(window).width();

	if (windowWidth>700){
		//top header to align to bottom of head div (so that it aligns with logo)
		$('#topheader').css({
	    	"position":'relative',
	    	"top": (($('#head').height()) - (($('#topheader').height() * 1.4)))
		});
	}	

	//menu button when on mobile devices
	if (windowWidth<700){
		$("#menu").css("display","block");
		$("#nav").hide();
	}
	$("#menu").click(function(){
		$("#nav").slideToggle(800);
	});
	
	//aligning top header
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
		else {
			$('#topheader').css({
    			"position":'relative'
    		});
		}
	});
		
	//menu button on mobile devices
	$(window).resize(function(){
		var windowWidth = $(window).width();
		if (windowWidth>700){
			$("#menu").css("display","none");				
			$("#nav").show();
		}
		else{
			$("#menu").css("display","block");				
			$("#nav").hide();
		}
	});


	if (windowWidth>700){

		//page overlay when product figure is clicked
		$(".product-img").click(function(){
			$("#overlay").show();

			//position the preview box to 
			var screenTop = $(document).scrollTop();
			$(".product-preview").css('top', screenTop);
		});

		//preview when dog products clicked
		$(".dog#product1").click(function(){
			$(".dog>.product-preview#product1-preview").show();
		});
		$(".dog#product2").click(function(){
			$(".dog>.product-preview#product2-preview").show();
		});
		$(".dog#product3").click(function(){
			$(".dog>.product-preview#product3-preview").show();
		});
		$(".dog#product4").click(function(){
			$(".dog>.product-preview#product4-preview").show();
		});
		$(".dog#product5").click(function(){
			$(".dog>.product-preview#product5-preview").show();
		});
		$(".dog#product6").click(function(){
			$(".dog>.product-preview#product6-preview").show();
		});
		
		//hide preview and overlay when clicking outside preview window
		$("#overlay").click(function(){
				$(".product-preview").hide();
				$("#overlay").hide();
		})
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
