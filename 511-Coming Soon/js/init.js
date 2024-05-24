// JpreLoader ------------------
	$('#wrapper').jpreLoader({
		loaderVPos: '50%',
		autoClose: true,
	}, 
	function() {
		var al = {queue:false,duration:200,easing:"easeInOutQuad"};	
		$('#wrapper').animate({"opacity":'1'},{queue:false,duration:700,easing:"easeInOutQuad"});		

		$('.about-link').animate({'margin-left':'0'},al);
		$('.contact-link').animate({'margin-right':'0'},al);
		setTimeout( function(){		
			$('.fistslide').removeClass('bc');
		},900);
	});

function initKlif() {

	"use strict";

//------------------------------init swiper-----------------------

	var mySwiper = new Swiper('.swiper-container',{
		initialSlide:1,

	});

	$('.arrow-left').on('click', function(e){
    	e.preventDefault()
   		mySwiper.swipePrev()
  	});
	
	$('.arrow-right').on('click', function(e){
		e.preventDefault()
		mySwiper.swipeNext()
	});
	
//------------------------------init countdown-----------------------

	$('.countdown').downCount({
		date: '05/10/2027', // your date
 
	});	
	
// functions ------------------	

	function showprogresss() { 
		$(".show-progress").removeClass('isDown');
		$('.fade').addClass('bc');
			setTimeout( function(){	
				$('.progress-holder').fadeIn(1000);		
			},650);				    
			$({value: 0}).animate({value: $('.num2').attr("name")}, {
				duration: 2000,
				easing:'swing',
				step: function() 
					{
						$('.num2').val(Math.ceil(this.value)).trigger('change');
					}
			})
	}
	
	function hideprogresss() { 
		$(".show-progress").addClass('isDown');
		$('.progress-holder').fadeOut(1000);	
		setTimeout( function(){	
			$('.fade').removeClass('bc');	
		},650);				    
	}
	function showform() { 
		$('.fade2').addClass('bc2');
		setTimeout( function(){	
			$('.contact-form').fadeIn(500);			
		},650);		   
	}
	function hideform() { 
		$('.contact-form').fadeOut(500);
		setTimeout( function(){	
			$('.fade2').removeClass('bc2');		
		},650);				   
	}	
	
	$('.lanch-form').on("click", function () {showform();});
	$('.close-form').on("click", function () {hideform();});
	
	$('.num').knob();
	$(".show-progress").on("click", function () {
		$(this).toggleClass('but-rotade');
		if ($(this).hasClass("isDown") ) {
			showprogresss();			
		} else {
			hideprogresss();
		}	
		return false;
	});
	
	
    //   mailchimp------------------
    $("#subscribe").ajaxChimp({
        language: "eng",
        url: "https://gmail.us1.list-manage.com/subscribe/post?u=1fe818378d5c129b210719d80&amp;id=a2792f681b"
    });
    $.ajaxChimp.translations.eng = {
        submit: "Submitting...",
        0: '<i class="fal fa-check"></i> We will be in touch soon!',
        1: '<i class="fal fa-exclamation-circle"></i> You must enter a valid e-mail address.',
        2: '<i class="fal fa-exclamation-circle"></i> E-mail address is not valid.',
        3: '<i class="fal fa-exclamation-circle"></i> E-mail address is not valid.',
        4: '<i class="fal fa-exclamation-circle"></i> E-mail address is not valid.',
        5: '<i class="fal fa-exclamation-circle"></i> E-mail address is not valid.'
    };
	
	
    //   Contact form------------------
    $("#contactform").submit(function () {
        var a = $(this).attr("action");
        $("#message").slideUp(750, function () {
            $("#message").hide();
            $("#submit").attr("disabled", "disabled");
            $.post(a, {
                name: $("#name").val(),
                email: $("#email").val(),
                comments: $("#comments").val()
            }, function (a) {
                document.getElementById("message").innerHTML = a;
                $("#message").slideDown("slow");
                $("#submit").removeAttr("disabled");
                if (null != a.match("success")) $("#contactform").slideDown("slow");
            });
        });
        return false;
    });
    $("#contactform input, #contactform textarea").keyup(function () {
        $("#message").slideUp(1500);
    });








 
	 
	$("#contact_form input, #contact_form textarea").on("keyup", function () {	
			$("#contact_form input, #contact_form textarea").css('border','1px solid #101011');
			$("#result").fadeOut(1500)			
	});		
	
	
	
	
}

// Contact submit  ----------------------------------------


 
$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">');
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});
$(document).ready(function(){
	initKlif();
});	