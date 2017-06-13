jQuery(window).load(function() {
	//-- show and hide switcher --

	jQuery('.switcher-show-hide').click(function() {
		if ( jQuery('.switcher-show-hide').hasClass('switcher-toggle') )
			{
			jQuery('.switcher-show-hide').removeClass('switcher-toggle');
			jQuery('.switcher').removeClass('opened');
		}else
		{
			jQuery('.switcher-show-hide').addClass('switcher-toggle');
			jQuery('.switcher').addClass('opened');
		}

	});

	jQuery('.switcher').click(function(e){
		e.stopPropagation();
	});



   //-- controlling the position of switcher --
	var jQueryswitcherWrappper = jQuery('.switcher-wrapper');

	jQueryswitcherWrappper.resize(function(){
		jQuery('.switcher').css({ 'right' : - jQueryswitcherWrappper.width()});
	});
	jQueryswitcherWrappper.trigger('resize');
	var emerald_gnrl_color=false;


	// Pattern
	jQuery('li[data-name=gnrl_pattern]').click(function() {
		emerald_gnrl_gnrl_pattern = jQuery(this).attr("data-value");
		if(emerald_gnrl_gnrl_pattern!=false){
			pointer_pattern(emerald_gnrl_gnrl_pattern);
		}
	});

	// General Pattern
	function pointer_pattern(pattern_style){
		// if (jQuery(".active-layout").attr("data-value") == "" || jQuery(".active-layout").attr("data-value") == "") {
			jQuery("body").css("background","url(http://ashmawi.work/banner/switch/patterns/"+pattern_style+".jpg) repeat");
		// }
	}

	// Images
	jQuery('li[data-name=gnrl_images]').click(function() {
		emerald_gnrl_gnrl_images = jQuery(this).attr("data-value");
		if(emerald_gnrl_gnrl_images!=false){
			pointer_images(emerald_gnrl_gnrl_images);
		}
	});

	// General Images
	function pointer_images(images_style){
		// if (jQuery(".active-layout").attr("data-value") == "" || jQuery(".active-layout").attr("data-value") == "") {
			jQuery("body").css("background","url(http://ashmawi.work/banner/switch/images-bg/"+images_style+".jpg)  no-repeat fixed center center / cover");
		// }
	}


	// Color
	jQuery('li[data-name=gnrl_color]').click(function() {
		emerald_gnrl_color = jQuery(this).attr("data-value");
		emerald_gnrl_color_2 = jQuery(this).attr("data-value-2");
		if(emerald_gnrl_color!=false){
			pointer_color(emerald_gnrl_color,emerald_gnrl_color_2);
		}
	});

	// General Color
	function pointer_color(color_style,color_style_2){
		 // if (color_style != "skinsColor") {
		 // 	jQuery('head').append('<style type="text/css">.push_options{background:#'+color_style_2+'}</style>');
		 // 	// jQuery(".logo img").attr("src","/images/logos/logo-"+color_style+".jpg");
		 // }else if (color_style == "skinsColor") {
		 // 	jQuery('head').append('<style type="text/css">.push_options{background:#'+color_style_2+'}</style>');
	  //     	// jQuery(".logo img").attr("src","/images/logos/logo-blue.jpg");
		 // }
		jQuery('head').append('<link rel="stylesheet" href="css/skins/'+color_style+'.css">');
	}
	var base_url = window.location.origin;

	// Theme
	// Light Or Dark
	jQuery('li[data-name=gnrl_light]').click(function() {
		emerald_gnrl_light = jQuery(this).attr("data-value");
		if(emerald_gnrl_light!=false){
			pointer_light(emerald_gnrl_light);
		}
	});

	// General Light Or Dark
	function pointer_light(light_style){
		if (light_style == "dark") {
			jQuery('head').append('<link rel="stylesheet" class="light_style" href="'+base_url+'/demo/css/lightordark/'+light_style+'.css">');
			jQuery("body").addClass("dark-s");
		}else {
			jQuery(".light_style").remove();
			jQuery("link[href='css/dark.css']").remove();
			jQuery("body").removeClass("dark-s");
		}
	}
});