$(document).ready(function () {
  // jQuery(".faq_accordion_item:first-child").addClass("active").children(".faq_content").slideDown();
  jQuery(".faq_accordion_item .faq_menu").on("click", function () {
    if (jQuery(this).parent().hasClass("active")) {
      jQuery(this).next().slideUp();
      jQuery(this).parent().removeClass("active");
    }
    else {
      jQuery(".faq_content").slideUp();
      jQuery(".faq_accordion_item").removeClass("active");
      jQuery(this).parent().addClass("active");
      jQuery(this).next().slideDown();
    }
  });

})