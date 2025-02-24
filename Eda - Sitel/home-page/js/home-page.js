jQuery(document).ready(function(){
	/* rating js start*/
	$('.content-lp-stars-rating').each(function (event) {
		var rating = $(this).attr('rating');
		$(this).parent().find('#content-lp-rating-table').html(rating);
		var i;
		for(i = 0; (i < rating); i++) {
			$(this).find('span.star').eq(i).addClass('filled');
		}
		if(rating % 1>0)
			$(this).find('span.star').eq(i-1).addClass('half-filled');
	});
	/* rating js end */
})