var j = jQuery.noConflict();

j(function() {
	j('.portfolio-items a').click(function(event) {
		var event = event || window.event;
		event.preventDefault();

		j(this).find('img').clone().appendTo(".popup-carousel .item");

		j(".popup-window").show();
		j(".popup-carousel .item").innerHTML = '';


		return false;
	});

	j('.popup-head a').click(function(event) {
		var event = event || window.event;
		event.preventDefault();

		j(".popup-window").hide();

		return false;
	});

});