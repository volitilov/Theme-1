var j = jQuery.noConflict();

j(function() {
    // added attributes carousel-iner :::::::::::::::::::::::::::
    var count2 = 0;

    j('.carousel-inner2 .item').each(function() {
        count2 ++;
        j(this).attr('data-item', count2);
    });


    // added handler next/prev button :::::::::::::::::::::::::::
    j('.widjet-carousel2 .left, .right').click(function(event) {
        event = event || window.event;
        event.preventDefault();
        var itemActive = 0;
        var maxItem = 0;
        var items = [];

        // get and remove class .active :::::::::::::::::::::::::
        j('.carousel-inner2 .item').each(function() {
            items.push(j(this));
            maxItem ++;

            if (j(this).hasClass('active')) {
                itemActive = Number(j(this).attr('data-item'));
                j(this).removeClass('active');
            }
        });


        // this next ::::::::::::::::::::::::::::::::::::::::::::
        if (j(this).hasClass('right')) {
            if (itemActive == maxItem) {
                items[0].addClass('active');
            } else {
                items[itemActive].addClass('active');
            }
        }

        // this prev ::::::::::::::::::::::::::::::::::::::::::::
        if (j(this).hasClass('left')) {
            if (itemActive <= 1) {
                items[(maxItem - 1)].addClass('active');
            } else {
                items[(itemActive - 2)].addClass('active');
            }
        }

        return false;
    });
});
