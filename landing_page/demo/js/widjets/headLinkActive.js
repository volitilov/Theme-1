var j = jQuery.noConflict();

j(function() {
	function getCoords(elem) {
	  
		var box = document.querySelector(elem).getBoundingClientRect();

		var body = document.body;
		var docEl = document.documentElement;

		var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;

		var clientTop = docEl.clientTop || body.clientTop || 0;

		var top = box.top + scrollTop - clientTop;

		return top;
	}

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

		if ( scrTop >= getCoords('#info') ) {
			clearActive();
			addClassActive('About');
		}

		if ( scrTop >= getCoords('#portfolio') ) {
			clearActive();
			addClassActive('Portfolio');
		}

		if (  scrTop >= getCoords('#services') ) {
			clearActive();
			addClassActive('Services');
		}

		if (  scrTop >= getCoords('#contacts') ) {
			clearActive();
		}

	})


	j('.navbar-right a').click(function() {

		clearActive();

		j(this).addClass('active');
		var el = j(this).attr('href');
		j('body').animate({
		    scrollTop: j(el).offset().top - 50}, 1800);
		return false;
	});




});