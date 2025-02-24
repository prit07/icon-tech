$(document).ready(function () {
  



    /*----ISOTOP JS-----*/

    if (('.portfolio-items').length > 0) {
        var $container = $('.portfolio-items');
        var $filter = $('#portfolio-filter');
        //$container.isotope({
        //    filter: '*',
        //    layoutMode: 'masonry',
        //    animationOptions: {
        //        //duration: 750,
        //        easing: 'linear'
        //    }
        //});
        $filter.find('a').on("click", function () {
            var selector = $(this).attr('data-filter');
            $filter.find('a').removeClass('active');
            $(this).addClass('active');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    easing: 'linear',
                    queue: false,
                    touchSensitivity: 2,
                }
            });
            return false;
        });
    }








});