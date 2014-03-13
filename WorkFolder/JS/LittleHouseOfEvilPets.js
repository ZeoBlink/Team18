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

			//position the preview box to top
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
		
		//preview when cat products clicked
		$(".cat#product1").click(function(){
			$(".cat>.product-preview#product1-preview").show();
		});
		$(".cat#product2").click(function(){
			$(".cat>.product-preview#product2-preview").show();
		});
		$(".cat#product3").click(function(){
			$(".cat>.product-preview#product3-preview").show();
		});
		$(".cat#product4").click(function(){
			$(".cat>.product-preview#product4-preview").show();
		});
		$(".cat#product5").click(function(){
			$(".cat>.product-preview#product5-preview").show();
		});
		$(".cat#product6").click(function(){
			$(".cat>.product-preview#product6-preview").show();
		});

		//preview when other products clicked
		$(".other#product1").click(function(){
			$(".other>.product-preview#product1-preview").show();
		});
		$(".other#product2").click(function(){
			$(".other>.product-preview#product2-preview").show();
		});
		$(".other#product3").click(function(){
			$(".other>.product-preview#product3-preview").show();
		});

		//removing items from cart
		$(".remove").click(function(){
			//show overlay
			$("#overlay").show();
			//position the confirm box to middle
			var screenMid = $(window).height()/2 - $(".confirm").height();
			$(".confirm").css('top', screenMid);
		});

		$("#cart-item1>.remove").click(function(){
			$("#confirm1").show();
		});
		$("#cart-item2>.remove").click(function(){
			$("#confirm2").show();
		});
		$("#cart-item3>.remove").click(function(){
			$("#confirm3").show();
		});

		$(".no").click(function(){
			$(".confirm").hide();
			$("#overlay").hide();
		});

		$("#confirm1>.yes").click(function(){
			$("#cart-item1").remove();
			$(".confirm").hide();
			$("#overlay").hide();
		});
		$("#confirm2>.yes").click(function(){
			$("#cart-item2").remove();
			$(".confirm").hide();
			$("#overlay").hide();
		});
		$("#confirm3>.yes").click(function(){
			$("#cart-item3").remove();
			$(".confirm").hide();
			$("#overlay").hide();
		});

		//hide preview and overlay when clicking outside preview window
		$("#overlay").click(function(){
				$(".product-preview").hide();
				$(".confirm").hide();
				$("#overlay").hide();
		})
	}

	//adding items to cart
	$(".add-to-cart").click(function(){
		var content = '<div class="cart-product"> <img src="../Pictures/Dog1.jpg" height="20" width="25"> Product </div>';
		$("#cart").append(content);
	});
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
