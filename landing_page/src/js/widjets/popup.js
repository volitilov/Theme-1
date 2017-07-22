var j = jQuery.noConflict();

j(function() {
	let count = 0;
	// copy portfolio item and append in popup
	j('.portfolio-item').each(function() {
		count += 1;

		var popupItem = document.createElement('li');
		var itemImg = j(this).find('img').clone();

		j(this).find('a').attr('data-portfolio-item', count);
		j(popupItem).attr('data-item', count);

		j(popupItem).addClass('item');
		j(popupItem).addClass('animated');
		j(popupItem).addClass('fadeIn');
		j(popupItem).append(itemImg);
		
		j('.popup-carousel').append(popupItem);
	});
	

	// show active portfolio in popup
	j('.portfolio-item a').click(function(event) {
		var event = event || window.event;
		event.preventDefault();

		var portf_item = j(this).attr('data-portfolio-item');

		j('.popup-carousel li').each(function() {
			if (j(this).hasClass('active')) {
				j(this).removeClass('active');
			}

			if (j(this).attr('data-item') == portf_item) {
				j(this).addClass('active');
			}
		});

		j(".popup-window").show();

		return false;
	});


	// add handler close popup
	j('.popup-head a').click(function(event) {
		var event = event || window.event;
		event.preventDefault();

		j(".popup-window").hide();

		return false;
	});


	j('.popup-control').click(function(event) {
		var event = event || window.event;
		event.preventDefault();

		var active_item;
		var count_item = 0;

		j('.popup-carousel li').each(function() {
			count_item++;
			if (j(this).hasClass('active')) {
				j(this).removeClass('active');
				active_item = j(this).attr('data-item');
			}
		});

		if (active_item == 2) {
			j('.popup-left').hide();
		}
		if (active_item == (count_item - 1)) {
			j('.popup-right').hide();
		}



		if (j(this).hasClass('popup-left')) {
			j('.popup-right').show();
			j('.popup-carousel li').each(function() {
				if (j(this).attr('data-item') == active_item) {
					j(this).prev().addClass('active');
				}
			});
		};

		if (j(this).hasClass('popup-right')) {
			j('.popup-left').show();
			j('.popup-carousel li').each(function() {
				if (j(this).attr('data-item') == active_item) {
					j(this).next().addClass('active');
				}
			});
		}

		return false;
	});

});