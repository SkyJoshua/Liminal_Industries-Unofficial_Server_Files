// priority: 0


StartupEvents.registry('block', event => {

//Wallpapers

    let wallpapers = (id) => {
        event.create(id).displayName("Wallpaper")
            .fullBlock(true)
            .material("wood")
            .soundType("cherry_wood")
            .unbreakable()
	}


	wallpapers("wallpaper1")
	wallpapers("wallpaper2")
	wallpapers("wallpaper3")
	wallpapers("wallpaper4")
	wallpapers("wallpaper5")
	wallpapers("wallpaper6")
	wallpapers("wallpaper7")

	event.create('wallpaper_soft').displayName('Wallpaper')
		.model('kubejs:block/wallpaper')
		.fullBlock(true)
		.material("wood")
		.soundType("cherry_wood")
		.waterlogged() //Poolrooms ADDITION
		.noDrops()
		.noCollision()

	event.create('wallpaper_fake').displayName('Fake Wallpaper')
		.model('kubejs:block/wallpaper1')
		.fullBlock(true)
		.material("wood")
		.soundType("cherry_wood")
		.tagBlock('minecraft:mineable/axe')
		.noDrops()

	event.create('wallpaper1_slab', 'slab').displayName('Wallpaper Slab')
		.fullBlock(true)
		.material("wood")
		.soundType("cherry_wood")
		.unbreakable()
		.waterlogged()

	event.create('wallpaper5_slab', 'slab').displayName('Hotel Wall Slab')
		.fullBlock(true)
		.material("stone")
		.soundType("stone")
		.unbreakable()
		.waterlogged()

	event.create('stripped_wallpaper').displayName('Stripped Wallpaper')
		.fullBlock(true)
		.material("wood")
		.soundType("cherry_wood")
		.unbreakable()
		.property(BlockProperties.AGE_3)
		.randomTick(tick => {
    const block = tick.block
	const properties = block.properties
	const age = Number(properties.age)
	    if (age == 3) {
      		block.set('kubejs:wallpaper1')
		} else {
        	block.set(block.getId(), {
          	age: `${age+1}`
        })
	}})

//Poolrooms
	event.create('pool_tiles').displayName('Pool Tiles')
		.fullBlock(true)
		.material("stone")
		.soundType("deepslate")
		.unbreakable()

	event.create('pool_tiles_soft').displayName('Pool Tiles')
		.model('kubejs:block/pool_tiles')
		.fullBlock(true)
		.material("stone")
		.soundType("deepslate")
        .waterlogged()
		.noDrops()
		.noCollision()

	event.create('pool_tiles_slab', 'slab').displayName('Pool Tiles Slab')
		.material("stone")
		.soundType("deepslate")
		.unbreakable()
		.waterlogged()

	event.create('pool_tiles_stairs', 'stairs').displayName('Pool Tiles Stairs')
		.material("stone")
		.soundType("deepslate")
		.unbreakable()
		.waterlogged()
		.noDrops()

	event.create('long_pool_tiles').displayName('Pool Tiles')
		.fullBlock(true)
		.material("stone")
		.soundType("deepslate")
		.unbreakable()
		
	event.create('long_pool_tiles_soft').displayName('Pool Tiles')
		.model('kubejs:block/pool_tiles')
		.fullBlock(true)
		.material("stone")
		.soundType("deepslate")
        .waterlogged()
		.noDrops()
		.noCollision()

	event.create('long_pool_tiles_slab', 'slab').displayName('Pool Tiles Slab')
		.material("stone")
		.soundType("deepslate")
		.unbreakable()
		.waterlogged()

	event.create('long_pool_tiles_stairs', 'stairs').displayName('Pool Tiles Stairs')
		.material("stone")
		.soundType("deepslate")
		.unbreakable()
		.waterlogged()
		.noDrops()
    
    event.create('pool_locker_single').displayName('Pool Locker')
        .soundType("metal")
        .property(BlockProperties.FACING)
        .property(BlockProperties.HALF)
		.unbreakable()
        .placementState(state => {
            state.set(BlockProperties.FACING, state.horizontalDirection.opposite)
            state.set(BlockProperties.HALF, 'bottom')
        })
		
    event.create('pool_locker_double').displayName('Pool Locker')
        .soundType("metal")
        .property(BlockProperties.FACING)
        .property(BlockProperties.HALF)
		.unbreakable()
        .placementState(state => {
            state.set(BlockProperties.FACING, state.horizontalDirection.opposite)
            state.set(BlockProperties.HALF, 'bottom')
        })
		
//Ceiling
	event.create('ceilling').displayName('Ceiling')
		.fullBlock(true)
		.material("wood")
		.soundType("cherry_wood")
		.unbreakable()

	event.create('ceilling2').displayName('Ceiling')
		.fullBlock(true)
		.material("stone")
		.soundType("stone")
		.unbreakable()

	event.create('ceilling_frame').displayName('Ceiling Frame')
		.fullBlock(false)
		.material("wood")		
		.soundType("cherry_wood")
		.unbreakable()
		.box(0, 0, 0, 16, 1, 1)
		.box(0, 0, 15, 16, 1, 16)
		.box(0, 0, 1, 1, 1, 15)
		.box(15, 0, 1, 16, 1, 15)

	event.create('ceilling_edge').displayName('Ceiling')
		.fullBlock(true)
		.material("wood")
		.soundType("cherry_wood")
		.unbreakable()

	event.create('ceilling_slab', 'slab').displayName('Ceiling Slab')
		.fullBlock(true)
		.material("wood")
		.soundType("cherry_wood")
		.unbreakable()
		.waterlogged()

	event.create('ceilling_stairs', 'stairs').displayName('Ceiling Stairs')
		.fullBlock(true)
		.material("wood")
		.soundType("cherry_wood")
		.unbreakable()
		.waterlogged()
		.noDrops()

	event.create('ceilling_lamp').displayName('Ceiling Lamp')
		.unbreakable()
		.material("glass")
		.soundType("glass")
		.lightLevel(1.0)

	event.create('ceilling_lamp2').displayName('Ceiling Lamp')
		.unbreakable()
		.material("glass")
		.soundType("glass")
		.lightLevel(1.0)

	event.create('ceilling_lamp_off').displayName('Ceiling Lamp')
		.unbreakable()
		.material("glass")
		.soundType("glass")


//Floor
	event.create('carpet').displayName('Carpet')
		.fullBlock(true)
		.material("wool")
		.soundType("wool")
		.unbreakable()

	event.create('carpet_slab', 'slab').displayName('Carpet Slab')
		.fullBlock(true)
		.material("wool")
		.soundType("wool")
		.unbreakable()
		.resistance(3600000.0)
		.waterlogged()
		.noDrops()

	event.create('carpet_stairs', 'stairs').displayName('Carpet Stairs')
		.fullBlock(false)
		.material("wool")
		.soundType("wool")
		.unbreakable()
		.resistance(3600000.0)
		.waterlogged()
		.noDrops()

	event.create('carpet_soft').displayName('Carpet')
		.model('kubejs:block/carpet')
		.fullBlock(true)
		.material("wool")
		.soundType("wool")
		.waterlogged() //Poolrooms ADDITION
		.noDrops()
		.noCollision()
	
	event.create('red_carpet').displayName('Red Carpet')
		.fullBlock(true)
		.material("wool")
		.soundType("wool")
		.unbreakable()

	event.create('red_carpet_slab', 'slab').displayName('Red Carpet Slab')
		.fullBlock(true)
		.material("wool")
		.soundType("wool")
		.unbreakable()
		.resistance(3600000.0)
		.waterlogged()

	event.create('red_carpet_stairs', 'stairs').displayName('Red Carpet Stairs')
		.fullBlock(true)
		.material("wool")
		.soundType("wool")
		.unbreakable()
		.resistance(3600000.0)
		.waterlogged()
		.noDrops()

	event.create('soggy_carpet').displayName('Soggy Carpet')
		.fullBlock(true)
		.material("wool")
		.soundType("coral_block")
		.unbreakable()

	event.create('oil_carpet').displayName('Crude Oil Soaked Carpet')
		.fullBlock(true)
		.material("wool")
		.soundType("coral_block")
		.unbreakable()

	event.create('drain').displayName('Drain')
		.fullBlock(true)
		.material("lantern")
		.soundType("lantern")
		.unbreakable()
		.fullBlock(false)
		.waterlogged()
		.box(0, 0, 0, 16, 15, 16)


	event.create('drain_breakable').displayName('Drain')
		.fullBlock(true)
		.material("lantern")
		.soundType("lantern")
		.unbreakable()
		.fullBlock(false)
		.waterlogged()
		.box(0, 0, 0, 16, 15, 16)
		.model('kubejs:block/drain')
		.property(BlockProperties.AGE_3)
		.randomTick(tick => {
    const block = tick.block
	const properties = block.properties
	const age = Number(properties.age)
	    if (age == 3) {
      		block.set('kubejs:carpet')
		} else {
        	block.set(block.getId(), {
          	age: `${age+1}`
        })
	}})

	event.create('floor_tiles').displayName('Floor Tiles')
		.fullBlock(false)
		.material("stone")
		.soundType("stone")
		.unbreakable()
		.fullBlock(false)
		.box(0, 0, 0, 16, 15, 16)
		.property(BlockProperties.AGE_3)
		.randomTick(tick => {
    const block = tick.block
	const properties = block.properties
	const age = Number(properties.age)
	    if (age == 3) {
      		block.set('kubejs:carpet')
		} else {
        	block.set(block.getId(), {
          	age: `${age+1}`
        })
	}})

	event.create('floor_tiles_infinite').displayName('Floor Tiles')
		.model('kubejs:block/floor_tiles')
		.fullBlock(false)
		.material("stone")
		.soundType("stone")
		.unbreakable()
		.fullBlock(false)
		.box(0, 0, 0, 16, 15, 16)

	event.create('floor_tiles_full').displayName('Floor Tiles')
		.fullBlock(false)
		.material("stone")
		.soundType("stone")
		.unbreakable()

	event.create('carpet_grass').displayName('Carpet Grass')
		.material("wool")
		.soundType("wool")
		.renderType("cutout")
		.fullBlock(false)
		.noCollision()
		.opaque(false)
		.noDrops()
		.hardness(0)

	event.create('error').displayName('Divided by Zero')
		.material("shroomlight")
		.soundType("shroomlight")
		.fullBlock(true)
		.hardness(10)

	event.create('error_carpet').displayName('Divided by Zero')
		.material("shroomlight")
		.soundType("shroomlight")
		.fullBlock(true)
		.hardness(10)

	event.create('error_wallpaper').displayName('Divided by Zero')
		.material("shroomlight")
		.soundType("shroomlight")
		.fullBlock(true)
		.hardness(10)

//Reality Frame

	event.create('reality_controller').displayName('Reality Controller')
		.fullBlock(true)
		.material("netherite_block")
		.soundType("netherite_block")
		.tagBlock('minecraft:mineable/pickaxe')
		.property(BlockProperties.FACING)
		.placementState(c =>{
		c.set(BlockProperties.FACING, c.nearestLookingDirection.opposite)}
			)
		.blockstateJson = {
			"variants": {
				"facing=up": {
					"model": `kubejs:block/reality_controller`,
					"y": 0
				},
				"facing=down": {
					"model": `kubejs:block/reality_controller`,
					"y": 0
				},
				"facing=north": {
					"model": `kubejs:block/reality_controller`,
					"y": 0
				},
				"facing=east": {
					"model": `kubejs:block/reality_controller`,
					"y": 90
				},
				"facing=south": {
					"model": `kubejs:block/reality_controller`,
					"y": 180
				},
				"facing=west": {
					"model": `kubejs:block/reality_controller`,
					"y": 270
				},
			}
}

	event.create('reality_controller_running').displayName('Reality Controller')
		.fullBlock(true)
		.material("netherite_block")
		.soundType("netherite_block")
		.tagBlock('minecraft:mineable/pickaxe')
		.property(BlockProperties.FACING)
		.placementState(c =>{
		c.set(BlockProperties.FACING, c.nearestLookingDirection.opposite)}
			)
		.blockstateJson = {
			"variants": {
				"facing=up": {
					"model": `kubejs:block/reality_controller_running`,
					"y": 0
				},
				"facing=down": {
					"model": `kubejs:block/reality_controller_running`,
					"y": 0
				},
				"facing=north": {
					"model": `kubejs:block/reality_controller_running`,
					"y": 0
				},
				"facing=east": {
					"model": `kubejs:block/reality_controller_running`,
					"y": 90
				},
				"facing=south": {
					"model": `kubejs:block/reality_controller_running`,
					"y": 180
				},
				"facing=west": {
					"model": `kubejs:block/reality_controller_running`,
					"y": 270
				},
			}
}

//Power House

event.create("power_house").displayName("Power House")
		.fullBlock(false)
		.material("lantern")
		.soundType("lantern")
		.renderType("translucent")
		.opaque(false)
		.property(BlockProperties.FACING)
		.placementState(c =>{
		c.set(BlockProperties.FACING, c.nearestLookingDirection.opposite)}
			)
		.blockstateJson = {
			"variants": {
				"facing=up": {
					"model": `kubejs:block/power_house`,
					"y": 0
				},
				"facing=down": {
					"model": `kubejs:block/power_house`,
					"y": 0
				},
				"facing=north": {
					"model": `kubejs:block/power_house`,
					"y": 0
				},
				"facing=east": {
					"model": `kubejs:block/power_house`,
					"y": 90
				},
				"facing=south": {
					"model": `kubejs:block/power_house`,
					"y": 180
				},
				"facing=west": {
					"model": `kubejs:block/power_house`,
					"y": 270
				},
			}
}

//Traffic Poles

	let traffic_poles = (id, name) => {
		event.create(id).displayName(name)
			.fullBlock(true)
			.material("lantern")
			.soundType("lantern")
			.renderType("cutout")
			.fullBlock(false)
			.opaque(false)
			.hardness(1.0)
			.requiresTool(true)
			.waterlogged() //Poolrooms ADDITION
			.tagBlock('minecraft:mineable/pickaxe')
			.item(item => 
				item.modelJson({
				  parent: 'minecraft:item/generated',
				  textures: {
					layer0: `kubejs:block/${id}`,
				  },
				})
			)
			.box(6, 0, 6, 10, 16, 10)
			.property(BlockProperties.FACING)
			.placementState(c =>{
			  c.set(BlockProperties.FACING, c.nearestLookingDirection.opposite)}
			)
            .blockstateJson = {
                "variants": {
					"facing=up": {
                        "model": `kubejs:block/${id}`,
                        "y": 0
                    },
					"facing=down": {
                        "model": `kubejs:block/${id}`,
						"y": 0
                    },
                    "facing=north": {
                        "model": `kubejs:block/${id}`,
                        "y": 0
                    },
                    "facing=east": {
                        "model": `kubejs:block/${id}`,
                        "y": 90
                    },
                    "facing=south": {
                        "model": `kubejs:block/${id}`,
                        "y": 180
                    },
					"facing=west": {
                        "model": `kubejs:block/${id}`,
                        "y": 270
                    },
            }
		}}

	traffic_poles('traffic_pole', 		'sign')
	traffic_poles('arrow1_sign', 		'sign')
	traffic_poles('arrow2_sign', 		'sign')
	traffic_poles('liminal_warning', 	'sign')
	traffic_poles('liminal_warning2', 	'sign')
	traffic_poles('box_sign', 			'sign')
	traffic_poles('infinity_sign', 		'sign')
	traffic_poles('skull_sign', 		'sign')
	traffic_poles('stop_sign', 			'sign')
	traffic_poles('explantion1_sign', 	'sign')
	traffic_poles('explantion2_sign', 	'sign')
	traffic_poles('unknown1', 			'sign')
	traffic_poles('cross_sign', 		'sign')
	traffic_poles('exit_sign', 			'sign')
	traffic_poles('exit_sign2', 		'sign')
	traffic_poles('left_arrow_sign', 	'sign')
	traffic_poles('right_arrow_sign', 	'sign')
	traffic_poles('nowhere_sign', 		'sign')
	traffic_poles('monolith_sign', 		'sign')
	traffic_poles('witahdigroi_sign', 	'sign')
	traffic_poles('tripple_sign', 		'sign')
	traffic_poles('turn_back_sign', 	'sign')
	traffic_poles('inkblod_sign', 		'sign')



//sculk
	event.create('sculk_carapace').displayName('Sculk Carapace')
		.material("sculk")
		.soundType("sculk_catalyst")
		.hardness(10000)
		.resistance(0)
		.noDrops()

	event.create('porous_stone').displayName('Porous Stone')
		.material("stone")
		.soundType("tuff")
		.unbreakable()

	event.create('sculk_tendrils').displayName('Sculk Tendrils')
		.material("sculk")
		.soundType("sculk_vein")
		.waterlogged() //Poolrooms ADDITION
		.renderType("cutout")
		.fullBlock(false)
		.noCollision()
		.opaque(false)

	event.create('sculk_slab', 'slab').displayName('Sculk Slab')
		.material("sculk")
		.soundType("sculk")
		.unbreakable()
		.fullBlock(false)
		.opaque(false)

	event.create('sculk_stairs', 'stairs').displayName('Sculk Stairs')
		.material("sculk")
		.soundType("sculk")
		.unbreakable()
		.fullBlock(false)
		.opaque(false)
		.noDrops()

	event.create('sculk_shroom').displayName('Sculk Shroom')
		.material("sculk")
		.soundType("sculk_vein")
		.waterlogged() //Poolrooms ADDITION
		.unbreakable()
		.renderType("cutout")
		.fullBlock(false)
		.noCollision()
		.opaque(false)


//Tier 2
	event.create('light_engineering_empty').displayName('Light Engineering Frame')
		.material('lantern').hardness(1.5)
		.soundType("lantern")
		.tagBlock('minecraft:mineable/pickaxe')
		.renderType("cutout")
		.box(0, 0, 0, 3, 3, 16)
		.box(13, 0, 0, 16, 3, 16)
		.box(0, 13, 0, 3, 16, 16)
		.box(13, 13, 0, 16, 16, 16)
		.box(0, 3, 0, 3, 13, 3)
		.box(0, 3, 13, 3, 13, 16)
		.box(13, 3, 13, 16, 13, 16)
		.box(13, 3, 0, 16, 13, 3)
		.box(3, 13, 0, 13, 16, 3)
		.box(3, 0, 0, 13, 3, 3)
		.box(3, 0, 13, 13, 3, 16)
		.box(3, 13, 13, 13, 16, 16)
		.tagBlock('minecraft:mineable/pickaxe')

	event.create('heavy_engineering_empty').displayName('Heavy Engineering Frame')
		.material('lantern').hardness(1.5)
		.soundType("lantern")
		.tagBlock('minecraft:mineable/pickaxe')
		.renderType("cutout")
		.box(0, 0, 0, 3, 3, 16)
		.box(13, 0, 0, 16, 3, 16)
		.box(0, 13, 0, 3, 16, 16)
		.box(13, 13, 0, 16, 16, 16)
		.box(0, 3, 0, 3, 13, 3)
		.box(0, 3, 13, 3, 13, 16)
		.box(13, 3, 13, 16, 13, 16)
		.box(13, 3, 0, 16, 13, 3)
		.box(3, 13, 0, 13, 16, 3)
		.box(3, 0, 0, 13, 3, 3)
		.box(3, 0, 13, 13, 3, 16)
		.box(3, 13, 13, 13, 16, 16)
		
	event.create('half_frame_bottom').displayName('Bottom of a Machine Frame')
		.material('lantern').hardness(1.5)
		.tagBlock('minecraft:mineable/pickaxe')
		.soundType("lantern")
		.box(11, 5, 11, 16, 8, 16, true)
		.box(0, 5, 11, 5, 8, 16, true)
		.box(11, 5, 0, 16, 8, 5, true)
		.box(0, 5, 0, 5, 8, 5, true)
		.box(5, 0, 11, 11, 5, 16, true)
		.box(5, 0, 0, 11, 5, 5, true)
		.box(11, 0, 0, 16, 5, 16, true)
		.box(0, 0, 0, 5, 5, 16, true)

	event.create('half_frame_top').displayName('Top of a Machine Frame')
		.material('lantern').hardness(1.5)
		.tagBlock('minecraft:mineable/pickaxe')
		.soundType("lantern")
		.box(11, 0, 0, 16, 5, 5, true)
		.box(0, 0, 0, 5, 5, 5, true)
		.box(11, 0, 11, 16, 5, 16, true)
		.box(0, 0, 11, 5, 5, 16, true)
		.box(5, 5, 0, 11, 10, 5, true)
		.box(5, 5, 11, 11, 10, 16, true)
		.box(11, 5, 0, 16, 10, 16, true)
		.box(0, 5, 0, 5, 10, 16, true)

//Tier 3


//Loot

	event.create('batteries').displayName('Batteries')
		.material("stone")
		.soundType("lantern")
		.renderType("translucent")
		.fullBlock(false)
		.waterlogged() //Poolrooms ADDITION
	    .hardness(0.0)
    	.resistance(0.0)
		.box(2, 0, 2, 14, 6, 14)

	event.create('red_tape').displayName('Red Tape')
		.material("wool")
		.soundType("wool")
		.renderType("translucent")
		.fullBlock(false)
		.box(0, 0, 0, 16, 1, 16)
	    .hardness(0.0)
    	.resistance(0.0)
		.noCollision()
		.item(item => 
			item.modelJson({
			  parent: 'minecraft:item/generated',
			  textures: {
				layer0: `kubejs:item/red_tape_roll`,
			  },
			})
		)
		.placementState(c =>{
		  c.set(BlockProperties.FACING, c.nearestLookingDirection.opposite)}
		)
        .blockstateJson = {
            "variants": {
				"facing=up": {
					"model": `kubejs:block/red_tape_north`,
				},
				"facing=down": {
					"model": `kubejs:block/red_tape_north`,
				},
                "facing=north": {
                    "model": `kubejs:block/red_tape_north`,
                },
                "facing=east": {
                    "model": `kubejs:block/red_tape_east`,
                },
                "facing=south": {
                    "model": `kubejs:block/red_tape_north`,
                },
				"facing=west": {
                    "model": `kubejs:block/red_tape_east`,
                },
        }}


//Tier4
	event.create('wall_destroyer').displayName('Wall Piercer')
		.fullBlock(true)
		.material("stone")
		.soundType("lantern")
		.tagBlock('minecraft:mineable/pickaxe')
			.property(BlockProperties.FACING)
		.placementState(c =>{
		c.set(BlockProperties.FACING, c.nearestLookingDirection.opposite)}
			)
		.blockstateJson = {
			"variants": {
				"facing=up": {
					"model": `kubejs:block/wall_destroyer`,
					"x": 180
				},
				"facing=down": {
					"model": `kubejs:block/wall_destroyer`,
					"x": 0
				},
				"facing=north": {
					"model": `kubejs:block/wall_destroyer`,
					"x": 90,
					"y": 180
				},
				"facing=east": {
					"model": `kubejs:block/wall_destroyer`,
					"x": 90,
					"y": 270
				},
				"facing=south": {
					"model": `kubejs:block/wall_destroyer`,
					"x": 90,
					"y": 0
				},
				"facing=west": {
					"model": `kubejs:block/wall_destroyer`,
					"x": 90,
					"y": 90
				},
			}
		}

	event.create('reality_frame').displayName('Reality Frame')
		.fullBlock(true)
		.material("stone")
		.soundType("netherite_block")
		.tagBlock('minecraft:mineable/pickaxe')

	event.create('reality_charge').displayName('Reality Charge')
		.fullBlock(true)
		.material("stone")
		.soundType("netherite_block")
		.lightLevel(1.0)
		.tagBlock('minecraft:mineable/pickaxe')

	event.create('reality_charge_empty').displayName('Empty Reality Charge')
		.fullBlock(true)
		.material("stone")
		.soundType("netherite_block")
		.tagBlock('minecraft:mineable/pickaxe')

	event.create('sculk_scrubber').displayName('Sculk Scrubber')
		.fullBlock(true)
		.material("stone")
		.soundType("lantern")
		.tagBlock('minecraft:mineable/pickaxe')
	
	event.create('sculked_sculk_scrubber').displayName('Sculked Sculk Scrubber')
		.fullBlock(true)
		.material("stone")
		.soundType("lantern")
		.tagBlock('minecraft:mineable/pickaxe')

	event.create('lost_eye').displayName('Lost Eye')
		.fullBlock(false)
		.material("stone")
		.soundType("shroomlight")
		.box (4, 0, 4, 12, 8, 12)
		.item(item => 
			item.modelJson({
			  parent: 'minecraft:item/generated',
			  textures: {
				layer0: `endrem:item/lost_eye`,
			  },
			})
		)

	event.create('exotic_eye').displayName('Exotic Eye')
		.fullBlock(false)
		.material("stone")
		.soundType("shroomlight")
		.box (4, 0, 4, 12, 8, 12)
		.renderType("cutout")
		.opaque(false)
		.item(item => 
			item.modelJson({
			  parent: 'minecraft:item/generated',
			  textures: {
				layer0: `endrem:item/exotic_eye`,
			  },
			})
		)

})

StartupEvents.registry('item', event => {

	event.create('incomplete_component_electronic').displayName('Incomplete Electronic Component')
	event.create('incomplete_component_electronic_adv').displayName('Incomplete Advanced Electronic Component')
	event.create('cut_carpet').displayName('Cut Carpet')
	event.create('scrap').displayName('Scrap')
	event.create('putty_knife').displayName('Putty Knife')
	event.create('moderate_soul_gem').displayName('Moderate Soul Gem')
	event.create('carpet_dust').displayName('Carpet Dust')
	event.create('concrete_piece').displayName('Piece of Concrete')
	event.create('heated_concrete').displayName('Heated Concrete')
	event.create('concrete_brick').displayName('Concrete Brick')
	event.create('cracked_steel').displayName('Cracked Steel')
	event.create('hot_steel').displayName('Hot Steel')
	event.create('party_popper').displayName('Party Popper')
	event.create('battery').displayName('Battery')
	event.create('soul_fuse').displayName('Soul Fuse')
	event.create('empty_fuse').displayName('Empty Fuse')
	event.create('reality_alloy').displayName('Reality Alloy')
	event.create('diamond_brush').displayName('Diamond Brush')
	event.create('error_item').displayName('Error')
	event.create('wallpaper').displayName('Wallpaper')
	event.create('fluorescent_tube').displayName('Fluorescent Tube')
	event.create('sentimental_thaumium').displayName('Sentimental Thaumium')
	event.create('overclocked_clock').displayName('Overclocked Clock')
	event.create('ai').displayName('Artificial Intelligence')
	event.create('quantum_string').displayName('Quantum String')
	event.create('cobblestone_bucket').displayName('Bucket of Cobblestone')
	event.create('crowbar').displayName('Crowbar')

	event.create('reality_storage_empty').displayName('Empty Reality Storage Cell')
	event.create('reality_storage_cell1').displayName('Reality Storage Cell')

	event.create('data_chip1').displayName('Data Chip')
	event.create('data_chip2').displayName('Data Chip')
	event.create('data_chip3').displayName('Data Chip')
	event.create('data_chip4').displayName('Data Chip')
	event.create('data_chip5').displayName('Data Chip')
	event.create('data_chip6').displayName('Data Chip')
	event.create('data_chip7').displayName('Data Chip')
	event.create('data_chip8').displayName('Data Chip')
	event.create('data_chip9').displayName('Data Chip')
	event.create('data_chip10').displayName('Data Chip')
	event.create('data_chip_infinity').displayName('Modified Data Chip')
	event.create('data_chip_error').displayName('Broken Data Chip')

})

StartupEvents.registry('fluid', event => {
	event.create('liquid_time')
		.displayName('The Flow of Time')
		.stillTexture('kubejs:block/liquid_time_flow')
		.flowingTexture('kubejs:block/liquid_time_flow')
		.bucketColor(0xFFFFFF)
		.noBlock() 

  event.create('ball_pit')
    .displayName('Ball Pit')
    .stillTexture('kubejs:block/ball_pit_still')
    .flowingTexture('kubejs:block/ball_pit_flow')
})
