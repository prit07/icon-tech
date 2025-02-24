$(document).ready(function(){

	$('.lawyer-profile-bottom-v').click(function(){
		$(this).toggleClass('active');
		$('.lawyer-profile-right').toggleClass('active');
	})

	/* rating js start*/
	$('.lawyer-profile-stars-rating').each(function (event) {
		var rating = $(this).attr('rating');
		var i;
		for(i = 0; (i < rating); i++) {
			$(this).find('span.star').eq(i).addClass('filled');
		}
		if(rating % 1>0)
			$(this).find('span.star').eq(i-1).addClass('half-filled');
	});
	/* rating js end */

	// tab js

	$('.lawyer-tab-a').click(function(){  
		$(".lawyer-tab").removeClass('lawyer-tab-active');
		$(".lawyer-tab[id='"+$(this).attr('data-id')+"']").addClass("lawyer-tab-active");
		$(".lawyer-tab-a").removeClass('lawyer-active-a');
		$(this).parent().find(".lawyer-tab-a").addClass('lawyer-active-a');

		var tid=$(this).attr('data-id');
		console.log(tid);
		if (tid == 'overview'){
			$('#overview').parent().parent().addClass('overview-width');
			$('.lawyer-sln-wapper').addClass('sln-active');
		} else {
			$('#overview').parent().parent().removeClass('overview-width');
			$('.lawyer-sln-wapper').removeClass('sln-active');
		}
	});

	// text showmore js
	$('[data-show="more"]').on('click', function(event) {
		event.preventDefault();
		if ( $(this).attr('more-collapse') === 'false' ) {     
			$(this).attr('more-collapse', 'true'); 
			$(this).prev('.more-text').removeClass('hide');
			$(this).text('less');
		}  else {
			$(this).text('more');
			$(this).attr('more-collapse', 'false'); 
			$(this).prev('.more-text').addClass('hide');
		}  
	});   


	/* reviews rating js start*/
	$('.lawyer-reviews-stars-rating, .sln-content-stars-rating').each(function (event) {
		var rating = $(this).attr('rating');
		var i;
		for(i = 0; (i < rating); i++) {
			$(this).find('span.star').eq(i).addClass('filled');
		}
		if(rating % 1>0)
			$(this).find('span.star').eq(i-1).addClass('half-filled');
	});


	// Write review start hover js

	jQuery('#stars li ').on('mouseover', function(){
		var onStar = parseInt(jQuery(this).data('value'), 10);
		jQuery(this).parent().children('li.star').each(function(e){
			if (e < onStar) {
				jQuery(this).addClass('hover');
			}
			else {
				jQuery(this).removeClass('hover');
			}
		});    
	}).on('mouseout', function(){
		jQuery(this).parent().children('li.star').each(function(e){
			jQuery(this).removeClass('hover');
		});
	});
	jQuery('#stars li').on('click', function(){
		var onStar = parseInt(jQuery(this).data('value'), 10);
		console.log(onStar);
		var stars = jQuery(this).parent().children('li.star');
		for (i = 0; i < stars.length; i++) {
			jQuery(stars[i]).removeClass('selected');
		}
		for (i = 0; i < onStar; i++) {
			jQuery(stars[i]).addClass('selected');
		}
	});


	// Claim your profile modal popup
	$('.claim-profile p').click(function(){
		var modal_id = $(this).attr('data-target');
		$('.cyp-modal-wapper').modal('hide');
		$(modal_id).modal('show');
	})

});