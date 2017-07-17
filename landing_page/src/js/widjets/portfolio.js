var j = jQuery.noConflict();

j(function() {
	j('.portfolio-items li').slice(3).show();

    j('.portfolio-nav a').click(function(event) {
    	var event = event || window.event;
    	event.preventDefault();

    	j('.portfolio-nav a').each(function() {
    		if (j(this).hasClass('active')) {
    			j(this).removeClass('active');
    		}
    	})

    	function showClass(className) {
    		j('.portfolio-items li').each(function() {
				if (j(this).hasClass(className)) {
					j(this).show();
				} else {
					j(this).hide();
				}
			});
    	}

    	switch (j(this).attr('id')) {
			case 'webDesign':
				showClass('WebDesign');
				j(this).addClass('active');
				break;
			case 'development':
				showClass('Development');
				j(this).addClass('active');
				break;
			case 'branding':
				showClass('Branding');
				j(this).addClass('active');
				break;
			case 'appDesign':
				showClass('AppDesign');
				j(this).addClass('active');
				break;
			default:
				j('.portfolio-items li').each(function() {
					j(this).show();
				});
				 j('.load-more a').hide();
				j(this).addClass('active');
		}

		return false;
    });

    j('.load-more a').click(function(event) {
    	var event = event || window.event;
    	event.preventDefault();

    	j('.portfolio-items li').each(function() {
			j(this).show();
		});

    	j(this).hide();

    	return false;
    });
});
