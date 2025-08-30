ServerEvents.recipes(event => {

    event.custom({
        "type": "thermal:insolator",
        "ingredient": {
            "item": "minecraft:dirt"
        },
        "result": [
            {
                "item": "minecraft:dirt",
                "chance": 0.9
            },
            {
                "item": "minecraft:oak_sapling",
                "chance": 0.1
            },
            {
                "item": "minecraft:spruce_sapling",
                "chance": 0.1
            },
            {
                "item": "minecraft:birch_sapling",
                "chance": 0.1
            }
        ],
        "experience": 0.15
        })

    event.custom({
        "type": "thermal:insolator",
        "ingredient": {
            "item": "minecraft:mud"
        },
        "result": [
            {
                "item": "minecraft:mud",
                "chance": 0.9
            },
            {
                "item": "minecraft:jungle_sapling",
                "chance": 0.1
            },
            {
                "item": "minecraft:acacia_sapling",
                "chance": 0.1
            },
            {
                "item": "minecraft:cherry_sapling",
                "chance": 0.1
            }
        ],
        "experience": 0.15
        })

    event.custom({
        "type": "thermal:insolator",
        "ingredient": {
            "item": "neapolitan:banana_frond"
        },
        "result": [
            {
                "item": "neapolitan:banana_stalk",
                "count": 5
            },
            {
                "item": "neapolitan:banana_frond"
            },
            {
                "item": "neapolitan:banana_bundle"
            }
        ],
        "experience": 0.15
        })

})

