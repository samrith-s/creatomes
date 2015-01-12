jQuery.fn.center = function(parent) {
    if (parent) {
        parent = this.parent();
    } else {
        parent = window;
    }
    this.css({
        "position": "absolute",
        "zIndex":   2,
        "top": ((($(parent).height() - this.outerHeight()) / 2) + $(parent).scrollTop() + "px"),
        "left": ((($(parent).width() - this.outerWidth()) / 2) + $(parent).scrollLeft() + "px")
    });
    return this;
}

var launchpad, mainPage, createScreen, infoPanel, mana, player, lifelines, messagePanel;

var completed   = [];
completed.toc   = [];
completed.indiv = [];

$(function() {


});

function initGame() {
    launchpad = new Environment("launchpad");
    mainPage = new Environment("mainPage");
    createScreen = new Environment("createScreen");
    infoPanel = new Environment("infoPanel");
    lifelines = new Environment("lifelines");
    messagePanel = new Environment("messagePanel");

    mana = new Currency("mana");
    player = new Entity("Player");

    player.createWallet(mana, 0, 100, 10);

    var itemCount = 0;

    loadConfig(launchpad);
    loadConfig(mainPage);
    loadConfig(createScreen);
    loadConfig(infoPanel);
    loadConfig(lifelines);
    loadConfig(messagePanel);

    $("img").mousedown(function(){
        return false;
    });

    $("#start span").unbind('click').on("click", function() {
        $("#launchpad").fadeOut();
        $("#mainPage").fadeIn();
        initTome(itemCount);
    });

}

function initTome(itemCount) {
    console.log("Init tome!");

    if(itemCount == elements.selected.length) {
        window.location = "#/page/1";
        $("#exitMsg").remove();
        $("#mainPage").fadeIn();

        $("#messageText").html("<p>YOU ARE VICTORIOUS!</p><p id='playagain'>Play Again!</p>");
        $("#messageText p").eq(1).unbind('click').on('click', function() { location.reload(); });

        setTimeout(function() {
            $("#messagePanel").fadeIn().delay(100);
            $("#tome").fadeOut();
            setTimeout(function() {
                $("#messageText").fadeIn().delay(100).center(true);
            }, 400);
        }, 400);
    }

    else {
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
                "<div id='item-" + elem.sequence + "'align='center'>" +
                    "<h1>" + elem.name + "</h1>" +
                    "<img src='"  + elem.image + "' />" +
                    "<p class='create-btn' uID='" + elem.sequence + "'>CREATE THIS!</p>" +
                    "</div>"
            );
        }

        for(var i=0; i<completed.toc.length; i++)
            $(completed.toc[i]).css({textDecoration: "line-through"});

        for(var i=0; i<completed.indiv.length; i++)
        {
            var _this = completed.indiv[i] + " .create-btn";
            var uid = $(_this).attr("uid");
            var elem = $getElemBySeq(uid);
            var str = elem.combo;
            var tmparr = [];

            for(var j=0; j<elem.combo.length; j++) {
                if(str[j]!=0)
                    tmparr.push(j+1);
            }

            $(_this).empty();
            for(var k=0; k<tmparr.length; k++) {
                var ret = $.grep(elements.primary, function( n, i ) {
                    return n.sequence == tmparr[k];
                });
                ret = ret[0];
                $(_this).append("<img src='" + ret.image + "' />");
            }

            $(_this).addClass("no-click");
        }

        $tome.booklet({
            tabs: true,
            hash: true
        });

        $(".create-btn").unbind('click').on('click', function() {
            var uID = $(this).attr("uid");
            initCreateScreen(uID, itemCount);
        });
    }

}

function initCreateScreen(uID, itemCount) {
    var prime = [];
    for(i in elements.primary)
        prime.push(elements.primary[i]);

    var brewPotStr = "000000000000000";
    var cur;
    var tmp;

    $("#tome").effect("drop");
    setTimeout(function() {
        $("#mainPage").fadeOut();
        $("#createScreen").fadeIn();
        setTimeout(function () {
            $("#infoPanel").effect("bounce");
            $("#lifelines").effect("bounce");
        }, 400);
    }, 400);

    $("#crystalcount").text(player.mana.is());
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

    playGame(uID, brewPotStr, itemCount);
}

function playGame(uID, brewPotStr, itemCount) {

    var creatable = $getElemBySeq(uID);
    var init = 1;

    var checkr = setInterval(function() {

        console.log("Checking at regular intervals");
        if(init==1)
            $("#brew-button").addClass("no-click");
        else
            $("#brew-button").removeClass("no-click");

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
    }, 250);

    $("#creatable-name").fadeOut();
    setTimeout(function() {
        $("#creatable-name").text("You are creating: " + creatable.name);
        $("#creatable-name").fadeIn();
    }, 400);

    /* PRIMARY ELEMENTS -------------
    /* Primary Elements click options.
    /* All the onClick functions for all the primary
    /* elements are being handled within this chunk of code
     -------------------------------- */
    $(".primary-elements").unbind('click').on('click', function() {

        var temp;
        var thisElem = $("#" + $(this).attr("id"));
        var uID = thisElem.attr("uID");
        var pos;

        $("#brew-button").removeClass("no-click");

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

    /* BREW BUTTON -------------------
    /* Brew Button click options.
    /* All the onClick functions for the brew button are being handled
    /* within this chunk of code.
      -------------------------------- */
    $("#brew-button").fadeIn().addClass("no-click");
    $("#brew-button").unbind('click').on('click', function() {

        $(this).fadeOut(500);

        if(brewPotStr == creatable.combo) {
            var pos = $("#animate-reference").position();
            $(".clone-anim").animate({
                top: pos.top,
                left: pos.left
            }, 1500, "swing", function() {
                $(".clone-anim").fadeOut();
            });

            setTimeout(function() {
                completed.toc.push("#elem-" + uID);
                completed.indiv.push("#item-" + uID);
                victory(uID, checkr, itemCount);
                $(".primary-elements").removeClass("less-opacity");
                $(".clone-anim").remove();
            }, 1900);
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
                    }, 700, "easeOutBounce", function() { $("#brew-button").fadeIn(); });
                }
            });
        }
    });

    /* LIFELINES -------------------
     /* Lifeline click options.
     /* All the onClick functions for the lifelines are being handled
     /* within this chunk of code.
     -------------------------------- */
    $("#lifeline1").unbind('click').on('click', function() {
        if(player.mana.is() < 3) {
            $("#messageText").html("Sorry you don't have enough crystals!");
            $("#messageText").hide();
            setTimeout(function() {
                $("#messagePanel").fadeIn();
                setTimeout(function() {
                    $("#messageText").fadeIn().center(true);
                }, 400);
            }, 400);
        }
        else {
            player.mana.is(player.mana.is()-3);
            $("#crystalcount").text(player.mana.is());
            $("#crystalcount").effect("slide");
            $("#messageText").html(creatable.name + " is made up of " + creatable.num_elem + " elements.");
            $("#messageText").hide();
            clearInterval(checkr);
            setTimeout(function() {
                $("#messagePanel").fadeIn().delay(100);
                setTimeout(function() {
                    $("#messageText").fadeIn().center(true);
                }, 400);
            }, 400);
        }
    });

    $("#lifeline2").unbind('click').on('click', function() {
        if(player.mana.is() < 3) {
            $("#messageText").html("Sorry you don't have enough crystals!");
            $("#messageText").hide();
            setTimeout(function() {
                $("#messagePanel").fadeIn();
                setTimeout(function() {
                    $("#messageText").fadeIn().center(true);
                }, 400);
            }, 400);
        }
        else {
            player.mana.is(player.mana.is()-3);
            $("#crystalcount").text(player.mana.is());
            $("#crystalcount").effect("slide");
            $("#messageText").html(creatable.lore);
            $("#messageText").hide();
            clearInterval(checkr);
            setTimeout(function() {
                $("#messagePanel").fadeIn();
                setTimeout(function() {
                    $("#messageText").fadeIn().center(true);
                }, 400);
            }, 400);
        }
    });

    $("#lifeline3").unbind('click').on('click', function() {
        if(player.mana.is() < 3) {
            $("#messageText").html("Sorry you don't have enough crystals!");
            $("#messageText").hide();
            setTimeout(function() {
                $("#messagePanel").fadeIn().delay(100);
                setTimeout(function() {
                    $("#messageText").fadeIn().center(true);
                }, 400);
            }, 400);
        }
        else {
            player.mana.is(player.mana.is()-3);
            $("#crystalcount").text(player.mana.is());
            $("#crystalcount").effect("slide");
            $("#messageText").html("<p>One of the elements present is: </p><img src='" + $path_basic + creatable.main_elem + ".png' />");
            $("#messageText").hide();
            clearInterval(checkr);
            setTimeout(function() {
                $("#messagePanel").fadeIn().delay(100);
                setTimeout(function() {
                    $("#messageText").fadeIn().center(true);
                }, 400);
            }, 400);
        }
    });

    $("#exitMsg").unbind('click').on('click', function() {
        $("#messagePanel").fadeOut();
        checkr = setInterval(function() {

            console.log("Checking at regular intervals");
            if(init==1)
                $("#brew-button").addClass("no-click");
            else
                $("#brew-button").removeClass("no-click");

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
        }, 250);
    });

    $("#exit").unbind('click').on('click', function() {
        $("#messageText").html("<p>Do you really want to exit?</p>" +
            "<p class='btns'>Continue</p> <p class='btns'>Cancel</p>");
        $("#messageText p").eq(1).unbind('click').on('click', function() {
            $("#messagePanel").fadeOut();
            $("#createScreen").effect("drop", 750);
            $("#infoPanel").fadeOut();
            $("#lifelines").fadeOut();
            $(".primary-elements").removeClass("less-opacity");
            $(".clone-anim").remove();
            initTome(itemCount);
            clearInterval(checkr);
        });

        $("#messageText p").eq(2).unbind('click').on('click', function() {
            $("#messagePanel").fadeOut();
        });

        setTimeout(function() {
            $("#messagePanel").fadeIn().delay(100);
            setTimeout(function() {
                $("#messageText").fadeIn().delay(100).center(true);
            }, 400);
        }, 400);
    });

    $("#instruction").unbind('click').on('click', function() {
        help();
    });
}

function victory(uID, checkr, itemCount) {
    itemCount++;
    player.mana.is(player.mana.is()+10);
    var tmp = $getElemBySeq(uID);
    var now = 0;
    $("#stageComplete img").attr("src", tmp.image);
    $("#stageComplete div p").text(tmp.name);
    $("#stageComplete").show();

    clearInterval(checkr);

    $("#stageComplete").animate(
        {
            width: "100%",
            height: "100%"
        },
        {
            step: function() { $(this).center(true); },
            duration: 1000,
            complete: function() {
                $("#stageComplete").animate(
                    { background: "rgba(1,1,1,1)" },
                    {
                        step: function() {
                                now = now+0.015;
                                $(this).css({background: "rgba(1,1,1," + now + ")"});
                            },
                        duration: 750
                    }
                );
            }
        }
    );

    $("#stageComplete div").animate(
        { width: "50%" },
        {
            step: function() { $(this).center(true) },
            duration: 1000
        }
    );

    $("#stageComplete span").unbind('click').on('click', function() {
        $("#stageComplete").fadeOut();
        $("#tome").css("zIndex", "0");
        setTimeout(function() {
            $("#stageComplete").css({
                background: "transparent",
                height: "0%",
                width: "0%"
            });

            $("#createScreen").effect("drop", 750)
        }, 400);
        setTimeout(function() { $("#infoPanel").fadeOut(); $("#lifelines").fadeOut(); initTome(itemCount); }, 400);
    });
}

function help() {
    initHowto(howto.data);
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

$getRandBetween = function(min, max) {
    return Math.floor((Math.random() * (max-min)) + min);
}
