$(document).ready(function(){
	/* menu js start*/
	$("#categories-toggle-btn, .categories-overlay-bg").click(function(e) {
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
		$(".categories-toggle-btn").toggleClass("open");
		$("#categories-sidebar-wrapper").toggleClass("categories-menu-active");
		$('.categories-overlay-bg').toggleClass('categories-bg-active');
		$('body').toggleClass('open-nav');
	});
})