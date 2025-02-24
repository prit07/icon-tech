$(document).ready(function(){
	/* rating js start*/
	$('.about-reviews-stars-rating').each(function (event) {
		var rating = $(this).attr('rating');
		var i;
		for(i = 0; (i < rating); i++) {
			$(this).find('span.star').eq(i).addClass('filled');
		}
		if(rating % 1>0)
			$(this).find('span.star').eq(i-1).addClass('half-filled');
	});
	/* rating js end */

	/*Legal Guides js*/

	$(".legal-guides .Injury-Law-card-wapper").slice(0, 4).show();
	$("#legal-guides").on("click", function(e){
		e.preventDefault();
		$(".legal-guides .Injury-Law-card-wapper:hidden").slice(0, 4).slideDown();
		if($(".legal-guides .Injury-Law-card-wapper:hidden").length === 0) {
			$("#legal-guides").remove();
		}
	});	

	/*Legal Guides js*/

	$(".legal-research-card .Injury-Law-card-wapper").slice(0, 4).show();
	$("#legal-research-card").on("click", function(e){
		e.preventDefault();
		$(".legal-research-card .Injury-Law-card-wapper:hidden").slice(0, 4).slideDown();
		if($(".legal-research-card .Injury-Law-card-wapper:hidden").length === 0) {
			$("#legal-research-card").remove();
		}
	});	

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