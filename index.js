var main = function() {
	$(h1).click(function() {
		$(this).removeClass('inactive');
		$(this).addClass('active');
	});
}

$(document).ready(main);