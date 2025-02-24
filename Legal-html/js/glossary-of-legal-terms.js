$(document).ready(function(){
	var scrollLink = jQuery('.glossary-nav a');
	scrollLink.click(function(e) {
		e.preventDefault();
		jQuery('body,html').animate({
			scrollTop: jQuery(this.hash).offset().top - 60
		}, 1000 );
	});
	jQuery(window).scroll(function() {
		var scrollbarLocation = jQuery(this).scrollTop();
		scrollLink.each(function() {
			var sectionOffset = jQuery(this.hash)?.offset()?.top - 60;
			if ( sectionOffset <= scrollbarLocation ) {
				jQuery(this).addClass('active');
				jQuery(this).siblings().removeClass('active');
			}
		});
	});

	/* glossary content js end */


	
})
