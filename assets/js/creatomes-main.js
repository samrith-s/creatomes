
$(function() {

    var launchpad = new Environment("launchpad");
    var mainPage = new Environment("mainPage");

    loadConfig(launchpad);
    loadConfig(mainPage);

    $("#start span").unbind('click').on("click", function() {
        $("#launchpad").fadeOut();
        $("#mainPage").fadeIn();
    });

    initMain();


});

function initGame() {

}

function initMain() {
    $("#flipbook-holder").hide();

    var init = 1;


    for(var i=1; i<=6; i++) {
        $("#tome-carousel").append("<img id='carousel-item-" + i + "' src='" + config.imagePath + "tomes/" + i + ".png' />");
        $("#carousel-item-" + i).hide();
    }

    var showCarousel = function() { $("#carousel-item-" + init).fadeIn(); }
    var hideCarousel = function() { $("#carousel-item-" + (init-1)).fadeOut(); }

    showCarousel();

    $("#prev").on('click', function() {
        init++;
        hideCarousel();
        setTimeout(function() {showCarousel()}, 400);
    })



}