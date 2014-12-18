
var launchpad, mainPage;

$(function() {

    launchpad = new Environment("launchpad");
    mainPage = new Environment("mainPage");

    loadConfig(launchpad);
    loadConfig(mainPage);

    $("#start span").unbind('click').on("click", function() {
        $("#launchpad").fadeOut();
        $("#mainPage").fadeIn();
    });

    initCarousel();


});

function initGame() {

}

function initCarousel() {
    $("#flipbook").hide();

    var init = 1;

    for(var i=0; i<game.tomes.length; i++) {
        $("#book" + (i+1)).addClass("books");
    }

    $(".books").hide();

    mainPage.book1.setState("unlocked");
    $("#book" + init).fadeIn();
    $("#tome-name span").append(game.tomes[init-1].name);
    carouselObservers(init);



}

function carouselObservers(init) {

    var showCarousel = function() { $("#book" + init).fadeIn(); }
    var hideCarousel = function() { $("#book" + (init)).fadeOut(); }
    var appendTomeName = function() {
        $("#tome-name span").fadeOut();
        setTimeout(function(){
            if(!game.tomes[init-1].completed)
                $("#tome-name span").text(game.tomes[init-1].message);
            else
                $("#tome-name span").text(game.tomes[init-1].name);
        }, 400);
        $("#tome-name span").fadeIn();
    }
    var checkButtonVisibility = function () {
        if(init==1)
            $("#prev-button").css({visibility: "hidden"});
        else if(init==6)
            $("#next-button").css({visibility: "hidden"});
        else
            $("#prev-button, #next-button").css({visibility: "visible"});
    }

    checkButtonVisibility();

    $("#prev-button").unbind('click').on('click', function() {
        hideCarousel();
        init--;
        setTimeout(function() {showCarousel()}, 400);
        checkButtonVisibility();
        appendTomeName();
    }).delay(400);
    $("#next-button").unbind('click').on('click', function() {
        hideCarousel();
        init++;
        setTimeout(function() {showCarousel()}, 400);
        checkButtonVisibility();
        appendTomeName();
    }).delay(400);

    $(".books").unbind('click').on('click', function() {
        initFlipbook(init);
    })

    var st = false;
    $("#tome-name").unbind('click').on('click', function() {
        var bk = "book" + init;
        if(!game.tomes[init-1].completed) {
            st = true;
            game.tomes[init-1].completed = st;
            appendTomeName();
            mainPage[bk].setState("unlocked");
        }
        else {
            st = false;
            game.tomes[init-1].completed = st;
            appendTomeName();
            mainPage[bk].setState("default");
        }
    })
}

function initFlipbook(init) {

    $(".books").fadeOut();
    $("#prev-button").fadeOut();
    $("#next-button").fadeOut();
    $("#tome-name").fadeOut();
    setTimeout(function(){ $("#flipbook").fadeIn(); }, 400);

    $this = game.tomes[init-1].pages;
    for(var i=0; i< $this.length; i++) {
        $("#flipbook").append("<div>" + $this[i] + "</div>");
    }

    flipbookObservers();
}

function flipbookObservers() {
    $("#flipbook").booklet({
        tabs: true,
        tabHeight: 20,
        tabWidth: 180
    });
}
