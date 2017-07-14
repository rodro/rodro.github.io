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
