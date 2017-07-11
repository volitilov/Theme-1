function addScript(src) {
    var script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.head.appendChild(script);
}

// main scripts ::::::::::::::::::::::::::::::::::::
addScript('/js/bootstrap.js');
addScript('/js/jquery.min.js');

// my_scripts ::::::::::::::::::::::::::::::::::::::


// vidjets_scripts :::::::::::::::::::::::::::::::::
addScript('/js/widjets/carousel.js');
