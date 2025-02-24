$(document).ready(function(){
	$('.modal-form-a').click(function(){
		var modal_id = $(this).attr('data-target');
		console.log(modal_id);
		$('.modal-show-wapper').modal('hide');
		$(modal_id).modal('show');
	})

})