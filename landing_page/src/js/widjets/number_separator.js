var j = jQuery.noConflict();

j(function() {
	function changeNumber(number) {
		var startNumber = j(number).text();
		var x = Math.round(startNumber*80/100); 
		j(number).text(x);

		var intervalID = setInterval(function() {
			var a = Number(j(number).text());
			a++;
			if (a == startNumber) {
				clearInterval(intervalID);
			}
			j(number).text(a);
		}, 50);
	}

	j(".lines").each(function() {
		changeNumber(j(this));
	});

});

