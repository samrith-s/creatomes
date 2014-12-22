
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
        initTome();
    });


});

function initGame() {

}

function initTome() {
    $tome = $("#tome");
    $tome.fadeIn(1500);

    $tome.empty();
    $tome.append("<div></div>");
    $tome.append("<div align='center' id='toc'><h1>Table of Contents</h1></div>");

    for(var i=0; i<elements.selected.length; i++) {
        var pgNo = 3 + parseInt(i);

        $("#toc").append("<div>" +
            "<a href='#/page/" + pgNo + "' class='tome-links less-opacity'>" + elements.selected[i] + "</a></div>");

        var elem = $getElemByName(elements.selected[i]);
        console.log(elem);

        $tome.append(
            "<div div align='center'>" +
                "<h1>" + elem.name + "</h1>" +
                "<img src='"  + elem.image + "' />" +
                "<p class='create-btn' uID='" + elem.name + "'>CREATE THIS!</p>" +
                "</div>"
        );
    }

    $("#toc div").find("a").eq(0).removeClass("less-opacity");

    $tome.booklet({
        tabs: true,
        hash: true
    });

    $(".create-btn").unbind('click').on('click', function() {
        var uID = $(this).attr("uID");
        initCreateScreen(uID);
    });

}

function initCreateScreen(uID) {
    console.log("Init Create Screen");
    var prime = elements.primary;

    $("#tome").effect("drop");
    setTimeout(function() { $("#mainPage").fadeOut(); $("#createScreen").fadeIn(); }, 400);

    for(var n=3; n>0; n--) {
        for(var i=0; i<5; i++) {
            var cur = prime.pop();
            console.log(cur);
            var temp = $("#element-" + cur.name);
            if(n==3) { lx = 5; ly = 2 + (i*16); }
            if(n==2) { lx = 19 + (i*13); ly = 2; }
            if(n==1) { lx = 85; ly = 2 + (i*16); }
            temp.addClass("primary-elements");
            temp.css({
                top: parseInt(ly) + "%",
                left: parseInt(lx) + "%"
            })
        }
    }

    $(".primary-elements").unbind('click').on('click', function() {
        var temp = $(this).clone().appendTo($(this).parent());
        $(this).css({opacity: 0.5});
        var pos = $("#animate-reference").position();
        console.log(pos);
        temp.animate({
            top: pos.top,
            left: pos.left,
            height: "toggle",
            width: "toggle"
        }, 1000);
    })

}


/*------- Helper functions ---------- */
$setCharAt = function (str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

$getElemByName = function(name) {
    var elem = [];

    for(var i=0; i<elements.creatables.length; i++)
        elem.push(elements.creatables[i]);

    var ret = $.grep(elem, function( n, i ) {
        return n.name == name;
    });
    return ret[0];
}
