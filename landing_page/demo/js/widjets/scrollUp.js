var j = jQuery.noConflict();

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("scrollUp").style.display = "block";
    } else {
        document.getElementById("scrollUp").style.display = "none";
    }
}


j(function() {
	j('#scrollUp').click(function(event) {
		event = event || window.event;
        event.preventDefault();

        j('html, body').animate({scrollTop : 0}, 1000);

        return false;
	})
})