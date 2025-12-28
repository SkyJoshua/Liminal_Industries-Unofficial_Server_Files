ServerEvents.recipes(event => {

	let rock_gen = (output, adjacent, below) => {
    event.custom({
        "type": "thermal:rock_gen",
        "adjacent": adjacent,
        "below": below,
        "result": {
            "item": output
        }
      })
    }

    event.remove({id: 'create:splashing/crushed_raw_copper'})
    rock_gen('create:veridium', 
        'botania:alchemy_catalyst', 
        'minecraft:sculk'
    )

    event.remove({id: 'create:splashing/crushed_raw_iron'})
    rock_gen('create:crimsite', 
        'botania:alchemy_catalyst', 
        'kubejs:red_carpet'
    )

    event.remove({id: 'create:splashing/crushed_raw_zinc'})
    rock_gen('create:asurine', 
        'botania:alchemy_catalyst', 
        'kubejs:porous_stone'
    )

    rock_gen('thermal:rubber', 
        'kubejs:stripped_wallpaper', 
        'minecraft:air'
    )

    rock_gen('enderio:grains_of_infinity', 
        'enderio:fire_water', 
        'minecraft:bedrock'
    )

    rock_gen('kubejs:carpet_dust', 
        'thermal:device_collector', 
        'kubejs:carpet'
    )

    rock_gen('kubejs:quantum_string',
        'mekanism:quantum_entangloporter', 
        'minecraft:loom'
    )

    event.remove({id: 'create:splashing/crushed_raw_gold'})
    rock_gen('kubejs:pool_tile_golden', 
        'botania:alchemy_catalyst', 
        'kubejs:pool_tiles_golden'
    )

    rock_gen('kubejs:pool_tile_golden', 
        'botania:alchemy_catalyst', 
        'kubejs:pool_tiles_golden_half'
    )

    rock_gen('minecraft:lapis_lazuli',
        'minecraft:prismarine', 
        'kubejs:pool_tiles'
    )

    rock_gen('immersiveengineering:raw_aluminum',
        'minecraft:water', 
        'kubejs:missing_tiles_empty'
    )

    rock_gen('immersiveengineering:raw_aluminum',
        'minecraft:water', 
        'kubejs:missing_tiles_half'
    )

})

