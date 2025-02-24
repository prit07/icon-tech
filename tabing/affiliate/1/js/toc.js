jQuery(document).ready(function() {
	
	// Table of content js start
	let e, elems,last_h2;
	elems = document.querySelectorAll('.learn-about-wapper h2, .learn-about-wapper h3')
	var sub_ul=0;
	var h2=1;var h3=1;
	for (e =0; e < elems.length; e++) {
		if (elems[e].localName === 'h2'){
			if(elems[e].innerHTML != "" && elems[e].innerHTML != "&nbsp;"){
				elems[e].setAttribute('id', 'i-scroll-'+e);
				if(e != elems.length-1){
					jQuery(".sidebar-ul").append("<li class='sub-li sb-e-"+e+"'><a href='#i-scroll-"+e+"' class='sub-a'><span>"+elems[e].innerHTML.replace(/<[^>]*>/g, "")+"</span></a><ul class='sub-of-sub' style='display:none;'></ul></li>");	
				}else{
					jQuery(".sidebar-ul").append("<li class='sub-li sb-e-"+e+"'><a href='#i-scroll-"+e+"' class='sub-a'><span>"+elems[e].innerHTML.replace(/<[^>]*>/g, "")+"</span></a><ul class='sub-of-sub' style='display:none;'></ul></li>");
				}
				last_h2=e;
				h2=h2+1;
			}
		}else if (elems[e].localName === 'h3'){
			if(elems[e].innerHTML != "" && elems[e].innerHTML != "&nbsp;"){
				elems[e].setAttribute('id', 'i-scroll-'+e);
				// 	jQuery(".sidebar-ul .sb-e-"+last-h2+" .sub-of-sub").append("<li><a href='#i-scroll-"+e+"' style='font-size:13px;'>"+elems[e].innerHTML.replace(/<[^>]*>/g, "").replace(h3+".", "")+"</a></li>");
				jQuery(".sidebar-ul .sb-e-"+last_h2+" .sub-of-sub").append("<li><a href='#i-scroll-"+e+"'><span>"+elems[e].innerHTML.replace(/<[^>]*>/g, "").replace(h3+".", "")+"</span></a></li>");
				h3=h3+1;
			}
		}
	}


	$("#m-sidebar-Wrap1 .sidebar-ul li").each(function(){
		if($(this).find('ul').children().length != 0){
			$(this).addClass("has_sub");
		}
	});

	$("#sidebar-Wrap1 .sidebar-ul li").each(function(){
		if($(this).find('ul').children().length != 0){
			$(this).addClass("has_sub");
		}
	});

	var scrollLink = jQuery('.sidebar-text li a');
	scrollLink.click(function(e) {
		e.preventDefault();
		jQuery('body,html').animate({
			scrollTop: jQuery(this.hash).offset().top
		}, 1000 );
	});
	jQuery(window).scroll(function() {
		var scrollbarLocation = jQuery(this).scrollTop();
		scrollLink.each(function() {
			var sectionOffset = jQuery(this.hash).offset().top - 80;
			if ( sectionOffset <= scrollbarLocation ) {
				jQuery(this).parent().addClass('active');
				jQuery(this).parent().find( ".sub-of-sub" ).css( "display", "block" );
				jQuery(this).parent().siblings().removeClass('active');
				jQuery(this).parent().siblings().find( ".sub-of-sub" ).css( "display", "none" );
			}
		});
	});
	// Table of content js end

	// desktop view sidebar fixed
	const getFitnessDiv = document.querySelectorAll('div');
	let sidebar_width = document.querySelector('#sidebar-Wrap1');
	// if(sidebar_width > 0){
	let sidebar_width_a = sidebar_width.getBoundingClientRect().width+'px';
	onscroll = () => {
		for (let i = 0; i < getFitnessDiv.length; i++) {
			const element = getFitnessDiv[i];
			let getPosition = element.getBoundingClientRect()
			const getSticky = element.querySelector('#sidebar-Wrap1');
			let getStickyPosition = getSticky?.getBoundingClientRect();
			let col_a = element.querySelector('.col-12');
			let col_height = col_a?.getBoundingClientRect()?.height 
			if (!!getSticky) {
				if (col_height >= getStickyPosition?.height) {
					if (getPosition.top < 0 && getPosition.bottom - 48 > getStickyPosition.height) {
						getSticky.setAttribute('style', `position:fixed;top:0;width:${sidebar_width_a}`)
					} else if (getPosition.bottom - 48 < getStickyPosition.height) {
						getSticky.setAttribute('style', `position:fixed;top:${(getPosition.bottom - 48) - getStickyPosition.height}px;width:${sidebar_width_a}`)
					} else {
						getSticky.removeAttribute('style')
					}
				}
			}
		}
	}
	// }

	// mobile view toc section show & hide js
	if (window.matchMedia("(max-width: 991px)").matches) {
		var jQuerywindow = jQuery(window);  
		var jQuerysidebar = jQuery(".lelgal-guides-section"); 
		var jQuerysidebarWidth = jQuerysidebar.innerWidth();
		var jQuerysidebarHeight = jQuerysidebar.innerHeight();   
		var jQueryfooterOffsetTop = jQuery(".fooetr-section").offset().top; 
		var jQuerysidebarOffset = jQuerysidebar?.offset();
		jQuerywindow.scroll(function() {
			if(jQuerywindow.scrollTop() > jQuerysidebarOffset?.top) {
				jQuerysidebar.addClass("m-show-div");  
			} else {
				jQuerysidebar.removeClass("m-show-div");   
			}
		}); 
	}

	// toc mobile view btn
	$('.m-view-toc-btn').click(function(){
		$(this).text(function(i, v){ return v === 'Close' ? 'Table of Contents' : 'Close' });
		$('#m-sidebar-Wrap1').toggleClass('active-a-a');
		$('body').toggleClass('open-toc');
	});

	$('#m-sidebar-Wrap1 .sidebar-text .sub-li a').click(function(){
		$(this).parent().parent().parent().parent().parent().parent().parent().find('.m-view-toc-btn').text(function(i, v){
			return v === 'Table of Contents' ? 'Close' : 'Table of Contents'
			// if($(this).parent().find('ul').children().length === 0){
			// }else{
			// 	return v === 'Close' ? 'Menu' : 'Close'
			// }
		});

		if($(this).parent().find('ul').children().length === 0){
			$('body').removeClass('open-toc');
			$('#m-sidebar-Wrap1').removeClass('active-a-a');
		}
	})

});

