var j = jQuery.noConflict();

j(function() {
	

	function clearActive() {
		j('.navbar-right a').each(function() {
			if (j(this).hasClass('active')) {
				j(this).removeClass('active');
			}
		});
	}

	function addClassActive(link) {
		j('.navbar-right a').each(function() {
			if (j(this).text() == link) {
				j(this).addClass('active');
			}
		});
	}

	j(window).scroll(function(){
		var scrTop = j("body").scrollTop();

		if( scrTop >= 0) {
			clearActive();
			addClassActive('Home');
		}

		if ( scrTop >= 774 ) {
			clearActive();
			addClassActive('About');
		}

		if ( scrTop >= 2938 ) {
			clearActive();
			addClassActive('Portfolio');
		}

		if (  scrTop >= 4081 ) {
			clearActive();
			addClassActive('Services');
		}

	})


	j('.navbar-right a').click(function() {

		clearActive();

		j(this).addClass('active');
		var el = j(this).attr('href');
		j('body').animate({
		    scrollTop: j(el).offset().top}, 1800);
		return false;
	});




});