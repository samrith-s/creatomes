
var launchpad, mainPage, createScreen;
var completed = [];

$(function() {

    launchpad = new Environment("launchpad");
    mainPage = new Environment("mainPage");
    createScreen = new Environment("createScreen");

    loadConfig(launchpad);
    loadConfig(mainPage);
    loadConfig(createScreen);

    $("img").mousedown(function(){
        return false;
    });

    $("#start span").unbind('click').on("click", function() {
        $("#launchpad").fadeOut();
        $("#mainPage").fadeIn();
        initTome();
    });
});

function initGame() {

}

function initTome() {
    console.log("Init tome!");
    $("#createScreen").fadeOut();
    $("#mainPage").fadeIn();
    $tome = $("#tome");
    $tome.fadeIn(1500);

    $tome.empty();
    $tome.append("<div></div>");
    $tome.append("<div align='center' id='toc'><h1>Table of Contents</h1></div>");

    for(var i=0; i<elements.selected.length; i++) {
        var pgNo = 3 + parseInt(i);
        var elem = $getElemByName(elements.selected[i]);

        $("#toc").append("<div id='elem-" + elem.sequence + "'>" +
            "<a href='#/page/" + pgNo + "' class='tome-links'>" + elements.selected[i] + "</a></div>");

        $tome.append(
            "<div div align='center'>" +
                "<h1>" + elem.name + "</h1>" +
                "<img src='"  + elem.image + "' />" +
                "<p class='create-btn' uID='" + elem.sequence + "'>CREATE THIS!</p>" +
                "</div>"
        );
    }

    for(var i=0; i<completed.length; i++)
        $(completed[i]).css({textDecoration: "line-through"});

    $tome.booklet({
        tabs: true,
        hash: true
    });

    $(".create-btn").unbind('click').on('click', function() {
        var uID = $(this).attr("uid");
        initCreateScreen(uID);
    });

}

function initCreateScreen(uID) {
    console.log("Init Create Screen");
    var prime = [];
    for(i in elements.primary)
        prime.push(elements.primary[i]);

    var brewPotStr = "000000000000000";
    var cur;
    var tmp;

    console.log(uID);

    $("#tome").effect("drop");
    setTimeout(function() { $("#mainPage").fadeOut(); $("#createScreen").fadeIn(); }, 400);

    for(var n=3; n>0; n--) {
        for(var i=0; i<5; i++) {
            cur = prime.pop();
            tmp = $("#element" + cur.name);
            tmp.attr("uid", cur.sequence);
            if(n==3) { lx = 5; ly = 2 + (i*16); }
            if(n==2) { lx = 19 + (i*13); ly = 2; }
            if(n==1) { lx = 85; ly = 2 + (i*16); }
            tmp.addClass("primary-elements");
            tmp.css({
                top: parseInt(ly) + "%",
                left: parseInt(lx) + "%"
            })
        }
    }

    playGame(uID, brewPotStr);
}

function playGame(uID, brewPotStr) {

    var creatable = $getElemBySeq(uID);
    var init = 1;

    setInterval(function() {
        if(init<6) {
            $(".primary-elements").removeClass("no-click");
        }
        else {
            for(var i=0; i<$(".primary-elements").length; i++) {
                var t = $(".primary-elements").eq(i);
                if(!t.hasClass("less-opacity"))
                    t.addClass("no-click");
                else
                    t.removeClass("no-click");
            }
        }
    }, 100);

    $(".primary-elements").unbind('click').on('click', function() {

        var temp;
        var thisElem = $("#" + $(this).attr("id"));
        var uID = thisElem.attr("uID");
        console.log(thisElem);
        var pos;
        if(!thisElem.hasClass("less-opacity")) {
            temp = $(this).clone().appendTo($(this).parent()).addClass("clone-anim this-clone-" + $(this).attr("id") + " clone-" + init);
            thisElem.addClass("less-opacity");

            pos = $("#animate-reference-" + init).position();

            if(init<6)
                init++;

            temp.animate({
                top: pos.top,
                left: pos.left,
                width: "40px",
                height: "40px"
            }, 500, "swing", function() {
//                temp.fadeOut();
                brewPotStr = $setCharAt(brewPotStr, (parseInt(uID)-1), "1");
            });
        }
        else {

            init = $(".clone-anim").length + 1;

            temp = $(".this-clone-" + $(this).attr("id"));
            temp.fadeIn();

            pos = thisElem.position();
            setTimeout(function() {
                temp.animate({
                    top: pos.top,
                    left: pos.left,
                    width: "75px",
                    height: "75px"
                }, 500, "swing", function() {
                    temp.remove();
                    thisElem.removeClass("less-opacity");
                    init = $(".clone-anim").length+1;
                    for(var i=0; i<$(".clone-anim").length; i++)
                    {
                        pos = $("#animate-reference-" + (i+1)).position();
                        $(".clone-anim").eq(i).animate({
                            top: pos.top,
                            left: pos.left
                        }, 500);
                    }
                    brewPotStr = $setCharAt(brewPotStr, parseInt(uID)-1, "0");
                });
            }, 400);
        }
    });

    $("#brew-button").unbind('click').on('click', function() {
        console.log("The Combo: " + creatable.combo);
        console.log("The Brewpot's String: " + brewPotStr);

        if(brewPotStr == creatable.combo) {
            var pos = $("#animate-reference").position()
            $(".clone-anim").animate({
                top: pos.top,
                left: pos.left
            }, 1500, "swing", function() {
                $(".clone-anim").fadeOut();
            });

            setTimeout(function() {
                completed.push("#elem-" + uID);
                initTome();
                $(".primary-elements").removeClass("less-opacity");
                $(".clone-anim").remove();
            }, 1500);


            console.log("Brew IF!");
        }
        else {
            var pos = $("#animate-reference").position();
            $(".clone-anim").animate({
                top: pos.top,
                left: pos.left
            }, 1500, "swing", function() {
                for(var i=0; i<$(".clone-anim").length; i++) {
                    var tmp = $(".clone-anim").eq(i);
                    var pos = $("#animate-reference-" + (i+1)).position();
                    tmp.animate({
                        top: pos.top,
                        left: pos.left
                    }, 700, "easeOutBounce");
                }
            });
            console.log("Brew ELSE!")
        }
    })

}

/*------- Helper functions ---------- */
$setCharAt = function (str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}
$getElemByName = function(name) {
    var elem = [];

    for(var i=0; i<elements.primary.length; i++)
        elem.push(elements.primary[i]);

    for(var i=0; i<elements.creatables.length; i++)
        elem.push(elements.creatables[i]);

    var ret = $.grep(elem, function( n, i ) {
        return n.name == name;
    });
    return ret[0];
}
$getElemBySeq = function(uID) {
    var elem = [];

    for(var i=0; i<elements.creatables.length; i++)
        elem.push(elements.creatables[i]);

    var ret = $.grep(elem, function( n, i ) {
        return n.sequence == uID;
    });
    return ret[0];
}
