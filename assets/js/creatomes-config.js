
var config = {};

config.initMana = 0;
config.initPower = 0;

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
        {
            name: "default",
            representation: "<img id='mainPageBg' src='http://www.hdwallpapersinn.com/wp-content/uploads/2014/11/fantasy-world-artwork-art-background-wallpapers-images-array-wallwuzz-hd-wallpaper-5273.jpg'/>"
        }
    ],
    locations: [
        {name: "tome", states: [
            {name: "default", representation: ""}
        ]}
    ]

}

config.createScreen = {
    type: "environment",
    states: [
        {
            name: "default",
            representation: "<img src='http://s3.amazonaws.com/placester-wordpress/blogs.dir/589/files/2012/08/caveman-cave-091746.jpg'/>"
        }
    ],
    locations: function () {
            var allLevels = [];
            for (var i = 0; i < elements.primary.length; i++) {
                allLevels.push({
                    name: "element" + elements.primary[i].name,
                    states: [
                        {name: "default", representation: "<img src='" + elements.primary[i].image + "' />"}
                    ]});
            }

            allLevels.push({name: "info-panel", states: [
                {name: "default", representation: ""}
            ]});

            allLevels.push({name: "brew-pot", states: [
                {name: "default", representation: "<img src='assets/img/alchemycircle.png' />"}
            ]});
            allLevels.push({name: "animate-reference", states: [
                {name: "default", representation: ""}
            ]});
            allLevels.push({name: "animate-reference-1", states: [
                {name: "default", representation: ""}
            ]});
            allLevels.push({name: "animate-reference-2", states: [
                {name: "default", representation: ""}
            ]});
            allLevels.push({name: "animate-reference-3", states: [
                {name: "default", representation: ""}
            ]});
            allLevels.push({name: "animate-reference-4", states: [
                {name: "default", representation: ""}
            ]});
            allLevels.push({name: "animate-reference-5", states: [
                {name: "default", representation: ""}
            ]});
            allLevels.push({name: "brew-button", states: [
                {name: "default", representation: "<span>CREATE!</span>"}
            ]});
            allLevels.push({name: "stageComplete", states: [
                {name: "default", representation: "<div><p></p><img src='' /><span>Continue!</span>"}
            ]});
                return allLevels;
            }()
}