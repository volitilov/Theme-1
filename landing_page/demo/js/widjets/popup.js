var j = jQuery.noConflict();

j(function() {
	let count = 0;
	// copy portfolio item and append in popup
	function addElementsInPopup(objects) {
		j(objects).each(function() {
			count += 1;

			let popupItem = document.createElement('li');
			let itemImg = j(this).find('img').clone();

			j(this).find('a').attr('data-portfolio-item', count);
			j(popupItem).attr('data-item', count);

			j(popupItem).addClass('item');
			j(popupItem).addClass('animated');
			j(popupItem).addClass('fadeIn');
			j(popupItem).append(itemImg);
			
			j('.popup-carousel').append(popupItem);
		});
	}

	addElementsInPopup('.portfolio-items2 li');

	// show active portfolio in popup
	j('.portfolio-item a').click(function(event) {
		var event = event || window.event;
		event.preventDefault();

		let portf_item = j(this).attr('data-portfolio-item');
		let item_active;
		let carma = 0;

		j('.popup-carousel li').each(function() {
			carma += 1;
			if (j(this).hasClass('active')) {
				j(this).removeClass('active');
			}

			if (j(this).attr('data-item') == portf_item) {
				j(this).addClass('active');
				item_active = j(this).attr('data-item');
			}
		});

		switch (item_active) {
			case 1:
				j('.popup-left').hide();
				break;
			case carma:
				j('.popup-right').hide();
				break;
			default:
				j('.popup-left, .popup-right').show();
		}

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
			count_item += 1;
			if (j(this).hasClass('active')) {
				active_item = j(this).attr('data-item');
				j(this).removeClass('active');
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