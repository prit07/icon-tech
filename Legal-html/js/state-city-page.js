$(document).ready(function(){
	// ----floatin input label in input and select
	$('.floating-control').on('change', function (e) {
		if($(this).is('select')){
			if($(this).val() === $("option:first", $(this)).val()) {
				$(this).parents('.floating-group').removeClass('focused');
			}
			else{
				$(this).parents('.floating-group').addClass('focused');
			}
		}
	});


	//  Patience areas js
	jQuery(".patience-areas-card .patience-areas-main span").on("click", function(){
		jQuery(this).find('.patience-areas-list').slideToggle();
		jQuery(this).parent().parent().toggleClass("active");
	})
	jQuery(".patience-areas-card").addClass("active").children(".patience-areas-list").slideDown()
	
	// faq js

	// jQuery(".faq-accordion-item:first-child").addClass("active").children(".faq-content").slideDown();
	jQuery(".faq-accordion-item .faq-menu").on("click", function(){
		if( jQuery(this).parent().hasClass("active") ){
			jQuery(this).next().slideUp();
			jQuery(this).parent().removeClass("active");
		}
		else{
			jQuery(".faq-content").slideUp();
			jQuery(".faq-accordion-item").removeClass("active");
			jQuery(this).parent().addClass("active");
			jQuery(this).next().slideDown();
		}
	});

})