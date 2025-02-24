$(document).ready(function(){
	/* rating js start*/
	$('.content-stars-rating').each(function (event) {
		var rating = $(this).attr('rating');
		$(this).parent().parent().find('#content-rating-table').html(rating);
		var i;
		for(i = 0; (i < rating); i++) {
			$(this).find('span.star').eq(i).addClass('filled');
		}
		if(rating % 1>0)
			$(this).find('span.star').eq(i-1).addClass('half-filled');
	});
	/* rating js end */

	// tab js
	$('.browse-tabs li').click(function(){
		$('.browse-tabs li').removeClass('active');
		$('.search-content').removeClass('active');
		var tid=$(this).attr('tab');
		$(this).addClass('active');
		$('#' +tid).addClass('active');

		if (tid == 'others'){
			$('#others').parent().parent().parent().addClass('others-shape');
		} else {
			$('#others').parent().parent().parent().removeClass('others-shape');
		}

	});



})