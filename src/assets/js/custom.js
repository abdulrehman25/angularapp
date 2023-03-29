$(document).ready(function () {
  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function () {
    $(this)
      .prev(".card-header")
      .find(".fa")
      .addClass("fa-minus")
      .removeClass("fa-plus");
  });

  // Toggle plus minus icon on show hide of collapse element
  $(".collapse")
    .on("show.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".fa")
        .removeClass("fa-plus")
        .addClass("fa-minus");
    })
    .on("hide.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".fa")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    });
});
/*accordion*/

$('#testimonial-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
	autoplay:true,
	autoplayTimeout:8500,
	autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
/*testimonials*/

$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	
	if(scroll >= 200){
		$('.primary-navbar').addClass('sticky-top');
	}
	else{
		$('.primary-navbar').removeClass('sticky-top');
	}
});/*add header cls*/

/*23 Mar 2023*/
$(document).ready(function(){
	$('.book-appointment').click(function(){
		$('.book-appointment-page').show();
		$('body').addClass('appointment-page');
	})
	
	$('.close-book-appointment-page').click(function(){
		$('.book-appointment-page').hide();
		$('body').removeClass('appointment-page');
	})
	
	$('.page1').click(function(){
		$('.step2').show().css('z-index','2');
	})
	
	$('.page2').click(function(){
		$('.step3').show().css('z-index','3');
	})
	
	$('.page3').click(function(){
		$('.step4').show().css('z-index','4');
	})
	
	$('.page4').click(function(){
		$('.step5').show().css('z-index','5');
	})
	
	$('.page5').click(function(){
		$('.step6').show().css('z-index','6');
	})
	
	$('.page6').click(function(){
		$('.step7').show().css('z-index','7');
	})
	
	$('.page7').click(function(){
		$('.step8').show().css('z-index','8');
	})
	
	$('.back1').click(function(){
		$('.step8').hide();
	})
	
	$('.back2').click(function(){
		$('.step7').hide();
	})
	
	$('.back3').click(function(){
		$('.step6').hide();
	})
	
	$('.back4').click(function(){
		$('.step5').hide();
	})
	
	$('.back5').click(function(){
		$('.step4').hide();
	})
	
	$('.back6').click(function(){
		$('.step3').hide();
	})
	
	$('.back7').click(function(){
		$('.step2').hide();
	})
})

/*function save() 
var object={
	"name":'',
	"visit_type": '',
	"appointment_reason": '',
	"appointment_date": '',
	"appointment_time": '',
	"appointment_email": '',
	"appointment_number": ''
}
*/

/*book appointment*/



