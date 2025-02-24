$(document).ready(function(){
    $("path, circle").hover(function(e) {
        $("#info-box").css("display", "block");
        $("#info-box").html($(this).data("info"));
      });
      
      $("path, circle").mouseleave(function(e) {
        $("#info-box").css("display", "none");
      });
      
      $(document)
        .mousemove(function(e) {
          $("#info-box").css("top", e.pageY - $("#info-box").height() - 35);
          $("#info-box").css("left", e.pageX - $("#info-box").width() / 2);
        })
        .mouseover();
      
      var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      if (ios) {
        $("a").on("click touchend", function() {
          var link = $(this).attr("href");
          window.open(link, "_blank");
          return false;
        });
      }
   

      
var MyDiv0;
var MyDiv1;
var MyDiv2;
var MyDiv3;
var MyDiv4;
var MyDiv5;
var MyDiv6;
var MyDiv7;
// World CLOCK JAVASCRIPT


window.onload=function(){
GetClock();
//setInterval(GetClock,1000);
}//has dependency on jquery and d3
$(document).ready(function() {

  function loadMap() {
    var $tooltip = $("#tooltip"),
      $map = $("#usa-map"), //svg jquery
      svg = document.querySelector("#usa-map"),
      $container = $('.map-container');
     
     
        var paths = d3.select(svg).selectAll('path');
        var pathAndTime = d3.select(svg).selectAll('g');
        //on resize and initial (need to account for css)

        //I just wrote my own json here to match up to 
        //classes on the svg, feel free to edit/make your own
        var classMaps = {
          "st0-BiggerGroup BiggerGroup": {
            name: "Texas",
            key: "st0-BiggerGroup BiggerGroup",
            list: ["Total Centers: 121", "Total Viewers: 3 Mil", "<a class='map-link' href='/plans-pricing#st55'>View More</a>"],
          },
          "st54-BiggerGroup BiggerGroup": {
            enable: true,
            name: "Northern California",
            key: "st54-BiggerGroup BiggerGroup",
            list: ["Total Centers: 62", "Total Viewers: 2 Mil", "<a class='map-link' href='/plans-pricing#st54'>View More</a>"],
          },
          "st55-BiggerGroup BiggerGroup": {
            name: "Southern California",
            key: "st55-BiggerGroup BiggerGroup",
            list: ["Total Centers: 121", "Total Viewers: 3 Mil", "<a class='map-link' href='/plans-pricing#st55'>View More</a>"],
          },
          "st20-BiggerGroup BiggerGroup": {
            name: "Florida",
            key: "st20-BiggerGroup",
            list: ["Total Centers: 3", "Total Viewers: 250K",MyDiv0, "<a class='map-link' target='_blank' href='https://en.wikipedia.org/wiki/Florida'>View More</a>"],
          },
          "st27-BiggerGroup BiggerGroup": {
            name: "New York",
            key: "st27-BiggerGroup BiggerGroup",
            list: ["Total Centers: 63", "Total Viewers: 2.5 Mil", "<a class='map-link' href='/plans-pricing#st27'>View More</a>"],
          },
          "st45-BiggerGroup BiggerGroup": {

            name: "New Jersey",
            key: "st45-BiggerGroup BiggerGroup",
            list: ["Total Centers: 63", "Total Viewers: 2.5 Mil", "<a class='map-link' href='/plans-pricing#st45'>View More</a>"],
          },
          "st48-BiggerGroup BiggerGroup edttime": {
            name: "Delaware",
            key: "st48-BiggerGroup BiggerGroup",
            list: ["Total Centers: 65", "Total Viewers: 1.5 Mil", "<a class='map-link' href='https://en.wikipedia.org/wiki/delaware'>View More</a>"],
          },
          "st41-BiggerGroup BiggerGroup": {
            name: "Maryland",
            key: "st41-BiggerGroup BiggerGroup",
            list: ["Total Centers: 65", "Total Viewers: 1.5 Mil", "<a class='map-link' href='/plans-pricing#st41'>View More</a>"],
          }
        };
        
        //get all the paths of the svg, for each
        paths.each(function(d, i) {

          var classSelected = d3.select(this).attr('class');
          var stateSelected = classMaps[classSelected];
          
          //check to see if the svg object is a state from our json
          //var isState = (typeof stateSelected == "object") ? true : false;
          var isState =true;
          //if state is in our json list, then
          if (isState) {
            
            //fill in color-- can put whatever you want
            //d3.select(this).style('fill', 'rgba(183, 0, 0, 0.18)');
            
            //add a glowing orb to map with js
           // var $d = $("<div></div>");
           // $d.addClass('glowing-orb').addClass(stateSelected.name.toLowerCase().replace(/\s/g, ''));
           // $container.append($d);

          }
          
          //if we hover over any location on the map, then get path and if state, fill color red
          //jquery hover, two handlers for one on mouseenter and one for mouseleave
          $(this).hover(function() {
            var path = $(this)[0];
            
            if (isState) d3.select(this).style('fill', 'rgba(55, 55, 55, 0.70)');
       
           
          }, function() {
            var path = $(this)[0];
            if (isState) d3.select(path).style('fill', '');
          }).css('cursor', 'pointer');

       /*   //on click of svg, create the tooltip
          d3.select(this).on('click', function() {
            $tooltip.hide();
            var mouse = d3.mouse(this);  //get location of mouse

            var classSelected = d3.select(this).attr('class');
            if (classSelected) {
              toolTip(classSelected, mouse);
            }

          }); */
        }); //end paths for each

        ////dave edit : on hover time font size up
        pathAndTime.each(function(d, i) {

          var classSelected = d3.select(this).attr('class');
          var stateSelected = classMaps[classSelected];
          
          //check to see if the svg object is a state from our json
          var isState = true;

          //if state is in our json list, then
          if (isState) {
            
            //fill in color-- can put whatever you want
            d3.select(this).style('fill', 'black');
            
            //add a glowing orb to map with js
           // var $d = $("<div></div>");
           // $d.addClass('glowing-orb').addClass(stateSelected.name.toLowerCase().replace(/\s/g, ''));
           // $container.append($d);

          }
          
          //if we hover over any location on the map, then get path and if state, fill color red
          //jquery hover, two handlers for one on mouseenter and one for mouseleave
          $(this).hover(function() {
            var path = $(this)[0];
            
            /* if (isState) d3.select(this).style('fill', 'rgba(183, 0, 0, 0.58)'); */
            if (isState) {
              d3.select(this).style('font-size', '50px');
              /* d3.selectAll(".stateABB").style('font-size', '0px'); */
           }
          }, function() {
            var path = $(this)[0];
            if (isState) {d3.select(this).style('font-size', '');
             /* d3.selectAll(".stateABB").style('font-size', ''); */
          }
             /* if (isState) d3.select(path).style('fill', 'rgba(183, 0, 0, 0.18)'); */
          }).css('cursor', 'pointer');

            /* on click of svg, create the tooltip */
          d3.select(this).on('click', function() {
            $tooltip.hide();
            var mouse = d3.mouse(this);  //get location of mouse

            var classSelected = d3.select(this).attr('class');
            if (classSelected) {
              toolTip(classSelected, mouse);
            }

          });
        });








        //handles tooltip creation
        function toolTip(classSel, mouse) {
          var x = mouse[0];
          x = ((x / 881) * 100); //881 was the original height of the map

          var y = (mouse[1] + 100) / 1140 * 100;  //original width of the map
          
          //again if the class matches up to our json list, then we want to do something
          var stateSelected = classMaps[classSel];
          var isState = (typeof stateSelected == "object") ? true : false;

          var $h3 = $("#tooltip h3"),
            $ul = $("#tooltip ul");

          //show tooltip if not mobile -- can be improved if desired
          if (isState && window.innerWidth > 480) {
            $ul.html("");

             //append each item in our stateSelected array as a list item
            for (var i = 0; i < stateSelected.list.length; i++) {
              $ul.append("<li>" + stateSelected.list[i] + "</li>");
            }

            $h3.html(stateSelected.name);

            $tooltip.css({
              'top': y + "%",
              'left': x + "%"
            }).show();
          }
        }//end tooltip func
        
        function resetMapHeight(){
           var $mapH = $map.height();
           $container.height($mapH);
        }
        
        //handle responsive view on browser resize
        $(window).resize(function() {
          if (window.innerWidth < 480) {
            $tooltip.hide();
          }
          //resize map responsively
          resetMapHeight();
        });
    
        //on load of svg, reset Map Height  
        resetMapHeight();




  }//end loadMap();
  
  loadMap();
});

//Dave if span - X button is clicked EVENT
$(".close-button").click(function(){
  $("#tooltip").hide();
//do something
});

/*//change size on hover
$(function() {
  $('.st20').hover(function() {
    $('#clockbox').css('font-size', '30px');
  }, function() {
    // on mouseout, reset the background colour
    $('#clockbox').css('font-size', '');
  });
}); */

})