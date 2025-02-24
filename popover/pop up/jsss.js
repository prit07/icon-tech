$(document).ready(function () {
  $("#openPopup").click(function () {
    $("#variants-popup").css("display", "block");
  });


  $(window).click(function (event) {
    if (event.target === $("#variants-popup")[0]) {
      $("#variants-popup").css("display", "none");
    }
  });

  // jQuery(".variants-popup_accordion_item:first-child").addClass("active").children(".variants-popup_content").slideDown();
  jQuery(".variants-popup_accordion_item .variants-popup_menu").on("click", function () {
    if (jQuery(this).parent().hasClass("active")) {
      jQuery(this).next().slideUp();
      jQuery(this).parent().removeClass("active");
    }
    else {
      jQuery(".variants-popup_content").slideUp();
      jQuery(".variants-popup_accordion_item").removeClass("active");
      jQuery(this).parent().addClass("active");
      jQuery(this).next().slideDown();
    }
  });
});
