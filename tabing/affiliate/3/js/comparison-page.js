$(document).ready(function(){
	
	// start rating
	jQuery('.verdict-rating').each(function (event) {
		var rating = jQuery(this).attr('rating');
		jQuery(this).parent().parent().find(".start-rating-wapper").find('#verdict-rating-value').html(rating);
		var i;
		for(i = 0; (i < rating); i++)
		{
			jQuery(this).find('span.star').eq(i).addClass('filled');
		}
		if(rating % 1>0)
			jQuery(this).find('span.star').eq(i-1).addClass('half-filled');
	});

	 // faq js
	jQuery(".cp-faq-accordion-item .cp-faq-menu").on("click", function(){
		if( jQuery(this).parent().hasClass("active") ){
			jQuery(this).next().slideUp();
			jQuery(this).parent().removeClass("active");
		}
		else{
			jQuery(".cp-faq-content").slideUp();
			jQuery(".cp-faq-accordion-item").removeClass("active");
			jQuery(this).parent().addClass("active");
			jQuery(this).next().slideDown();
		}
	}); 


})