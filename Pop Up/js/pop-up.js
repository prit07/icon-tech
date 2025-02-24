jQuery(document).ready(function () {

    jQuery('.pop_up_wapper_btn, .ver-overlay-bg  ').click(function(){
		jQuery('.pop_up_wapper').toggleClass('pop_up_wapper_open')
        jQuery('.ver-overlay-bg').toggleClass('ver-bg-active')
        jQuery('body').toggleClass('ver-open-nav')
	})

	// close btn
	jQuery('#close_pop_up , ver-overlay-bg').click(function () {
        jQuery('.pop_up_wapper').removeClass('pop_up_wapper_open')
        jQuery('.ver-overlay-bg').removeClass('ver-bg-active')
	  });
});