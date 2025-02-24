$(document).ready(function(){
	// trending toggle
	$('.trending-list-right').click(function(){
		$(this).parent().toggleClass('trending-list-active')
	});	

	// Our Facts section js start
	jQuery('.count').countUp();
	// Our Facts section js end

	// categories tab js
	jQuery(".categories-ul ul li a").click(function () {
		var value = jQuery(this).attr('data-filter');
		console.log(value);

		if (value == "all") {
			jQuery('.filter').show('1000');
		} else {
			jQuery(".filter").not('.' + value).hide('3000');
			jQuery('.filter').filter('.' + value).show('3000');
		}

		jQuery(".categories-ul ul li a").removeClass("active-1");
		jQuery(this).addClass("active-1");
	});
	jQuery(".categories-ul #all").addClass("active-1");
})     