$(document).ready(function(){

	jQuery(".bpt-accordion-item:first-child").addClass("active").children(".bpt-accordion-content").slideDown();
	jQuery(".bpt-accordion-item .bpt-accordion-menu").on("click", function(){
		if( jQuery(this).parent().hasClass("active") ){
			jQuery(this).next().slideUp();
			jQuery(this).parent().removeClass("active");
		}
		else{
			jQuery(".bpt-accordion-content").slideUp();
			jQuery(".bpt-accordion-item").removeClass("active");
			jQuery(this).parent().addClass("active");
			jQuery(this).next().slideDown();
		}
	});

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


	// show more js start
	$('.bpt-states-list ul').each(function(){
		var LiN = $(this).find('li').length;
		if( LiN > 6){    
			$('li', this).eq(5).nextAll().hide().addClass('toggleable');    
		}  
	});
	$('.bpt-expand-toggle').on('click', function(){
		if( $(this).find('span').hasClass('less') ){    
			$(this).find('span').text('Show All').removeClass('less'); 
			$(this).find('i').css('transform', 'rotate(0deg)')   
		}else{
			$(this).find('span').text('Show Less').addClass('less'); 
			$(this).find('i').css('transform', 'rotate(180deg)')
		}
		$('li.toggleable').slideToggle(); 
	}); 

})