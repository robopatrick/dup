// JavaScript Document

$(document).ready(function() {

	// Navigation Toggle Start
	$(".navbar-toggler").click(function (e) {
		$(this).toggleClass("open");
		e.preventDefault();
	});
	// Navigation Toggle End



// wow js start
	
// wow js end
$('.software-platform-slider').slick({
	dots: false,
		arrows: false,
		infinite: true,
		autoplay: true,
  autoplaySpeed: 2500,
		speed: 400,
		centerMode: true,
  		centerPadding: '500px',
		slidesToShow: 1,
		slidesToScroll: 1,
			responsive: [
			  {
				breakpoint: 1900,
				settings: {
				  centerPadding: '500px',
				  slidesToShow: 1,
					slidesToScroll: 1,
				}
			  },
			  {
				breakpoint: 1700,
				settings: {
				  centerPadding: '400px',
				  slidesToShow: 1,
					slidesToScroll: 1,
				}
			  },
			  
			  {
				breakpoint: 1400,
				settings: {
				  centerPadding: '350px',
				}
			  },
			  {
				breakpoint: 1300,
				settings: {
				  centerPadding: '300px',
				}
			   },
			  {
				breakpoint: 1200,
				settings: {
				  centerPadding: '250px',
				}
			  },
			  {
				breakpoint: 991,
				settings: {
				  centerPadding: '200px',
				}
			  },
			  {
				breakpoint: 767,
				settings: {
					centerPadding: '0',
					slidesToShow: 1,
				  slidesToScroll: 1,
				}
			  },
			]
});

	objectFitImages();
	$('.robo-tab-main li').click(function(){
		$('.nav-tabs').find('li').removeClass('active-tab');
		$(this).addClass('active-tab');
	});
	$(document).on('show.bs.tab', '.nav-tabs-responsive [data-toggle="tab"]', function (e) {
		var $target = $(e.target);
		var $tabs = $target.closest('.nav-tabs-responsive');
		var $current = $target.closest('li');
		var $parent = $current.closest('li.dropdown');
		$current = $parent.length > 0 ? $parent : $current;
		var $next = $current.next();
		var $prev = $current.prev();
		var updateDropdownMenu = function ($el, position) {
		  $el
			.find('.dropdown-menu')
			.removeClass('pull-xs-left pull-xs-center pull-xs-right')
			.addClass('pull-xs-' + position);
		};
	
		$tabs.find('>li').removeClass('next prev active');
		$prev.addClass('prev');
		$next.addClass('next');
		$current.addClass('active');
	
		updateDropdownMenu($prev, 'left');
		updateDropdownMenu($current, 'center');
		updateDropdownMenu($next, 'right');
	  });
});
