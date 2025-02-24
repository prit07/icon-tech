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

    $(".legal-research-card-wapper .legal-col").slice(0, 4).show();
    $("#legal-research-btn").on("click", function(e){
        e.preventDefault();
        $(".legal-research-card-wapper .legal-col:hidden").slice(0, 4).slideDown();
        if($(".legal-research-card-wapper .legal-col:hidden").length === 0) {
            $("#legal-research-btn").remove();
        }
    });    

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
    })
});
