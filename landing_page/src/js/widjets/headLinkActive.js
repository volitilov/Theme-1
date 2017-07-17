var j = jQuery.noConflict();

j(function() {
	j('.navbar-right a').click(function() {

		j('.navbar-right a').each(function() {
			if (j(this).hasClass('active')) {
				j(this).removeClass('active');
			}
		});

		j(this).addClass('active');
		var el = j(this).attr('href');
		j('body').animate({
		    scrollTop: j(el).offset().top}, 1800);
		return false;
	});
});