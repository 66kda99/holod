// JavaScript Document
jQuery(document).ready(function ($) {	
	
	// TOOLTIP ON TECH-MENU
	$(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
	
	// MOBILE MENU BUTTON
	$('.menu-block').click(
	    function(){
			$(this).toggleClass('m-close m-open');
			$('.mobile-menu').toggleClass('mb-close mb-open');
			$('body').toggleClass('mmb-close mmb-open');
	    }
	);
	
	//HEADER HEIGHT
 	var mediaQueryMob = window.matchMedia('(max-width: 767px)');
	//for mobile
 	if (mediaQueryMob.matches) {
		var $ptheight = $('.phone-time').height();
		$('.tm-line').appendTo('.mobile-menu');
		$('.mobile-menu').css('padding-top', $ptheight+20);		
		$('.diagnostics-btn').appendTo('.tm-line');
		$('.socials-trigger').appendTo('.tm-line');
		var $hheight = $('header').height();
		$('.main-home').css('padding-top', $hheight);
		$('.bcvnpage').css('padding-top', $hheight);
 	}
	else {
	    var $hheight = $('header').height();
		$('.main-home').css('padding-top', $hheight);
		$('.bcvnpage').css('padding-top', $hheight);
		var $cheight = $('.main-home').height();
		$('.mh-1-col').css('min-height', $cheight);
	}
	
	// HEADER SPAN
    $('.header-blue .mod-header h1, .header-blue .mod-header h2, .header-blue .mod-header h3, .page-header h1').html( function(index, text){ return text.replace( /^(.+?)\s/, '<span class="sphblue">$1</span> ')} );
	$('.header-red .mod-header h1, .header-red .mod-header h2, .header-red .mod-header h3').html( function(index, text){ return text.replace( /^(.+?)\s/, '<span class="sphred">$1</span> ')} );
	
	// PRICE SHOW/HIDE
	$("tr.trigger-tr ~ tr").hide();
	$('.btn-price-sh').click(
	    function(){
			$("tr.trigger-tr ~ tr").toggle(500);
			$(this).text($(this).text() == 'смотреть все цены...' ? 'закрыть цены [x]' : 'смотреть все цены...');
		}
	);
	
	// ZAYAVKA FORM
	$(".zayavka-form").submit(function() {
		var formtext = $("#formzayavka").serialize();
		$.ajax({
			   type: 'POST',
			   url: '/templates/refservis/send-form-zayavka.php',
			   data: formtext,
			   success: function(data) {
				   $('.mb-focsmsg-zayavka').html(data);
			   },
			   error:  function(xhr, str){
				   $('.mb-focsmsg-zayavka').html('<div class="my-4 text-center">Извините, из-за технических проблем на сервере, что-то пошло не так. Попробуйте отправить запрос позже.</div>');
			   }
		})
		return false;
	});
	
	// TESTIMONIALS FORM
	$(".testimonials-form").submit(function() {
		var formtext = $("#formtestimonials").serialize();
		$.ajax({
			   type: 'POST',
			   url: '/templates/refservis/send-form-testimonial.php',
			   data: formtext,
			   success: function(data) {
				   $('.mb-focsmsg-testimonials').html(data);
			   },
			   error:  function(xhr, str){
				   $('.mb-focsmsg-testimonials').html('<div class="my-4 text-center">Извините, из-за технических проблем на сервере, что-то пошло не так. Попробуйте отправить запрос позже.</div>');
			   }
		})
		return false;
	});
	
	// ARROW TOP
	$(window).scroll(function(){
        if ($(this).scrollTop() > 250) {
            $('.scrollup').fadeIn();
			$('header').addClass('headerfix'); // HEADER fix
			if (mediaQueryMob.matches) { }
			else {
			    $('.tm-line').addClass('d-none');
			}
			
        } else {
            $('.scrollup').fadeOut();
			$('header').removeClass('headerfix'); // Remove HEADER fix
			if (mediaQueryMob.matches) { }
			else {
			    $('.tm-line').removeClass('d-none');
			}
        }
    });
	$('.scrollup').click(function(){
	    $("html, body").animate({ scrollTop: 0 }, 600);
		return false;
    });
	
});