$(document).ready(function () {   
   $(".cont-bnt a").click(function(){
    $(this).parents().find(".step-one-wapper").addClass("active");
    $(this).parents().find(".survivor-main-wapper.active").removeClass("active");
    
   })
    $(".next-btn a").click(function () {

        var useid = $(this).parents().find("#user-id");
        if (useid.val()) {
            const usedt = useid.val();
            $(this).parents().find("#searching-text-name").html(usedt);
            $(this).parents().find("#username").html(usedt);
            $(this).parents().find(".step-one-inner.active").removeClass("active");
            $(this).parents().find(".search0").addClass("active");
            $(this).parents().find(".search0.active .search-box-1").addClass("active");
            setTimeout(
                function () {
                    $(".search0.active .search-box-1.active").removeClass("active");
                    $(".search0.active .search-box-2").addClass("active");
                }, 8000
            );
            setTimeout(
                function () {
                    $(".step-one-wapper.active").removeClass("active");
                    $(".step-three-wapper").addClass("active");
                    $(".step-three-wapper .step-three-inner").addClass("active");
                }, 9000
            );

        }
        else {
            $(this).parents().find(".form-group p").css("display","block");
            setTimeout(
                function () {
                    $(".step-one-inner .form-group p").css("display","none");
                }, 3000
            );
        }
    });
    $(".platform").click(function () {
        $(this).parents().find(".platform.selected").removeClass("selected")
        $(this).addClass("selected");
    });
    $(".Resource-Div .Resource").click(function () {
        $(this).parent().find(".Resource.Selected").removeClass("Selected");
        $(this).addClass("Selected");
    })
    $(".gold-resource-wapper-div .gold-card").click(function () {
        $(this).parents().find(".gold-card.active").removeClass("active");
        $(this).addClass("active");
    })
    $(".generate-btn a").click(function () {
        const my = $(this).parents().find(".Resource.Selected").attr("value");
        const gold = $(this).parents().find(".gold-card.active").attr("value");
        $(this).parents().find("#dice-rolls").html(my);
        $(this).parents().find("#dice-gold").html(gold);
        $(this).parents().find(".step-three-inner.active").removeClass("active");
        $(this).parents().find(".search1").addClass("active");

        setTimeout(
            function () {
                const usename = $("#user-id").val();
                $(".step0-txt").html("Generating " +"<span>" +  my + "</span>" + " Platinum and " +"<span>" + gold  + "</span>" + " Crystals for "+ "<span>"+ usename + "</span>");
            }, 6000
        );
        setTimeout(
            function () {
                $(".step0-txt").html("Finalizing");
            }, 11000
        );
        setTimeout(
            function () {
                $(".step0-txt").html("Loding last step..");
                $(".small-set").addClass("active");
            }, 14000
        );
        setTimeout(
            function () {
                $(".step0-txt").html("info..");
                $(".setting-rot").css("display","none");
                $(".info-img").css("display","block");
            }, 16000
        );
        $(".progress-bar").animate({
            width: "100%"
        }, 17000);
        setTimeout(
            function () {
                $(".step-three-wapper.active").removeClass("active");
                $(".step-fore-wapper").addClass("active");
            }, 18000
        );

    });

});
