function addScript(src) {
    var script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.head.appendChild(script);
}

// main scripts ::::::::::::::::::::::::::::::::::::
addScript('/js/vendor/bootstrap.js');
addScript('/js/vendor/jquery-1.12.4.min.js');

// my_scripts ::::::::::::::::::::::::::::::::::::::


// vidjets_scripts :::::::::::::::::::::::::::::::::
addScript('/js/widjets/carousel.js');
addScript('/js/widjets/facts.js');
addScript('/js/widjets/scrollUp.js');
