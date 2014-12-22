
var launchpad, mainPage, createScreen;

$(function() {

    launchpad = new Environment("launchpad");
    mainPage = new Environment("mainPage");
    createScreen = new Environment("createScreen");

    loadConfig(launchpad);
    loadConfig(mainPage);
    loadConfig(createScreen);


    $("#start span").unbind('click').on("click", function() {
        $("#launchpad").fadeOut();
        $("#mainPage").fadeIn();
        //initCreateScreen();
    });

    initCarousel();


});

function initGame() {

}

function initCarousel() {
    $("#flipbook").fadeOut();

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

//    $(".books").fadeIn();
    $("#prev-button").fadeIn();
    $("#next-button").fadeIn();
    $("#tome-name").fadeIn();

    checkButtonVisibility();

    $("#prev-button").unbind('click').on('click', function() {
        hideCarousel();
        init--;
        setTimeout(function() {showCarousel()}, 400);
        carouselObservers(init);
        checkButtonVisibility();
        appendTomeName();
    }).delay(400);
    $("#next-button").unbind('click').on('click', function() {
        hideCarousel();
        init++;
        setTimeout(function() {showCarousel()}, 400);
        carouselObservers(init);
        checkButtonVisibility();
        appendTomeName();
    }).delay(400);

    $(".books").unbind('click').on('click', function() {
        initFlipbook(init);
    });

//    var st = false;
//    $("#tome-name").unbind('click').on('click', function() {
//        var bk = "book" + init;
//        if(!game.tomes[init-1].completed) {
//            st = true;
//            game.tomes[init-1].completed = st;
//            appendTomeName();
//            mainPage[bk].setState("unlocked");
//        }
//        else {
//            st = false;
//            game.tomes[init-1].completed = st;
//            appendTomeName();
//            mainPage[bk].setState("default");
//        }
//    });

    $bk = "book"  + init;
    if(init==1) {

        mainPage[$bk].setState("unlocked")
    }
    else if(game.tomes[init-1].completed) {
        mainPage[$bk].setState("unlocked");
    }
    else {
        mainPage[$bk].setState("default");
    }


}

function initFlipbook(init) {

    $(".books").fadeOut();
    $("#prev-button").fadeOut();
    $("#next-button").fadeOut();
    $("#tome-name").fadeOut();
    $("#tome-name span").text("");

    setTimeout(function(){ $("#flipbook").fadeIn(); }, 400);

    if(init==1) {
        for(var j=0; j<game.tomes.length; j++) {
            $this = game.tomes[j].pages;
            for(var i=0; i<$this.length; i++) {
                $("#flipbook").append("<div>" + $this[i] + "</div>");
            }
        }
    }
    else {
        $("#flipbook").empty();
        $("#flipbook").append("<div></div>");
        $("#flipbook").append("<div id='toc'><h1>Table of Contents</h1></div>");
        var elems = $getTomeObjects(init-1);
        console.log(elems);

        for(var i=0; i<elems.length; i++) {
            $("#toc").append("<p>" + elems[i].name + "</p>");
        }

    }

    flipbookObservers(init);
}

function flipbookObservers(init) {

    $("#mainPageBg").removeClass("no-click");

    $("#flipbook").booklet({
        tabs: true,
        tabHeight: 20,
        tabWidth: 180,
        hash: true
    });

    $("#mainPageBg").unbind('click').on('click', function() {
        $("#flipbook").effect("drop", 500);
        setTimeout(function() {
            initCarousel(init);
            $("#flipbook").empty();
        }, 500);

        $("#mainPageBg").addClass("no-click");

    }) ;

    $(".continue-btn").unbind('click').on('click', function() {
       initCreateScreen();
    });
}

function initCreateScreen(init) {
    console.log("Init Create Screen");
    $("#flipbook").effect("drop");
    setTimeout(function() { $("#mainPage").fadeOut(); $("#createScreen").fadeIn(); }, 400);

    for(var i=0; i< game.tomes[1].elements.length; i++) {
        var elem = $getElemByName(game.tomes[1].elements[i]);
        var img = "<img src='" + elem.image + "' class='element-img' />";
        $("#elements-container").append(img);
    }
}


/*------- Helper functions ---------- */
$setCharAt = function (str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

$getElemByName = function(name) {
    var ret = $.grep(game.elements, function( n, i ) {
        return n.name == name;
    });
    return ret[0];
}

$getTomeObjects = function(tome_id) {
    var ret = $.grep(game.elements, function( n, i ) {
        return n.tome_id == tome_id;
    });
    return ret;
}
