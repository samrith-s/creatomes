game = {}

$path_basic         = config.imagePath + "elements/";
$path_creatables    = config.imagePath + "creatables/";

game.elements.primary = [

    //primary elements
    {
        sequence: 1,
        tome_id: 0,
        name: "Fire",
        image: $path_basic +  "fire.png",
        combo: "0"
    },
    {
        sequence: 2,
        tome_id: 0,
        name: "Water",
        image: $path_basic + "water.png",
        combo: "0"
    },
    {
        sequence: 3,
        tome_id: 0,
        name: "Earth",
        image: $path_basic + "earth.png",
        combo: "0"
    },
    {
        sequence: 4,
        tome_id: 0,
        name: "Air",
        image: $path_basic + "air.png",
        combo: "0"
    },
    {
        sequence: 5,
        tome_id: 0,
        name: "Light",
        image: $path_basic + "light.png",
        combo: "0"
    },
    {
        sequence: 6,
        tome_id: 0,
        name: "Space",
        image: $path_basic + "space.png",
        combo: "0"
    },
    {
        sequence: 7,
        tome_id: 0,
        name: "Stardust",
        image: $path_basic + "stardust.png",
        combo: "0"
    },
    {
        sequence: 8,
        tome_id: 0,
        name: "Darkonium",
        image: $path_basic + "darkonium.png",
        combo: "0"
    },
    {
        sequence: 9,
        tome_id: 0,
        name: "Stone",
        image: $path_basic + "stone.png",
        combo: "0"
    },
    {
        sequence: 10,
        tome_id: 0,
        name: "Metal",
        image: $path_basic + "metal.png",
        combo: "0"
    },
    {
        sequence: 11,
        tome_id: 0,
        name: "Venom",
        image: $path_basic + "venom.png",
        combo: "0"
    },
    {
        sequence: 12,
        tome_id: 0,
        name: "Death",
        image: $path_basic + "death.png",
        combo: "0"
    },
    {
        sequence: 13,
        tome_id: 0,
        name: "Tree",
        image: $path_basic + "tree.png",
        combo: "0"
    },
    {
        sequence: 14,
        tome_id: 0,
        name: "Life",
        image: $path_basic + "life.png",
        combo: "0"
    },
    {
        sequence: 15,
        tome_id: 0,
        name: "Bone",
        image: $path_basic + "bone.png",
        combo: "0"
    }
]

//these are the creatable elements.
game.elements.creatables = [
    {
        sequence: 1,
        name: "Worlds",
        image: $path_creatables + "worlds.png",
        combo: "",
        lore: "The dark empty universe began seeing worlds of blue and brown.",
        reward: 10
    },
    {
        sequence: 2,
        name: "Lava",
        image: $path_creatables + "lava.png",
        combo: "01101",
        lore: "It bubbled at the centre of the world, created from fiery rock.",
        reward: 10
    },
    {
        sequence: 3,
        name: "Wood",
        image: $path_creatables + "wood.png",
        combo: "001100",
        lore: "Obtained from the first form of life and its destruction.",
        reward: 10
    },
    {
        sequence: 4,
        name: "Vapour",
        image: $path_creatables + "vapour.png",
        combo: "11110",
        lore: "The union of two opposing basic elements resulted in steam.",
        reward: 10
    },
    {
        sequence: 5,
        name: "Pryocles",
        image: $path_creatables + "pryocles.png",
        combo: "01110",
        lore: "When life was bestowed to steam, Pryocles were born.",
        reward: 10
    },
    {
        sequence: 6,
        name: "Minotaur",
        image: $path_creatables + "minotaur.png",
        combo: "10100000",
        lore: "The Minotaur was born from the fiery ashes of dead beasts, reinforced with armor for skin, having a heart of evil.",
        reward: 10
    },
    {
        sequence: 7,
        name: "Leviathan",
        image: $path_creatables + "leviathan.png",
        combo: "10100000",
        lore: "From the sea it was born, devouring ships of steel, for it too was made of such a strong substance.",
        reward: 10
    },
    {
        sequence: 8,
        name: "Basilisk",
        image: $path_creatables + "basilisk.png",
        combo: "10100000",
        lore: "Poison and evil energy combined to create the king of serpents - The Basilisk.",
        reward: 10
    },
    {
        sequence: 9,
        name: "Graven",
        image: $path_creatables + "graven.png",
        combo: "10100000",
        lore: "Evil undead ravens that swarmed the skies with bodies of razor blades.",
        reward: 10
    },
    {
        sequence: 10,
        name: "Gorgon",
        image: $path_creatables + "gorgon.png",
        combo: "10100000",
        lore: "A creature of flight, made of a slow and strong substance, the Gorgon had hair made of live serpents.",
        reward: 10
    },
    {
        sequence: 11,
        name: "Unicorn",
        image: $path_creatables + "unicorn.png",
        combo: "10100000",
        lore: "Born of the first creation, the essence of life and magic.",
        reward: 10
    },
    {
        sequence: 12,
        name: "Cerberus",
        image: $path_creatables + "cerberus.png",
        combo: "10100000",
        lore: "Said to be born in the blazing pits of the underworld, this hell-hound was pure evil and tore the flesh off of its victims with ease.",
        reward: 10
    },
    {
        sequence: 13,
        name: "Anasazi",
        image: $path_creatables + "anasazi.png",
        combo: "10100000",
        lore: "The wise wolf of magic, faster than the wind, this beast roamed the lands in packs.",
        reward: 10
    },
    {
        sequence: 14,
        name: "Harbringer",
        image: $path_creatables + "harbringer.png",
        combo: "10100000",
        lore: "Stronger than stone yet faster than the wind, these radiant horses were truly magical.",
        reward: 10
    },
    {
        sequence: 15,
        name: "Dragon",
        image: $path_creatables + "dragon.png",
        combo: "10100000",
        lore: "Made of energy and magic, these large creatures rose up from the underground caverns to fly amongst the beasts of the sky.",
        reward: 10
    },
    {
        sequence: 16,
        name: "Sapien",
        image: $path_creatables + "sapien.png",
        combo: "10100000",
        lore: "Sapiens reigned on the surface of the world, created from the essence of life and a substance that had no discernible magical properties.",
        reward: 10
    },
    {
        sequence: 17,
        name: "Ent",
        image: $path_creatables + "ent.png",
        combo: "10100000",
        lore: "All the primary elements but evil came together to create the Ents.",
        reward: 10
    },
    {
        sequence: 18,
        name: "Atlantean",
        image: $path_creatables + "atlantean.png",
        combo: "10100000",
        lore: "Born in the depths of the ocean from calcified endoskeletons.",
        reward: 10
    },
    {
        sequence: 19,
        name: "Frost Giant",
        image: $path_creatables + "frostgiant.png",
        combo: "10100000",
        lore: "The frost giants were created when rain fell down upon the evil in the ice lands.",
        reward: 10
    },
    {
        sequence: 20,
        name: "Lavan",
        image: $path_creatables + "lavan.png",
        combo: "10100000",
        lore: "As death began to collect beneath the surface, molten rock gave rise to the Lavans.",
        reward: 10
    },
    {
        sequence: 21,
        name: "Pharon",
        image: $path_creatables + "pharon.png",
        combo: "10100000",
        lore: "In the fiery deserts, these humanoid beings reigned.",
        reward: 10
    },
    {
        sequence: 22,
        name: "Undead",
        image: $path_creatables + "undead.png",
        combo: "10100000",
        lore: "Corpses began to rise, filled with evil and hardened earth.",
        reward: 10
    },
    {
        sequence: 23,
        name: "Paladin",
        image: $path_creatables + "paladin.png",
        combo: "10100000",
        lore: "Magical radiant beings evolved from Sapiens, they had an armor that could not be penetrated easily.",
        reward: 10
    },
    {
        sequence: 24,
        name: "Dartan",
        image: $path_creatables + "dartan.png",
        combo: "10100000",
        lore: "Born from the ashes of Spartans lost in war, the Dartans were made of burning steel and evil.",
        reward: 10
    },
    {
        sequence: 25,
        name: "Vaporan",
        image: $path_creatables + "vaporan.png",
        combo: "10100000",
        lore: "Water and fire magically fused with dark energy gave life to the Vaporans.",
        reward: 10
    },
    {
        sequence: 26,
        name: "War Hammer",
        image: $path_creatables + "warhammer.png",
        combo: "10100000",
        lore: "Forged of molten rock, the War Hammer contained a material that had an attack and speed both greater than most.",
        reward: 10
    },
    {
        sequence: 27,
        name: "Dark Axe",
        image: $path_creatables + "darkaxe.png",
        combo: "10100000",
        lore: "Felled trees and evil moulded by a hard lustrous substance that was formed beneath the earth gave rise to the dark axe.",
        reward: 10
    },
    {
        sequence: 28,
        name: "Air Blade",
        image: $path_creatables + "airblade.png",
        combo: "10100000",
        lore: "An extremely fast weapon, born from the roots of the Kao tree.",
        reward: 10
    },
    {
        sequence: 29,
        name: "Trident",
        image: $path_creatables + "trident.png",
        combo: "10100000",
        lore: "Created in the depths of the ocean, the trident was made by combining the fastest substance with one that is slower than most.",
        reward: 10
    },
    {
        sequence: 30,
        name: "Black Shield",
        image: $path_creatables + "blackshield.png",
        combo: "10100000",
        lore: "Evil carved the black shield from an earthly substance that was hard and slow.",
        reward: 10
    },
    {
        sequence: 31,
        name: "Spear of Doom",
        image: $path_creatables + "spearofdoom.png",
        combo: "10100000",
        lore: "Made of poisonous bole, the Spear of Doom can break through almost any barrier.",
        reward: 10
    },
    {
        sequence: 32,
        name: "Shield of Glory",
        image: $path_creatables + "shieldofglory.png",
        combo: "10100000",
        lore: "Fiery magic is all that was put into the shield by the aging blacksmith at the end of the world.",
        reward: 10
    },
    {
        sequence: 33,
        name: "Hell Star",
        image: $path_creatables + "hellstar.png",
        combo: "10100000",
        lore: "A sword forged of brilliant radiance and magic, the Hell Star was the most feared weapon in the world.",
        reward: 10
    },
    {
        sequence: 34,
        name: "Bow of Light",
        image: $path_creatables + "bowoflight.png",
        combo: "10100000",
        lore: "Trees were burnt in a flash and merged with steel to bring about the birth of the Bow of Light.",
        reward: 10
    },
    {
        sequence: 35,
        name: "Darkalibur",
        image: $path_creatables + "darkalibur.png",
        combo: "10100000",
        lore: "A broadsword filled with evil, legend said it was embedded in a substance stronger and slower than most.",
        reward: 10
    }
]