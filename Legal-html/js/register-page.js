$(document).ready(function(){
	// Claim your profile modal popup
	$('.claim-your-profile-btn').click(function(){
		var modal_id = $(this).attr('data-target');
		$('.cyp-modal-wapper').modal('hide');
		$(modal_id).modal('show');
	})
})