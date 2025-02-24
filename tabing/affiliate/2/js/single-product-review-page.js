$(document).ready(function(){
	 // faq js
	$(".cp-faq-accordion-item .cp-faq-menu").on("click", function(){
		if( $(this).parent().hasClass("active") ){
			$(this).next().slideUp();
			$(this).parent().removeClass("active");
		}
		else{
			$(".cp-faq-content").slideUp();
			$(".cp-faq-accordion-item").removeClass("active");
			$(this).parent().addClass("active");
			$(this).next().slideDown();
		}
	}); 


})