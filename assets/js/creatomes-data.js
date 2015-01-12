elements = {}

$path_basic         = "assets/img/" + "elements/";
$path_creatables    = "assets/img/" + "creatables/";
$path_extension     = ".png";

//selected elements
elements.selected =
    [
        "Worlds",
        "Graven",
        "Unicorn",
        "Sapien",
        "Dartan",
        "Air Blade",
        "Pyrocles",
        "Pharon",
        "Hell Star",
        "Dragon"
    ];

//primary elements
elements.primary = [

    {
        sequence: 1,
        name: "Fire",
        image: $path_basic +  "fire.png"
    },
    {
        sequence: 2,
        name: "Water",
        image: $path_basic + "water.png"
    },
    {
        sequence: 3,
        name: "Earth",
        image: $path_basic + "earth.png"
    },
    {
        sequence: 4,
        name: "Air",
        image: $path_basic + "air.png"
    },
    {
        sequence: 5,
        name: "Light",
        image: $path_basic + "light.png"
    },
    {
        sequence: 6,
        name: "Space",
        image: $path_basic + "space.png"
    },
    {
        sequence: 7,
        name: "Stardust",
        image: $path_basic + "stardust.png"
    },
    {
        sequence: 8,
        name: "Darkonium",
        image: $path_basic + "darkonium.png"
    },
    {
        sequence: 9,
        name: "Stone",
        image: $path_basic + "stone.png"
    },
    {
        sequence: 10,
        name: "Metal",
        image: $path_basic + "metal.png"
    },
    {
        sequence: 11,
        name: "Venom",
        image: $path_basic + "venom.png"
    },
    {
        sequence: 12,
        name: "Death",
        image: $path_basic + "death.png"
    },
    {
        sequence: 13,
        name: "Tree",
        image: $path_basic + "tree.png"
    },
    {
        sequence: 14,
        name: "Life",
        image: $path_basic + "life.png"
    },
    {
        sequence: 15,
        name: "Bone",
        image: $path_basic + "bone.png"
    }
];

//creatable elements.
elements.creatables = [
    {
        sequence: 1,
        name: "Worlds",
        image: $path_creatables + "worlds.png",
        combo: "001111000000000",
        lore: "The dark empty universe began seeing worlds of blue and brown, with swift winds and sunlight.",
        main_elem: "space",
        num_elem: 4,
        reward: 10
    },
    {
        sequence: 2,
        name: "Lava",
        image: $path_creatables + "lava.png",
        combo: "101000000000000",
        lore: "It bubbled at the centre of the world, created from fiery rock.",
        main_elem: "fire",
        num_elem: 2,
        reward: 10
    },
    {
        sequence: 3,
        name: "Wood",
        image: $path_creatables + "wood.png",
        combo: "000000000001100",
        lore: "Obtained from the first form of life and its destruction.",
        main_elem: "tree",
        num_elem: 2,
        reward: 10
    },
    {
        sequence: 4,
        name: "Vapour",
        image: $path_creatables + "vapour.png",
        combo: "110000000000000",
        lore: "The union of two opposing basic elements resulted in steam.",
        main_elem: "water",
        num_elem: 2,
        reward: 10
    },
    {
        sequence: 5,
        name: "Pyrocles",
        image: $path_creatables + "pyrocles.png",
        combo: "110000000000010",
        lore: "When life was bestowed to steam, Pyrocles were born.",
        main_elem: "water",
        num_elem: 3,
        reward: 10
    },
    {
        sequence: 6,
        name: "Minotaur",
        image: $path_creatables + "minotaur.png",
        combo: "100000010101000",
        lore: "The Minotaur was born from the fiery ashes of dead beasts, reinforced with armor for skin, having a heart of evil.",
        main_elem: "darkonium",
        num_elem: 4,
        reward: 10
    },
    {
        sequence: 7,
        name: "Leviathan",
        image: $path_creatables + "leviathan.png",
        combo: "010000010100000",
        lore: "From the sea it was born, devouring ships of steel, for it too was made of such a strong substance.",
        main_elem: "water",
        num_elem: 3,
        reward: 10
    },
    {
        sequence: 8,
        name: "Basilisk",
        image: $path_creatables + "basilisk.png",
        combo: "001000010010000",
        lore: "Poison and evil energy combined to create the king of serpents - The Basilisk.",
        main_elem: "earth",
        num_elem: 3,
        reward: 10
    },
    {
        sequence: 9,
        name: "Graven",
        image: $path_creatables + "graven.png",
        combo: "000100010100000",
        lore: "Evil undead ravens that swarmed the skies with bodies of razor blades.",
        main_elem: "metal",
        num_elem: 3,
        reward: 10
    },
    {
        sequence: 10,
        name: "Gorgon",
        image: $path_creatables + "gorgon.png",
        combo: "001000001010010",
        lore: "A creature of flight, made of a slow and strong substance, the Gorgon had hair made of live serpents.",
        main_elem: "life",
        num_elem: 4,
        reward: 10
    },
    {
        sequence: 11,
        name: "Unicorn",
        image: $path_creatables + "unicorn.png",
        combo: "000010100000011",
        lore: "Born of the first creation, the essence of life and magic.",
        main_elem: "bone",
        num_elem: 4,
        reward: 10
    },
    {
        sequence: 12,
        name: "Cerberus",
        image: $path_creatables + "cerberus.png",
        combo: "101000010100001",
        lore: "Said to be born in the blazing pits of the underworld, this hell-hound was pure evil and tore the flesh off of its victims with ease.",
        main_elem: "bone",
        num_elem: 5,
        reward: 10
    },
    {
        sequence: 13,
        name: "Anasazi",
        image: $path_creatables + "anasazi.png",
        combo: "000010100000001",
        lore: "The wise wolf of magic, faster than the wind, this beast roamed the lands in packs.",
        main_elem: "light",
        num_elem: 3,
        reward: 10
    },
    {
        sequence: 14,
        name: "Harbringer",
        image: $path_creatables + "harbringer.png",
        combo: "000110100100000",
        lore: "Stronger than stone yet faster than the wind, these radiant horses were truly magical.",
        main_elem: "metal",
        num_elem: 4,
        reward: 10
    },
    {
        sequence: 15,
        name: "Dragon",
        image: $path_creatables + "dragon.png",
        combo: "100110100000000",
        lore: "Made of energy and magic, these large creatures rose up from the underground caverns to fly amongst the beasts of the sky.",
        main_elem: "stardust",
        num_elem: 4,
        reward: 10
    },
    {
        sequence: 16,
        name: "Sapien",
        image: $path_creatables + "sapien.png",
        combo: "001000000000011",
        lore: "Sapiens reigned on the surface of the world, created from the essence of life and a substance that had no discernible magical properties.",
        main_elem: "earth",
        num_elem: 3,
        reward: 10
    },
    {
        sequence: 17,
        name: "Ent",
        image: $path_creatables + "ent.png",
        combo: "001000000000110",
        lore: "Trees walked the lands and the Creator called them Ents for they looked like ants from above.",
        main_elem: "earth",
        num_elem: 3,
        reward: 10
    },
    {
        sequence: 18,
        name: "Atlantean",
        image: $path_creatables + "atlantean.png",
        combo: "010000001000001",
        lore: "Born in the depths of the ocean from calcified endoskeletons.",
        main_elem: "stone",
        num_elem: 3,
        reward: 10
    },
    {
        sequence: 19,
        name: "Frost Giant",
        image: $path_creatables + "frostgiant.png",
        combo: "010100010000000",
        lore: "The frost giants were created when rain fell down upon the evil in the ice lands.",
        main_elem: "darkonium",
        num_elem: 3,
        reward: 10
    },
    {
        sequence: 20,
        name: "Lavan",
        image: $path_creatables + "lavan.png",
        combo: "101000000000010",
        lore: "As death began to collect beneath the surface, molten rocks gave rise to the Lavans.",
        main_elem: "fire",
        num_elem: 3,
        reward: 10
    },
    {
        sequence: 21,
        name: "Pharon",
        image: $path_creatables + "pharon.png",
        combo: "101100000000011",
        lore: "In the fiery deserts, these humanoid beings reigned.",
        main_elem: "bone",
        num_elem: 5,
        reward: 10
    },
    {
        sequence: 22,
        name: "Undead",
        image: $path_creatables + "undead.png",
        combo: "001000010001001",
        lore: "Corpses began to rise, filled with evil and hardened earth.",
        main_elem: "bone",
        num_elem: 4,
        reward: 10
    },
    {
        sequence: 23,
        name: "Paladin",
        image: $path_creatables + "paladin.png",
        combo: "001010100000011",
        lore: "Magical radiant beings evolved from Sapiens, they had an armor that could not be penetrated easily.",
        main_elem: "light",
        num_elem: 5,
        reward: 10
    },
    {
        sequence: 24,
        name: "Dartan",
        image: $path_creatables + "dartan.png",
        combo: "100000010101001",
        lore: "Born from the ashes of Spartans lost in war, the Dartans were made of burning steel and evil.",
        main_elem: "death",
        num_elem: 5,
        reward: 10
    },
    {
        sequence: 25,
        name: "Vaporan",
        image: $path_creatables + "vaporan.png",
        combo: "110000010000010",
        lore: "Water and fire magically fused with dark energy gave life to the Vaporans.",
        main_elem: "darkonium",
        num_elem: 4,
        reward: 10
    },
    {
        sequence: 26,
        name: "War Hammer",
        image: $path_creatables + "warhammer.png",
        combo: "100000001000100",
        lore: "Forged of molten rock, the War Hammer contained a material that had an attack and speed both greater than most.",
        main_elem: "tree",
        num_elem: 3,
        reward: 10
    },
    {
        sequence: 27,
        name: "Dark Axe",
        image: $path_creatables + "darkaxe.png",
        combo: "001000011001100",
        lore: "Felled trees and evil moulded by a hard lustrous substance that was formed beneath the earth gave rise to the dark axe.",
        main_elem: "stone",
        num_elem: 5,
        reward: 10
    },
    {
        sequence: 28,
        name: "Air Blade",
        image: $path_creatables + "airblade.png",
        combo: "000000000101100",
        lore: "An extremely fast weapon, born from the roots of the Kao tree.",
        main_elem: "metal",
        num_elem: 3,
        reward: 10
    },
    {
        sequence: 29,
        name: "Trident",
        image: $path_creatables + "trident.png",
        combo: "010000000100001",
        lore: "Created in the depths of the ocean, the Trident was made by combining the fastest substance with one that is slower than most.",
        main_elem: "bone",
        num_elem: 3,
        reward: 10
    },
    {
        sequence: 30,
        name: "Black Shield",
        image: $path_creatables + "blackshield.png",
        combo: "001000011000000",
        lore: "Evil carved the black shield from an earthly substance that was hard and slow.",
        main_elem: "earth",
        num_elem: 3,
        reward: 10
    },
    {
        sequence: 31,
        name: "Spear of Doom",
        image: $path_creatables + "spearofdoom.png",
        combo: "100000000010001",
        lore: "Made of poisonous bone, the Spear of Doom can break through almost any barrier.",
        main_elem: "fire",
        num_elem: 3,
        reward: 10
    },
    {
        sequence: 32,
        name: "Shield of Glory",
        image: $path_creatables + "shieldofglory.png",
        combo: "100010100100000",
        lore: "Fiery magic is all that was put into the shield by the aging blacksmith at the end of the world.",
        main_elem: "metal",
        num_elem: 4,
        reward: 10
    },
    {
        sequence: 33,
        name: "Hell Star",
        image: $path_creatables + "hellstar.png",
        combo: "000010100100000",
        lore: "A sword forged of brilliant radiance and magic, the Hell Star was the most feared weapon in the world.",
        main_elem: "light",
        num_elem: 3,
        reward: 10
    },
    {
        sequence: 34,
        name: "Bow of Light",
        image: $path_creatables + "bowoflight.png",
        combo: "100010000100100",
        lore: "Trees were burnt in a flash and merged with steel to bring about the birth of the Bow of Light.",
        main_elem: "light",
        num_elem: 4,
        reward: 10
    },
    {
        sequence: 35,
        name: "Darkalibur",
        image: $path_creatables + "darkalibur.png",
        combo: "000000011100000",
        lore: "A broadsword filled with evil, legend said it was embedded in a substance stronger and slower than most.",
        main_elem: "stone",
        num_elem: 3,
        reward: 10
    }
];

howto = {}
howto.data = [
    {
        loc: "elementFire",
        description: "<span>There are 15 primary elements. Clicking on these elements sends them to the alchemy circle.</span>",
        sequence: 0
    },
    {
        loc: "elementStone",
        description: "<span>You have to add elements to the table to make a combo.</span>",
        sequence: 1
    },
    {
        loc: "elementMetal",
        description: "<span>An element can have upto 5 elements that it is made of.</span>",
        sequence: 2
    },
    {
        loc: "brew-button",
        description: "<span>Once you have added elements, you can check by pressing this button.</span>",
        sequence: 3
    },
    {
        loc: "brew-button",
        description: "<span>This button won't work until at least one element is added.</span>",
        sequence: 4
    },
    {
        loc: "creatable-name",
        description: "<span>This is the name of the element you are creating (creatable).</span>",
        sequence: 5
    },
    {
        loc: "crystalcount",
        description: "<span>This is the number of crystals you have.</span>",
        sequence: 6
    },
    {
        loc: "crystalcount",
        description: "<span>Crystals are used to view hints.</span>",
        sequence: 7
    },
    {
        loc: "lifelines",
        description: "<span>There are 3 types of hints available. Each take up 3 crystals per use.</span>",
        sequence: 8
    },
    {
        loc: "lifeline1",
        description: "<span>The COUNT hint tells you the number of elements that make up the creatable.</span>",
        sequence: 9
    },
    {
        loc: "lifeline2",
        description: "<span>The LORE hint tells you the story behind the creatable. This is particularly useful in most cases. </span>",
        sequence: 10
    },
    {
        loc: "lifeline3",
        description: "<span>The CHANCE hints displays one element that makes up the creatable.</span>",
        sequence: 11
    },
    {
        loc: "exit",
        description: "<span>You can exit at any time. Remember, your progress is lost on exit.</span>",
        sequence: 12
    },
    {
        loc: "instruction",
        description: "<span>These instructions can be viewed at any time by clicking the red float icon.</span>",
        sequence: 13
    }
];

