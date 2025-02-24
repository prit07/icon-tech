$(document).ready(function(){
	// tab js

	$('.lpm-tabs li').click(function(){
		$('.lpm-tabs li').removeClass('active');
		$('.lpm-content').removeClass('active');
		var tid=$(this).attr('tab');
		$(this).addClass('active');
		$(this).parent().parent().parent().toggleClass('lpm-width');
		$('#' +tid).addClass('active');
	});

	//  img upload js
	function readURL(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function(e) {
				$('.lpm-user-img img').attr('src', e.target.result);
			}
			reader.readAsDataURL(input.files[0]);
		}
	}
	$("#file").change(function() {
		readURL(this);
	});

	// Feature your profile form modal popup

	$('.fyp-modal-link').click(function(){
		var modal_id = $(this).attr('data-target');
		console.log(modal_id);
		$('.fyp-modal-wapper').modal('hide');
		$(modal_id).modal('show');
	})
	
})