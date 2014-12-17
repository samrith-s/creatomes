
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
    $("#tome-carousel").append("<img src='" + config.imagePath + "tomes/creatome.png' />");
    $("#tome-carousel").append("<img src='" + config.imagePath + "tomes/genesis.png' />");
    $("#tome-carousel").append("<img src='" + config.imagePath + "tomes/substance.png' />");
    $("#tome-carousel").append("<img src='" + config.imagePath + "tomes/beasts.png' />");
    $("#tome-carousel").append("<img src='" + config.imagePath + "tomes/being.png' />");
    $("#tome-carousel").append("<img src='" + config.imagePath + "tomes/war.png' />");
}