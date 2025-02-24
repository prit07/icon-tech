$(document).ready(function () {
    $('.descripcion-tabs li').click(function () {
        $('.descripcion-tabs li').removeClass('active');
        $('.content').removeClass('active');
        $('.descripcion-imh').removeClass('active');
        $('.dot').removeClass('active');

        var tid = $(this).attr('tab');
        $(this).addClass('active');
        $('#' + tid).addClass('active');

        // Show the corresponding image and activate the dot
        var index = $(this).index(); // Get the index of the clicked tab
        $('.col-descrip-img img').removeClass('active').eq(index).addClass('active');
        $('.col-descrip-dots .dot').eq(index).addClass('active');
    });
});
