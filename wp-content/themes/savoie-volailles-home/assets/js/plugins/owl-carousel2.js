var OwlCarousel = function () {
	return {
		initOwlCarousel: function () {
			$('.owl-slider-v4').owlCarousel({
				loop: true,
				margin: 0,
				responsive: {
					300:{
						items: 1
					},
				},
				nav: true,
				dots: false,
				navText: ["<span class='fa fa-chevron-left'></span>","<span class='fa fa-chevron-right'></span>"],
				navContainerClass: 'owl-buttons',
				autoplayTimeout:3500,
				autoplayHoverPause:true
			});
			$('.owl-slider-v4-team').owlCarousel({
				loop: true,
				margin: 0,
				responsive: {
					300:{
						items: 1
					},
					500:{
						items: 2
					},
					768:{
						items: 3
					},
				},
				nav: true,
				dots: false,
				navText: ["<span class='fa fa-chevron-left'></span>","<span class='fa fa-chevron-right'></span>"],
				navContainerClass: 'owl-buttons',
				autoplayTimeout:3500,
				autoplayHoverPause:true
			});
			$('.owl-slider-v4-gallery').owlCarousel({
				loop: true,
				margin: 0,
				responsive: {
					300:{
						items: 1
					},
				},
	      nav: false,
	      dots: true,
				dotsClass: 'owl-pagination',
				dotClass: 'owl-page',
				autoplayTimeout:3500,
				autoplayHoverPause:true
			});
			$('.owl-slider-v4-gallery-2').owlCarousel({
				loop: true,
				margin: 0,
				responsive: {
					300:{
						items: 1
					},
					500:{
						items: 2
					},
					768:{
						items: 3
					},
				},
	      nav: false,
	      dots: true,
				dotsClass: 'owl-pagination',
				dotClass: 'owl-page',
				autoplayTimeout:3500,
				autoplayHoverPause:true
			});
			$('.owl-slider-v4-testo').owlCarousel({
				loop: true,
				margin: 0,
				responsive: {
					300:{
						items: 1
					},
				},
	      		nav: false,
	      		dots: true,
				dotsClass: 'owl-pagination',
				dotClass: 'owl-page',
				autoplayTimeout:3500,
				autoplayHoverPause:true
			});
            $('.owl-slider-main').owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                autoplay:true,
                autoplayTimeout:3500,
                autoplayHoverPause:true
            });

		}
	};
}();
