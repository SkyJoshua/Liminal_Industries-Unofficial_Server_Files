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
    //rock_gen('create:ochrum', 
    //    'create:rose_quartz_block', 
    //    'kubejs:red_carpet'
    //)

})

