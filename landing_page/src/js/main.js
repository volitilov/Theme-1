function addScript(src) {
    var script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.appendChild(script);
}

// main scripts ::::::::::::::::::::::::::::::::::::
addScript('/js/vendor/jquery-1.12.4.min.js');
addScript('/js/vendor/bootstrap.js');

// my_scripts ::::::::::::::::::::::::::::::::::::::


// widjets_scripts :::::::::::::::::::::::::::::::::
addScript('/js/widjets/carousel.js');
addScript('/js/widjets/reviews_carousel.js');
addScript('/js/widjets/facts.js');
addScript('/js/widjets/scrollUp.js');
addScript('/js/widjets/portfolio.js');
addScript('/js/widjets/headLinkActive.js');
