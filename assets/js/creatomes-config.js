
var config = {};

config.imagePath = "assets/img/";

config.launchpad = {
    type: "environment",
    states: [
        {name: "default", representation: "<img src='http://www.toptenz.net/wp-content/uploads/2014/01/god-of-war.jpg'/>"}
    ],
    locations: [
        {name: "main-logo", states: [
            {name: "logo", representation: "<span>Creatomes</span>"}
        ]},
        {name: "instructions", states: [
            {name: "default", representation: "<div></div>"}
        ]},
        {name: "start", states: [
            {name: "start-btn", representation: "<span>START!</span>"}
        ]}
    ]
}

config.mainPage = {
    type: "environment",
    states: [
        {name: "default", representation: "<img src='http://www.hdwallpapersinn.com/wp-content/uploads/2014/11/fantasy-world-artwork-art-background-wallpapers-images-array-wallwuzz-hd-wallpaper-5273.jpg'/>"}
    ],
    locations:
        function() {
            var allItems = []
            for(var i=1; i<=6; i++)
            {
                allItems.push({
                    name: "book" + i,
                    states: [
                        {
                            name: "unlocked",
                            representation: "<img class='carousel-item' src='" + config.imagePath + "tomes/" + i + ".png' />"
                        },
                        {
                            name: "default",
                            representation: "<img class='carousel-item' src='" + config.imagePath + "tomes/_" + i + ".png' />"
                        }
                    ]
                });
            }
            allItems.push({name: "prev-button", states: [
                {name: "default", representation: "<img src='" + config.imagePath + "prev.png' />"}
            ]});
            allItems.push({name: "next-button", states: [
                {name: "default", representation: "<img src='" + config.imagePath + "next.png' />"}
            ]});
            allItems.push({name: "tome-name", states: [
                {name: "default", representation: "<span></span>"}
            ]});
            allItems.push({name: "flipbook", states: [
                {name: "default", representation: ""}
            ]});

            return allItems;
        }()
}

config.brewPot = {
    type: "environment",
    states: [
        {name: "default", representation: "<img src='xyz' />"}
    ],
    locations: [
        {name: "qt-meter-empty"},
        {name: "limit"},
        {name: "qt-meter-filled"},
        {name: "qt-meter-indicator", states: [
            {name: "qt-meter-indicator-text", representation: "<span>mood</span>"}
        ]}
    ]
};


config.meterOverlay = {
    type: "environment",
    states: [
        {name: "default"}
    ],
    locations: [
        {name: "qt-meter-overlay"}
    ]
}

config.player = {
    type: "entity",
    states: [
        {name: "default", representation: "<img id='qt-player-img' src='./img/player.png' />"}
    ]
};