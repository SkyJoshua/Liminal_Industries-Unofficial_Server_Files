ServerEvents.recipes(event => {

    event.recipes.create.splashing([
        Item.of('minecraft:clay_ball').withChance(0.25),
        Item.of('berry_good:sweet_berry_pips').withChance(0.05),
        Item.of('neapolitan:strawberry_pips').withChance(0.05)
    ],
        'kubejs:carpet_dust')


    event.recipes.create.splashing([
        'minecraft:paper',
        'minecraft:yellow_dye',
        Item.of('minecraft:yellow_dye').withChance(0.5)
    ],
        'kubejs:wallpaper')
})