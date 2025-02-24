$(document).ready(function(){
	// tab js

    $('.browse-tabs li').click(function(){
        $('.browse-tabs li').removeClass('active');
        $('.content').removeClass('active');
        var tid=$(this).attr('tab');
        $(this).addClass('active');
        $('#' +tid).addClass('active');
    });

    /*Legal Guides js*/

    $(".legal-guides .Injury-Law-card-wapper").slice(0, 4).show();
    $("#legal-guides").on("click", function(e){
        e.preventDefault();
        $(".legal-guides .Injury-Law-card-wapper:hidden").slice(0, 4).slideDown();
        if($(".legal-guides .Injury-Law-card-wapper:hidden").length === 0) {
            $("#legal-guides").remove();
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


    // form-wapper js //

    $('.floating-control').on('change', function (e) {
        if($(this).is('select')){
            if($(this).val() === $("option:first", $(this)).val()) {
                $(this).parents('.floating-group').removeClass('focused');
            }
            else{
                $(this).parents('.floating-group').addClass('focused');
            }
        }
    })


});
