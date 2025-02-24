 $(document).ready(function(){
 	let lTB = "";
 	let lTA = "";

 	$("#h-toggle-btn, .m-overlay-bg").click(function (e) {
 		e.preventDefault();
 		$(".h-toggle-btn").toggleClass("open");
 		$("#h-sidebar-wrapper").toggleClass("h-menu-active");
 		$(".m-overlay-bg").toggleClass('h-bg-active');
 		$('body').toggleClass('open-nav');
 	});


 	// submenu hover
 	jQuery(".sub-menu-wapper").hover(function(){
 		jQuery(this).parent().parent().parent().parent().toggleClass('height-add')
 	});


 	// Cookies js 

 	$('.cookies-close-icon').click(function(){
 		$('.cookies-wapper').addClass('d-none');
 	})
 })     