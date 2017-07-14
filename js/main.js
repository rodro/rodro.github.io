function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

// Heading Transition
	// (function() {
	// 	var header = $('.header-caption');
	// 	var range = 200;
	// 	$(window).on('scroll', function () {1
	// 		var scrollTop = $(this).scrollTop();
	// 		var offset = header.offset().top;
	// 		var height = header.outerHeight();
	// 		offset = offset + height / 2;
	// 		var calc = 1 - (scrollTop - offset + range) / range;
	// 		header.css({opacity: calc});
	// 		if (calc > '1') {
	// 			header.css({opacity: 1});
	// 		} else if (calc < '0') {
	// 			header.css({opacity: 0});
	// 		}
	// 	});
	// }());


  function changeIcon(state) {
  var barH = $("#hamburger-icon .top").height();
  var barM = parseInt($("#hamburger-icon .top").css('marginBottom'));
  midY = barM + barH;

  if (state === "ham") {
    $("#hamburger-icon .top").stop().transition({
      rotate: 0
    }, function() {
      $("#hamburger-icon .top").stop().transition({
        y: 0
      });
    });
    $("#hamburger-icon .bottom").stop().transition({
      rotate: 360
    }, function() {
      $("#hamburger-icon .bottom").stop().transition({
        y: 0
      });
      $("#hamburger-icon .middle").css({
        opacity: 1.0
      });
    });
  } else if (state === "noham") {
    $("#hamburger-icon .middle").css({
      rotate: 360
    });
    $("#hamburger-icon .top").stop().transition({
      y: midY
    }, function() {
      $("#hamburger-icon .middle").css({
        opacity: 0
      });
      $("#hamburger-icon .top").stop().transition({
        rotate: 45
      });
    });
    $("#hamburger-icon .bottom").stop().transition({
      y: -midY
    }, function() {
      $("#hamburger-icon .bottom").stop().transition({
        rotate: 315
      });
    });
  }
}

$(document).on('click', '#hamburger-icon', function() {
  if ($(this).hasClass("noham")) {
    $(this).removeClass().addClass("ham");
    changeIcon("ham");
  } else {
    $(this).removeClass().addClass("noham");
    changeIcon("noham");
  }
});
