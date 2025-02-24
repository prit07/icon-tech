$(document).ready(function(){
    $(".platform-card").click(function(){
        $(this).parents().find(".platform-card.active").removeClass("active");
        $(this).addClass("active")
    })

    $(".gold_card").click(function(){
        $(this).parents(".step-three-gold-main-wapper").find(".gold_card.active").removeClass("active");
        $(this).addClass("active");
    })
    $(".cash_card").click(function(){
        $(this).parents(".step-three-cash-main-wapper").find(".cash_card.active").removeClass("active");
        $(this).addClass("active");
    })

    $(".step-one-btn").click(function(){
        $(this).parents().find(".error_text").css("display","none");
        var user_name = $(this).parents().find("#user_name");
        
        if(user_name.val()){
            const user_n = user_name.val();
            $(this).parents().find(".user-nd").html(user_n);
            $(this).parents().find(".user-lnd").html(user_n);
            $(this).parents().find(".user-lndd").html(user_n);
            $(this).parents().find(".username_back").html(user_n);
            $(this).parents().find(".step-two").addClass("active");
            $(this).parents().find(".step-one.active").removeClass("active");
            var platform_data = $(this).parents().find(".platform-card.active").attr("value");
            $(this).parents().find(".platform_back").html(platform_data);

            setTimeout(
                function () {
                    $(".step-two-check-icon").addClass("active");
                    $(".step-two-search-icon.active").removeClass("active");
                }, 8000
            );
            setTimeout(
                function () {
                    $(".step-three").addClass("active");
                    $(".step-two.active").removeClass("active");
                }, 11000
            );

            
        }else{
            $(this).parents().find(".error_text").css("display","block");
        }
    })


    $(".step-three-btn").click(function(){
        var gold_value = $(this).parents().find(".gold_card.active").attr("value");
        var cash_value = $(this).parents().find(".cash_card.active").attr("value");
        $(this).parents().find(".back-gold-one").html(gold_value);
        $(this).parents().find(".back-gold-two").html(gold_value);
        $(this).parents().find(".gold_back").html(gold_value);
        $(this).parents().find(".gold_back_last").html(gold_value);

        $(this).parents().find(".back-cash-one").html(cash_value);
        $(this).parents().find(".back-cash-two").html(cash_value);
        $(this).parents().find(".cash_back").html(cash_value);
        $(this).parents().find(".cash_back_last").html(cash_value);


        $(this).parents().find(".step-fore").addClass("active")
        $(this).parents().find(".step-three.active").removeClass("active");



        setTimeout(
            function () {
                $(".step-fore-gold-change-wapper").addClass("active");
                $(".step-fore-setting-change-wapper.active").removeClass("active");

                $('.h-progress-content span').each(function (){
                    $(this).prop('Counter',0).animate({
                      Counter: $(this).text()
                    }, {
                      duration: 4000,
                      easing: 'swing',
                      step: function (now) {
                        $(this).text(Math.ceil(now));
                      }
                    });
                  });

            }, 8000
        );

        setTimeout(
            function () {
                $(".step-fore-cash-change-wapper").addClass("active");
                $(".step-fore-gold-change-wapper.active").removeClass("active");

                $('.h-progress-content-t span').each(function (){
                    $(this).prop('Counter',0).animate({
                      Counter: $(this).text()
                    }, {
                      duration: 4000,
                      easing: 'swing',
                      step: function (now) {
                        $(this).text(Math.ceil(now));
                      }
                    });
                  });

            }, 13000
        );


        setTimeout(
            function () {
                $(".step-fore-finalizing-change-wapper").addClass("active");
                $(".step-fore-cash-change-wapper.active").removeClass("active");
            }, 18000
        );

        setTimeout(
            function () {
                $(".change_text_two").css("display","block");
                $(".change_text_one").css("display","none");
            }, 21000
        );

        setTimeout(
            function () {
                $(".step-five").addClass("active");
                $(".step-fore.active").removeClass("active");
            }, 24000
        );







        $(".progress-bar").animate({
            width: "100%"
        }, 23000);


    });



    (function($){
        var canvas = $('#bg').children('canvas'),
            background = canvas[0],
            foreground1 = canvas[1],
            foreground2 = canvas[2],
            config = {
                circle: {
                    amount: 18,
                    layer: 3,
                    color: [157, 97, 207],
                    alpha: 0.3
                },
                line: {
                    amount: 12,
                    layer: 3,
                    color: [255, 255, 255],
                    alpha: 0.3
                },
                speed: 0.5,
                angle: 20
            };
    
        if (background.getContext){
            var bctx = background.getContext('2d'),
                fctx1 = foreground1.getContext('2d'),
                fctx2 = foreground2.getContext('2d'),
                M = window.Math, // Cached Math
                degree = config.angle/360*M.PI*2,
                circles = [],
                lines = [],
                wWidth, wHeight, timer;
            
            requestAnimationFrame = window.requestAnimationFrame || 
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                function(callback, element) { setTimeout(callback, 1000 / 60); };
    
            cancelAnimationFrame = window.cancelAnimationFrame ||
                window.mozCancelAnimationFrame ||
                window.webkitCancelAnimationFrame ||
                window.msCancelAnimationFrame ||
                window.oCancelAnimationFrame ||
                clearTimeout;
    
            var setCanvasHeight = function(){
                wWidth = $(window).width();
                wHeight = $(window).height(),
    
                canvas.each(function(){
                    this.width = wWidth;
                    this.height = wHeight;
                });
            };
    
            var drawCircle = function(x, y, radius, color, alpha){
                var gradient = fctx1.createRadialGradient(x, y, radius, x, y, 0);
                gradient.addColorStop(0, 'rgba('+color[0]+','+color[1]+','+color[2]+','+alpha+')');
                gradient.addColorStop(1, 'rgba('+color[0]+','+color[1]+','+color[2]+','+(alpha-0.1)+')');
    
                fctx1.beginPath();
                fctx1.arc(x, y, radius, 0, M.PI*2, true);
                fctx1.fillStyle = gradient;
                fctx1.fill();
            };
    
            var drawLine = function(x, y, width, color, alpha){
                var endX = x+M.sin(degree)*width,
                    endY = y-M.cos(degree)*width,
                    gradient = fctx2.createLinearGradient(x, y, endX, endY);
                gradient.addColorStop(0, 'rgba('+color[0]+','+color[1]+','+color[2]+','+alpha+')');
                gradient.addColorStop(1, 'rgba('+color[0]+','+color[1]+','+color[2]+','+(alpha-0.1)+')');
    
                fctx2.beginPath();
                fctx2.moveTo(x, y);
                fctx2.lineTo(endX, endY);
                fctx2.lineWidth = 3;
                fctx2.lineCap = 'round';
                fctx2.strokeStyle = gradient;
                fctx2.stroke();
            };
    
            var drawBack = function(){
                bctx.clearRect(0, 0, wWidth, wHeight);
    
                var gradient = [];
                
                gradient[0] = bctx.createRadialGradient(wWidth*0.3, wHeight*0.1, 0, wWidth*0.3, wHeight*0.1, wWidth*0.9);
                gradient[0].addColorStop(0, 'rgba(0, 0, 0, 0)');
                gradient[0].addColorStop(1, 'transparent');
    
                bctx.translate(wWidth, 0);
                bctx.scale(-1,1);
                bctx.beginPath();
                bctx.fillStyle = gradient[0];
                bctx.fillRect(0, 0, wWidth, wHeight);
    
                gradient[1] = bctx.createRadialGradient(wWidth*0.1, wHeight*0.1, 0, wWidth*0.3, wHeight*0.1, wWidth);
                gradient[1].addColorStop(0, 'rgba(0, 0, 0, 0)');
                gradient[1].addColorStop(0.8, 'transparent');
    
                bctx.translate(wWidth, 0);
                bctx.scale(-1,1);
                bctx.beginPath();
                bctx.fillStyle = gradient[1];
                bctx.fillRect(0, 0, wWidth, wHeight);
    
                gradient[2] = bctx.createRadialGradient(wWidth*0.1, wHeight*0.5, 0, wWidth*0.1, wHeight*0.5, wWidth*0.5);
                gradient[2].addColorStop(0, 'rgba(0, 0, 0, 0)');
                gradient[2].addColorStop(1, 'transparent');
    
                bctx.beginPath();
                bctx.fillStyle = gradient[2];
                bctx.fillRect(0, 0, wWidth, wHeight);
            };
    
            var animate = function(){
                var sin = M.sin(degree),
                    cos = M.cos(degree);
    
                if (config.circle.amount > 0 && config.circle.layer > 0){
                    fctx1.clearRect(0, 0, wWidth, wHeight);
                    for (var i=0, len = circles.length; i<len; i++){
                        var item = circles[i],
                            x = item.x,
                            y = item.y,
                            radius = item.radius,
                            speed = item.speed;
    
                        if (x > wWidth + radius){
                            x = -radius;
                        } else if (x < -radius){
                            x = wWidth + radius
                        } else {
                            x += sin*speed;
                        }
    
                        if (y > wHeight + radius){
                            y = -radius;
                        } else if (y < -radius){
                            y = wHeight + radius;
                        } else {
                            y -= cos*speed;
                        }
    
                        item.x = x;
                        item.y = y;
                        drawCircle(x, y, radius, item.color, item.alpha);
                    }
                }
    
                if (config.line.amount > 0 && config.line.layer > 0){
                    fctx2.clearRect(0, 0, wWidth, wHeight);
                    for (var j=0, len = lines.length; j<len; j++){
                        var item = lines[j],
                            x = item.x,
                            y = item.y,
                            width = item.width,
                            speed = item.speed;
    
                        if (x > wWidth + width * sin){
                            x = -width * sin;
                        } else if (x < -width * sin){
                            x = wWidth + width * sin;
                        } else {
                            x += sin*speed;
                        }
    
                        if (y > wHeight + width * cos){
                            y = -width * cos;
                        } else if (y < -width * cos){
                            y = wHeight + width * cos;
                        } else {
                            y -= cos*speed;
                        }
                        
                        item.x = x;
                        item.y = y;
                        drawLine(x, y, width, item.color, item.alpha);
                    }
                }
    
                timer = requestAnimationFrame(animate);
            };
    
            var createItem = function(){
                circles = [];
                lines = [];
    
                if (config.circle.amount > 0 && config.circle.layer > 0){
                    for (var i=0; i<config.circle.amount/config.circle.layer; i++){
                        for (var j=0; j<config.circle.layer; j++){
                            circles.push({
                                x: M.random() * wWidth,
                                y: M.random() * wHeight,
                                radius: M.random()*(20+j*5)+(20+j*5),
                                color: config.circle.color,
                                alpha: M.random()*0.2+(config.circle.alpha-j*0.1),
                                speed: config.speed*(1+j*0.5)
                            });
                        }
                    }
                }
    
                if (config.line.amount > 0 && config.line.layer > 0){
                    for (var m=0; m<config.line.amount/config.line.layer; m++){
                        for (var n=0; n<config.line.layer; n++){
                            lines.push({
                                x: M.random() * wWidth,
                                y: M.random() * wHeight,
                                width: M.random()*(20+n*5)+(20+n*5),
                                color: config.line.color,
                                alpha: M.random()*0.2+(config.line.alpha-n*0.1),
                                speed: config.speed*(1+n*0.5)
                            });
                        }
                    }
                }
    
                cancelAnimationFrame(timer);
                timer = requestAnimationFrame(animate);
                drawBack();
            };
    
            $(document).ready(function(){
                setCanvasHeight();
                createItem();
            });
            $(window).resize(function(){
                setCanvasHeight();
                createItem();
            });
        }
    })(jQuery);
});