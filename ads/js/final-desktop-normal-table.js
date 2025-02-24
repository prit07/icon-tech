jQuery(window).on('scroll', function() {
    if (jQuery(window).scrollTop() > 113) {
        jQuery('.desktop_ads, .mobile_ads').addClass("fixed-header")
    } 
})