ServerEvents.recipes(event => {

let spores = (input) => {
    event.custom({
        "type": "brewinandchewin:fermenting",
        "basefluid": {
            "count": 1000,
            "fluid": "minecraft:water"
        },
        "experience": 0.0,
        "fermentingtime": 2400,
        "ingredients": [
                {
                    "item": input
                }
        ],
        "recipe_book_tab": "meals",
        "result": {
        "count": 2,
        "item": input
        },
        "temperature": 4
    })
}

spores('thermal:redstone_mushroom_spores')
spores('thermal:glowstone_mushroom_spores')
spores('thermal:slime_mushroom_spores')
spores('thermal:gunpowder_mushroom_spores')

event.smelting('minecraft:redstone', 'thermal:redstone_mushroom_spores')
    .xp(0.1)
    .cookingTime(200);


})