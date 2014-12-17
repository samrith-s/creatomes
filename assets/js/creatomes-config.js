
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
    locations: [
        {name: "tome-carousel", states: [
            {name: "default", representation: "<div></div>"}
        ]},
        {name: "flipbook-holder", states: [
            {name: "default", representation: "<div id='flipbook'></div>"}
        ]}
    ]
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