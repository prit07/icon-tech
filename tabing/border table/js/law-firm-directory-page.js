$(document).ready(function(){

	// tab js

	$('.lawyer-tab-a').click(function(){  
		$(".lawyer-tab").removeClass('lawyer-tab-active');
		$(".lawyer-tab[data-id='"+$(this).attr('data-id')+"']").addClass("lawyer-tab-active");
		$(".lawyer-tab-a").removeClass('lawyer-active-a');
		$(this).parent().find(".lawyer-tab-a").addClass('lawyer-active-a');
	});
});