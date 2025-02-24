$(document).ready(function() {

	$(".btn-next").click(function(){
		$(this).parents().find(".step-one.active").removeClass("active");
		$(this).parents().find(".step-two").addClass("active");
	})


	$(".row-device .col").click(function(){
		$(this).parents().find(".col.active").removeClass("active");
		$(this).addClass("active");
		let div = $(this).attr("value");
		$(this).parents().find("#device-name").html(div);
	})

	
	// user-name-id


	$("#bt-two").click(function(){
		var user_nd = $("#user-name").val();
		if(user_nd == ''){
			
			$(this).parents().find(".ero-o").css("display","block");	
		}
		else{
			
			$(this).parents().find("#name-id").html(user_nd);
			$(this).parents().find("#user-name-id").html(user_nd);
			$(this).parents().find(".id_name").html(user_nd);
			$(this).parents().find("#last_user").html(user_nd);
			$(this).parents().find(".ero-o").css("display","none");
			$(this).parents().find(".step-two-wapper.active").removeClass("active");
			$(this).parents().find(".Connect-searching-wapper").addClass("active");
			$(".progress-bar-one").animate({
				width: "100%"
			}, 17000);

			setTimeout(
				function () {
					$(".step-three").addClass("active");
					$(".step-two.active").removeClass("active");
				}, 19000
			);
		}
	});



	$(".amount-item").click(function(){
		$(this).parents().find(".amount-item.active").removeClass("active");
		$(this).addClass("active");
		var amo = $(this).attr("value");
		$(this).parents().find("#gen-amount").html(amo);
		$(this).parents().find(".amount_last").html(amo);
		$(this).parents().find("#last_amo").html(amo);
	})





	$("#bt-three").click(function(){
		$(this).parents().find(".last-step-search-wapper").addClass("active");
		$(this).parents().find(".step-three-wapper.active").removeClass("active");
		$(".progress-bar-two").animate({
			width: "100%"
		}, 20000);

		setTimeout(
			function () {

				$(".setting-img.active").removeClass("active");
				$(".count-online-wapper").addClass("active")
				$(".change-text-two").css("display","block");
				$(".change-text-one").css("display","none");
				$('#gen-amount').each(function (){
					$(this).prop('Counter',0).animate({
					  Counter: $(this).text()
					}, {
					  duration: 10000,
					  easing: 'swing',
					  step: function (now) {
						$(this).text(Math.ceil(now));
					  }
					});
				  });
			}, 5000
		);

		setTimeout(
			function () {
				$(".count-online-wapper.active").removeClass("active");
				$(".setting-img").addClass("active")
				$(".change-text-three").css("display","block");
				$(".change-text-two").css("display","none");
			}, 16000
		);
		
		setTimeout(
			function () {
				$(".step-three.active").removeClass("active");
				$(".step-fore").addClass("active");
			}, 20000
		);


	})


	


	//   $(".progress-bar-two").animate({
	// 	width: "100%"
	// }, 17000);
	
})



// document.addEventListener("DOMContentLoaded", function() {

// 	document.getElementById("bt-one").addEventListener("click", function(){
// 		var stepOne = this.closest('.step-one.active');
// 		stepOne.classList.remove("active");
// 		stepOne.nextElementSibling.classList.add("active");
// 	});

// 	document.querySelectorAll(".row-device .col").forEach(function(col) {
// 		col.addEventListener("click", function(){
// 			var activeCol = this.closest('.col.active');
// 			activeCol.classList.remove("active");
// 			this.classList.add("active");
// 			var div = this.getAttribute("value");
// 			this.closest("#device-name").innerHTML = div;
// 		});
// 	});

// 	document.getElementById("bt-two").addEventListener("click", function(){
// 		var userNd = document.getElementById("user-name").value;
// 		if(userNd === ''){
// 			this.closest(".ero-o").style.display = "block";
// 		} else {
// 			var parents = this.closest(".step-two-wapper");
// 			parents.querySelector("#name-id").innerHTML = userNd;
// 			parents.querySelector("#user-name-id").innerHTML = userNd;
// 			parents.querySelector(".id_name").innerHTML = userNd;
// 			parents.querySelector("#last_user").innerHTML = userNd;
// 			parents.querySelector(".ero-o").style.display = "none";
// 			parents.classList.remove("active");
// 			parents.nextElementSibling.classList.add("active");
// 			var progressBarOne = document.querySelector(".progress-bar-one");
// 			progressBarOne.animate({
// 				width: "100%"
// 			}, 17000);
// 			setTimeout(function() {
// 				document.querySelector(".step-three").classList.add("active");
// 				document.querySelector(".step-two.active").classList.remove("active");
// 			}, 19000);
// 		}
// 	});

// 	document.querySelectorAll(".amount-item").forEach(function(item) {
// 		item.addEventListener("click", function(){
// 			var activeItem = this.closest('.amount-item.active');
// 			activeItem.classList.remove("active");
// 			this.classList.add("active");
// 			var amo = this.getAttribute("value");
// 			this.closest("#gen-amount").innerHTML = amo;
// 			this.closest(".amount_last").innerHTML = amo;
// 			this.closest("#last_amo").innerHTML = amo;
// 		});
// 	});

// 	document.getElementById("bt-three").addEventListener("click", function(){
// 		var lastStepWrapper = this.closest(".last-step-search-wapper");
// 		lastStepWrapper.classList.add("active");
// 		lastStepWrapper.previousElementSibling.classList.remove("active");
// 		var progressBarTwo = document.querySelector(".progress-bar-two");
// 		progressBarTwo.animate({
// 			width: "100%"
// 		}, 20000);
// 		setTimeout(function() {
// 			document.querySelector(".setting-img.active").classList.remove("active");
// 			document.querySelector(".count-online-wapper").classList.add("active");
// 			document.querySelector(".change-text-two").style.display = "block";
// 			document.querySelector(".change-text-one").style.display = "none";
// 			document.querySelectorAll('#gen-amount').forEach(function(genAmount) {
// 				genAmount.Counter = 0;
// 				genAmount.animate({
// 				  Counter: genAmount.textContent
// 				}, {
// 				  duration: 10000,
// 				  easing: 'swing',
// 				  step: function (now) {
// 					genAmount.textContent = Math.ceil(now);
// 				  }
// 				});
// 			});
// 		}, 5000);
// 		setTimeout(function() {
// 			document.querySelector(".count-online-wapper.active").classList.remove("active");
// 			document.querySelector(".setting-img").classList.add("active");
// 			document.querySelector(".change-text-three").style.display = "block";
// 			document.querySelector(".change-text-two").style.display = "none";
// 		}, 16000);
// 		setTimeout(function() {
// 			document.querySelector(".step-three.active").classList.remove("active");
// 			document.querySelector(".step-fore").classList.add("active");
// 		}, 20000);
// 	});
// });
