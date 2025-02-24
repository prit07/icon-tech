$(document).ready(function () {

  $('.tabs li').click(function () {
    $('.tabs li').removeClass('active');
    $('.tab-rg-content').removeClass('active');
    var tid = $(this).attr('tab');
    $(this).addClass('active');
    $('#' + tid).addClass('active');
  });

  $(".toggle-password").click(function () {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  // $(".toggle-password-c").click(function() {

  //   $(this).toggleClass("fa-eye fa-eye-slash");
  //   var input = $($(this).attr("toggle"));
  //   if (input.attr("type") == "password") {
  //     input.attr("type", "text");
  //   } else {
  //     input.attr("type", "password");
  //   }
  // });
});