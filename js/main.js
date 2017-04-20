(function($) {
var App = { init: function() { 
							   App.setHeight();	
							   App.ScrollToSomeplace();        // script resposible for smooth scrolling after clicking on menu item
							   // App.Fit_Vids();                 // responsive videos
							   App.Reviews();                  // reviews carousel
							   // App.Nivo_Lightbox();            // lightbox
							   App.Elements_animation();       // animations
							   // App.Fastclick();                // fastclick
							   App.ContactForm();                // fastclick 
							   },


	
	// Set Height
	setHeight: function() {
		navbarheight = $("#nav_bar").outerHeight()+1;
	},
	
	// Scroll To ...
	ScrollToSomeplace: function() {
	$('.go_to_home').click(function () {$.scrollTo('.hero_fullscreen',1000,{easing:'easeInOutExpo','axis':'y'});return false}); 
	
	var lastId,

	topMenu = $('.navigation_js, #mobile_menu_content');
	menuItems = topMenu.find('a');
	scrollItems = menuItems.map(function(){
		var item = $($(this).attr("href"));
		if (item.length) { return item; }
	});
 
	menuItems.click(function(e){
		var href = $(this).attr("href"),
		offsetTop = href === "#" ? 0 : $(href).offset().top-navbarheight+25;
		$('html, body').stop().animate({ scrollTop: offsetTop  }, 1000, 'easeInOutExpo');
		e.preventDefault();
	});
 
	$(window).scroll(function(){
		// Get container scroll position
		var fromTop = $(this).scrollTop()+navbarheight;

		// Get id of current scroll item
		var cur = scrollItems.map(function(){
								if ($(this).offset().top < fromTop)
								return this;
								});
		// Get the id of the current element
		cur = cur[cur.length-1];
		var id = cur && cur.length ? cur[0].id : "";

		if (lastId !== id) {
		lastId = id;
		// Set/remove active class
		// menuItems
		// .parent().removeClass("active")
		// .end().filter("[href=#"+id+"]").parent().addClass("active");
		}                   
	});
	
	},
	
	// Elements Animation
	Elements_animation: function() {
		$('#home').waypoint(function() {
			setTimeout(function(){$('.home_anim1').addClass('animated fadeInDown')},300);
			setTimeout(function(){$('.home_anim2').addClass('animated fadeIn')},500);
			setTimeout(function(){$('.home_anim3').addClass('animated fadeInUp')},700);
			setTimeout(function(){$('.home_anim4').addClass('animated fadeInUp')},1200);
			setTimeout(function(){$('.home_anim5').addClass('animated fadeInUp')},400);
			setTimeout(function(){$('.home_anim6').addClass('animated fadeInUp')},1000);
			setTimeout(function(){$('.home_anim7').addClass('animated fadeInUp')},1200);
			setTimeout(function(){$('.home_anim8').addClass('animated fadeInUp')},1400);
			setTimeout(function(){$('.home_anim9').addClass('animated fadeInUp')},1600);
			setTimeout(function(){$('.home_anim10').addClass('animated fadeInUp')},2000);
		}, { offset: '10%' });
	
		$('#about').waypoint(function() {
			setTimeout(function(){$('.more_info_anim1').addClass('animated fadeInUp')},0);
			setTimeout(function(){$('.more_info_anim2').addClass('animated fadeInUp')},200);
			setTimeout(function(){$('.more_info_anim3').addClass('animated fadeInUp')},300);
			setTimeout(function(){$('.more_info_anim4').addClass('animated fadeInUp')},400);
			setTimeout(function(){$('.more_info_anim5').addClass('animated fadeInUp')},500);
			setTimeout(function(){$('.more_info_anim6').addClass('animated fadeInUp')},800);
			setTimeout(function(){$('.more_info_anim7').addClass('animated fadeInUp')},1200);
			setTimeout(function(){$('.more_info_anim8').addClass('animated fadeInUp')},1400);
			setTimeout(function(){$('.more_info_anim9').addClass('animated fadeInUp')},1600);
			setTimeout(function(){$('.more_info_anim10').addClass('animated fadeInUp')},2000);
		}, { offset: '50%' });
		
		
		$('#activites').waypoint(function() {
			setTimeout(function(){$('.features_anim1').addClass('animated fadeInUp')},0);
			setTimeout(function(){$('.features_anim2').addClass('animated fadeInUp')},200);
			setTimeout(function(){$('.features_anim3').addClass('animated fadeInUp')},400);
			setTimeout(function(){$('.features_anim4').addClass('animated fadeInUp')},600);
			setTimeout(function(){$('.features_anim5').addClass('animated fadeInUp')},800);
			setTimeout(function(){$('.features_anim6').addClass('animated fadeInUp')},1000);
			setTimeout(function(){$('.features_anim7').addClass('animated fadeInUp')},1200);
			setTimeout(function(){$('.features_anim8').addClass('animated fadeInUp')},1400);
			setTimeout(function(){$('.features_anim9').addClass('animated fadeInUp')},1600);
			setTimeout(function(){$('.features_anim10').addClass('animated fadeInUp')},2000);
		}, { offset: '50%' });
	
		$('#gallerie').waypoint(function() {
			setTimeout(function(){$('.screenshots_anim1').addClass('animated fadeInUp')},0);
			setTimeout(function(){$('.screenshots_anim2').addClass('animated fadeInUp')},200);
			setTimeout(function(){$('.screenshots_anim3').addClass('animated fadeInUp')},300);
			setTimeout(function(){$('.screenshots_anim4').addClass('animated fadeInUp')},400);
			setTimeout(function(){$('.screenshots_anim5').addClass('animated fadeInUp')},500);
			setTimeout(function(){$('.screenshots_anim6').addClass('animated fadeInUp')},600);
			setTimeout(function(){$('.screenshots_anim7').addClass('animated fadeInUp')},700);
			setTimeout(function(){$('.screenshots_anim8').addClass('animated fadeInUp')},800);
			setTimeout(function(){$('.screenshots_anim9').addClass('animated fadeInUp')},900);
			setTimeout(function(){$('.screenshots_anim10').addClass('animated fadeInUp')},1000);
		}, { offset: '50%' });
		
		$('#comments').waypoint(function() {
			setTimeout(function(){$('.testimonials_anim1').addClass('animated fadeInUp')},0);
			setTimeout(function(){$('.testimonials_anim2').addClass('animated fadeInUp')},200);
			setTimeout(function(){$('.testimonials_anim3').addClass('animated fadeInUp')},600);
			setTimeout(function(){$('.testimonials_anim4').addClass('animated fadeInUp')},400);
			setTimeout(function(){$('.testimonials_anim5').addClass('animated fadeInUp')},400);
			setTimeout(function(){$('.testimonials_anim6').addClass('animated fadeInUp')},600);
			setTimeout(function(){$('.testimonials_anim7').addClass('animated fadeInUp')},1200);
			setTimeout(function(){$('.testimonials_anim8').addClass('animated fadeInUp')},1400);
			setTimeout(function(){$('.testimonials_anim9').addClass('animated fadeInUp')},1600);
			setTimeout(function(){$('.testimonials_anim10').addClass('animated fadeInUp')},1800);
		}, { offset: '50%' }); 
		
		/**** for ip8 ******/
		$('#iphome').waypoint(function() {
			setTimeout(function(){$('.home_anim1').addClass('animated fadeInDown')},300);
			setTimeout(function(){$('.home_anim2').addClass('animated fadeIn')},500);
			setTimeout(function(){$('.home_anim3').addClass('animated fadeInUp')},700);
			setTimeout(function(){$('.home_anim4').addClass('animated fadeInUp')},1200);
			setTimeout(function(){$('.home_anim5').addClass('animated fadeInUp')},400);
			setTimeout(function(){$('.home_anim6').addClass('animated fadeInUp')},1000);
			setTimeout(function(){$('.home_anim7').addClass('animated fadeInUp')},1200);
			setTimeout(function(){$('.home_anim8').addClass('animated fadeInUp')},1400);
			setTimeout(function(){$('.home_anim9').addClass('animated fadeInUp')},1600);
			setTimeout(function(){$('.home_anim10').addClass('animated fadeInUp')},2000);
		}, { offset: '10%' });

		$('#history').waypoint(function() {
			setTimeout(function(){$('.features_anim1').addClass('animated fadeInUp')},200);
			setTimeout(function(){$('.features_anim2').addClass('animated fadeInDown')},200);
			setTimeout(function(){$('.features_anim3').addClass('animated fadeInRight')},500);
			setTimeout(function(){$('.features_anim4').addClass('animated fadeInLeft')},500);
			setTimeout(function(){$('.features_anim5').addClass('animated fadeInUp')},800);
			setTimeout(function(){$('.features_anim6').addClass('animated fadeInDown')},800);
			setTimeout(function(){$('.features_anim7').addClass('animated fadeInUp')},500);
			setTimeout(function(){$('.features_anim8').addClass('animated fadeInDown')},500);
			setTimeout(function(){$('.features_anim9').addClass('animated fadeInUp')},1000);
			setTimeout(function(){$('.features_anim10').addClass('animated fadeInDown')},1000);
		}, { offset: '50%' });

		$('#agenda').waypoint(function() {
			setTimeout(function(){$('.features_anim1').addClass('animated fadeInUp')},0);
			setTimeout(function(){$('.features_anim2').addClass('animated fadeInUp')},200);
			setTimeout(function(){$('.features_anim3').addClass('animated fadeInUp')},400);
			setTimeout(function(){$('.features_anim4').addClass('animated fadeInUp')},600);
			setTimeout(function(){$('.features_anim5').addClass('animated fadeInUp')},800);
			setTimeout(function(){$('.features_anim6').addClass('animated fadeInUp')},1000);
			setTimeout(function(){$('.features_anim7').addClass('animated fadeInUp')},1200);
			setTimeout(function(){$('.features_anim8').addClass('animated fadeInUp')},1400);
			setTimeout(function(){$('.features_anim9').addClass('animated fadeInUp')},1600);
			setTimeout(function(){$('.features_anim10').addClass('animated fadeInUp')},2000);
		}, { offset: '50%' });

		$('#sponsors').waypoint(function() {
			setTimeout(function(){$('.testimonials_anim1').addClass('animated fadeInUp')},0);
			setTimeout(function(){$('.testimonials_anim2').addClass('animated fadeInUp')},200);
			setTimeout(function(){$('.testimonials_anim3').addClass('animated fadeInUp')},600);
			setTimeout(function(){$('.testimonials_anim4').addClass('animated fadeInUp')},400);
			setTimeout(function(){$('.testimonials_anim5').addClass('animated fadeInUp')},400);
			setTimeout(function(){$('.testimonials_anim6').addClass('animated fadeInUp')},600);
			setTimeout(function(){$('.testimonials_anim7').addClass('animated fadeInUp')},1200);
			setTimeout(function(){$('.testimonials_anim8').addClass('animated fadeInUp')},1400);
			setTimeout(function(){$('.testimonials_anim9').addClass('animated fadeInUp')},1600);
			setTimeout(function(){$('.testimonials_anim10').addClass('animated fadeInUp')},1800);
		}, { offset: '50%' });

		$('#organizers').waypoint(function() {
			setTimeout(function(){$('.screenshots_anim1').addClass('animated fadeInUp')},0);
			setTimeout(function(){$('.screenshots_anim2').addClass('animated fadeInUp')},200);
			setTimeout(function(){$('.screenshots_anim3').addClass('animated fadeInUp')},300);
			setTimeout(function(){$('.screenshots_anim4').addClass('animated fadeInUp')},400);
			setTimeout(function(){$('.screenshots_anim5').addClass('animated fadeInUp')},500);
			setTimeout(function(){$('.screenshots_anim6').addClass('animated fadeInUp')},600);
			setTimeout(function(){$('.screenshots_anim7').addClass('animated fadeInUp')},700);
			setTimeout(function(){$('.screenshots_anim8').addClass('animated fadeInUp')},800);
			setTimeout(function(){$('.screenshots_anim9').addClass('animated fadeInUp')},900);
			setTimeout(function(){$('.screenshots_anim10').addClass('animated fadeInUp')},1000);
		}, { offset: '50%' }); 
	
	},
	
	
	// Nivo Lightbox
	Nivo_Lightbox: function() {
	
		$('#Play_Video').nivoLightbox({
			effect: 'slideDown', 
			afterHideLightbox: function(){ $('#video_modal_box iframe').attr("src", jQuery("#video_modal_box iframe").attr("src"));}   
		});	
		
		$('.mdl-card__menu a').nivoLightbox({effect: 'slideDown'});
	},

	
	// Fit Vids
	Fit_Vids: function() {
		$("#video_modal_box").fitVids();	
	},
	
	
	// Reviews Carousel
	Reviews: function() {
		$(".owl-carousel").owlCarousel({
			loop:true,
			singleItem : true,
		});	
	},
	
	Fastclick: function() {
		FastClick.attach(document.body);
	},
	


	// Contact Form
	ContactForm: function() {
		//  "use strict";
		// var options = {target: "#alert"}
		// $("#contact-form").ajaxForm(options);
	},


}

$(function() {
  App.init();
  $(window).resize(App.setHeight);
	
});

})(jQuery);