

jQuery(function($) {
   
    var mobileItems = jQuery( '.nav-mobile .main-menu' );
    mobileItems.find( 'li.menu-item-has-children' ).append( '<i class="mobile-arrows fa fa-chevron-down"></i>' );
    jQuery(".nav-mobile .main-menu li.menu-item-has-children i.mobile-arrows").click(function() {
        if( jQuery( this ).hasClass( "fa-chevron-down" ) )
            jQuery( this ).removeClass( "fa-chevron-down" ).addClass( "fa-chevron-up" );
        else
            jQuery( this ).removeClass( "fa-chevron-up" ).addClass( "fa-chevron-down" );
    
        jQuery(this).parent().find('ul:first').slideToggle(300);
        jQuery(this).parent().find('> .mobile-arrows').toggleClass('is-open');
    });
    
    });