$(document).ready(function() {
    $('#h-content-one-slider').owlCarousel({
        loop:true,
        margin:20,
        dots:true,
        nav:false,
        autoplay:true,
        animateOut: 'slideOutUp',
        center:true
      });

      $(".btn-r-m a").click(function(){
        $(".slider-content").slideToggle()
        $(this).toggleClass("collapsed");

        if ($(this).hasClass("collapsed")) {
          $(this).html("Close");
        } else {
            $(this).html("Read More");
        }
      });

      var call = 0;

 function active3(){
  $("#sbcomplete").animate({
    width: "100%"
  });
  $("#sbcirca3").addClass("active");
  $("p.level").css("display","none");
  $("p.level11").css("display","block");
  $(".human-verification-text").css("display","block");
  $(".logo-content-last").css("display","none");
 }     

      function keyGenerate(){
            
        var key = "";
        
        var listCar = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
        
        for(var nb=0; nb<23; nb++){
          if(key.length == 5 || key.length == 11 || key.length == 17){
            key += '-'
          }
          else if(key.length == 18 || key.length == 19 || key.length == 20 || key.length == 21 || key.length == 22){
            key += 'X'	
          }
          else{
            //key += String.fromCharCode(Math.round((Math.random()*(90-48)))+48);
            key += listCar[Math.floor(Math.random()*listCar.length)];
          }
        }
  
        var resultKey = document.getElementById("numbers");
        var counter = 0;
        var oldString = "";
        var interval = setInterval(function(){
            wordGenerator();
             if(!counter){
               clearInterval(interval);
             }
        }, 90);
        
        function wordGenerator() {
          var returnedString = "";
          counter = 0;
          
          var listCar = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
          
          for(var i=0; i<key.length; i++) {
            if(!oldString.length || oldString.charAt(i) != key.charAt(i)){
              
              if(key.charAt(i) == "-"){
                var letter = "-";
              }
              else {
                var letter = listCar[Math.floor(Math.random()*listCar.length)];	
              }
              counter ++;
            }else{
                var letter = key.charAt(i);
            }
            returnedString += letter;
          }
          oldString = returnedString;
          resultKey.innerHTML=returnedString;   
          
          if(resultKey.innerHTML == key){
            call += 1;
            
            if(call == '1'){
              active3();
            }
            else{
              
            }
            
          }
          else{
            
          }
          return false;
        }
        
      }

$(".gift-card").click(function(){
  $(this).css("opacity","0");

  $(this).parents().find(".psn-overlay").addClass("active");


  setTimeout(
    function () {
      $("p.level").css("display","none");
      $("p.level2").css("display","block");
    }, 1300
  );
  setTimeout(
    function () {
      $("p.level").css("display","none");
      $("p.level3").css("display","block");
    }, 2600
  );
  setTimeout(
    function () {
      $("p.level").css("display","none");
      $("p.level4").css("display","block");
    }, 3900
  );
  setTimeout(
    function () {
      $("p.level").css("display","none");
      $("p.level5").css("display","block");
    }, 5200
  );
  setTimeout(
    function () {
      $("p.level").css("display","none");
      $("p.level6").css("display","block");
    }, 6500
  );
  setTimeout(
    function () {
      $("p.level").css("display","none");
      $("p.level7").css("display","block");
    }, 7800
  );
  setTimeout(
    function () {
      $("p.level").css("display","none");
      $("p.level8").css("display","block");
    }, 9800
  );
  setTimeout(
    function () {
      $("p.level").css("display","none");
      $("p.level9").css("display","block");
    }, 11000
  );

  setTimeout(
    function () {
      $("#sbcomplete").animate({
        width: "50%"
      });
    }, 11500
  );
  setTimeout(
    function () {
      $("#sbcomplete").animate({
        width: "25%"
      });
    }, 3000
  );
  
  setTimeout(
    function () {
      $("#sbcirca2").addClass("active");
      keyGenerate();	
      $("p.level").css("display","none");
      $("p.level10").css("display","block");
    }, 12000
  );



})

      


});