/*
 * Author: ArtStyles Brands (ArtTemplate / ArtIcons)
 * URL: http://themeforest.net/user/artstyles
 * Template Name: FORZO
 * Version: 1.1
*/

(function($) {
	"use strict";
	
	
	/*-----------------------------------------------------------------
	  Detect device mobile
	-------------------------------------------------------------------*/
	
	
    var isMobile = false; 

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	  	$('html').addClass('touch');
	  	isMobile = true;
	}
	else{
		$('html').addClass('no-touch');
		isMobile = false;
	}


	/*-----------------------------------------------------------------
	  Loader
	-------------------------------------------------------------------*/

	
    $(window).on('load', function(){
		$('.loading').fadeOut(600);
	});


	/*-----------------------------------------------------------------
	  scrollSpeed
	-------------------------------------------------------------------*/

	
	$(function() { 
        $.scrollSpeed(100, 800);
    });

			
	/*-----------------------------------------------------------------
	  Hamburger
	-------------------------------------------------------------------*/
	

    $('.hamburger').on('click', function() {
        $(this).toggleClass('is_active');
    });

	
    /*-----------------------------------------------------------------
	  Collapse nav mobile
	-------------------------------------------------------------------*/


    $('.nav__v1 .dropdown').on('show.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });
    $('.nav__v1 .dropdown').on('hide.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });


	/*-----------------------------------------------------------------
	  Fixed header
	-------------------------------------------------------------------*/
	
	
    var header=$('.top:not(.navbar-fixed)');
	
    $('.top').affix({
	    offset: {
	        top: 1
	    }
	});

	$('.top').on('affix.bs.affix', function() {
		if (!header.hasClass('affix')){
			header.addClass('animated slideInDown');
		}
	});

	$('.top').on('affix-top.bs.affix', function() {
	  	header.removeClass('animated slideInDown');
	});

	
	/*-----------------------------------------------------------------
	  Snap Menu
	-------------------------------------------------------------------*/	

	
    function SVGDDMenu( el, options ) {
        this.el = el;
        this.init();
    }
    SVGDDMenu.prototype.init = function() {
        this.trigger = this.el.querySelector( '.hamburger' );
        this.shapeEl = this.el.querySelector( '.menu__wrap .morph-shape' );

        var s = Snap( this.shapeEl.querySelector( 'svg' ) );
        this.pathEl = s.select( 'path' );
        this.paths = {
            reset : this.pathEl.attr( 'd' ),
            open : this.shapeEl.getAttribute( 'data-morph-open' ),
            close : this.shapeEl.getAttribute( 'data-morph-close' )
        };
        this.isOpen = false;
        this.initEvents();
    };
    SVGDDMenu.prototype.initEvents = function() {
        this.trigger.addEventListener( 'click', this.toggle.bind(this) );
    };
    SVGDDMenu.prototype.toggle = function() {
        var self = this;
        if( this.isOpen ) {
            classie.remove( self.el, 'menu_open' );
        }
        else {
            classie.add( self.el, 'menu_open' );
        }
        this.pathEl.stop().animate( { 'path' : this.paths.open }, 400, mina.easeinout, function() {
            self.pathEl.stop().animate( { 'path' : self.paths.reset }, 1000, mina.elastic );
        });
        this.isOpen = !this.isOpen;	
    };
    new SVGDDMenu( document.querySelector( 'body' ) );

	
    /*-----------------------------------------------------------------
	  Isotope
	-------------------------------------------------------------------*/

      
	var $photoColumn4=$('.portfolio_column_4').isotope({
        itemSelector: '.item__portfolio',
        layoutMode: 'masonry',
		transitionDuration: '0.8s',
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
        },
		masonry: {
            //gutter: 30,
            //isFitWidth: true,
            columnWidth: function( containerWidth ) {
                return containerWidth /4;
            }(), 
            isAnimated: true
        }
    });
	$photoColumn4.imagesLoaded().progress( function() {
        $photoColumn4.masonry ({
            //gutter: 30,
            //isFitWidth: true,
            columnWidth: function( containerWidth ) {
                return containerWidth /4;
            }(), 
            isAnimated: true
		});
    });

	var $photoBase=$('.portfolio_base').isotope({
        itemSelector: '.item__portfolio',
        layoutMode: 'masonry',
		transitionDuration: '0.8s',
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
        }
    });
	$photoBase.imagesLoaded().progress( function() {
        $photoBase.masonry ();
    });
	
	var $photoFixed=$('.portfolio_fixed').isotope({
        itemSelector: '.item__portfolio',
        layoutMode: 'masonry',
		transitionDuration: '0.8s',
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
        },
		masonry: {
            gutter: 30,
            isFitWidth: true
        }
    });
	$photoFixed.imagesLoaded().progress( function() {
        $photoFixed.masonry ({
            gutter: 30,
            isFitWidth: true
		});
    });
	
	var $photoCreative=$('.portfolio_creative').isotope({
        itemSelector: '.item__portfolio',
        layoutMode: 'masonry',
		transitionDuration: '0.8s',
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
        },
		masonry: {
            gutter: 100,
            isFitWidth: true
        }
    });
	$photoCreative.imagesLoaded().progress( function() {
        $photoCreative.masonry ({
		    gutter: 100,
            isFitWidth: true
		});
    });
	
	$('.filter__items li a').on('click', function() {
		$('.filter__items .active').removeClass('active');
		$(this).closest('li').addClass('active');
		var selector = $(this).attr('data-filter');
		$('.grid__portfolio').isotope({
			filter: selector
		});
		return false;
	});
	
    var $newsGrid=$('.grid__news').isotope({
        itemSelector: '.item__news',
        layoutMode: 'masonry',
		transitionDuration: '0.8s',
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
        },
		masonry: {
            gutter: 30,
            //isFitWidth: true
        }
    });
	$newsGrid.imagesLoaded().progress( function() {
        $newsGrid.masonry ({
		    gutter: 30,
            //isFitWidth: true
		});
    });
	

	/*-----------------------------------------------------------------
	  Jarallax
	-------------------------------------------------------------------*/		

	
    $('._scroll').jarallax({
		speed: 0.6,
        type: 'scroll'
    });	

	$('._scale').jarallax({
		speed: 0.4,
        type: 'scale'
    });	
	
	
	/*-----------------------------------------------------------------
	  Main Slider
	-------------------------------------------------------------------*/	

	
	var owlSlider = $('.hero__slider');
	
	owlSlider.owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        smartSpeed: 700,
		autoplaySpeed: 700,
		navSpeed: 700,
		nav: true,
		dots: true,
		autoplay: true,
		touchDrag: true,
		rtl: true,
		navText: ["<i class='fa fa-long-arrow-right' aria-hidden='true'></i>","<i class='fa fa-long-arrow-left' aria-hidden='true'></i>"]
    });
	
	// add animate.css class(es) to the elements to be animated
    function setAnimation ( _elem, _InOut ) {
        var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

        _elem.each ( function () {
            var $elem = $(this);
            var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

            $elem.addClass($animationType).one(animationEndEvent, function () {
                $elem.removeClass($animationType);
            });
        });
    }

    // Fired before current slide change
    owlSlider.on('change.owl.carousel', function(event) {
        var $currentItem = $('.owl-item', owlSlider).eq(event.item.index);
        var $elemsToanim = $currentItem.find("[data-animation-out]");
        setAnimation ($elemsToanim, 'out');
    });

    // Fired after current slide has been changed
    owlSlider.on('changed.owl.carousel', function(event) {
        var $currentItem = $('.owl-item', owlSlider).eq(event.item.index);
        var $elemsToanim = $currentItem.find("[data-animation-in]");
        setAnimation ($elemsToanim, 'in');
    })

	
	/*-----------------------------------------------------------------
	  Team Carousel
	-------------------------------------------------------------------*/	

	
	$('.team__carousel').owlCarousel({
        center: true,
        items: 1,
        loop: true,
        margin: 80,
		//autoWidth: true,
		nav: false,
		dots: true,
		autoplay: true,
		touchDrag: false,
		rtl: true,
		smartSpeed: 850,
        responsive: {
            0: {
                items: 1,
				margin: 15
            },
			580: {
				items: 1,
				margin: 30,
				//autoWidth: false,
			},
			768: {
				items: 1,
				margin: 80,
				autoWidth: true,
			},
			900: {
				autoWidth: true,
			}
        }
    });

	
	/*-----------------------------------------------------------------
	  Autoresize textarea
	-------------------------------------------------------------------*/	
	

    $('textarea').each(function(){
        autosize(this);
    });


	/*-----------------------------------------------------------------
	  Anchor scroll
	-------------------------------------------------------------------*/	
	

	$('a[href^="!#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });


	/*-----------------------------------------------------------------
	  Like
	-------------------------------------------------------------------*/

	
    var animated = false;
	
    $('.liked__box').on('click', function() {
		$(this).toggleClass('is_liked');
        if(!animated){
            $(this).addClass('animating_liked').removeClass('animating_unliked');
            animated = true;
        } else {
            $(this).removeClass('animating_liked').addClass('animating_unliked');
            animated = false;
        }
    });
	
    var countLike = 0;

    $('.liked__box').on('click', function() {
        countLike++;
        $(this).find('.like-count').html(countLike);
    });


	/*-----------------------------------------------------------------
	  PhotoSwipe
	-------------------------------------------------------------------*/


    var containerGallery = [];

    $('.photoswipe').find('figure').each(function() {
        var $link = $(this).find('a'),
        item = {
            src: $link.attr('href'),
            w: $link.data('width'),
            h: $link.data('height'),
            title: $link.data('caption')
        };
        containerGallery.push(item);
    });

    $('a.open_photo').on('click', function(event) {
        event.preventDefault();
        var $pswp = $('.pswp')[0],
        options = {
            index: $(this).parent('figure').index(),
            bgOpacity: 1,
            showHideOpacity: true,
			history: false,
			mouseUsed: true,
			closeOnScroll: false
        };

        var gallery = new PhotoSwipe($pswp, PhotoSwipeUI_Default, containerGallery, options);
        gallery.init();
    });


    /*-----------------------------------------------------------------
	  Skrollr
	-------------------------------------------------------------------*/

	
    var s=skrollr.init({
        forceHeight:false,

        mobileCheck: function() {
            return false;
        }
    });


    /*-----------------------------------------------------------------
	  Waypoint
	-------------------------------------------------------------------*/

	
	$('.reveal_box').waypoint(function() {
        $(this.element).addClass('reveal')
    }, {
        offset: '86%'
    });

	
	/*-----------------------------------------------------------------
	  Stick
	-------------------------------------------------------------------*/

	
    function activeStickyKit() {
        $('.styky_col').stick_in_parent({
			offset_top: 120,
            parent: '.styky_container'
        });

        $('.styky_col')
        .on('sticky_kit:bottom', function(e) {
            $(this).parent().css('position', 'static');
        })
        .on('sticky_kit:unbottom', function(e) {
            $(this).parent().css('position', 'relative');
        });
    };
    activeStickyKit();

    function detachStickyKit() {
        $('.styky_col').trigger("sticky_kit:detach");
    };

    var screen = 768;

    var windowHeight, windowWidth;
    windowWidth = $(window).width();
    if ((windowWidth < screen)) {
        detachStickyKit();
    } else {
        activeStickyKit();
    }

    function windowSize() {
        windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
        windowWidth = window.innerWidth ? window.innerWidth : $(window).width();

    }
    windowSize();

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    $(window).resize(debounce(function(){
        windowSize();
        $(document.body).trigger("sticky_kit:recalc");
        if (windowWidth < screen) {
            detachStickyKit();
        } else {
            activeStickyKit();
        }
    }, 250));

	
	/*-----------------------------------------------------------------
	  objectFit
	-------------------------------------------------------------------*/
	
	objectFitImages();
	

	/*-----------------------------------------------------------------
	  Contacts form
	-------------------------------------------------------------------*/
	

    $("#contactForm").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError();
            submitMSG(false, "Did you fill in the form properly?");
        } else {
            // everything looks good!
            event.preventDefault();
            submitForm();
        }
    });

    function submitForm(){
        // Initiate Variables With Form Content
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();

        $.ajax({
            type: "POST",
            url: "php/form-contact.php",
            data: "name=" + name + "&email=" + email + "&message=" + message,
            success : function(text){
                if (text == "success"){
                    formSuccess();
                } else {
                    formError();
                    submitMSG(false,text);
                }
            }
        });
    }

    function formSuccess(){
        $("#contactForm")[0].reset();
        submitMSG(true, "Message Submitted!");
    }

    function formError(){
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass();
        });
    }

    function submitMSG(valid, msg){
        if(valid){
            var msgClasses = "text-success";
        } else {
            var msgClasses = "text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }

})(jQuery);